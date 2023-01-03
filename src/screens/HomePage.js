import React, { useEffect } from "react";
//Components
// import Novelties from "../components/homePage sections/Novelties";
import GeoExplorer from "../components/homePage sections/GeoExplorer";
import Madinty from "../components/homePage sections/Madinty";
// import News from "../components/homePage sections/News";
import HomeServices from "../components/homePage sections/HomeServices";
import Header from "../components/homePage sections/Header";
import NavBarr from "../containers/NavBarr";
import Footer from "../containers/Footer";

export default function HomePage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <NavBarr />
      <Header />
      {/* <div id="novelties">
          <Novelties noveltiesScroll={this.state.noveltiesScroll} />
        </div>
        <div id="news">
          <News newsScroll={this.state.newsScroll} />
        </div> */}
      <HomeServices />
      <GeoExplorer />
      <Madinty />
      <Footer />
    </div>
  );
}
