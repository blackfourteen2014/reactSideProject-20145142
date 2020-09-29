import React, { Component } from 'react';
import './App.css'



class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
    constructor(props) { 
    super(props); 
    this.state = { ID: "", password: "" };
   };
   handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
     }; 
    handleOnClick = (e) => { 
      console.log(this.state.email, this.state.phone);
     }
  render() {
    return (
      <div className="App">
      Side project  
      <form className="LoginForm">
        <input type="email" 
        id="inputEmail" 
        className="form-control" 
        placeholder="ID" 
        name="email" 
        onChange={this.handleChange}/>
        <input type="password" 
        id="inputPhone" 
        className="form-control"
        placeholder="password" 
        name="phone" 
        onChange={this.handleChange}/>
      <button className="btn btn-lg btn-primary btn-block" 
      type="button" onClick={this.handleOnClick}> 로그인 </button>     
      </form>
       </div>    
    );
  }
}




export default App;
