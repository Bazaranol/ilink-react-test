import React from "react";
import "./message.css";

interface IMessage {
    text: string;
    isMine: boolean;
}

export const Message: React.FC<IMessage> = ({ text, isMine }) => {
    return (
        <div className={isMine ? "myMessage" : "friendMessage"}>
            <div className={isMine ? "msgRight" : "msgLeft"}>{text}</div>
        </div>
    );
};
