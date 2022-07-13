import { useEffect, useState, useRef } from 'react';
import '../Pages.css';
import React from 'react';
import { i18n } from '../i18n';



export default function Stg2() {
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
         <span className='title'>{i18n.t('messages.stg2')}</span>
     </div>
      
      <div className="carousel1" ref={carousel}>
          <div class="item">  
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/folder/wkct0p30tocsi/Alfa' target="_blank">Alfa</a>
              <a className='name' href='https://www.mediafire.com/folder/kshsmuy8jaxp9/Audi' target="_blank">Audi</a>
              <a className='name' href='https://www.mediafire.com/folder/exf0fvg15aa8r/BMW' target="_blank">BMW</a>
              <a className='name' href='https://www.mediafire.com/folder/tumflojrcsfo9/Chevrolet' target="_blank">Chevrolet</a>
              <a className='name' href='https://www.mediafire.com/folder/k703bu8vv7aw8/Chrysler' target="_blank">Chrysler</a>
              <a className='name' href='https://www.mediafire.com/folder/xbxp5tw2b252k/Citroen' target="_blank">Citroen</a>
              <a className='name' href='https://www.mediafire.com/folder/na1tbl6h6wuox/DAF' target="_blank">DAF</a>
              <a className='name' href='https://www.mediafire.com/folder/iozrf0m5r8w3s/Dodge' target="_blank">Dodge</a>
              <a className='name' href='https://www.mediafire.com/folder/3v0160qw4zm2g/Fendt' target="_blank">Fendt</a>
              <a className='name' href='https://www.mediafire.com/folder/hv9lunx6pbkrh/Fiat' target="_blank">Fiat</a>
              <a className='name' href='https://www.mediafire.com/folder/4ewg043l5km2m/Ford' target="_blank">Ford</a>
              <a className='name' href='https://www.mediafire.com/folder/1zndbhxdjfaw7/Honda' target="_blank">Honda</a>
              <a className='name' href='https://www.mediafire.com/folder/4x3kz468i7tc9/Hyundai' target="_blank">Hyundai</a>
            </div>
          </div>

          <div class="item">
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/folder/8qsn5gdvej3ye/Iveco' target="_blank">Iveco</a>
              <a className='name' href='https://www.mediafire.com/folder/k52rpnmbu2k6s/Jaguar' target="_blank">Jaguar</a>
              <a className='name' href='https://www.mediafire.com/folder/vq7o56ksfwv1c/Mercedes+Benz' target="_blank">Mercedes Benz</a>
              <a className='name' href='https://www.mediafire.com/folder/3bist7dt3lkmn/Kia' target="_blank">Kia</a>
              <a className='name' href='https://www.mediafire.com/folder/6g7scn5g7k8h4/Lancia' target="_blank">Lancia</a>
              <a className='name' href='https://www.mediafire.com/folder/cfuwvro3nt9zz/Land+Rover' target="_blank">Land Rover</a>
              <a className='name' href='https://www.mediafire.com/folder/1fb4zdwdptfhq/MAN' target="_blank">MAN</a>
              <a className='name' href='https://www.mediafire.com/folder/nj0zoveggmu48/MAZDA' target="_blank">MAZDA</a>
              <a className='name' href='https://www.mediafire.com/folder/8zck4g9wd01mr/Mini' target="_blank">Mini</a>
              <a className='name' href='https://www.mediafire.com/folder/ogkax769fo29t/Mitsubishi' target="_blank">Mitsubishi</a>
              <a className='name' href='https://www.mediafire.com/folder/kdponphoi47fy/Nissan' target="_blank">Nissan</a>
              <a className='name' href='https://www.mediafire.com/folder/l1z1ssklou1gh/Opel' target="_blank">Opel</a>
              <a className='name' href='https://www.mediafire.com/folder/kpw35usaszjkl/Peugeot' target="_blank">Peugeot</a>     
            </div>
          </div>

          <div class="item">
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/folder/5yxvafboqlclx/Porsche' target="_blank">Porsche</a>
              <a className='name' href='https://www.mediafire.com/folder/t37h5z73hnqhy/Renault' target="_blank">Renault</a>
              <a className='name' href='https://www.mediafire.com/folder/nmeo3960vw0mm/Rover' target="_blank">Rover</a>
              <a className='name' href='https://www.mediafire.com/folder/t5lettw1jrvwy/SAAB' target="_blank">SAAB</a>
              <a className='name' href='https://www.mediafire.com/folder/yjtb7h0f4y7wg/Scania' target="_blank">Scania</a>
              <a className='name' href='https://www.mediafire.com/folder/oql4co1a2aep6/Seat' target="_blank">Seat</a>
              <a className='name' href='https://www.mediafire.com/folder/qrjcpqd6kvbl1/Smart' target="_blank">Smart</a>
              <a className='name' href='https://www.mediafire.com/folder/7h6e63509d5qf/Toyota' target="_blank">Toyota</a>
              <a className='name' href='https://www.mediafire.com/folder/vuhlicqb9q5tl/Volvo' target="_blank">Volvo</a>
              <a className='name' href='https://www.mediafire.com/folder/b0nbd7wiswntl/VW' target="_blank">VW</a>
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

