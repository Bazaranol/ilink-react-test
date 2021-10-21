import React from "react";
import { InputLogin } from "../../atoms/inputs/InputLogin";
import { TextLabel } from "../../atoms/labels/TextLabel";

export interface IPasswordInput {
    text: string;
}

export const PasswordInput = () => {
    return (
        <form>
            <TextLabel text={"Password"} />
            <InputLogin placeholder={"Input password"} />
        </form>
    );
};
