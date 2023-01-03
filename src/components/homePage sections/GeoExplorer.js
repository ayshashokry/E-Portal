import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

//Packages
import { Container, Row, Col } from "react-bootstrap";
import explorerImg from "../../assets/images/explorer.png";
export default function GeoExplorer() {
  return (
    <div className="geoExp py-5">
      <Container>
        <Row>
          <Col sm={12} md={6} className="pt-4">
            <h2>المستكشف الجغرافي</h2>
            <p>
              هو مستكشف جغرافي للبلدیات التابعة لامانة المنطقة الشرقیة يتيح
              للمواطنين والمستخدمين الاستعراض والاستعلام عن المعلومات الجغرافية
              التي توفرها أمانة المنطقة الشرقية، كما يقدم مجموعة من الخدمات
              الجغرافية والبلدية التي تقوم بالمساهمة في إنجاز الأعمال اليومية
              لموظفي الأمانة والبلديات والجهات الحكومية والمكاتب الهندسية بجودة
              أعلى وفي وقت أقل بصورة سهلة وميسره تساعد المسئولين في إدارة
              الأعمال ودعم اتخاذ القرار.
            </p>{" "}
            <div className="sliderDetails py-3">
              <a
                href={`${window.hostURL + "/eexplorer"}`}
                target="_self"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="mr-2"
                  style={{ fontSize: "20px" }}
                  icon={faLongArrowAltLeft}
                />
                تصفح التطبيق من هنا
              </a>{" "}
            </div>
          </Col>
          <Col sm={12} md={6} className="pl-5">
            <div>
              <a
                href={`${window.hostURL + "/eexplorer"}`}
                target="_self"
                rel="noreferrer"
              >
                <img src={explorerImg} alt="exploreImage" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
