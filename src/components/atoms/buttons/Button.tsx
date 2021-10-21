import React from "react";
import "./button.css";

export interface Ibutton {
    text: string;
}

export const Button = (button: Ibutton) => {
    return (
        <button className="btn1" type="button">
            {button.text}
        </button>
    );
};
