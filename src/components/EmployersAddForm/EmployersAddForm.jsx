
import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "./EmployersAddForm.css";

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: "",
            service: "",
            date: "",
            employees: [
                { name: "Бекзат" },
                { name: "Роман" },
                { name: "Алик" },
                { name: "Азим" },
                { name: "Дима" },
                { name: "Андрей" },
                { name: "Слава" },
            ],
            services: [
                "Компьютерная диагностика", "Замена лампы", "Монтаж/ демонтаж генератора", 
                "Замена фильтров", "Замена масла", "Замена свечей зажигания", 
                "Замена роликов и сальников", "Ремонт ходовой части", 
                "Чистка форсунок ,со съемом и без съема", "Замена трансмиссионного масла и жидкости", 
                "Ремонт электрооборудования", "Ремонт генератора", "Замена дискового тормоза", 
                "Замена барабанного тормозного механизма", "Замена колодок тормозных", 
                "Замена шлангов тормозных", "Замена тормозного цилиндра", "Ремонт суппорта тормозного", 
                "Замена пружины подвески", "Замена амортизатора подвески", "Замена рычагов и тяги подвески", 
                "Замена стабилизатора", "Замена ступицы колеса", "Замена шарнирных элементов", 
                "Замена кулака поворотного", "Замена прокладок", "Замена системы подачи воздуха", 
                "Замена механизма газораспределения", "Замена кривошипношатунного механизма", 
                "Замена ременного привода", "Замена крепления двигателя", "Замена системы зажигания", 
                "Замена системы сцепления", "Замена коробки передач", "Замена главной передачи", 
                "Замена термостата", "Замена радиатора", "Замена патрубков системы охлаждения", 
                "Замена выключателя", "Замена вентилятора охлаждения", "Замена насоса системы охлаждения", 
                "Замена шарниров", "Замена рейки рулевой", "Замена тяги рулевой", 
            ],
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { name, salary, service, date } = this.state;
        if (name.length < 3 || !salary || !service || !date) {
            alert("Пожалуйста, заполните все поля!");
            return;
        }
        this.props.onAdd(name, salary, service, date);

        this.setState({
            name: "",
            salary: "",
            service: "",
            date: ""
        });
    };

    render() {
        const { employees, services, name, salary, service, date } = this.state;

        return (
            <div className="appAddForm">
                <h3>Добавьте нового сотрудника</h3>
                <form className="addForm dFlex" onSubmit={this.onSubmit}>
                    <InputGroup className="mb-3">
                        <select name="name" value={name} onChange={this.onValueChange}>
                            <option value="">Выберите сотрудника</option>
                            {employees.map((employee, index) => (
                                <option key={index} value={employee.name}>
                                    {employee.name}
                                </option>
                            ))}
                        </select>

                        <select 
                            name="service" 
                            value={service} 
                            onChange={this.onValueChange}>
                            <option value="">Выберите услугу</option>
                            {services.map((service, index) => (
                                <option key={index} value={service}>
                                    {service}
                                </option>
                            ))}
                        </select>

                        <input
                            type="number"
                            className="formControl newPostLabel"
                            placeholder="Стоимость услуги в тенге"
                            name="salary"
                            value={salary}
                            onChange={this.onValueChange}
                        />

                        <input
                            type="date"
                            className="formControl newPostLabel"
                            name="date"
                            value={date}
                            onChange={this.onValueChange}
                        />
                        <Button type="submit" className="btn btnOutsideLight" variant="warning">
                            Добавить
                        </Button>
                    </InputGroup>
                </form>
            </div>
        );
    }
}

export default EmployersAddForm;
