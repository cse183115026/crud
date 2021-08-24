import React from "react"
import { useState } from "react";
import { createContext } from "react"

export const UserContext = createContext();

export const UserProvider = (props) => {
    const[users, setUsers] = useState([
     { id: 1,name: "Sujon", position: "Front End Dev", salary: 28000},
     { id: 2,name: "Sumon", position: "Full Stack Dev", salary: 30000},
     { id: 3,name: "Sebok", position: "Front End Dev", salary: 25000},   
    ]);

    return(
        <UserContext.Provider value={[users,setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}
