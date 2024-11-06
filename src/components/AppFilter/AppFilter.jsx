import React from "react";
import Button from 'react-bootstrap/Button';
import "./AppFilter.css"

const AppFilter = (props) =>{
    const buttonData = [
        {name: "all", label: "Все сотрудники"},
    ];
    const buttons = buttonData.map(({name,label})=> {
        const active = props.filter === name;
        const clazz = active ? "btnLight" : "btnOutlineLight"
        return(
            <Button  variant="outline-light" className={`btn ${clazz}`} type="button" 
            key={name} 
            onClick={()=> props.onFilterSelect(name)}>
            {label}
        </Button>
        )
    })
    return(
        <div className="btnBlock">
            {buttons}
        </div>
    )
}
export default AppFilter;
