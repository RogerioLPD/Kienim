import { useEffect, useState, useRef } from 'react';
import './Pages.css';
import React from 'react';
import { i18n } from './i18n';



export default function Pinagem() {
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
         <span className='title'>{i18n.t('messages.pin')}</span>
     </div>
      
      <div className="carousel1" ref={carousel}>
          <div class="item">  
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/folder/7vhyappaalsnm/ABARTH' target="_blank">ABARTH</a> 
              <a className='name' href='https://www.mediafire.com/folder/zjc2fw7xx1p3f/ALFA+ROMEO' target="_blank">ALFA ROMEO</a>
              <a className='name' href='https://www.mediafire.com/folder/ezcqtd2z9zwad/AMG' target="_blank">AMG</a>
              <a className='name' href='https://www.mediafire.com/folder/4ocnl0khbs7e8/AUDI' target="_blank">AUDI</a>
              <a className='name' href='https://www.mediafire.com/folder/xcxeedlg0e8xr/BMW' target="_blank">BMW</a>
              <a className='name' href='https://www.mediafire.com/folder/hbik4kkejy1f1/CHEVROLET' target="_blank">CHEVROLET</a>
              <a className='name' href='https://www.mediafire.com/folder/zix5bsjzmg3aw/CHRYSLER' target="_blank">CHRYSLER</a>
              <a className='name' href='https://www.mediafire.com/folder/veszfh5zx0c9z/CITROEN' target="_blank">CITROEN</a>
              <a className='name' href='https://www.mediafire.com/folder/myn53urai98iu/DACIA' target="_blank">DACIA</a>
              <a className='name' href='https://www.mediafire.com/folder/ygk2gtq320qlk/FIAT' target="_blank">FIAT</a>
              <a className='name' href='https://www.mediafire.com/folder/hojt1dz9pvw4a/FORD' target="_blank">FORD</a>
              <a className='name' href='https://www.mediafire.com/folder/17ipt08oh4twe/HONDA' target="_blank">HONDA</a> 
            </div>
          </div>

          <div class="item">  
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/folder/sizqy9mh0d75c/HYUNDAI' target="_blank">HYUNDAI</a> 
              <a className='name' href='https://www.mediafire.com/folder/jc78vwq4flck4/ISUZU' target="_blank">ISUZU</a>
              <a className='name' href='https://www.mediafire.com/folder/6kejaceggnaqn/IVECO+DAILY' target="_blank">IVECO DAILY</a>
              <a className='name' href='https://www.mediafire.com/folder/y7qy1ufn21lwi/JAGUAR' target="_blank">JAGUAR</a>
              <a className='name' href='https://www.mediafire.com/folder/oxand64q17ho4/JEEP' target="_blank">JEEP</a>
              <a className='name' href='https://www.mediafire.com/folder/tvwg3asxeoa7m/KIA' target="_blank">KIA</a>
              <a className='name' href='https://www.mediafire.com/folder/zfbjrcwuxuvzo/KTM' target="_blank">KTM</a>
              <a className='name' href='https://www.mediafire.com/folder/jcykyhmlv0thm/LANCIA' target="_blank">LANCIA</a>
              <a className='name' href='https://www.mediafire.com/folder/pci1aw13eh5m0/LAND+ROVER' target="_blank">LAND ROVER</a>
              <a className='name' href='https://www.mediafire.com/folder/5z5ru31ug73jm/MERCEDES' target="_blank">MERCEDES</a>
              <a className='name' href='https://www.mediafire.com/folder/dyo6bv6a7s410/MINI' target="_blank">MINI</a>
              <a className='name' href='https://www.mediafire.com/folder/upabtgab5y0v1/OPEL' target="_blank">OPEL</a> 
            </div>
          </div>

          <div class="item">  
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/folder/8lrs9wmiyzqy5/PEUGEOT' target="_blank">PEUGEOT</a> 
              <a className='name' href='https://www.mediafire.com/folder/o4a7kpw8rehue/PORSCHE' target="_blank">PORSCHE</a>
              <a className='name' href='https://www.mediafire.com/folder/0t31wfp1689b9/RENAULT' target="_blank">RENAULT</a>
              <a className='name' href='https://www.mediafire.com/folder/pvnamg1jffw0u/ROVER' target="_blank">ROVER</a>
              <a className='name' href='https://www.mediafire.com/folder/gtneqojeadaol/SAAB' target="_blank">SAAB</a>
              <a className='name' href='https://www.mediafire.com/folder/m1kx200n2cmat/SEAT' target="_blank">SEAT</a>
              <a className='name' href='https://www.mediafire.com/folder/3xn18fk8uert7/SKODA' target="_blank">SKODA</a>
              <a className='name' href='https://www.mediafire.com/folder/1jg3h1dulr8t1/SMART' target="_blank">SMART</a>
              <a className='name' href='https://www.mediafire.com/folder/rslh0a58kkdoa/SUZUKI' target="_blank">SUZUKI</a>
              <a className='name' href='https://www.mediafire.com/folder/tqcwuzd60n3bh/TODAS+CENTRAIS' target="_blank">TODAS CENTRAIS</a>
              <a className='name' href='https://www.mediafire.com/folder/98y1z7ebz1wto/TOYOTA' target="_blank">TOYOTA</a>
              <a className='name' href='https://www.mediafire.com/folder/laq6nbstxuc8z/VOLKSWAGEN' target="_blank">VOLKSWAGEN</a>
              <a className='name' href='https://www.mediafire.com/folder/6zuhte3u5j76l/VOLVO' target="_blank">VOLVO</a>  
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

