import React from "react";
import "./chatUserLogo.css";

interface IChatUserLogo {
    sex: string;
}

export const ChatUserLogo: React.FC<IChatUserLogo> = ({ sex }) => {
    return <div className="userLogo" data-sex={sex}></div>;
};
