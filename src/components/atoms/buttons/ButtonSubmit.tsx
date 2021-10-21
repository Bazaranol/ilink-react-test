import React from "react";
import "./button.css";

export interface Ibutton {
    text: string;
}

const ButtonSubmit = (buttonSubmit: Ibutton) => {
    const [disable, setDisable] = React.useState(false);

    return (
        <button
            onClick={() => setDisable(true)}
            disabled={disable}
            className="btn1"
            type="button"
        >
            {buttonSubmit.text}
        </button>
    );
};

export default ButtonSubmit;
