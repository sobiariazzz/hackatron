import React, { FC } from "react";
import "./index.scss";

type Props = {
    title: string;
    subTitle: string;
};
const HeroTitle: FC<Props> = ({ subTitle, title }) => {
    return (
        <div className="HeroTitle">
            <div className="HeroTitle-wrapper">
                <div className="icon"></div>
                <div className="title">{title}</div>
                <div className="subTitle">{subTitle}</div>
            </div>
        </div>
    );
};

export default HeroTitle;
