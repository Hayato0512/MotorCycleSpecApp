import axios from "axios";

const options1 = {
  method: 'GET',
  url: 'https://motorcycle-specs-database.p.rapidapi.com/model/make-name/Yamaha',
  headers: {
    'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com',
    'X-RapidAPI-Key': '723a040345msh9777641212e2f87p121c09jsn695f86c6a7e8'
  }
};
const options2 = {
    method: 'GET',
    url: 'https://motorcycle-specs-database.p.rapidapi.com/make',
    headers: {
      'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com',
      'X-RapidAPI-Key': '723a040345msh9777641212e2f87p121c09jsn695f86c6a7e8'
    }
  };
 
  const options3 = {
    method: 'GET',
    url: 'https://motorcycle-specs-database.p.rapidapi.com/model/make-name/',
    headers: {
      'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com',
      'X-RapidAPI-Key': '723a040345msh9777641212e2f87p121c09jsn695f86c6a7e8'
    }
  };
 export const fetchModels = async (make)=>{

    console.log('now, make is this in fetchModels function', make);
     var urlWithMake = 'https://motorcycle-specs-database.p.rapidapi.com/model/make-name/';
     console.log(urlWithMake);
    if(make){
        urlWithMake = `${urlWithMake}${make}`;
        options3.url = urlWithMake;
        console.log('options3.url after recieving makel', options3.url);
     try{
        const models = await axios.request(options3);
        console.log('models looks like this', models.data);
        const returnModels = models.data.map((model)=>model.name);
        return returnModels;
        //who needs this information?? modelPicker.jsx.
        //so in modelPicker.jsx, import fetchModels from './api' or somethnig
     }

     catch(error){

     }
    }    
    else{
        return 'hang on...';
    }
 }
  export const makeList = async()=>{
    try{
        const {data} = await axios.request(options2);
       // console.log('list of all makes is like this now', data);
        const returnValue = data.map((make)=>make.name);
        //console.log('returnValue is ', returnValue);
        return returnValue;
    }
    catch(error){

    }

  }

export const fetchData = async ()=>{
 try{
     const response = await axios.request(options1);
     return response;

 } 
 catch(error){

 }

}

