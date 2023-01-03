import React, { useEffect } from "react";

//Packages
import { Container } from "react-bootstrap";
import { Row, Col } from "antd";
import NavBarr from "../containers/NavBarr";
import Footer from "../containers/Footer";
import { Link } from "react-router-dom";
import Image from "react-image-enlarger";

//Images
import visionIntroduction from "../assets/images/visionIntroduction.png";
import novelties from "../assets/images/novelties.png";
import isoImg from "../assets/images/isoImg.jpg";

export default function VisionPage() {
  const [zoomed, setZoomed] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="visionPage">
      <NavBarr />
      <div className="goalsHeader">
        <div className=" pt-5 pb-3 px-5 mr-lg-5">
          {" "}
          <span className="span1">
            {" "}
            <Link to="/"> الرئيسية </Link>. عن البوابة الجغرافية .
          </span>
          <span className="span2">رؤية الأمانة </span>
          <h1>رؤيـة الأمـانـة </h1>
        </div>
      </div>
      <div className="goals ">
        <Row className="my-3 py-3 visionIntroduction mx-lg-5 px-lg-5 px-3">
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <div>
              <h5 className="pb-3">مقدمة</h5>
              <p>
                بادرت أمانة المنطقة الشرقية بإنشاء إدارة نظم المعلومات الجغرافية
                عام 1436هـ وتم رفع المستوى الإداري الى الإدارة العامة لنظم
                المعلومات الجغرافية في 16/3/1441هـ وارتباطها بوكيل الأمين
                للتعمير والمشاريع لتكون الإدارة المسؤولة عن خدمات واعمال نظم
                المعلومات الجغرافية بالمنطقة الشرقية بهدف تحديث وتطوير نظام
                معلومات جغرافي مؤسسي متكامل يمكن إستخدامه من قبل الجهات المعنية
                بالمنطقة الشرقية ويعمل على توفير البيانات المكانية للجهات
                الحكومية والخدمية المختلفة وبناء قاعدة بيانات جغرافية مركزية
                متكاملة للمنطقة الشرقية تتضمن بيانات خريطة الأساس المعتمدة
                لبلديات ومحافظات امانة المنطقة الشرقية مما يتيح التعاون وتبادل
                المعلومات لبناء منظومة معلومات جغرافية متكاملة تخدم جميع الجهات
                على كافة المستويات مما يساهم في تحسين مستوى الخدمات المقدمة
                للمستفيدين بالقطاع البلدي وتحسين مستوى الأداء الوظيفي مما يدعم
                اتخاذ القرار الصحيح وفي الوقت المناسب.
              </p>
            </div>
          </Col>{" "}
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <div>
              <img
                src={visionIntroduction}
                alt="visionIntroduction"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <div className="visionGis">
          <Container>
            <Row>
              <Col
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                className="gisTexts py-5"
              >
                <h5>نظم المعلومات الجغرافية</h5>
                <p>
                  هو نظام يمكن من خلاله ادخال وتمثيل البيانات المكانية وتخزينها
                  في قواعد بيانات وأنظمة مؤسسية ويمكن اجراء عمليات تحليل
                  البيانات التي تساهم في دعم أصحاب القرار والاستفادة منها في
                  أتمته الإجراءات وربط الخدمات بموقعها الجغرافي بالإضافة الى
                  إمكانية مشاركتها مع كافة الجهات عن طريق خريطة ويب او تطبيقات
                  الكترونية تساهم في تحسين الخدمات المقدمة للمستفيدين، وأصبح
                  عنصر أساسي من مكونات أنظمة الحكومة الالكترونية (E-Government)
                  والأنظمة الخدمية الالكترونية (E-Service) .
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <Row className="my-4 py-4 visionIntroduction mx-lg-5 px-lg-5 px-3">
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <div>
              <h5 className="pb-3">
                رؤية الأمانة حول مفهوم نظم المعلومات الجغرافية
              </h5>
              <p>
                ولذا وجد المسئولون بأجهزة الأمانة وعلى رأسهم معالي الأمين أهمية
                تطبيق النظام باعتباره الوسيلة العصرية الرائدة حاليا حيث تقدم
                نظام المعلومات الجغرافية وخرائطها الرقمية امتيازات كثيرة لا
                تتوفر في الخرائط المطبوعة في مقدمتها القدرة العالية على حفظ
                كميات هائلة من المعلومات ، وسهولة معالجتها وتحليلها وسرعة الحصول
                على نتائج هذه التحاليل وتجسيدها ضمن أنماط ذات دلائل معبره وعالية
                الدقة تمتاز بالوضوح والقدرة على إظهار العلاقات التبادلية بين شتى
                المعلومات المدخلة ويصل الأمر في هذا المجال لحد القدرة على تجسيد
                الحلول واستقراء الظواهر المستقبلية وأوضاعها ومسبباتها الحالية
                بصورة سهلة وميسره تساعد المسئولين في إدارة الأعمال ودعم اتخاذ
                القرار.
              </p>
            </div>{" "}
          </Col>{" "}
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <div>
              <img
                style={{ height: "100%" }}
                src={novelties}
                alt="visionIntroduction"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row
          className="my-2 py-5 visionIntroduction  px-lg-5 px-3 visionMsgList"
          style={{
            boxShadow: "0 0 2px 0 #abafbe",
            backgroundColor: "#dee2e633"
          }}
        >
          <Col xs={{ span: 24 }} lg={{ span: 16 }} className="px-lg-5">
            <div>
              <h5 className="pb-3">رسالة الأمانة</h5>
              <p>
                الالتزام بأعلي معايير الجودة في تطوير نظم معلومات جغرافية شاملة
                لرفع كفاءة تقديم الخدمات البلدية للإرتقاء بجودة الحياة في
                المنطقة الشرقية وتحسين رضا المواطن من خلال الاتي
              </p>
              <ul className="pr-5">
                <li>
                  تقديم التدريب المستمر لرفع كفاءة المنسوبين.
                  <li>التحديث الدائم للتوافق مع أحدث التكنولوجيا العالمية.</li>
                  <li>
                    لتطابق التام مع جميع المتطلبات المحلية والعالمية المرتبطة
                    بالنشاط.
                  </li>
                  <li>التطابق التام مع متطلبات العملاء.</li>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="my-4 py-4 visionIntroduction mx-lg-5 px-lg-5 px-3 visionMsgList">
          <Col span={24}>
            <div>
              <h5 className="pb-3">شهادة الجودة</h5>{" "}
              <Image
                className="isoImg"
                style={{ width: "400px", height: "auto" }}
                zoomed={zoomed}
                src={isoImg}
                onClick={() => setZoomed(true)}
                onRequestClose={() => setZoomed(false)}
              />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
