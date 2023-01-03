import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
//Icons

import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
          swipe: false,
        },
      },
    ],
  };
  return (
    <div className="services pt-5">
      <h2>خدمات البوابة الجغرافية</h2>
      <Container fluid>
        <Tabs defaultIndex={1}>
          <TabList>
            <Tab>أحدث الخدمات</Tab>
            <Tab>الخدمات الأكثر استخداماً</Tab>
          </TabList>
          <TabPanel>
            <Container className="homeservSlider">
              <Slider
                {...settings}
                className="servicesIcons homeRotateSlider py-4  "
              >
                <div className="p-3 newServicesHome">
                  <Link to="Services/OwnProperty">
                    {" "}
                    <div className="goalItem py-5">
                      <div style={{ height: "50px" }}>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/tamlikAkarIcon1.png`}
                          alt="tamlikAkarIcon"
                        />
                      </div>
                      <h6 className="pt-4">استمارة تملك عقار</h6>
                    </div>
                  </Link>
                </div>
                <div className="p-3 newServicesHome">
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
                </div>
                <div className="p-3 newServicesHome">
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
                </div>{" "}
                <div className="p-3 newServicesHome">
                  <Link to="Services/PublicUtility">
                    {" "}
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
                </div>{" "}
                <div className="p-3 newServicesHome">
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
                </div>{" "}
                <div className="p-3 newServicesHome">
                  <Link to="Services/SiteQuery">
                    <div className="goalItem py-5">
                      <div style={{ height: "50px" }}>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/SiteQuery1.png`}
                          alt="siteQuery"
                        />
                      </div>
                      <h6 className="pt-4">
                        إستعلام عن موقع بالنسبة لحد التنمية
                      </h6>
                    </div>
                  </Link>
                </div>{" "}
                <div className="p-3 newServicesHome">
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
                </div>
                <div className="p-3 newServicesHome">
                  <Link to="Services/Plans">
                    {" "}
                    <div className="goalItem py-5">
                      <div style={{ height: "50px" }}>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/planApprovalIcon1.png`}
                          alt="plans"
                        />
                      </div>
                      <h6 className="pt-4">خدمة إعتماد المخططات</h6>
                    </div>
                  </Link>
                </div>
                <div className="p-3 newServicesHome">
                  <Link to="Services/EngineeringOffices">
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
                </div>
                <div className="p-3 newServicesHome">
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
                </div>{" "}
                <div className="p-3 newServicesHome">
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
                </div>{" "}
                <div className="p-3 newServicesHome">
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
                </div>{" "}
              </Slider>
              <p
                className="servicesDetails py-4"
                style={{ textAlign: "center" }}
              >
                <Link to="/Services">
                  {" "}
                  <FontAwesomeIcon
                    className="mr-2"
                    icon={faLongArrowAltLeft}
                  />{" "}
                  استعراض جميع الخدمات{" "}
                </Link>
              </p>
            </Container>{" "}
          </TabPanel>{" "}
          <TabPanel>
            <Container className="servicesIcons">
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
              </Row>
              <p
                className="servicesDetails py-4"
                style={{ textAlign: "center" }}
              >
                <Link to="/Services">
                  {" "}
                  <FontAwesomeIcon className="mr-2" icon={faLongArrowAltLeft} />
                  استعراض جميع الخدمات{" "}
                </Link>
              </p>
            </Container>
          </TabPanel>
        </Tabs>
      </Container>
    </div>
  );
}
