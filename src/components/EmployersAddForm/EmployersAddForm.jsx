import React,{Component} from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import "./EmployersAddForm.css"

class EmployersAddForm extends Component{
    constructor (props) {
        super(props);
        this.state ={
            name: "",
            salary: "",
            service: ""
        }
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary, this.state.service);
        this.setState({
            name: '',
            salary: '',
            service: ''
        })
    }
  render () {
    const {name, salary, service} = this.state
    return(
        <div className="appAddForm">
            <h3>Добавьте нового сотрудника</h3>
            
            <form className="addForm dFlex"
             onSubmit = {this.onSubmit}>
        
                  <InputGroup className="mb-3">
                <input type="text" className="formControl newPostLabel" placeholder="Как его зовут?"
                name="name"
                value={name}
                onChange={this.onValueChange} />
                 <input type="text" className="formControl newPostLabel" placeholder="Название услуги"
                name="service"
                value={service}
                onChange={this.onValueChange} />
                <input type="number" className="formControl newPostLabel" placeholder="Стоимость услуги в тенге?"
                name="salary"
                value={salary}
                onChange={this.onValueChange}
                />
                <Button type="submit" className="btn btnOutsideLight"  variant="warning">Добавить</Button>
                </InputGroup>
            </form>
        </div>
    )
  }
}
export default EmployersAddForm;