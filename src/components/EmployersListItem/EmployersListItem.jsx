import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import "./EmoloyersListItem.css"

const EmployersListItem = (props) => {
        const {name, salary, service, date, onDelete, onToggleProp, increase, rise} = props;
        let classNames="listGroupItem d-flex justifyContentBetween like";
    if(increase){
        classNames += ' increase';
    }
    if (rise) {
        classNames+= 'like';
    }
    return(
        <ListGroup as="ol" className="mainBlock">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
        
        <div className={classNames} >
        <span className="listGroupItemLabel" onClick={onToggleProp} data-toggle="rise">{date}</span>
            <span className="listGroupItemLabel" onClick={onToggleProp} data-toggle="rise">{name}</span>
            <span className="listGroupItemLabel" onClick={onToggleProp} >{service}</span>
            <input type="text" className="listGroupItemInput" defaultValue={salary + "₸"} />
            <div className="dFlex justifyContentCenter alignItemCenter ">
                <Button className="btnCookie btn-sm" type="button" onClick={onToggleProp} data-toggle="increase"  variant="light">
                <i className="fas fa-cookie"></i>
                </Button>
                <Button className="btnTrash btn-sm" type="button"  variant="light"
                onClick={onDelete}
                >
                <i className="fas fa-trash"></i>
                </Button>

            </div>
        </div>
            </ListGroup.Item>
            </ListGroup>
    )
    }
export default EmployersListItem;