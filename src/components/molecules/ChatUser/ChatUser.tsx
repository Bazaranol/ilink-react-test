import React from "react";
import { TextLabel } from "../../atoms/labels/textLabel/TextLabel";
import { ChatUserLogo } from "../../atoms/logos/chatUserLogo/ChatUserLogo";
import "./chatUser.css";

interface IChatUser {
    sex: string;
    isActive?: boolean;
    name: string;
}

export const ChatUser: React.FC<IChatUser> = ({ sex, isActive, name }) => {
    return (
        <div className={isActive ? "userLabel active" : "userLabel"}>
            <ChatUserLogo sex={sex} />
            <div className="text">
                <div className="name">
                    <TextLabel text={name} size={15} isActive={isActive} />
                </div>
                <div className="message">
                    <TextLabel
                        text="Hey!"
                        size={14}
                        weight="normal"
                        isActive={isActive}
                    />
                </div>
            </div>
        </div>
    );
};
