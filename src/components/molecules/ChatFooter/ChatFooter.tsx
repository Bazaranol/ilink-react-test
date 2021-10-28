import React from "react";
import "./chatFooter.css";
import "../../../fonts/fonts.css";

export const ChatFooter: React.FC = () => {
    return (
        <div className="chatFooter">
            <div className="file"></div>
            <input
                type="text"
                className="chatInput"
                placeholder="Write something"
            />
            <div className="sendMessage"></div>
        </div>
    );
};
