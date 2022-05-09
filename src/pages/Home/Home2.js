import {fetchData, fetchModels, fetchSpec} from '../../api/index';
import React, {Component, useState} from 'react';
import MakePicker from '../../components/makePicker/makePicker';
import ModelPicker from '../../components/modelPicker/modelPicker';
import Spec from '../../components/spec/spec';
import {Typography} from '@material-ui/core';
//why if fetcheddata and makelist in bracket and makePicker is not??

//class Home extends React.Component{
function Home(){
/*
  state = {

    data:[],
    make:"",
    models:null,
    spec:{},
  }
* */
const [data, setData] = useState([]);
const [make, setMake] = useState("");
const [models, setModels] = useState(null);
const [spec, setSpec] = useState({});
if(Object.keys(spec).length!== 0){
        //if specObject is empty, {}
      return (
      <div>    
        <Spec spec = {spec}/>     
        <button onClick={()=>{
            //setMake("");
            setModels(null);
            setSpec({});
        }}>GoBack</button>
        </div>
      )
    }

  const handleMakeChange = async(selectedMake)=>{
    console.log('he just changed it to ', selectedMake);
    const fetchedModel = await fetchModels(selectedMake);
    console.log('fetchedModels are like this',fetchedModel);
//    this.setState({make:selectedMake, models:fetchedModel});
    setMake(selectedMake);
    setModels(fetchedModel);
    
    //そしたr、このmakeの名前でAPIを読んで。dataをゲットする。そしたらそれをどうやってどこに投げる？？
    //add 'models' to the state.
    //で、<modelPicker data = {this.state.models}/>みたいなかんじでmodelPickerに投げてみる。
    //ok, now this function is successfully getting make change.
  }

 const handleModelChange = async(selectedModel)=>{
    console.log('what up this is handleModelChange, you just selected ', selectedModel);
    let makeAndModel = {
      make: make,
      model: selectedModel,
    }
    const fetchedSpec = await fetchSpec(makeAndModel);
    console.log('in app.js we recieved this spec ', fetchedSpec);
    //this.setState({spec:fetchedSpec});
    setSpec(fetchedSpec);
  }

  //nice, ok then lets make a drop down menu to choose any bikes.
  //first, get all the makers. and let the user choose one.
  //once choosen, show one more drop down menu that has all the models from the makers.
  //and, once it is choosen, navigate user to a different page to show all the detail about
  // the motorCycle. 
  let propsForModelPicker = {
    models:models,
    handleModelChange:handleModelChange,

  }
  return (
    <div className="App">
      <header className="App-header">
      <Typography variant = 'h3'>Hayato's MotorCycle Search Engine</Typography>
      <Typography variant = 'h4'>Choose a make</Typography>
      <MakePicker handleMakeChange={handleMakeChange}/>
      <ModelPicker props ={propsForModelPicker}/>
      </header>
    </div>
  );
}







export default Home;

