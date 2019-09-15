import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';



class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      input: '',
      items: [] 
    }
}


  inputUpdate = event => {
    this.setState({ input: event.target.value})
}


formSubmit = event => {
  event.preventDefault()
  this.setState({
    items : [...this.state.items, this.state.input],
    input: ''
  })
}
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
    <Header subheader = 'Add New Task'/>

    <form onSubmit={this.formSubmit}>
      <input value={this.state.input} onChange={this.inputUpdate}/>
      <button id='btn1'>Add Task </button>
      <h3>Uncompleted Tasks:</h3>
    </form>
    <div>
    {this.state.items.map((item , index)=>{
      return <ul key={index}>
      <li>{this.state.items[index]}</li> </ul>
    })}
    </div>
      </header>
    </div>
  );
}
}
export default App;
