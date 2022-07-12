import { useEffect, useState, useRef } from 'react';
import '../Pages.css';
import React from 'react';
import { i18n } from '../i18n';



export default function Stg5() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);
  

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
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
      <a className='home' href='/Arquivo'>{i18n.t('messages.home')}</a>
      <div className='text'> 
         <span className='title'>{i18n.t('messages.stg5')}</span>
     </div>
      
      <div className="carousel1" ref={carousel}>
          <div class="item">  
             <div className='info'>
              <a className='name' href='https://www.mediafire.com/folder/nzpxhqrtujgsc/Audi' target="_blank">Audi</a>
              <a className='name' href='https://www.mediafire.com/folder/rj0xodrfp9am2/BMW' target="_blank">BMW</a>
              <a className='name' href='https://www.mediafire.com/folder/0hlh54e77whqk/MAZDA' target="_blank">MAZDA</a>
              <a className='name' href='https://www.mediafire.com/folder/knn8fsmv3lu06/Opel' target="_blank">Opel</a>
              <a className='name' href='https://www.mediafire.com/folder/5wk3ev2kiuvgi/Renault' target="_blank">Renault</a>
              <a className='name' href='https://www.mediafire.com/folder/zdqhqsvhsr62q/VW' target="_blank">VW</a>
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

