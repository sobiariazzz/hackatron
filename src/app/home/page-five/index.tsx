import React from "react";

import "./index.scss";
import UnderlinedButton from "@/components/underlined-button.dart";
import ItemShopCard from "@/components/item-shop-card";
import BlogCard from "@/components/blog-card";

function PageFive() {
  return (
    <div className="fifth-page">
      <div className="fifth-page-wrapper">
        <div className="title">
          <h1>Our Blogs</h1>
          <h4 className="subtitle">
            find a bright ideal to suit your taste with
          </h4>
        </div>
        <div className="blog-items">
          <BlogCard
            image={"Rectangle 13.png"}
            name={"Going all-in with millennial design"}
            date="12 Oct 2022"
            time="5 Min"
          />
          <BlogCard
            image={"Rectangle 14.png"}
            name={"Going all-in with millennial design"}
            date="12 Oct 2022"
            time="5 Min"
          />
          <BlogCard
            image={"Rectangle 15.png"}
            name={"Going all-in with millennial design"}
            date="12 Oct 2022"
            time="5 Min"
          />
        </div>
        <div className="view-more">
          <UnderlinedButton name="View More" />
        </div>
      </div>
    </div>
  );
}

export default PageFive;
