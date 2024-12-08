import React, { FC } from "react";
import "./index.scss";
import Image from "next/image";
import UnderlinedButton from "@/components/underlined-button.dart";
type ItemCardProps = {
  image: string;
  name: string;
};

const ItemCard: FC<ItemCardProps> = ({ image, name }) => {
  return (
    <div className="item-card">
      <div className="item-card-wrapper">
        <div className="item-image">
          <Image src={`/${image}`} alt="product" fill></Image>
        </div>
        <h3 className="item-title">{name}</h3>
        <div className="item-button">
          <UnderlinedButton name="View More" />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
