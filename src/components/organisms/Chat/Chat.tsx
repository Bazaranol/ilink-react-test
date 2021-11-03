import React from "react";
import { ChatButton } from "../../atoms/chatButton/ChatButton";
import { Message } from "../../atoms/message/Message";
import "./chat.css";

export const Chat: React.FC = () => {
    return (
        <div className="chatContent">
            {/* <div className="chatContentNone">
                <ChatButton text="Select a chat to start messaging" />
            </div> */}
            <Message isMine={true} text={"Hiiii"} />
            <Message isMine={false} text={"Siiii"} />
            <Message isMine={false} text={"Hiiissssssi"} />
            <Message isMine={true} text={"Hisdfdsfsdfiii"} />
            <Message isMine={true} text={"KOOOOOOOOO"} />
            <Message isMine={false} text={"sldflsdf"} />
        </div>
    );
};
