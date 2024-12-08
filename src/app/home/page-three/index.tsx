import React from "react";

import "./index.scss";
import UnderlinedButton from "@/components/underlined-button.dart";
import ItemShopCard from "@/components/item-shop-card";

function PageThree() {
  return (
    <div className="third-page">
      <div className="third-page-wrapper">
        <div className="title">
          <h1>Top Picks For You</h1>
          <h4 className="subtitle">
            Find a bright ideal to suit your taste wth our freat selection of
            suspension, floor and tables lights.
          </h4>
        </div>
        <div className="top-items">
          <ItemShopCard
            image={"Mask group.png"}
            name={"Trenton modular sofa_3"}
            price={"25,000.00"}
          />
          <ItemShopCard
            image={"dining-table.png"}
            name={"Granite dining table with dining chair"}
            price={"25,000.00"}
          />
          <ItemShopCard
            image={"bar-table.png"}
            name={"Outdoor bar table and stool"}
            price={"25,000.00"}
          />
          <ItemShopCard
            image={"work-station.png"}
            name={"Plain consolewith teak mirror"}
            price={"25,000.00"}
          />
        </div>
        <UnderlinedButton name="View More" />
      </div>
    </div>
  );
}

export default PageThree;
