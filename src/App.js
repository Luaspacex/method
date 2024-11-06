import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
class Field extends Component{
  render() {
    const holder = 'Enter'
      const styleField={
      width: "300px"
    }
    return <input type="text" placeholder={holder} style={styleField}/>
  }
}
function App (){
  return(
    <div className='App'>
      <Field/>
    </div>

  )
}
export default App; 




