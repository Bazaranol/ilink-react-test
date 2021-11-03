import React from "react"
import { LoginTitle } from "../../components/molecules/LoginTitle/LoginTitle"
import { AutorizeForm } from "../../components/organisms/autorize/AutorizeForm"
import "./loginPage.css"

export const LoginPage: React.FC = () => {
    return (
        <React.Fragment>
            <div className="loginPage">
                <div className="leftBlock">
                    <div>
                        <LoginTitle />
                        <AutorizeForm />
                    </div>
                </div>
                <div className="rightBlock">
                    <div className="pic"></div>
                </div>
            </div>

            <div className="loginPageMobile">
                <div className="topBlock">
                    <LoginTitle />
                </div>
                <div className="bottomBlock">
                    <AutorizeForm />
                </div>
            </div>
        </React.Fragment>
    )
}
