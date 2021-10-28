import React from "react"
import logo from "./logo.svg"
import "./App.css"
import "./fonts/fonts.css"
import { AutorizeForm } from "./components/organisms/autorize/AutorizeForm"
import { MainLogo } from "./components/atoms/logos/mainLogo/MainLogo"
import { AccountLogo } from "./components/atoms/logos/accountLogo/AccountLogo"
import { LoginTitle } from "./components/molecules/LoginTitle/LoginTitle"

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
                <MainLogo />
                <AccountLogo />
                <LoginTitle />
            </header>
        </div>
    )
}

export default App
