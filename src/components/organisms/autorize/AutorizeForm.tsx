import React from "react";
import ButtonSubmit from "../../atoms/buttons/ButtonSubmit";
import { PasswordInput } from "../../molecules/autorizeInputs/PasswordInput";
import { UserNameInput } from "../../molecules/autorizeInputs/UserNameInput";

export interface IAutorizeForm {
    text: string;
}

export const AutorizeForm = () => {
    return (
        <form>
            <UserNameInput />
            <PasswordInput />
            <ButtonSubmit text={"Log In"} />
        </form>
    );
};
