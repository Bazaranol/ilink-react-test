import React from "react";
import { AccountLogo } from "../../atoms/logos/accountLogo/AccountLogo";
import { MainLogo } from "../../atoms/logos/mainLogo/MainLogo";
import "./header.css";

export const Header: React.FC = () => {
    return (
        <div className="header">
            <MainLogo />
            <AccountLogo />
        </div>
    );
};
