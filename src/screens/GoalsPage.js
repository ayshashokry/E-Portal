import React, { useEffect } from "react";

//Packages
import { Container } from "react-bootstrap";
import { Row, Col } from "antd";
import NavBarr from "../containers/NavBarr";
import Footer from "../containers/Footer";
import { Link } from "react-router-dom";
//Icons
import icon1 from "../assets/images/goalIcon1.png";
import icon2 from "../assets/images/goalIcon2.png";
import icon3 from "../assets/images/goalIcon3.png";
import icon4 from "../assets/images/goalIcon4.png";
import icon5 from "../assets/images/goalIcon5.png";
import icon6 from "../assets/images/goalIcon6.png";
import icon7 from "../assets/images/goalIcon7.png";
import icon8 from "../assets/images/goalIcon8.png";

export default function GoalsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="goalsPage">
      <NavBarr />
      <div className="goalsHeader">
        <div className=" pt-5 pb-3 px-5 mr-lg-5">
          <span className="span1">
            {" "}
            <Link to="/"> الرئيسية </Link>  . عن البـوابـة الجغـرافيـة .
          </span>
          <span className="span2">أهداف البـوابـة الجغـرافيـة </span>
          <h1>أهـداف البـوابـة الجغـرافيـة </h1>
        </div>
      </div>
      <div className="goals">
        <Container>
          <Row className="my-5" gutter={16} type="flex">
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              className="p-3"
            >
              <div className="goalItem py-5" style={{ height: "100%" }}>
                <img src={icon1} alt="icon1" />
                <p className="pt-4">
                  استخدام أحدث التقنيات في جمع البيانات المكانية وتطويرها،
                  وتدقيقها، وحفظها وتحليلها وجعلها متاحة لصناع القرار و لجميع
                  القطاعات الحكومية والخاصة والأفراد بهدف الارتقاء ببيئة الأعمال
                  وتعزيز مستويات النمو في الأنتاجية.
                </p>
              </div>
            </Col>{" "}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              className="p-3"
            >
              <div className="goalItem py-5" style={{ height: "100%" }}>
                <img src={icon2} alt="icon2" />
                <p className="pt-4">
                  تطوير قاعدة بيانات جغرافية موحدة ومركزية لأمانة المنطقة
                  الشرقية.{" "}
                </p>
              </div>
            </Col>{" "}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              className="p-3"
            >
              <div className="goalItem py-5" style={{ height: "100%" }}>
                <img src={icon3} alt="icon3" />
                <p className="pt-4">
                  إمداد إدارات الأمانة المختلفة بكافة البيانات الجغرافية
                  للمساعدة في أتمتة الخدمات المكانية.{" "}
                </p>
              </div>
            </Col>{" "}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              className="p-3"
            >
              <div className="goalItem py-5" style={{ height: "100%" }}>
                <img src={icon4} alt="icon4" />
                <p className="pt-4">
                  دعم كافة المبادرات والمشروعات المتعلقة بنظم المعلومات
                  الجغرافية على المستوى الحكومي والخاص والتطوعي.{" "}
                </p>
              </div>
            </Col>{" "}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              className="p-3"
            >
              <div className="goalItem py-5" style={{ height: "100%" }}>
                <img src={icon5} alt="icon5" />
                <p className="pt-4">
                  إثراء المعلومات الجغرافية كاملة لجميع أنحاء أمانة المنطقة
                  الشرقية بصور الأقمار الصناعية.{" "}
                </p>
              </div>
            </Col>{" "}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              className="p-3"
            >
              <div className="goalItem py-5" style={{ height: "100%" }}>
                <img src={icon6} alt="icon6" />
                <p className="pt-4">
                  تطوير الكفاءات الإدارية والتقنية الخاصة بنظم المعلومات
                  الجغرافية بأمانة المنطقة الشرقية.{" "}
                </p>
              </div>
            </Col>{" "}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              className="p-3"
            >
              <div className="goalItem py-5" style={{ height: "100%" }}>
                <img src={icon7} alt="icon7" />
                <p className="pt-4">
                  الترابط بين قاعدة البيانات المكانية بأمانة المنطقة الشرقية
                  والبلديات التابعة لها.{" "}
                </p>
              </div>
            </Col>{" "}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              className="p-3"
            >
              <div className="goalItem py-5" style={{ height: "100%" }}>
                <img src={icon8} alt="icon8" />
                <p className="pt-4">
                  تفعيل الشراكة بين الإدارات والبلديات ذات العلاقة بالمعلومات
                  المكانية لتوحيد جهود أطلاق الخدمات وشراء رخص البرامج.{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
