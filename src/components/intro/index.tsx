import React, { FC } from "react";
import "./index.scss"
type Props = {
    title: string;
    desc: string;
};
const Intro: FC<Props> = ({ desc, title }) => {
    return (
        <div className="Intro">
            <div className="Intro-wrapper">
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
            </div>
        </div>
    );
};

export default Intro;
