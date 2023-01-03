import React from "react";
import { connect } from "react-redux";
import moment from "moment-hijri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
function NotificationsMenu(props) {
  let todayDate = moment();

  return (
    <div
      className="engNotifMenu"
      id={
        props.openengNotificationMenu
          ? "openNotMenuAnimation"
          : "closeNotMenuAnimation"
      }>
      <FontAwesomeIcon
        className="m-2"
        icon={faTimes}
        onClick={props.openEngMenu}
        style={{ cursor: "pointer" }}
      />
      {props.user.engineering_companies !== undefined &&
        props.user.engineering_companies !== null &&
        props.user.engineering_companies.department_eng_comp.length > 0 &&
        props.user.engineering_companies.department_eng_comp.map((n, index) =>
          n.is_approved === 2 ? (
            <>
              <div className="engNotifItem">
                <p>
                  لقد تم الإعتذار عن إعتماد طلبك لدي {n.departments.name}
                  بسبب {n.comments}
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="inboxArrow ml-2"
                    style={{ color: "#d62f2f" }}
                  />
                </p>
              </div>
              <hr />
            </>
          ) : n.is_approved === 1 ? (
            <>
              <div className="engNotifItem">
                <p>
                  لقد تم الموافقة علي طلبك لدي {n.departments.name}
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="inboxArrow ml-2"
                    style={{ color: "#97c268" }}
                  />{" "}
                </p>
              </div>
              <hr />
            </>
          ) : n.is_approved === null ? (
            <>
              <div className="engNotifItem">
                <p>
                  طلبك لدي {n.departments.name} قيد الإعتماد
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="sentArrow ml-2"
                    style={{ color: "#385894" }}
                  />{" "}
                </p>
              </div>{" "}
              <hr />
            </>
          ) : null
        )}
      {props.user.engineering_companies.insurance_license != null &&
      todayDate.isAfter(
        moment(
          props.user.engineering_companies.insurance_license.end_date,
          "iDD/iMM/iYYYY"
        ),
        "day"
      ) ? (
        <>
          <div className="engNotifItem">
            <p>
              رخصة التأمينات الإجتماعية إنتهت , برجاء تجديد الرخصة
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="inboxArrow ml-2"
                style={{ color: "#d62f2f" }}
              />{" "}
            </p>
          </div>
          <hr />
        </>
      ) : props.user.engineering_companies.insurance_license !== null &&
        moment(
          props.user.engineering_companies.insurance_license.end_date,
          "iDD/iMM/iYYYY"
        ).diff(todayDate, "days") <= 30 &&
        todayDate.isBefore(
          moment(
            props.user.engineering_companies.insurance_license.end_date,
            "iDD/iMM/iYYYY"
          ),
          "day"
        ) ? (
        <>
          <div className="engNotifItem">
            <p>
              رخصة التأمينات الإجتماعية قاربت علي الإنتهاء , برجاء تجديد الرخصة
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="inboxArrow ml-2"
                style={{ color: "#faad14ba" }}
              />{" "}
            </p>
          </div>
          <hr />
        </>
      ) : null}
      {props.user.engineering_companies.municipality_license !== null &&
      todayDate.isAfter(
        moment(
          props.user.engineering_companies.municipality_license.end_date,
          "iDD/iMM/iYYYY"
        ),
        "day"
      ) ? (
        <>
          <div className="engNotifItem">
            <p>
              رخصة البلدية إنتهت , برجاء تجديد الرخصة
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="inboxArrow ml-2"
                style={{ color: "#d62f2f" }}
              />{" "}
            </p>
          </div>
          <hr />
        </>
      ) : props.user.engineering_companies.municipality_license !== null &&
        moment(
          props.user.engineering_companies.municipality_license.end_date,
          "iDD/iMM/iYYYY"
        ).diff(todayDate, "days") <= 30 &&
        todayDate.isBefore(
          moment(
            props.user.engineering_companies.municipality_license.end_date,
            "iDD/iMM/iYYYY"
          ),
          "day"
        ) ? (
        <>
          <div className="engNotifItem">
            <p>
              رخصة البلدية قاربت علي الإنتهاء , برجاء تجديد الرخصة
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="inboxArrow ml-2"
                style={{ color: "#faad14ba" }}
              />{" "}
            </p>
          </div>
          <hr />
        </>
      ) : null}
      {props.user.engineering_companies.saudi_license !== null &&
      todayDate.isAfter(
        moment(
          props.user.engineering_companies.saudi_license.end_date,
          "iDD/iMM/iYYYY"
        ),
        "day"
      ) ? (
        <>
          <div className="engNotifItem">
            <p>
              رخصة الهيئة السعودية إنتهت , برجاء تجديد الرخصة
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="inboxArrow ml-2"
                style={{ color: "#d62f2f" }}
              />{" "}
            </p>
          </div>
          <hr />
        </>
      ) : props.user.engineering_companies.saudi_license !== null &&
        moment(
          props.user.engineering_companies.saudi_license.end_date,
          "iDD/iMM/iYYYY"
        ).diff(todayDate, "days") <= 30 &&
        todayDate.isBefore(
          moment(
            props.user.engineering_companies.saudi_license.end_date,
            "iDD/iMM/iYYYY"
          ),
          "day"
        ) ? (
        <>
          <div className="engNotifItem">
            <p>
              رخصة الهيئة السعودية قاربت علي الإنتهاء , برجاء تجديد الرخصة
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="inboxArrow ml-2"
                style={{ color: "#faad14ba" }}
              />{" "}
            </p>
          </div>
          <hr />
        </>
      ) : null}
    </div>
  );
}
const mapStateToProps = function (state) {
  return {
    isAuth: state.auth.isAuth,
    user: state.auth.user,
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(NotificationsMenu);
