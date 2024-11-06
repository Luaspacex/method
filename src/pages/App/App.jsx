import React,{Component} from "react";
import AppInfo from "../../components/AppInfo/AppInfo";
import AppFilter from "../../components/AppFilter/AppFilter";
import SearchPanel  from "../../components/SearchPanel/SearchPanel";
import EmployerList from "../../components/EmployersList/EmployerList";
import EmployersAddForm from "../../components/EmployersAddForm/EmployersAddForm";
import "./App.css"

class App extends Component{
    constructor (props){
        super(props);
        this.state ={
            data: [],
        term: "",
        filter: ""
        }
        this.maxId=4;
    }
    addItem = (name,salary,service) => {
        const newItem = {
            name, 
            salary, 
            service,
            increase: false, 
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return{
                data: newArr
            }
        })
    }
    deleteItem =(id) => {
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !==id)
            } 
        })
    } 
    onToggleProp = (id,prop) => {
        this.setState(({data})=> ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
        }
    searchEmp = (items, term) =>{
        if(term.length === 0){
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }
     onUpdateSearch =(term) => {
        this.setState({term});
     }
     filterPost = (items, filter) => {
        switch (filter) {
            case 'rise': 
            return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000)
                default:
                    return items
        }
     }
     onFilterSelect = (filter) => {
        this.setState({filter})
     }
   render (){
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibaleData = this.filterPost(this.searchEmp(data, term), filter)
    return (
        <div className="app">
            <AppInfo employees={employees} increased={increased}/>
            <div className="searchPanel">
            <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
            <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
            </div>
            <EmployerList data={visibaleData}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}
            />
            <EmployersAddForm onAdd={this.addItem}/>
        </div>
    )
   }
}

export default App;


