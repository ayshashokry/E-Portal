import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/homeHeaderImages/homeHeader1.png";
import img2 from "../../assets/images/homeHeaderImages/homeHeader2.png";
import img3 from "../../assets/images/homeHeaderImages/homeHeader3.png";
import img4 from "../../assets/images/homeHeaderImages/homeHeader4.png";
import img5 from "../../assets/images/homeHeaderImages/homeHeader5.png";
import img6 from "../../assets/images/homeHeaderImages/homeHeader6.png";
import img7 from "../../assets/images/homeHeaderImages/homeHeader7.png";
import img8 from "../../assets/images/homeHeaderImages/homeHeader8.png";
import img9 from "../../assets/images/homeHeaderImages/homeHeader9.png";
import img10 from "../../assets/images/homeHeaderImages/homeHeader10.png";
import Media from "react-media";
export default function Header() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="homeHeader">
      <Media query="(max-width: 768px)">
        {matches =>
          matches ? null : (
            <Slider {...settings}>
              <div>
                <img src={img1} alt="newsImage" />
              </div>
              <div>
                <img src={img2} alt="newsImage" />
              </div>{" "}
              <div>
                <img src={img3} alt="newsImage" />
              </div>{" "}
              <div>
                <img src={img4} alt="newsImage" />
              </div>{" "}
              <div>
                <img src={img5} alt="newsImage" />
              </div>{" "}
              <div>
                <img src={img6} alt="newsImage" />
              </div>
              <div>
                <img src={img7} alt="newsImage" />
              </div>
              <div>
                <img src={img8} alt="newsImage" />
              </div>{" "}
              <div>
                <img src={img9} alt="newsImage" />
              </div>{" "}
              <div>
                <img src={img10} alt="newsImage" />
              </div>
            </Slider>
          )
        }
      </Media>
      <div className="marquee">
        <div className="marquee__item">
          <>
            {" "}
            <span> مرحبا بك في البوابة الجغرافية لأمانة المنطقة الشرقية</span>
            <span className="marquee__seperator"></span>
          </>{" "}
          <>
            {" "}
            <span>
              {" "}
              <a
                href="https://twitter.com/easterneamana/status/1381218590377009155?s=21"
                target="_blank"
                rel="noreferrer"
              >
                تكريم مُتدربات جامعة الإمام عبد الرحمن بن فيصل
              </a>
            </span>
            <span className="marquee__seperator"></span>
          </>
          <>
            <span style={{ textAlign: "right" }}>
              تجديد شهادة نظام إدارة الجودة الأيـزو <bdi> (ISO 9001:2015) </bdi>{" "}
              حتى عام 2022م
            </span>
            <span className="marquee__seperator"></span>
          </>
          <>
            {" "}
            <span> تدشين تطبيق مدينتي الاصدار الثاني</span>
            <span className="marquee__seperator"></span>
          </>{" "}
          <>
            {" "}
            <span>
              دشن معالي امين المنطقه الشرقية المهندس فهد بن محمد الجبير البوابه
              الجغرافية لامانه المنطقة الشرقية الاصدار الثاني
            </span>
            <span className="marquee__seperator"></span>
          </>
        </div>
      </div>
    </div>
  );
}
