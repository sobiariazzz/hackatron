import React, { FC } from "react";
import "./index.scss";
type PrimaryButtonProps = {
  name: string;
};

const PrimaryButton: FC<PrimaryButtonProps> = ({ name }) => {
  return (
    <div className="primary-button">
      <div className="primary-button-wrapper">
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default PrimaryButton;
