import React, { useEffect } from "react";
import NavBarr from "../containers/NavBarr";
import Footer from "../containers/Footer";
import { Slide, Flip, Rotate, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
export default function OrganizationChartPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="goalsPage organizeChart">
      <NavBarr />
      <div className="goalsHeader">
        <div className=" pt-5 pb-3 px-5 mr-lg-5">
          {" "}
          <span className="span1">
            {" "}
            <Link to="/"> الرئيسية </Link> . عن البوابة الجغرافية .{" "}
          </span>
          <span className="span2">الهيكـل التنـظـيمي </span>
          <h1>الهيكـل التنـظـيمي </h1>
        </div>
      </div>
      <div className="goals ">
        <div className="orgChart ">
          <ul>
            <li className="m-auto">
              <Slide left>
                <div className="firstHirearcyContainer">
                  <div className="firstHirearcy">
                    <p>أمين المنطقة الشرقية</p>
                    <h5>المهندس فهد بن حمد الجبير</h5>
                  </div>
                </div>
              </Slide>
              <ul>
                <li>
                  <Slide right>
                    <div className="secondHirearcyContainer">
                      <div className="secondHirearcy">
                        <p>وكيل الأمين للتعمير والمشاريع</p>
                        <h5>المهندس مازن بن عادل بخرجى</h5>
                      </div>
                    </div>
                  </Slide>{" "}
                </li>
              </ul>
            </li>
          </ul>
        </div>{" "}
        <div className="orgChart ">
          <ul>
            <li className="m-auto">
              <hr />

              <ul>
                <li>
                  <Flip left>
                    <div className="thirdHirearcyContainer">
                      <div className="thirdHirearcy">
                        <p>مدير عام الادارة العامة لنظم المعلومات الجغرافية</p>
                        <h5>المهندس فيصل بن فريحى الفريح</h5>
                      </div>
                    </div>
                  </Flip>
                  <ul>
                    <li>
                      <Zoom left>
                        <div className="forthHirearcyContainer">
                          <div className="forthHirearcy">
                            <h6>نائب مدير الادارة</h6>
                          </div>
                        </div>
                      </Zoom>
                    </li>
                    <li>
                      <Zoom right>
                        <div className="forthHirearcyContainer">
                          <div className="forthHirearcy">
                            <h6>سكرتير مدير الادارة</h6>
                          </div>
                        </div>
                      </Zoom>
                    </li>
                  </ul>
                  <ul className="finalUl row">
                    <li className="col-xl-2 col-lg-12 col-sm-12">
                      <Rotate bottom right>
                        <div className="finalHirearcyContainer">
                          <div className="finalHirearcy">
                            <h6>إدارة متابعة المشاريع ومراقبة الجودة</h6>
                          </div>
                        </div>
                      </Rotate>
                    </li>
                    <li className="col-xl-2 col-lg-12 col-sm-12">
                      <Rotate bottom left>
                        <div className="finalHirearcyContainer">
                          <div className="finalHirearcy">
                            <h6>إدارة تطوير وتشغيل التطبيقات</h6>
                          </div>
                        </div>
                      </Rotate>
                    </li>
                    <li className="col-xl-2 col-lg-12 col-sm-12">
                      <Rotate bottom right>
                        <div className="finalHirearcyContainer">
                          <div className="finalHirearcy">
                            <h6>إدارة الأرشيف الفنى</h6>
                          </div>
                        </div>
                      </Rotate>
                    </li>{" "}
                    <li className="col-xl-2 col-lg-12 col-sm-12">
                      <Rotate bottom left>
                        <div className="finalHirearcyContainer">
                          <div className="finalHirearcy">
                            <h6>إدارة تحديث ومعالجة البيانات الجيومكانية</h6>
                          </div>
                        </div>
                      </Rotate>
                    </li>
                    <li className="col-xl-2 col-lg-12 col-sm-12">
                      <Rotate bottom right>
                        <div className="finalHirearcyContainer">
                          <div className="finalHirearcy">
                            <h6>إدارة التسمية والترقيم</h6>
                          </div>
                        </div>
                      </Rotate>
                    </li>
                    <li className="col-xl-2 col-lg-12 col-sm-12">
                      <Rotate bottom left>
                        <div className="finalHirearcyContainer">
                          <div className="finalHirearcy">
                            <h6>إدارة الدعم الفنى والخدمات المساندة</h6>
                          </div>
                        </div>
                      </Rotate>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
}
