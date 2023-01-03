import React from "react";

//Packages
import { Container, Row, Col } from "react-bootstrap";
import madintyImg from "../../assets/images/madinty.png";
import madintyIcon from "../../assets/images/madintyIcon.png";
import android from "../../assets/images/GooglePlay.png";
import ios from "../../assets/images/AppStore.png";
import madintyQR from "../../assets/images/madintyQR.png";

export default function Madinty() {
  return (
    <div className=" pt-5 madinty">
      <Container>
        <Row>
          <Col sm={12} md={6} className="pt-4">
            <div className="clearfix">
              <img
                alt="madintyIcon"
                src={madintyIcon}
                className="img-fluid madintyIcon float-right mb-2"
              />
            </div>
            <Row>
              <Col md={{ span: 6 }} sm={{ span: 24 }}>
                <img src={madintyQR} style={{ height: "100px" }} alt="QR" />
              </Col>{" "}
              <Col md={{ span: 6 }} sm={{ span: 24 }}>
                <h2>تطبيق مدينتي </h2>
              </Col>
            </Row>
            <div></div>
            <p>
              يتيــح للمســتخدمين الاطــلاع علـى الخارطـة الرقميـة لاستعراض
              خريطـة المنطقـة الشـرقية، وتنفيــذ عمليــات بحــث وإســتعلام
              بإســتخدام مــا يتوفــر مــن البيانــات الوصفيــة أو المكانيــة،
              كمــا يوفــر التطبيــق العديــد مــن الخدمــات
            </p>
            <span className="sliderDetails">
              <ul style={{ display: "flex", listStyleType: "none" }}>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.eamana.webgis"
                  >
                    <img
                      alt="android-download"
                      src={android}
                      className="img-fluid"
                    />
                  </a>
                </li>

                <li className="px-4">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://apps.apple.com/eg/app/%D9%85%D8%AF%D9%8A%D9%86%D8%AA%D9%89/id1237574491"
                  >
                    <img alt="ios-download" src={ios} className="img-fluid" />
                  </a>
                </li>
              </ul>
            </span>
          </Col>
          <Col sm={12} md={6} className="pl-5 ">
            <div className="madintyMobile">
              <img src={madintyImg} alt="madintyImage" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
