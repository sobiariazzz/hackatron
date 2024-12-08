import React from "react";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import "./index.scss";
import UnderlinedButton from "@/components/underlined-button.dart";

function PageOne() {
  return (
    <div className="first-page">
      <Navbar />
      <div className="right">
        <Image src="/Rocket single seater 1.png" alt="product" fill></Image>
      </div>
      <div className="left">
        <h2>Rocket single seater</h2>
        <UnderlinedButton name="Shop Now" />
      </div>
    </div>
  );
}

export default PageOne;
