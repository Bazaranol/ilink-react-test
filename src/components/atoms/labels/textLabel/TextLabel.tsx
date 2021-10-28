import React from "react";
import "./labels.css";

export interface ITextLabel {
    text: string;
    size?: number;
    weight?: string;
    isActive?: boolean;
}

export const TextLabel: React.FC<ITextLabel> = ({
    text,
    size,
    weight,
    isActive,
}) => {
    return (
        <div
            className={isActive ? "label active" : "label"}
            data-size={size}
            data-weight={weight}
        >
            {text}
        </div>
    );
};
