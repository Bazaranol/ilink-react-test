import React from "react";
import { InputLogin } from "../../atoms/inputs/InputLogin";
import { TextLabel } from "../../atoms/labels/textLabel/TextLabel";
import "./passwordInput.css";

// interface IPasswordInput {
//     text: string;
// }

export const PasswordInput: React.FC = () => {
    return (
        <div className="inputPasswordBlock">
            <TextLabel text={"Password"} size={13} />
            <InputLogin placeholder={"Input password"} />
        </div>
    );
};
