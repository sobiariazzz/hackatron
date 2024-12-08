import React from "react";

import "./index.scss";
import ItemCard from "@/components/item-card";

function PageTwo() {
  return (
    <div className="second-page">
      <div className="second-page-wrapper">
        <ItemCard
          image={"Granite square side table 1.png"}
          name={"Side table"}
        />
        <ItemCard
          image={"Cloud sofa three seater + ottoman_3 1.png"}
          name={"Side table"}
        />
      </div>
    </div>
  );
}

export default PageTwo;
