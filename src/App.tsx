import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { TextLabel } from "./components/atoms/labels/TextLabel"
import { Button } from "./components/atoms/buttons/Button"
import ButtonSubmit from "./components/atoms/buttons/ButtonSubmit"
import { InputLogin } from "./components/atoms/inputs/InputLogin"
import "./fonts/fonts.css"
import { AutorizeForm } from "./components/organisms/autorize/AutorizeForm"

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hi iLink Company!</p>
                {/* <TextLabel text={"Im text interface label"} />
                <Button text={"Log In"}></Button>
                <ButtonSubmit text={"submit"} />
                <InputLogin placeholder={"Input user name"}></InputLogin> */}
                <AutorizeForm />
            </header>
        </div>
    )
}

export default App
