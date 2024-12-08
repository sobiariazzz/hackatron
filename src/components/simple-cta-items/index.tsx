import React, { FC } from "react";
import "./index.scss"

type Item = {
    title: string;
    desc: string;
};

const SimpleCtaItems: FC<{ Items: Item[] }> = ({ Items }) => {
    return (
        <div className="SimpleCtaItems">
            <div className="SimpleCtaItems-wrapper">
                {Items.map((x) => (
                    <div className="item" key={x.title}>
                        <div className="title">{x.title}</div>
                        <div className="desc">{x.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimpleCtaItems;
