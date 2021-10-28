import React from "react";
import { InputLogin } from "../../atoms/inputs/InputLogin";
import { TextLabel } from "../../atoms/labels/textLabel/TextLabel";
import "./userNameInput.css";

export interface IUserNameInput {
    text: string;
}

export const UserNameInput: React.FC = () => {
    return (
        <div className="inputUserBlock">
            <TextLabel text={"User name"} />
            <InputLogin placeholder={"Input user name"} />
        </div>
    );
};
