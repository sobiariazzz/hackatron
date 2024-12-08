import React, { FC } from "react";
import "./index.scss";
import Image from "next/image";
import UnderlinedButton from "../underlined-button.dart";
import { FaRegClock } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";

import IconText from "../icon-text";
type BlogCardProps = {
  image: string;
  name: string;
  time: string;
  date: string;
};

const BlogCard: FC<BlogCardProps> = ({ image, name, time, date }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-wrapper">
        <div className="blog-image">
          <Image src={`/${image}`} alt="product" fill></Image>
        </div>
        <h4 className="blog-title">{name}</h4>
        <div className="read-more">
          <UnderlinedButton name="Read More" />
        </div>
        <div className="blog-info">
          <IconText Icon={FaRegClock} text={time} />
          <IconText Icon={FaRegCalendar} text={date} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
