import './App.css';
import {fetchData, fetchModels, fetchSpec} from './api/index';
import React, {Component} from 'react';
import MakePicker from './components/makePicker/makePicker';
import ModelPicker from './components/modelPicker/modelPicker';
import Spec from './components/spec/spec';
import Nav from './Nav';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Button from './components/Button/Button';
import About from './pages/About/About';
//import Home from './pages/Home/Home';
import Home from './pages/Home/Home2';
//why if fetcheddata and makelist in bracket and makePicker is not??

class App extends React.Component{
  //このappから、<Home/>にpropとしてfunctionを投げて、
  //で、modelPicker OnChange でそのmodelの名前でそのこのappの中のfunctionを読んで、
  //でstateを買える。そしてそのstateChangeに反応して、/specのrouteにここからいく。
  //or,in Home.js, when model is selected, set the state, and 
  //if the state is not null(selected, return someting else(spec page <spec/>))
  //better to do this in Home.js
  //when the state (model) change from '' to 'enduro 50'ex, 
  // or Home return <Spec/> if model in state is not ''.
render(){
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Routes>
    <Route path = '/' element={<Home/>}/>
    <Route path = '/about' element={<About/>}/>
    </Routes>
    </div>
    </Router>
  );
}

}
  
//models と handleMakeChangeを wrap it in a object, and then pass that to
//ModelPicker as one props.
// 
     //<ModelPicker models ={this.state.models} handleMakeChange = {this.handleModelChange}/>/
  

export default App;

/**   {partOfTheArray.map(data=>{
       return <p>{data.name}</p> 
      })} */