import React from "react";
import "./chatButton.css";
import { Ibutton } from "../buttons/ButtonSubmit";
import "../../../fonts/fonts.css";

export const ChatButton: React.FC<Ibutton> = ({ text }) => {
    return (
        <button type="button" className="chatBtn">
            {text}
        </button>
    );
};
