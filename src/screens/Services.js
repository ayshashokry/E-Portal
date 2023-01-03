import React, { useEffect } from "react";

//Packages
import { Container } from "react-bootstrap";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
//Icons
import MadintyIcon from "../assets/images/madintyIcon.png";
// import kpiIcon from {`${process.env.PUBLIC_URL}/images/kpiIcon.png`}
// import mergeStreetIcon from {`${process.env.PUBLIC_URL}/images/mergeStreetIcon.png`}
// import tamlikAkarIcon from {`${process.env.PUBLIC_URL}/images/tamlikAkarIcon.png`}
// import enquiresIcon from {`${process.env.PUBLIC_URL}/images/enquiresIcon.png`}
// import portalIcon from {`${process.env.PUBLIC_URL}/images/portalIcon.png`}
import NavBarr from "../containers/NavBarr";
import Footer from "../containers/Footer";
import ticketGroupIcon from "../assets/images/ticketIcon.svg";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="goalsPage ">
      <NavBarr />
      <div className="goalsHeader">
        <div className=" pt-5 pb-3 px-5 mr-lg-5">
          {" "}
          <span className="span1">
            {" "}
            <Link to="/"> الرئيسية </Link>
            .خدماتنا .
          </span>
          <span className="span2">دليل الخدمات </span>
          <h1> دليل الخدمات</h1>
        </div>
      </div>
      <div className="goals servicesIcons">
        <Container>
          <Row className="my-5">
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/Split">
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/splitIcon1.png`}
                      alt="split"
                    />
                  </div>
                  <h6 className="pt-4">خدمات الفرز</h6>
                </div>
              </Link>
            </Col>
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/GeoExplorer">
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/egoExpIcon1.png`}
                      alt="GeoExplorer"
                    />
                  </div>
                  <h6 className="pt-4">خدمة المستكشف الجغرافي</h6>
                </div>
              </Link>
            </Col>
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/SurveyingSketch">
                {" "}
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/krokyMsa7y1.png`}
                      alt="SurveyingSketch"
                    />
                  </div>
                  <h6 className="pt-4">خدمة إصدار الكروكي المساحي</h6>
                </div>
              </Link>
            </Col>{" "}
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/EngineeringOffices">
                {" "}
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/engApprovalIcon1.png`}
                      alt="EngOfficesApproval"
                    />
                  </div>
                  <h6 className="pt-4">خدمة إعتماد المكاتب الهندسية</h6>
                </div>
              </Link>
            </Col>{" "} 
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/Plans">
               
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/planApprovalIcon1.png`}
                      alt="plans"
                    />
                  </div>
                  <h6 className="pt-4">خدمة إعتماد المخططات</h6>
                </div>
              </Link>{" "}
            </Col>{" "}
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/UpdateInstruments">
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/contractsUpdateIcon1.png`}
                      alt="UpdateInstruments"
                    />
                  </div>
                  <h6 className="pt-4">خدمة تحديث الصكوك</h6>
                </div>
              </Link>
            </Col>
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/BasemapManagement">
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/mapIcon1.png`}
                      alt="basemapManage"
                    />
                  </div>
                  <h6 className="pt-4">خدمة إدارة خارطة الاساس</h6>
                </div>
              </Link>
            </Col>{" "}
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/MobileServices">
                {" "}
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img src={MadintyIcon} alt="MobileServices" />
                  </div>
                  <h6 className="pt-4">خدمة الجوال</h6>
                </div>
              </Link>
            </Col>
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/DigitalMaps">
                {" "}
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/printNumbers1.png`}
                      alt="digitalMap"
                    />
                  </div>
                  <h6 className="pt-4">طلب لوحات وخرائط رقمية</h6>
                </div>
              </Link>
            </Col>{" "}
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/SiteQuery">
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/SiteQuery1.png`}
                      alt="siteQuery"
                    />
                  </div>
                  <h6 className="pt-4">إستعلام عن موقع بالنسبة لحد التنمية</h6>
                </div>
              </Link>
            </Col>{" "}
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/SpatialDataRequest">
                {" "}
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/byanatMkanyaIcon1.png`}
                      alt="SpatialDataRequest"
                    />
                  </div>
                  <h6 className="pt-4">طلب بيانات مكانية</h6>
                </div>
              </Link>
            </Col>{" "}
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/OwnProperty">
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/tamlikAkarIcon1.png`}
                      alt="OwnProperty"
                    />
                  </div>
                  <h6 className="pt-4">استمارة تملك عقار</h6>
                </div>
              </Link>
            </Col>{" "}
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/MergeStreets">
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/mergeStreetIcon.png`}
                      alt="mergeStreetIcon"
                    />
                  </div>
                  <h6 className="pt-4">ضم الشوارع والنوافذ</h6>
                </div>
              </Link>
            </Col>
            {/* <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/MajorProjects">
                {" "}
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/majorProjects1.png`}
                      alt="MajorProjects"
                    />
                  </div>
                  <h6 className="pt-4">المشاريع الكبري</h6>
                </div>
              </Link>
            </Col> */}
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/PublicUtility">
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/publicUtlity1.png`}
                      alt="PublicUtility"
                    />
                  </div>
                  <h6 className="pt-4">المشاريع الخدمية</h6>
                </div>
              </Link>
            </Col>{" "}
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/OrganizationalAppendages">
                {" "}
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/zwa2dIcon1.png`}
                      alt="OrganizationalAppendages"
                    />
                  </div>
                  <h6 className="pt-4">الزوائد التنظيمية</h6>
                </div>
              </Link>
            </Col>
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="p-3"
            >
              <Link to="Services/support">
               
                <div className="goalItem py-5">
                  <div style={{ height: "50px" }}>
                    <img                   
                     style={{width:'60px'}}
                      src={ticketGroupIcon}
                      alt="support"
                    />
                  </div>
                  <h6 className="pt-4">الدعم الفني</h6>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
