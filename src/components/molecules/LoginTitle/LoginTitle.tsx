import React from "react";
import { TextLabel } from "../../atoms/labels/textLabel/TextLabel";
import { WellcomeLabel } from "../../atoms/labels/wellcomeLabel/WellcomeLabel";
import { MainLogo } from "../../atoms/logos/mainLogo/MainLogo";
import "./loginTitle.css";

export const LoginTitle: React.FC = () => {
    return (
        <div className="titleBlock">
            <MainLogo />
            <WellcomeLabel name="Chasity" text="Wellcome to " mark="!" />
            <TextLabel text="Please, autorize yourself" size={27} />
        </div>
    );
};
