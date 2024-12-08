import React, { FC } from "react";
import "./index.scss";

type UnderlinedButtonProps = {
  name: string;
  link?: string;
  lineWidth?: string;
  lineHeight?: string;
  fontsize?: string;
  color?: string;
};

const UnderlinedButton: FC<UnderlinedButtonProps> = ({
  name,
  lineWidth,
  fontsize,
  color,
  lineHeight,
}) => {
  return (
    <div className="underline-button">
      <h4 style={{ color: color, fontSize: fontsize }}>{name}</h4>
      <div
        className="underline"
        style={{ width: lineWidth, height: lineHeight }}
      ></div>
    </div>
  );
};

export default UnderlinedButton;
