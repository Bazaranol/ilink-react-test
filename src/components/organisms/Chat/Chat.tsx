import React from "react";
import { ChatButton } from "../../atoms/chatButton/ChatButton";
import "./chat.css";

export const Chat: React.FC = () => {
    return (
        <div className="chatContent">
            <ChatButton text="Select a chat to start messaging" />
        </div>
    );
};
