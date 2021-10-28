import React from "react";
import "./wellcome.css";

export interface IWellcomeLabel {
    text: string;
    name: string;
    mark: string;
}

export const WellcomeLabel: React.FC<IWellcomeLabel> = ({
    text,
    name,
    mark,
}) => {
    return (
        <div>
            <h6 className="wellcomeLabel">
                {text}
                <label className="nameLabel">{name}</label>
                <label className="mark">{mark}</label>
            </h6>
        </div>
    );
};
