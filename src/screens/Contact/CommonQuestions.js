import React, { useState, useEffect } from "react";

//Packages
import { Container } from "react-bootstrap";
import { Collapse } from "antd";
import NavBarr from "../../containers/NavBarr";
import Footer from "../../containers/Footer";
import { toArabic } from "arabic-digits";
import { Link } from "react-router-dom";
// const numEachPage = 5;
export default function CommonQuestions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  // const [minValue, setMinValue] = useState(0);
  // const [maxValue, setMaxValue] = useState(numEachPage);
  // const [currentPage, setCurrentPage] = useState(1);
  const [questions] = useState([
    {
      id: 1,
      ques: "ما هي البوابة الجغرافية لأمانة المنطقة الشرقية؟",
      answer:
        "هى بوابة الكترونية تضم عدة خدمات الكترونيات خاصة بالادارة العامة لنظم العلزمات الجغرافية."
    },
    {
      id: 2,
      ques: "ما هي  الخدمات الإلكترونية المتوفرة بالبوابة الجغرافية؟",
      answer:
        "يمكنك الاطلاع على الخدمات الالكترونية بالبوابة الجغرافية عن طريق النقر على (خدمات البوابة)."
    },
    {
      id: 3,
      ques: "ما هي انواع مستخدمين البوابة وكيف يمكني التسجيل؟",
      answer:
        "مستخدمين البوابة هم (المواطنين – المكاتب الهندسية) ويمكن تسجيل حساب عن طريق النقر على انشاء حساب ومن ثم تحديد نوع الحساب المراد تسجيله."
    },
    {
      id: 4,
      ques: "كيف  يمكن التقديم الكترونيا للاستفادة من خدمات البوابة؟",
      answer:
        "بعد انشاء حساب (مستفيد –مكتب هندسي) يمكنك الاستفادة  وتقديم المعاملات الالكترونية."
    },
    {
      id: 5,
      ques: "كيف يمكنني الاستعلام عن معاملة إلكترونيا؟",
      answer:
        "من خلال خاصية  الاستعلام عن معاملة  فى الصفحة الرئيسية عن طريق اختيار نوع المعاملة وادخال رقم المعاملة."
    },
    {
      id: 6,
      ques: "أواجه مشكلة في احد الخدمات الإلكترونية",
      answer: (
        <ul className="contactInfo">
          <li>
            يمكنك التواصل عن طريق الدعم الفني , الهاتف:
            <a
              href="tel:9660133282001"
              target="_blank"
              rel="noopener noreferrer"
            >
              {toArabic("9660133282001")}
            </a>
          </li>
          <li className="pt-3 pb-3">
            {" "}
            الفاكس:{" "}
            <a
              href="tel:8337955 13 00966"
              target="_blank"
              rel="noopener noreferrer"
            >
              {toArabic("8337955 13 00966")}
            </a>
          </li>
          <li>
            البريد الألكتروني:
            <a
              href="mailto:gis@eamana.gov.sa"
              target="_blank"
              rel="noopener noreferrer"
            >
              gis@eamana.gov.sa
            </a>
          </li>
        </ul>
      )
    },
    {
      id: 7,
      ques: "كيف يمكن حجز موعد؟",
      answer: (
        <ul style={{ listStyleType: "none" }}>
          <li>عن طريق الرابط التالي و تعبئة البيانات المطلوبة:</li>
          <li className="pt-3 pr-4">
            <a rel="noreferrer" href={"Booking"}>
              اضغط هنا
            </a>
          </li>
        </ul>
      )
    },
    {
      id: 8,
      ques: "كيف يمكن الاطلاع على المعلومات لقطعة الأرض؟",
      answer: (
        <ul style={{ listStyleType: "none" }}>
          <li>عن طريق خدمة المستكشف الجغرافى عبر الرابط التالي:</li>
          <li className="pt-3 pr-4">
            <a
              rel="noreferrer"
              target="_blank"
              href={`${window.hostURL + window.baseURI + "/#/maps"}`}
            >
              اضغط هنا
            </a>
          </li>
        </ul>
      )
    },
    {
      id: 9,
      ques: "كيف يمكن اعتمادى كمكتب هندسي؟",
      answer: (
        <ul style={{ listStyleType: "none" }}>
          <li>
            يمكنكم التعرف على كيفية التسجيل والاوراق المطلوبة عبر الرابط التالي:
          </li>
          <li className="pt-3 pr-4">
            <a
              rel="noreferrer"
              target="_blank"
              href={`${window.hostURL + window.baseURI + "/#/register"}`}
            >
              اضغط هنا
            </a>
          </li>
        </ul>
      )
    }
  ]);
  // const handleChangePage = (page) => {
  //   setCurrentPage(page);
  //   setMinValue((page - 1) * numEachPage);
  //   setMaxValue(page * numEachPage);
  // };
  const { Panel } = Collapse;

  return (
    <div className="goalsPage commonQuestions">
      {" "}
      <NavBarr />
      <div className="goalsHeader">
        <div className=" pt-5 pb-3 px-5 mr-lg-5">
          {" "}
          <span className="span1">
            <Link to="/"> الرئيسية </Link> .
            <Link to="/ContactUs">عن البوابة الجغرافية </Link> .
          </span>
          <span className="span2"> الأسئلة الشائعة </span>
          <h1> الأسئلة الشائعة</h1>
        </div>
      </div>
      <Container>
        <Collapse defaultActiveKey={["1"]}>
          {questions?.map((val, index) => (
            <Panel header={val.ques} key={val.id}>
              <p className="pr-4">{val.answer}</p>
            </Panel>
          ))}
        </Collapse>
        {/* <ConfigProvider direction="ltr">
          <Pagination
            className="mt-4"
            pageSize={numEachPage}
            current={currentPage}
            total={questions.length}
            onChange={handleChangePage}
            style={{ bottom: "0px" }}
          />
        </ConfigProvider> */}
      </Container>
      <Footer />
    </div>
  );
}
