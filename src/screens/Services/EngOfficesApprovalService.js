import React, { useEffect } from "react";

//Packages
import { Container, Button } from "react-bootstrap";
import { Row, Col } from "antd";
import NavBarr from "../../containers/NavBarr";
import Footer from "../../containers/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faDownload,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
export default function EngOfficesApprovalService(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="goalsPage">
      <NavBarr />
      <div className="goalsHeader">
        <div className=" pt-5 pb-3 px-5 mr-lg-5">
          {" "}
          <span className="span1">
            {" "}
            <Link to="/"> الرئيسية </Link>
            <Link to="/Services"> . خدماتنا . دليل الخدمات . </Link>
          </span>
          <span className="span2">خدمات اعتماد المكاتب الهندسية</span>
          <h1>خدمات اعتماد المكاتب الهندسية</h1>
        </div>
      </div>
      <div className="goals servicePage mb-5 pb-5">
        <Container>
          <Row className="my-5 servicePageHeader">
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }}>
              <h2>نظام خدمات اعتماد المكاتب الهندسية</h2>
              <p>
                خدمة الكترونية تتيح للمستفيدين تسجيل و توثيق لكل الاجراءات و
                العمليات المطلوبة لاعتماد المكاتب الهندسية بحيث يكون من السهل
                تسجيل مكتب هندسى دون الحاجة الى زيارة الامانة او البلدية و تم
                تطوير تطبيق جغرافى يتمثل فى اتمته تسجيل المكاتب الهندسية من قبل
                الامانة
              </p>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
              <a
                href={
                  !props.isAuth
                    ? `${window.hostURL + window.baseURI + "/#/register"}`
                    : `${
                        window.hostURL +
                        window.baseURI +
                        "/#/submissions/approval"
                      }`
                }
                target="_self"
                rel="noreferrer"
              >
                <Button>
                  الذهاب إلي الخدمة
                  <FontAwesomeIcon
                    className="mr-2"
                    style={{ fontSize: "20px" }}
                    icon={faLongArrowAltLeft}
                  />
                </Button>
              </a>
            </Col>
          </Row>
          <Row className="my-5 serviceUserManual">
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
              <h2>دليل الاستخدام</h2>{" "}
              <div style={{ textAlign: "right" }}>
                {" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={`${process.env.PUBLIC_URL}/servicesManual/نظام إعتماد المكاتب الهندسية الإلكتروني.pdf`}
                  download
                >
                  تحميل دليل الاستخدام
                  <FontAwesomeIcon
                    className="mx-3"
                    style={{ fontSize: "20px" }}
                    icon={faDownload}
                  />
                </a>
              </div>
            </Col>
          </Row>
          <Row className="my-5 serviceUserManual">
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }}>
              <h3>خدمة تسجيل مكتب هندسي</h3>
              <p>إجراء يصدر عنه تسجيل و اعتماد للمكاتب الهندسية</p>
              <div>
                <h5>إجراءات الخدمة</h5>
                <ul>
                  <li>
                    بعد الدخول على النظام من خلال بوابة الامانة يختار المستخدم
                    تسجيل مكتب هندسى .
                  </li>
                  <li>
                    {" "}
                    يدخل المستخدم بيانات المكتب الهندسى الاساسية ( اسم المكتب
                    ونوعه و رقم السجل التجارى و سنة الانشاءو عنوان الموقع و صورة
                    لكروكى الموقع ) .
                  </li>
                  <li>
                    {" "}
                    يدخل المستخدمبيانات ترخيص الهيئة السعودية ووزارة التجارة و
                    الصناعة (صورة الترخيص و رقمه وتاريخ اصدار و انتهاء الرخصة) .
                  </li>
                  <li>
                    {" "}
                    يدخل المستخدم فئة و تخصص المكتب و بيانات الموظفين لكل تخصص
                    (من صورة و رقم الهوية للموظف و صورة المؤهل و شهادة التسجيل
                    بالهيئة السعودية ورقم العضوية) .
                  </li>
                  <li>
                    يدخل المستخدم رقم ترخيص المكتب من البلدية و تاريخ اصدارو
                    انتهاء الرخصة من البلدية و صورة للرخصة الصادرة من البلدية .
                  </li>
                  <li>
                    يدخل المستخدم يانات التأمينات الاجتماعية ورقم الاشتراك
                    وتاريخ انتهاء الشهادة و صورة للشهادة .
                  </li>
                  <li>
                    يدخل المستخدم بيانات الحساب الخاص بالمكتب الهندسى المدخل من
                    ( اسم المستخدم و كلمة المرور و البريد الالكترونى ) .
                  </li>
                  <li>ارسال الطلب للادارات المختصة .</li>
                </ul>
              </div>
              <div>
                <h5>المستندات المطلوبة</h5>
                <ul>
                  <li>صورة لخطاب طلب تسجيل للمكاتب الهندسية .</li>
                  <li>صورة لترخيص الهيئة السعودية .</li>
                  <li>
                    {" "}
                    صورة و رقم الهوية للموظف و صورة المؤهل و شهادة التسجيل
                    بالهيئة السعودية ورقم العضوية .
                  </li>
                  <li>
                    صورة لرخصة المكتب الصادرة من البلدية و صورة لبيانات و برنت
                    التأمينات الاجتماعية .
                  </li>
                </ul>
              </div>
              <div>
                <h5>المستفيدين من الخدمة</h5>
                <ul>
                  <li> قطاع الاعمال ( الشركات – المكاتب الهندسية ).</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 8 }}
              className="servicePageFooter px-5"
            >
              <h4>الشروط والأحكام</h4>
              <p>
                الالتزام بشروط وأحكام أمانة المنطقة الشرقية واتفاقية تأهيل
                المكاتب الهندسية
              </p>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 8 }}
              className="servicePageFooter px-5"
            >
              <h4>اوقات تقدييم الخدمة</h4>
              <p>
                يعمل النظام باستقبال الطلبات على مدار ٢٤ ساعة لكن سيتم معالجة
                الطلبات من المختصين خلال الدوام الرسمي للأمانة يومياً عدا الجمعة
                والسبت
              </p>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 8 }}
              className="servicePageFooter px-5"
            >
              <h4>الفيديو التعليمي</h4>
              <p>
                إذا كنت تواجه مشاكل حول التعامل مع الخدمة يمكنك من هنا مشاهدة
                بشكل عملي لطريقة تنفيذ الخدمة
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/watch?v=c1DU8OJN7g4"
              >
                شاهد الفيديو التوضيحي
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              </a>
            </Col>
            {/* 
              <iframe
                title="video"
                width="420"
                height="345"
                src="https://www.youtube.com/embed/c1DU8OJN7g4"
              ></iframe>
       */}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
