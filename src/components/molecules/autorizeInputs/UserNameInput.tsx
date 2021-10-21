import React from "react";
import { InputLogin } from "../../atoms/inputs/InputLogin";
import { TextLabel } from "../../atoms/labels/TextLabel";

export interface IUserNameInput {
    text: string;
}

export const UserNameInput = () => {
    return (
        <form>
            <TextLabel text={"User name"} />
            <InputLogin placeholder={"Input user name"} />
        </form>
    );
};
