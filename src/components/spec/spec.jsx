import React, {useState, useEffect} from 'react';
import styles from './spec.module.css';



const Spec = (spec)=>{
    let specObject = spec.spec;
    console.log('specObject is ', specObject)
    if(Object.keys(specObject).length=== 0){
        //if specObject is empty, {}
        return ;
    }
    let {articleCompleteInfo} = specObject;
    let {articleImage} = specObject;
    console.log(articleCompleteInfo);
    let {makeName} = articleCompleteInfo;
    let {modelName} = articleCompleteInfo;
    let {categoryName} = articleCompleteInfo;
    let imageLink = articleImage.link;
    

    return (
        <div> 
        <h1>{makeName}</h1>
        <h2>{modelName}</h2>
        <h3>{categoryName}</h3>
        <img src = {imageLink} className = 'photo' width = {500} height = {400}/>
        </div>
    
    
    
    )
}


export default Spec;