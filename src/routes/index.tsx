import React, { FC } from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { ChatPage } from "../pages/Chat/ChatPage"
import { LoginPage } from "../pages/Login/LoginPage"
import { SCREENS } from "./endpoints"

export const Routes: FC = () => {
    return (
        <Router>
            <Switch>
                <Route
                    path={SCREENS.SCREEN_LOGIN}
                    exact
                    component={LoginPage}
                />
                <Route path={SCREENS.SCREEN_CHAT} component={ChatPage} />
            </Switch>
        </Router>
    )
}
