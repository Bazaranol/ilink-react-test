import React from "react";
import "./grayLabel.css";
import { ITextLabel } from "../textLabel/TextLabel";

export const GrayLabel: React.FC<ITextLabel> = ({
    text,
    size,
    weight,
    isActive,
}) => {
    return (
        <div
            className={isActive ? "grayLabel active" : "grayLabel"}
            data-size={size}
            data-weight={weight}
        >
            {text}
        </div>
    );
};
