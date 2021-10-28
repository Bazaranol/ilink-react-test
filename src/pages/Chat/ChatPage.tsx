import React from "react"
import { ChatFooter } from "../../components/molecules/ChatFooter/ChatFooter"
import { ChatHeader } from "../../components/molecules/ChatHeader/ChatHeader"
import { Header } from "../../components/molecules/Header/Header"
import { Chat } from "../../components/organisms/Chat/Chat"
import { Sidebar } from "../../components/organisms/Sidebar/Sidebar"
import "./chatPage.css"

export const ChatPage: React.FC = () => {
    return (
        <div className="page">
            <Header />
            <div className="messenger">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="chat">
                    <ChatHeader />
                    <Chat />
                    <ChatFooter />
                </div>
            </div>
        </div>
    )
}
