import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "./fonts/fonts.css"
import reportWebVitals from "./reportWebVitals"
import { LoginPage } from "./pages/Login/LoginPage"
import { ChatPage } from "./pages/Chat/ChatPage"
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom"

ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}

        <Router>
            <Redirect to="/auth" />
            <Route path="/auth">
                <LoginPage />
            </Route>
            <Route path="/chat">
                <ChatPage />
            </Route>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
