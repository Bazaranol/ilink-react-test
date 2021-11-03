import React from "react";
import { Link } from "react-router-dom";
import { SCREENS } from "../../../routes/endpoints";
import { ButtonSubmit } from "../../atoms/buttons/ButtonSubmit";
import { PasswordInput } from "../../molecules/Password/PasswordInput";
import { UserNameInput } from "../../molecules/UserName/UserNameInput";

export const AutorizeForm: React.FC = () => {
    return (
        <form>
            <UserNameInput />
            <PasswordInput />
            <Link to={SCREENS.SCREEN_CHAT}>
                <ButtonSubmit text={"Log In"} />
            </Link>
        </form>
    );
};
