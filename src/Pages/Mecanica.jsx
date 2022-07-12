import React from 'react';
import './Mecanica.css';
import Folder from "../Pages/folder.png";
import { i18n } from './i18n';



export default function Mecanica() {
  

 return (
   
   <div className='container1'>
      <a className='home' href='/'>{i18n.t('messages.home')}</a>
     <div className='text1'> 
         <span className='title'>{i18n.t('messages.title')}</span>
     </div> 
    
      <div className='main'>
         <div className='item'>
        <a className='image' href='/Leve'>
            <img src={Folder}/>
          </a>

          <div className='info'>
                <a className='list' href='/Leve'>{i18n.t('messages.leve')}</a>
              <span className='sp'>{i18n.t('messages.sp')}</span>
          </div>
        <a className='image1' href="/Pesada">
            <img src={Folder}/>
          </a>
          <div className='info1'>
                <a className='list' href="/Pesada">{i18n.t('messages.pesada')}</a>
              <span className='sp'>{i18n.t('messages.sp')}</span>
         </div>
       </div>
     </div>
    </div> 
 
  );
}