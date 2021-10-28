import React, { useState } from "react";
import "./button.css";

export interface Ibutton {
    text: string;
}

export const ButtonSubmit: React.FC<Ibutton> = ({ text }) => {
    const [disable, setDisable] = useState<boolean>(false);

    return (
        <button
            onClick={() => setDisable((state) => !state)}
            disabled={disable}
            className="btn1"
            type="button"
        >
            {text}
        </button>
    );
};
