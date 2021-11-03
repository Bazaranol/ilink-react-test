import React, { useState } from "react";
import { TextLabel } from "../../atoms/labels/textLabel/TextLabel";
import { ChatUser } from "../../molecules/ChatUser/ChatUser";
import "./sidebar.css";

export const Sidebar: React.FC = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "Konstantin Konstantin", sex: "male", active: false },
        { id: 2, name: "Konstantin Konstantin", sex: "female", active: false },
        { id: 3, name: "Marina Joe", sex: "female", active: false },
        { id: 4, name: "Konstantin Konstantin", sex: "male", active: false },
    ]);

    return (
        <div className="sidebarUsers">
            {users.map((user) => (
                <ChatUser
                    sex={user.sex}
                    key={user.id}
                    isActive={user.active}
                    name={user.name}
                />
            ))}
        </div>
    );
};
