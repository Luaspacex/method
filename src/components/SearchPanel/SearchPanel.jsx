import React,{Component} from "react";
import Nav from 'react-bootstrap/Nav';

import "./SearchPanel.css"
class SearchPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ""
        }
    }
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }
  render(){
    return(
        <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
        <input type="text" 
        className="searchInput"
        id="searchInput"
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.onUpdateSearch}
        />
        </Nav.Item>
            </Nav>
    )
  }
}
export default SearchPanel;