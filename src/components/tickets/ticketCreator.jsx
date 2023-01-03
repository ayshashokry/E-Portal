import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, AutoComplete, Col, Row } from "antd";
import { CloudUploadOutlined } from "@material-ui/icons";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

let selectF = [];
let reqAtt = [];

const TicketCreator = (props) => {
  const [appsArabicNames, setAppsArabicNames] = useState({});
  const [ticketTypes, setTicketTypes] = useState([]);
  const [isSubmnNoRequired, setIsSubmnNoRequired] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [requestAttach, setRequestAttach] = useState([]);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [appId, setAppId] = useState(null);

  const token = localStorage.token;

  useEffect(() => {
    let request = new Request(
      window.ApiUrl + "/applications/allApplications?pageSize=100",
      {
        headers: {
          authorization: `bearer ${token}`,
        },
      }
    );
    fetch(request)
      .then(async (res) => {
        if (res.ok) {
          const results = (await res.json()).results;
          let appsArabicNames = {};
          results.forEach((r) => {
            appsArabicNames[r.id] = r.translate_ar_caption;
          });
          setAppsArabicNames(appsArabicNames);
        }
      })
      .catch((err) => console.log(err));

    request = new Request(window.ApiUrl + "/ticket-type", {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    fetch(request)
      .then(async (res) => {
        if (res.ok) {
          const ticketTypes = await res.json();
          setTicketTypes(ticketTypes);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const { Option } = Select;
  const onFinish = (values) => {
    setButtonDisable(true);
    values.ticketTypeName = ticketTypes.filter(
      (t) => t.id === values.ticketTypeId
    )[0].name;
    values.appName = appsArabicNames[values.appId];
    values.attachments = requestAttach;

    let request = new Request(window.ApiUrl + "/ticket", {
      method: "POST",
      headers: {
        authorization: `bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    });
    fetch(request)
      .then(async (res) => {
        if (res.ok) {
          props.onHide();
          setRequestAttach([]);
          selectF = [];
          reqAtt = [];
          props.confirmationAddTicket(await res.json());
        }
      })
      .catch((err) => console.log(err));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    const appId = form.getFieldValue("appId");
    let request = new Request(
      window.ApiUrl +
        `/SearchByRequestNo?requestNo=${searchText}&appId=${appId}`,
      {
        headers: {
          authorization: `bearer ${token}`,
        },
      }
    );
    fetch(request)
      .then(async (res) => {
        if (res.ok) {
          const requestNums = (await res.json()).map((r) => ({ value: r }));
          setOptions(requestNums);
        }
      })
      .catch((err) => console.log(err));
  };

  const onChange = (fieldName, fieldValue) => {
    form.setFieldsValue({ [fieldName]: fieldValue });
  };

  const onTicketTypeChange = (typeId) => {
    const isSubmnNoRequired = ticketTypes.filter((t) => t.id === typeId)[0]
      ?.sbmnNoRequired;
    setIsSubmnNoRequired(isSubmnNoRequired);
    onChange("ticketTypeId", typeId);
  };

  const onHideForm = () => {
    props.onHide();
    setButtonDisable(false);
    setUploadStatus("");
    setSelectedFile(null);
    setRequestAttach([]);

    selectF = [];
    reqAtt = [];
  };

  const setFile = async (e) => {
    if (e.target.files.length !== 0) {
      const formData = new FormData();
      if (e.target.files) {
        for (let i = 0; i < e.target.files.length; i++) {
          selectF.push(e.target.files[i]);
          Object.assign({}, selectF);
          formData.append(`file[${i}]`, e.target.files[i]);
        }
      }
      setSelectedFile(Object.assign({}, selectF));
      setButtonDisable(true);
      setUploadStatus("يرجي الإنتظار حتي يتم تحميل الملفات");

      await axios
        .post(window.ApiUrl + "/uploadMultifiles", formData)
        .then((res) =>
          res.data.map((att) =>
            reqAtt.push({
              fileName: String(att.PrevFileName).substring(
                String(att.PrevFileName).lastIndexOf("/") + 1
              ),
              path: att.data,
            })
          )
        )
        .then(() => {
          setRequestAttach(reqAtt);
          setButtonDisable(false);
          setUploadStatus("تم تحميل الملفات بنجاح");
        });
    }
  };

  const removeAtt = (e) => {
    let files = requestAttach.filter((f) => f.path !== e.target.id);
    reqAtt = reqAtt.filter((f) => f.path !== e.target.id);

    setRequestAttach(files);
    if (files.length === 0) {
      setUploadStatus("");
      setSelectedFile(null);
      //setReqAtt([]);
    }
  };

  const [form] = Form.useForm();
  return (
    <Form
      layout="vertical"
      className="addTicketForm"
      form={form}
      initialValues={{
        ticketTypeId: null,
        appId: null,
        requestNo: "",
        description: "",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row className="pt-2">
        <Col span={24}>
          <Form.Item
            label="نوع التذكرة"
            name="ticketTypeId"
            rules={[
              {
                required: true,
                message: "يجب اختيار نوع التذكرة",
              },
            ]}
          >
            <Select
              placeholder="اختر نوع التذكرة"
              onChange={(value) => onTicketTypeChange(value)}
            >
              {ticketTypes.map((t) => (
                <Option value={t.id} key={`ttype-${t.id}`}>
                  {t.name}
                </Option>
              ))}
            </Select>{" "}
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            label="التطبيق"
            name="appId"
            rules={[
              {
                required: true,
                message: "يجب اختيار التطبيق",
              },
            ]}
          >
            <Select
              placeholder="اختر التطبيق"
              onChange={(value) => {
                onChange("appId", value);
                setAppId(value);
                form.setFieldsValue({ requestNo: null });
                setOptions([]);
              }}
            >
              {Object.keys(appsArabicNames).map((i) => (
                <Option value={Number(i)} key={`app-${i}`}>
                  {appsArabicNames[i]}
                </Option>
              ))}
            </Select>{" "}
          </Form.Item>
        </Col>

        <Col span={24}>
          {isSubmnNoRequired ? (
            <Form.Item
              label="رقم المعاملة"
              name="requestNo"
              rules={[
                {
                  required: true,
                  message: "يجب اختيار رقم المعاملة",
                },
              ]}
            >
              <AutoComplete
                value={value}
                options={options}
                onSearch={onSearch}
                onChange={(value) => onChange("requestNo", value)}
                placeholder="رقم المعاملة"
                disabled={form.getFieldValue("appId") === null}
              />
            </Form.Item>
          ) : (
            <></>
          )}
        </Col>

        <Col span={24}>
          <Form.Item
            label="الوصف"
            name="description"
            rules={[
              {
                required: true,
                message: "يجب إدخال الوصف",
              },
            ]}
          >
            <textArea
              maxLength={500}
              name="description"
              showCount
              onChange={(e) => onChange("description", e.target.value)}
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <h6 style={{ fontWeight: "bold" }}>المرفقات</h6>
          {requestAttach.length !== 0 &&
            requestAttach.map((f) => (
              <div className="my-2">
                <span></span>
                <span>
                  <Dropdown className="ticketAttachDrop">
                    <Dropdown.Toggle variant="success">
                      <i
                        style={{
                          color: "#0b2548",
                        }}
                        className="fas fa-ellipsis-h pl-2"
                      ></i>{" "}
                      {f.fileName}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <div className="dropdownsignoutlink">
                        <Dropdown.Item onClick={removeAtt} id={f.path}>
                          حذف
                        </Dropdown.Item>
                        <Dropdown.Item
                          tag="a"
                          target="_blank"
                          rel="noreferrer"
                          href={`${window.filesURL}/${f.path}`}
                        >
                          مشاهدة المرفق
                        </Dropdown.Item>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </div>
            ))}
          <Button block className="ant-uploaded">
            تحميل <CloudUploadOutlined />
            <input
              className="custom-file-input"
              multiple
              onChange={setFile}
              type="file"
              // style={{ display: 'none' }}
            />
          </Button>
        </Col>
      </Row>
      <p
        style={{
          paddingTop: "10px",
          fontWeight: "bold",
          textAlign: "right",
          color: "#025358",
        }}
      >
        {uploadStatus}
      </p>
      <Row className="formButtons pt-4 m-4">
        <Col span={12} style={{ textAlign: "right" }}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              disabled={buttonDisable}
              className="addbtn "
            >
              إرسال
            </Button>
          </Form.Item>
        </Col>
        <Col span={12} style={{ textAlign: "left" }}>
          <Link to="/tickets">
            <Button className="cancelbtn" onClick={onHideForm}>
              إلغاء
            </Button>
          </Link>
        </Col>
      </Row>
    </Form>
  );
};

export default TicketCreator;
