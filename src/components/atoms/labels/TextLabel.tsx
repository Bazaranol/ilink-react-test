import React from "react";
import "./labels.css";

export interface ItextLabel {
    text: string;
}

export const TextLabel = (label: ItextLabel) => {
    return <div className="label">{label.text}</div>;
};
