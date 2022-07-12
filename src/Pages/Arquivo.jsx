import React from 'react';
import './Mecanica.css';
import Folder from "../Pages/folder.png";
import { i18n } from './i18n';


export default function Arquivo() {
  

 return (
   
   <div className='container1'>
      <a className='home' href='/'>{i18n.t('messages.home')}</a>
     <div className='text1'> 
         <span className='title'>{i18n.t('messages.arquivos')}</span>
     </div> 
    
      <div className='main'>
         <div className='item'>
        <a className='image2' href='/Stg1'>
            <img src={Folder}/>
          </a>
          <div className='info2'>
                <a className='list1' href='/Stg1'>STG1</a>  
          </div>
        <a className='image3' href="/Stg2">
            <img src={Folder}/>
          </a>
          <div className='info3'>
                <a className='list1' href="/Stg2">STG2</a>
         </div>
         <a className='image4' href='/Stg3'>
            <img src={Folder}/>
          </a>
          <div className='info4'>
                <a className='list1' href='/Stg3'>STG3</a>
          </div>
        <a className='image5' href="/Stg4">
            <img src={Folder}/>
          </a>
          <div className='info5'>
                <a className='list1' href="/Stg4">STG4</a>
         </div>
         <a className='image6' href='/Stg5'>
            <img src={Folder}/>
          </a>
          <div className='info6'>
                <a className='list1' href='/Stg5'>STG5</a>
          </div>
        <a className='image7' href="/Egr">
            <img src={Folder}/>
          </a>
          <div className='info7'>
                <a className='list1' href="/Egr">EGR DPF</a>
         </div>
         <a className='image8' href='/Mod'>
            <img src={Folder}/>
          </a>
          <div className='info8'>
                <a className='list1' href='/Mod'>{i18n.t('messages.mod')}</a>
          </div>
        <a className='image9' href="/Original">
            <img src={Folder}/>
          </a>
          <div className='info9'>
                <a className='list1' href="/Original">ORIGINAL</a>
         </div>
       </div>
     </div>
    </div> 
 
  );
}