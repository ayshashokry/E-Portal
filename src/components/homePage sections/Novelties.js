import React from "react";

//Packages
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import novImg from "../../assets/images/novelties.png";
import Slide from "react-reveal/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

export default function Novelties() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="novelties">
      <h5>أخبار البوابة الجغرافية</h5>
      <Container>
        <h6>المستجدات</h6>
        <Row className="noveltiesContainer">
          <Col sm={12} md={6} style={{ paddingLeft: "0", paddingRight: "0" }}>
            <Slide left>
              {" "}
              <div>
                <img src={novImg} alt="noveltiesImage" />
              </div>{" "}
            </Slide>{" "}
          </Col>

          <Col sm={12} md={6} className="pl-5 pb-5">
            <Slide right>
              <Slider {...settings} className="noveltiesCarousel">
                <div className="carouselItem">
                  <h4 className="pt-5 mt-5">
                    ورشة عمل بعنوان الريادة في استخدام نظم المعلومات الجغرافية
                  </h4>
                  <h6>
                    الالتزام بأعلى معايير الجودة في تطوير نظم معلومات جغرافية
                    شاملة لرفع كفاءة تقديم الخدمات البلدية للارتقاء بجودة الحياة
                    في المنطقة الشرقية وتحسين رضا المواطنين.
                  </h6>
                  <span className="newsDetails">
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faLongArrowAltLeft}
                    />
                    تفاصيل
                  </span>
                </div>
                <div className="carouselItem">
                  <h4 className="pt-5 mt-5">
                    ورشة عمل بعنوان الريادة في استخدام نظم المعلومات الجغرافية
                  </h4>
                  <h6>
                    الالتزام بأعلى معايير الجودة في تطوير نظم معلومات جغرافية
                    شاملة لرفع كفاءة تقديم الخدمات البلدية للارتقاء بجودة الحياة
                    في المنطقة الشرقية وتحسين رضا المواطنين.
                  </h6>
                  <span className="sliderDetails">
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faLongArrowAltLeft}
                    />
                    تفاصيل
                  </span>
                </div>
                <div className="carouselItem">
                  <h4 className="pt-5 mt-5">
                    ورشة عمل بعنوان الريادة في استخدام نظم المعلومات الجغرافية
                  </h4>
                  <h6>
                    الالتزام بأعلى معايير الجودة في تطوير نظم معلومات جغرافية
                    شاملة لرفع كفاءة تقديم الخدمات البلدية للارتقاء بجودة الحياة
                    في المنطقة الشرقية وتحسين رضا المواطنين.
                  </h6>
                  <span className="sliderDetails">
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faLongArrowAltLeft}
                    />
                    تفاصيل
                  </span>
                </div>
                <div className="carouselItem">
                  <h4 className="pt-5 mt-5">
                    ورشة عمل بعنوان الريادة في استخدام نظم المعلومات الجغرافية
                  </h4>
                  <h6>
                    الالتزام بأعلى معايير الجودة في تطوير نظم معلومات جغرافية
                    شاملة لرفع كفاءة تقديم الخدمات البلدية للارتقاء بجودة الحياة
                    في المنطقة الشرقية وتحسين رضا المواطنين.
                  </h6>
                  <span className="sliderDetails">
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faLongArrowAltLeft}
                    />
                    تفاصيل
                  </span>
                </div>
              </Slider>{" "}
            </Slide>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
