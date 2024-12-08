import React, { FC } from "react";
import "./index.scss";
import { IconType } from "react-icons";
type IconTextProps = {
  Icon: IconType;
  text: string;
};

const IconText: FC<IconTextProps> = ({ text, Icon }) => {
  return (
    <div className="icon-data">
      <div className="icon">
        <Icon size={23} />
      </div>
      <h4>{text}</h4>
    </div>
  );
};

export default IconText;
