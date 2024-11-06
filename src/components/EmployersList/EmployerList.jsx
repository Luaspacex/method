import React from "react";
import EmployersListItem from "../EmployersListItem/EmployersListItem";
import "./EmployersList.css"

function EmployerList ({data, onDelete, onToggleProp}){
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem key={id} {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e)=> onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}
            />
        )
    })
    return(
     <ul className="appList listGroup">
        {elements}
     </ul>
    )
}
export default EmployerList;