import React from "react";
import "./index.scss";
import PageOne from "./page-one";
import PageTwo from "./page-two";
import PageThree from "./page-three";
import PageFour from "./page-four";
import PageFifth from "./page-five";
import PageSix from "./page-six";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <div className="home-main">
        <div className="home-main-wrapper">
          <PageOne />
          <PageTwo />
          <PageThree />
          <PageFour />
          <PageFifth />
          <PageSix />
          <Footer />
        </div>
      </div>
    </>
  );
}
