import React, { FC } from "react";
import "./index.scss";
import Image from "next/image";
type ItemShopCardProps = {
  image: string;
  name: string;
  price: string;
};

const ItemShopCard: FC<ItemShopCardProps> = ({ image, name, price }) => {
  return (
    <div className="item-shop-card">
      <div className="item-shop-card-wrapper">
        <div className="item-image">
          <Image src={`/${image}`} alt="product" fill></Image>
        </div>
        <h4 className="item-title">{name}</h4>
        <h3 className="item-price">{`Rs. ${price}`}</h3>
      </div>
    </div>
  );
};

export default ItemShopCard;
