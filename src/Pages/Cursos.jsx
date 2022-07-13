import { useEffect, useState, useRef } from 'react';
import './Pages.css';
import React from 'react';
import { i18n } from './i18n';



export default function Cursos() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);
  

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL+ 'static/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    
    
    <div className="container1">
      <a className='home' href='/'>{i18n.t('messages.home')}</a>
      <div className='text'> 
         <span className='title'>{i18n.t('messages.curso')}</span>
     </div>
      
      <div className="carousel1" ref={carousel}>
          <div class="item">  
            <div className='info'>
               <a className='name' href='https://www.mediafire.com/folder/56ovp6pjb6vjg/Curso+ECM+Titanium' target="_blank">{i18n.t('messages.ecm')}</a>
               <a className='name' href='https://www.mediafire.com/folder/l4cg18wfjhqgh/Curso+WinOls' target="_blank">{i18n.t('messages.win')}</a>
               <a className='name' href='https://www.mediafire.com/folder/duju21f1algca/Diversos' target="_blank">{i18n.t('messages.div')}</a>
               <a className='name' href='https://www.mediafire.com/folder/3xkr8cuzmxwn9/Linha+leve' target="_blank">{i18n.t('messages.mec')}</a>
               <a className='name' href='https://www.mediafire.com/folder/81ljbxlmbfuea/Linha+pesada' target="_blank">{i18n.t('messages.ele')}</a>
               <a className='name' href='https://www.mediafire.com/folder/3i99rhikznf06/IMMO+TRAINING' target="_blank">{i18n.t('messages.im')}</a>
            </div>
          </div>
      </div>
      
      <div className="buttons">
        
        <button onClick={handleLeftClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
        </button>
        <div className="footer1">
      <span className="footer1">Pág. 1 2 3 4....... </span>
    </div>
        <div className="footer">
      <span className="footer">{i18n.t('messages.footer')}</span>
    </div>
    
      </div>
    </div>
     
    
  );
}

