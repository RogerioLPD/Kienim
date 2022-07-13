import { useEffect, useState, useRef } from 'react';
import '../Pages.css';
import React from 'react';
import { i18n } from '../i18n';



export default function Stg4() {
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
      <a className='home' href='/Arquivo'>{i18n.t('messages.home')}</a>
      <div className='text'> 
         <span className='title'>{i18n.t('messages.stg4')}</span>
     </div>
      
      <div className="carousel1" ref={carousel}>
         <div class="item">  
           <div className='info'>
              <a className='name' href='https://www.mediafire.com/folder/oypkraabs8mqh/Audi' target="_blank">Audi</a>
              <a className='name' href='https://www.mediafire.com/folder/35y5pm64nvw96/BMW' target="_blank">BMW</a>
              <a className='name' href='https://www.mediafire.com/folder/obta5xwu8mp7l/Citroen' target="_blank">Citroen</a>
              <a className='name' href='https://www.mediafire.com/folder/q67hudkcbcnoi/Fiat' target="_blank">Fiat</a>
              <a className='name' href='https://www.mediafire.com/folder/v9weuvd6lqfse/Hyundai' target="_blank">Hyundai</a>
              <a className='name' href='https://www.mediafire.com/folder/k2pjvsp6f73qb/Mercedes+Benz' target="_blank">Mercedes Benz</a>
              <a className='name' href='https://www.mediafire.com/folder/kbumqeqqegmty/Kia' target="_blank">Kia</a>
              <a className='name' href='https://www.mediafire.com/folder/8gvpdulx1612n/Land+Rover' target="_blank">Land Rover</a>
              <a className='name' href='https://www.mediafire.com/folder/4nrr68q6mglse/MAN' target="_blank">MAN</a>  
              <a className='name' href='https://www.mediafire.com/folder/lefx9p838uzi8/MAZDA' target="_blank">MAZDA</a>
              <a className='name' href='https://www.mediafire.com/folder/a67313kgsz6ze/Mitsubishi' target="_blank">Mitsubishi</a>
              <a className='name' href='https://www.mediafire.com/folder/ge8hukz26jcjq/Opel' target="_blank">Opel</a>
              <a className='name' href='https://www.mediafire.com/folder/ofiavibeqttvi/Peugeot' target="_blank">Peugeot</a>
           </div>
         </div>

        <div class="item">
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/folder/tmpz7660n8zm7/Porsche' target="_blank">Porsche</a>
              <a className='name' href='https://www.mediafire.com/folder/fmec0qblwi68c/Renault' target="_blank">Renault</a>
              <a className='name' href='https://www.mediafire.com/folder/bgyy097vukls4/Seat' target="_blank">Seat</a>
              <a className='name' href='https://www.mediafire.com/folder/v4pgyidct8ck5/Smart' target="_blank">Smart</a>
              <a className='name' href='https://www.mediafire.com/folder/gqih3g3rlpy44/Volvo' target="_blank">Volvo</a>
              <a className='name' href='https://www.mediafire.com/folder/0t1e9dc9r5mxa/VW' target="_blank">VW</a>
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

