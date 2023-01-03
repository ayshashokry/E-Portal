import React, { useState } from "react";

//Packages
import { Container, Row, Col } from "react-bootstrap";
import newsImg from "../../assets/images/news.png";
import Slider from "react-slick";
import Slide from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
export default function News(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [news] = useState([
    {
      id: 1,
      title: "خبر جديد 1",
      details:
        "يمكنك الآن حجز موعد قبل الحضور إلى مقر الإدارة العامة للتخطيط العمراني, مقر الإدارة العامة للتخطيط العمراني",
    },
    {
      id: 2,
      title: "خبر جديد 2",
      details:
        "يمكنك الآن حجز موعد قبل الحضور إلى مقر الإدارة العامة للتخطيط العمراني, مقر الإدارة العامة للتخطيط العمراني",
    },
    {
      id: 3,
      title: "خبر جديد 3",
      details:
        "يمكنك الآن حجز موعد قبل الحضور إلى مقر الإدارة العامة للتخطيط العمراني, مقر الإدارة العامة للتخطيط العمراني",
    },
    {
      id: 3,
      title: "خبر جديد 3",
      details:
        "يمكنك الآن حجز موعد قبل الحضور إلى مقر الإدارة العامة للتخطيط العمراني, مقر الإدارة العامة للتخطيط العمراني",
    },
    {
      id: 3,
      title: "خبر جديد 3",
      details:
        "يمكنك الآن حجز موعد قبل الحضور إلى مقر الإدارة العامة للتخطيط العمراني, مقر الإدارة العامة للتخطيط العمراني",
    },
    {
      id: 3,
      title: "خبر جديد 3",
      details:
        "يمكنك الآن حجز موعد قبل الحضور إلى مقر الإدارة العامة للتخطيط العمراني, مقر الإدارة العامة للتخطيط العمراني",
    },
    {
      id: 3,
      title: "خبر جديد 3",
      details:
        "يمكنك الآن حجز موعد قبل الحضور إلى مقر الإدارة العامة للتخطيط العمراني, مقر الإدارة العامة للتخطيط العمراني",
    },
  ]);
  return (
    <div className="news pt-5">
      <Container>
        <Row>
          <Col sm={12} md={6} className="pt-4 ">
            <Slide left>
              <h5>الفعاليات و الأحداث</h5>
              <Slider {...settings} className="newsCarouselContainer pb-5 mb-2">
                <div className="carouselItem newsSliderItem">
                  <img src={newsImg} alt="newsImage" />
                  <div className="p-3">
                    <h6>ورشة عمل</h6>
                    <p>
                      يمكنك الآن حجز موعد قبل الحضور إلى مقر الإدارة العامة
                      للتخطيط العمراني
                    </p>
                  </div>
                </div>
                <div className="carouselItem newsSliderItem">
                  <img src={newsImg} alt="newsImage" />
                  <div className="p-3">
                    {" "}
                    <h6>ورشة عمل</h6>
                    <p>
                      يمكنك الآن حجز موعد قبل الحضور إلى مقر الإدارة العامة
                      للتخطيط العمراني
                    </p>
                  </div>
                </div>{" "}
                <div className="carouselItem newsSliderItem">
                  <img src={newsImg} alt="newsImage" />
                  <div className="p-3">
                    {" "}
                    <h6>ورشة عمل</h6>
                    <p>
                      يمكنك الآن حجز موعد قبل الحضور إلى مقر الإدارة العامة
                      للتخطيط العمراني
                    </p>
                  </div>
                </div>{" "}
                <div className="carouselItem newsSliderItem">
                  <img src={newsImg} alt="newsImage" />
                  <div className="p-3">
                    {" "}
                    <h6>ورشة عمل</h6>
                    <p>
                      يمكنك الآن حجز موعد قبل الحضور إلى مقر الإدارة العامة
                      للتخطيط العمراني
                    </p>
                  </div>
                </div>
              </Slider>
            </Slide>
          </Col>
          <Col sm={12} md={6} className="pl-2 pt-4 ">
            <Slide right>
              <h5>الأخبار</h5>
              <div className="newsDiv pt-4">
                {news.map((n, index) => (
                  <div>
                    <h6>{n.title}</h6>
                    <p>{n.details}</p>{" "}
                    <span className="sliderDetails pl-3">
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faLongArrowAltLeft}
                      />{" "}
                      تفاصيل
                    </span>
                  </div>
                ))}
              </div>
            </Slide>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
