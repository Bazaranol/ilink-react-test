import React from "react";
import { Link } from "react-router-dom";
import { ButtonSubmit } from "../../atoms/buttons/ButtonSubmit";
import { PasswordInput } from "../../molecules/Password/PasswordInput";
import { UserNameInput } from "../../molecules/UserName/UserNameInput";

export const AutorizeForm: React.FC = () => {
    return (
        <form>
            <UserNameInput />
            <PasswordInput />
            <Link to="/chat">
                <ButtonSubmit text={"Log In"} />
            </Link>
        </form>
    );
};
