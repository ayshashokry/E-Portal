import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
let applications = [];
let id = "id";
let filteredApps = [];
let DeActApps = [];
class HomeLoggedApploications extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillUnmount() {
    filteredApps = [];
    applications = [];
    DeActApps = [];
  }

  render() {
    if (this.props.user.groups !== null) {
      this.props.user.groups.map((x) =>
        x.groups_permissions !== null
          ? x.groups_permissions.filter((y) =>
              applications.push(y.applications)
            )
          : null
      );
    }
    filteredApps = [
      ...new Map(applications.map((item) => [item[id], item])).values(),
    ];
    if (
      this.props.user.engcompany_id !== null &&
      this.props.user.engineering_companies.applications !== null
    ) {
      DeActApps = this.props.user.engineering_companies.applications;
      filteredApps = DeActApps.map((y) =>
        filteredApps.filter((x) => x.id !== y.id)
      )[0];
    }

    return (
      <Container className="my-5 py-5 myAppsSection">
        <Row>
          {filteredApps !== undefined && filteredApps.length !== 0 ? (
            filteredApps.map((app, index) =>
              app.href !== "empty" ? (
                <Col
                  key={index}
                  sm={{ span: 24 }}
                  xs={{ span: 24 }}
                  md={{ span: 8 }}
                  className="p-3"
                >
                  <div className="homeApp py-5">
                    <h6 className="pb-3">
                      <img
                        alt="appIcon"
                        className="img-fluid pl-3"
                        src={`${window.hostURL + "/home/" + app.icon}`}
                      />
                      {app.translate_ar_caption}
                    </h6>
                    <p style={{ height: "40px" }}>
                      {JSON.parse(localStorage.getItem('appCount')) !== null &&
                        JSON.parse(localStorage.getItem('appCount')).length > 0 &&
                        JSON.parse(localStorage.getItem('appCount')).map((k, index) =>
                          k.key === app.id ? (
                            <>
                              <span className="opTitle pl-5" key={index}>
                                المعاملات
                              </span>
                              <span className="opCount"> {k.count}</span>
                            </>
                          ) : null
                        )}
                    </p>
                    <div style={{ margin: "auto", textAlign: "center" }}>
                      <a
                        href={
                          app.href !== null &&
                          app.href.slice(
                            app.href.length - 3,
                            app.href.length
                          ) === "tk="
                            ? `${
                                window.hostURL + app.href + localStorage.token
                              }`
                            : `${window.hostURL + app.href}`
                        }
                        rel="noreferrer"
                      >
                        {" "}
                        <Button style={{ backgroundColor: "#" + app.color }}>
                          الدخول إلي التطبيق
                          <FontAwesomeIcon
                            icon={faArrowLeft}
                            className="mr-2"
                          />
                        </Button>
                      </a>
                    </div>
                  </div>
                </Col>
              ) : null
            )
          ) : (
            <h4 className="noAppsH4">لا توجد تطبيقات </h4>
          )}
        </Row>
      </Container>
    );
  }
}

const mapStatetoProps = (state) => ({
  isAuth: state.auth.isAuth,
  user: state.auth.user,
});

export default connect(mapStatetoProps)(withRouter(HomeLoggedApploications));
