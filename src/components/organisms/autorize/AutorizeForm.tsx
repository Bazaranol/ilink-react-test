import React from "react";
import { ButtonSubmit } from "../../atoms/buttons/ButtonSubmit";
import { PasswordInput } from "../../molecules/Password/PasswordInput";
import { UserNameInput } from "../../molecules/UserName/UserNameInput";

export const AutorizeForm: React.FC = () => {
    return (
        <form>
            <UserNameInput />
            <PasswordInput />
            <ButtonSubmit text={"Log In"} />
        </form>
    );
};
