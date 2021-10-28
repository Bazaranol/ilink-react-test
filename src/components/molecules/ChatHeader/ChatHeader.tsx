import React from "react";
import { GrayLabel } from "../../atoms/labels/grayLabel/GrayLabel";
import { TextLabel } from "../../atoms/labels/textLabel/TextLabel";
import "./chatHeader.css";

export const ChatHeader: React.FC = () => {
    return (
        <div className="chatHeader">
            <TextLabel text={"Marina Joe"} size={20} />
            <GrayLabel text={"Last seen 3 minutes ago"} size={16} />
        </div>
    );
};
