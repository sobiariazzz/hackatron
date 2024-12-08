import React from "react";
import Image from "next/image";
import "./index.scss";
import PrimaryButton from "@/components/primary-button";

function PageSix() {
  return (
    <div className="sixth-page">
      <div className="sixth-page-wrapper">
        <div className="page-background">
          <Image src="/Rectangle 17.png" alt="product" fill></Image>
        </div>
        <div className="page-front">
          <h1>Our instagram</h1>
          <h4>Follow ou store on Instagram</h4>
          <div className="button">Follow Us</div>
        </div>
      </div>
    </div>
  );
}

export default PageSix;
