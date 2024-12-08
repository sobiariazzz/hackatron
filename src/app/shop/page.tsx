import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import HeroTitle from "@/components/hero-title";
import Intro from "@/components/intro";
import ItemShopCard from "@/components/item-shop-card";
import Navbar from "@/components/navbar/navbar";
import SimpleCtaItems from "@/components/simple-cta-items";
import React from "react";
import "./index.scss";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoGrid } from "react-icons/io5";
import { LuAlignVerticalSpaceAround } from "react-icons/lu";

const Shop = () => {
  return (
    <div className="ContactUs">
      <Navbar />

      <HeroTitle subTitle="Home > Shop" title="Shop" />
      <div className="filters">
        <div className="left">
          <li>
            <HiOutlineAdjustmentsHorizontal size={23} />
          </li>
          <h3>Filter</h3>
          <li>
            <IoGrid size={23} />
          </li>
          <li>
            <LuAlignVerticalSpaceAround size={23} />
          </li>
          <div className="vertical-line">|</div>
          <h4>Showing 1-16 of 32 results</h4>
        </div>
        <div className="right">
          <h4>Show</h4>
          <div className="text-field">16</div>
          <h4>Sort by</h4>
          <div
            className="text-field"
            style={{ padding: "15px 70px 15px 25px" }}
          >
            Default
          </div>
        </div>
      </div>
      <div className="filters-sectoon"></div>
      <div className="shop-items">
        <div className="shop-items-wrapper">
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
        </div>
      </div>
      <div className="shop-items">
        <div className="shop-items-wrapper">
          <div className="top-items">
            <ItemShopCard
              image={"table.png"}
              name={"Trenton modular sofa_3"}
              price={"25,000.00"}
            />
            <ItemShopCard
              image={"Kent coffee table 1.png"}
              name={"Granite dining table with dining chair"}
              price={"25,000.00"}
            />
            <ItemShopCard
              image={"Round coffee table_color 2 1.png"}
              name={"Outdoor bar table and stool"}
              price={"25,000.00"}
            />
            <ItemShopCard
              image={"Reclaimed teak coffee table 1.png"}
              name={"Plain consolewith teak mirror"}
              price={"25,000.00"}
            />
          </div>
        </div>
      </div>
      <div className="shop-items">
        <div className="shop-items-wrapper">
          <div className="top-items">
            <ItemShopCard
              image={"Plain console_ 1.png"}
              name={"Trenton modular sofa_3"}
              price={"25,000.00"}
            />
            <ItemShopCard
              image={"Reclaimed teak Sideboard 1.png"}
              name={"Plain consolewith teak mirror"}
              price={"25,000.00"}
            />
            <ItemShopCard
              image={"SJP_0825  1.png"}
              name={"Granite dining table with dining chair"}
              price={"25,000.00"}
            />
            <ItemShopCard
              image={"Bella chair and table 1.png"}
              name={"Outdoor bar table and stool"}
              price={"25,000.00"}
            />
          </div>
        </div>
      </div>
      <div className="shop-items">
        <div className="shop-items-wrapper">
          <div className="top-items">
            <ItemShopCard
              image={"Mask group (3).png"}
              name={"Trenton modular sofa_3"}
              price={"25,000.00"}
            />
            <ItemShopCard
              image={"Asgaard sofa 2.png"}
              name={"Granite dining table with dining chair"}
              price={"25,000.00"}
            />
            <ItemShopCard
              image={"Maya sofa three seater 1.png"}
              name={"Outdoor bar table and stool"}
              price={"25,000.00"}
            />
            <ItemShopCard
              image={"Outdoor sofa set 1.png"}
              name={"Plain consolewith teak mirror"}
              price={"25,000.00"}
            />
          </div>
        </div>
      </div>
      <div className="pagination">
        <li style={{ backgroundColor: "#FBEBB5" }}>1</li>
        <li>2</li>
        <li>3</li>
        <li style={{ fontWeight: "300" }}>Next</li>
      </div>
      <SimpleCtaItems
        Items={[
          {
            title: "Free Delivery",
            desc: "For all oders over $50, consectetur adipim scing elit.",
          },
          {
            title: "90 Days Return",
            desc: "If goods have problems, consectetur adipim scing elit.",
          },
          {
            title: "Secure Payment",
            desc: "If goods have problems, consectetur adipim scing elit.",
          },
        ]}
      />
      <Footer />
    </div>
  );
};

export default Shop;
