import logo from './logo.svg';
import './App.css';
import {fetchData, fetchModels} from './api/index';
import React, {Component} from 'react';
import MakePicker from './components/makePicker/makePicker';
import ModelPicker from './components/modelPicker/modelPicker';
//why if fetcheddata and makelist in bracket and makePicker is not??

class App extends React.Component{
  state = {

    data:[],
    make:"",
    models:null,
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
render(){
  //nice, ok then lets make a drop down menu to choose any bikes.
  //first, get all the makers. and let the user choose one.
  //once choosen, show one more drop down menu that has all the models from the makers.
  //and, once it is choosen, navigate user to a different page to show all the detail about
  // the motorCycle. 
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hayato's MotorCycle Search Engine</h1>
      <h3>Choose a make</h3>
      <MakePicker handleMakeChange={this.handleMakeChange}/>
      <ModelPicker models ={this.state.models}/>
     
      </header>
    </div>
  );
}

}
  

// 
      //
  

export default App;

/**   {partOfTheArray.map(data=>{
       return <p>{data.name}</p> 
      })} */