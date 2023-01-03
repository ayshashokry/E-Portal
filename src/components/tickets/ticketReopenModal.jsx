import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button, Col, Form, Input, notification, Row, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { reopenTicket } from "../../apis/ticketsApi";

const TicketReopenModal = (props) => {
  const REASON_MAX_LENGTH = 200;
  const STILL_HAVE_PROBLEM = "stillHaveProblem";
  const NEW_TICKET = "newTicket";

  const [showReasonTextbox, setShowReasonTextbox] = useState(false);
  const [reasonText, setReasonText] = useState("");
  const [textCharsNum, setTextCharsNum] = useState(0);
  const { showModal, ticketId, onModalClose, openAddTaskModal, updateTicket } =
    props;
  const { Option } = Select;
  const { TextArea } = Input;

  const onReasonSelected = (value) => {
    switch (value) {
      case STILL_HAVE_PROBLEM:
        setShowReasonTextbox(true);
        break;
      case NEW_TICKET:
        closeModal();
        openAddTaskModal();
        break;
      default:
        break;
    }
  };

  const handleTicketReopen = async () => {
    let success = true;
    try {
      await reopenTicket(ticketId, reasonText);
    } catch (error) {
      success = false;
    }

    closeModal();

    const notificationArgs = {
      duration: 5,
      placement: "bottomLeft",
    };
    if (success) {
      notificationArgs.description = "تم إعادة الفتح بنجاح";
      notification.success(notificationArgs);
      updateTicket(ticketId, { isClosed: false, willCloseAfter: null });
    } else {
      notificationArgs.description = "حدث خطأ";
      notification.error(notificationArgs);
    }
  };

  const closeModal = () => {
    onModalClose();
    setShowReasonTextbox(false);
  };

  return (
    <Modal
      onHide={closeModal}
      show={showModal}
      backdrop="static"
      className="TicketDetailsModal reOpenModalForm"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <Row>
            <Col span={18}>
              <h5>تأكيد إعادة الفتح</h5>
            </Col>
            <Col span={6}>
              <h4>
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{
                    fontSize: "20px",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                  onClick={closeModal}
                />
              </h4>
            </Col>
          </Row>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <>
          <Row className="pt-2 ">
            <Col span={24} style={{ textAlign: "right" }}>
              <Form.Item label="سبب إعادة الفتح" name="reopenReason">
                <Select
                  placeholder="حدد سبب إعادة الفتح"
                  onChange={onReasonSelected}
                >
                  <Option value={STILL_HAVE_PROBLEM}>
                    ما زالت المشكلة قائمة
                  </Option>
                  <Option value={NEW_TICKET}>تذكرة جديدة </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </>
        {showReasonTextbox ? (
          <>
            <TextArea
              maxLength={REASON_MAX_LENGTH}
              rows={4}
              placeholder="برجاء إيضاح المشكلة"
              onChange={(e) => {
                setReasonText(e.target.value);
                setTextCharsNum(
                  textCharsNum < REASON_MAX_LENGTH
                    ? textCharsNum + 1
                    : REASON_MAX_LENGTH
                );
              }}
            />
            <p>
              {textCharsNum}/{REASON_MAX_LENGTH}
            </p>
            <Button className="mt-2 nextBtn" onClick={handleTicketReopen}>
              إعادة الفتح
            </Button>
          </>
        ) : (
          <></>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default TicketReopenModal;
