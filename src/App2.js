import logo from './logo.svg';
import './App.css';
import {fetchData, fetchModels, fetchSpec} from './api/index';
import React, {Component} from 'react';
import MakePicker from './components/makePicker/makePicker';
import ModelPicker from './components/modelPicker/modelPicker';
import Spec from './components/spec/spec';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route,Routes} from 'react-router-dom';
import Button from './components/Button/Button';
import About from './pages/About/About';
//why if fetcheddata and makelist in bracket and makePicker is not??

class App extends React.Component{
  state = {

    data:[],
    make:"",
    models:null,
    spec:{},
  }
  //how do we update make when user select it?

  async componentDidMount(){
//    const fetchedData = await fetchData();
    //const fetchedMakeList = await makeList();
   // this.setState({makes:fetchedMakeList});
    //this.setState({makes:fetchedMakeList});
    //console.log('list of all makes in componentDIDMOUNT is like ', fetchedMakeList);  
    //why is this undefined??
  }

  handleMakeChange = async(selectedMake)=>{
    console.log('he just changed it to ', selectedMake);
    const fetchedModel = await fetchModels(selectedMake);
    console.log('fetchedModels are like this',fetchedModel);
    this.setState({make:selectedMake, models:fetchedModel});
    
    //そしたr、このmakeの名前でAPIを読んで。dataをゲットする。そしたらそれをどうやってどこに投げる？？
    //add 'models' to the state.
    //で、<modelPicker data = {this.state.models}/>みたいなかんじでmodelPickerに投げてみる。
    //ok, now this function is successfully getting make change.
  }
  handleModelChange = async(selectedModel)=>{
    console.log('what up this is handleModelChange, you just selected ', selectedModel);
    let makeAndModel = {
      make: this.state.make,
      model: selectedModel,
    }
    const fetchedSpec = await fetchSpec(makeAndModel);
    console.log('in app.js we recieved this spec ', fetchedSpec);
    this.setState({spec:fetchedSpec});
  }
render(){
  //nice, ok then lets make a drop down menu to choose any bikes.
  //first, get all the makers. and let the user choose one.
  //once choosen, show one more drop down menu that has all the models from the makers.
  //and, once it is choosen, navigate user to a different page to show all the detail about
  // the motorCycle. 
  let propsForModelPicker = {
    models:this.state.models,
    handleModelChange:this.handleModelChange,

  }
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Routes>
      <Route path= "/about" component = {<About/>} ></Route>
      </Routes>
      <header className="App-header">
      <h1>Hayato's MotorCycle Search Engine</h1>
      <h3>Choose a make</h3>
      <MakePicker handleMakeChange={this.handleMakeChange}/>
      <ModelPicker props ={propsForModelPicker}/>
      <Button/>
      <Spec spec = {this.state.spec}/>     
      </header>
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