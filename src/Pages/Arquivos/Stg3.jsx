import { useEffect, useState, useRef } from 'react';
import '../Pages.css';
import React from 'react';
import { i18n } from '../i18n';



export default function Stg3() {
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
         <span className='title'>{i18n.t('messages.stg3')}</span>
     </div>
      
      <div className="carousel1" ref={carousel}>
          <div class="item">  
           <div className='info'>
              <a className='name' href='https://www.mediafire.com/folder/tn01r6ac49wi9/Alfa' target="_blank">Alfa</a>
              <a className='name' href='https://www.mediafire.com/folder/dw2mffhnyc44b/Audi' target="_blank">Audi</a>
              <a className='name' href='https://www.mediafire.com/folder/ugnwap87q68w4/BMW' target="_blank">BMW</a>
              <a className='name' href='https://www.mediafire.com/folder/i5dkivgfxto9t/Chrysler' target="_blank">Chrysler</a>
              <a className='name' href='https://www.mediafire.com/folder/wrzjrpwffg0gm/Fiat' target="_blank">Fiat</a>
              <a className='name' href='https://www.mediafire.com/folder/edikqiqsn24vn/Ford' target="_blank">Ford</a>
              <a className='name' href='https://www.mediafire.com/folder/2n4awv24j1zl3/Hyundai' target="_blank">Hyundai</a>
              <a className='name' href='https://www.mediafire.com/folder/akb4rj75iauja/Iveco' target="_blank">Iveco</a>
              <a className='name' href='https://www.mediafire.com/folder/7t6tf9vl7t4gi/Mercedes+Benz' target="_blank">Mercedes Benz</a>  
              <a className='name' href='https://www.mediafire.com/folder/mwqbxxcwr7pkv/Kia' target="_blank">Kia</a>
              <a className='name' href='https://www.mediafire.com/folder/dxfm4515yr8xm/Land+Rover' target="_blank">Land Rover</a>
              <a className='name' href='https://www.mediafire.com/folder/ehknxe6gtdqk3/MAN' target="_blank">MAN</a>
              <a className='name' href='https://www.mediafire.com/folder/iyel46kz3e37a/MAZDA' target="_blank">MAZDA</a>
           </div>
          </div>

          <div class="item">
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/folder/66wrlhus2hl9q/Mini' target="_blank">Mini</a>
              <a className='name' href='https://www.mediafire.com/folder/r46mfhatslfei/Mitsubishi' target="_blank">Mitsubishi</a>
              <a className='name' href='https://www.mediafire.com/folder/fzzb6752qipq7/Nissan' target="_blank">Nissan</a>
              <a className='name' href='https://www.mediafire.com/folder/a4dficovy6pdz/Opel' target="_blank">Opel</a>
              <a className='name' href='https://www.mediafire.com/folder/7sjzw32szdlru/Peugeot' target="_blank">Peugeot</a>
              <a className='name' href='https://www.mediafire.com/folder/1p19gd8xcl9su/Porsche' target="_blank">Porsche</a>
              <a className='name' href='https://www.mediafire.com/folder/hx4l8esmdmvo0/Renault' target="_blank">Renault</a>
              <a className='name' href='https://www.mediafire.com/folder/h8wh1zkqom609/SAAB' target="_blank">SAAB</a>
              <a className='name' href='https://www.mediafire.com/folder/jufqy7ddv3vl3/Seat' target="_blank">Seat</a>  
              <a className='name' href='https://www.mediafire.com/folder/rkzbv3fmjst1i/Smart' target="_blank">Smart</a>
              <a className='name' href='https://www.mediafire.com/folder/kb9x8chyr8efy/Volvo' target="_blank">Volvo</a>
              <a className='name' href='https://www.mediafire.com/folder/w40aeu2qk9lwt/VW' target="_blank">VW</a>
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

