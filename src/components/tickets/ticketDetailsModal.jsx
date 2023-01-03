import React from "react";
import { Row, Col } from "antd";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const TicketDetailsModal = (props) => {
  const { ticket, onHide } = props;

  return (
    <Modal
      onHide={onHide}
      show={ticket}
      backdrop="static"
      className="TicketDetailsModal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <Row>
            <Col span={18}>
              <h5>تفاصيل التذكرة</h5>
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
                  onClick={onHide}
                />
              </h4>
            </Col>
          </Row>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <>
          <Row className="mt-4">
            <Col span={24}>
              <h6>اسم التذكرة</h6>
              <p>{ticket?.title}</p>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col span={11}>
              <h6>حالة التذكرة</h6>
              <p>
                {" "}
                {ticket?.isClosed
                  ? "تم الإغلاق"
                  : ticket?.willCloseAfter === null
                  ? "قيد المعالجة"
                  : "صوب الإغلاق"}
              </p>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col span={24}>
              <h6>المرفقات</h6>
              <p>
                {ticket?.attachments.map((a, index) => (
                  <>
                    <a
                      key={`attach-${ticket.taskId}-${index}`}
                      href={`${window.filesURL}/${a.path}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {a.fileName}
                    </a>
                    <br />
                  </>
                ))}
              </p>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col span={24}>
              <h6>تفاصيل التذكرة</h6>
              <p> {ticket?.description}</p>
            </Col>
          </Row>
        </>
      </Modal.Body>
    </Modal>
  );
};

export default TicketDetailsModal;
