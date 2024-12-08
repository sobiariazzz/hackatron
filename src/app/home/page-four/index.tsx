import React from "react";
import Image from "next/image";
import "./index.scss";
import PrimaryButton from "@/components/primary-button";

function PageFour() {
  return (
    <div className="fourth-page">
      <div className="fourth-page-wrapper">
        <div className="image">
          <Image src="/Asgaard sofa 1.png" alt="product" fill></Image>
        </div>
        <div className="page-background">
          <div className="info">
            <h3>New Arrivals</h3>
            <h1>Asgard sofa</h1>
            <div className="button">
              <PrimaryButton name="Order Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFour;
