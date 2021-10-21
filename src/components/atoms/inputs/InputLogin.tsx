import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./input.css";

export interface IInputLogin {
    value?: string;
    placeholder?: string;
}

type Inputs = {
    example: string;
    exampleRequired: string;
};

export const InputLogin = (input: IInputLogin) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        //alert(JSON.stringify(data));
    };
    return (
        <form onChange={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder={input.placeholder}
                className={
                    errors.exampleRequired ? "inputLoginInvalid" : "inputLogin"
                }
                {...register("exampleRequired", {
                    required: true,
                    maxLength: 10,
                })}
            />
            {errors.exampleRequired && (
                <p className="invalid">Something goes wrong</p>
            )}
        </form>
    );
};
