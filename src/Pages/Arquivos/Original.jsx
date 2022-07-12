import { useEffect, useState, useRef } from 'react';
import '../Pages.css';
import React from 'react';
import { i18n } from '../i18n';



export default function Original() {
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
         <span className='title'>{i18n.t('messages.or')}</span>
     </div>
      
      <div className="carousel1" ref={carousel}>
          <div class="item">
             <div className='info'>
               <a className='name' href='https://www.mediafire.com/folder/lsf9sy2xi5uog/Alfa' target="_blank">Alfa</a>
               <a className='name' href='https://www.mediafire.com/folder/mgmracpn2u8p0/Audi' target="_blank">Audi</a>
               <a className='name' href='https://www.mediafire.com/folder/kuildtpwhy70z/Bentley' target="_blank">Bentley</a>
               <a className='name' href='https://www.mediafire.com/folder/h07gdkrna4r0b/BMW' target="_blank">BMW</a>
               <a className='name' href='https://www.mediafire.com/folder/unykeav1p76bh/Chevrolet' target="_blank">Chevrolet</a>
               <a className='name' href='https://www.mediafire.com/folder/1ec9plmohvoy2/Chrysler' target="_blank">Chrysler</a>
               <a className='name' href='https://www.mediafire.com/folder/hk0p4vsi8wt5x/Citroen' target="_blank">Citroen</a>
               <a className='name' href='https://www.mediafire.com/folder/hjhkgopysu3o6/Dacia' target="_blank">Dacia</a>
               <a className='name' href='https://www.mediafire.com/folder/9vjwrsovd0zsn/Daewoo' target="_blank">Daewoo</a>  
               <a className='name' href='https://www.mediafire.com/folder/uvximr9jrojku/DAF' target="_blank">DAF</a>
               <a className='name' href='https://www.mediafire.com/folder/aowjaxa2humoh/Dodge' target="_blank">Dodge</a>
               <a className='name' href='https://www.mediafire.com/folder/jn7g4g42ehqo7/Fendt' target="_blank">Fendt</a>
               <a className='name' href='https://www.mediafire.com/folder/wtmaqk91786n0/Ferrari' target="_blank">Ferrari</a>   
             </div>
          </div>

          <div class="item">
             <div className='info'>
               <a className='name' href='https://www.mediafire.com/folder/1tjcfoe7dueg4/Fiat' target="_blank">Fiat</a>
               <a className='name' href='https://www.mediafire.com/folder/0umlfdbc5i97x/Ford' target="_blank">Ford</a>
               <a className='name' href='https://www.mediafire.com/folder/30p1tsupzgh5t/Honda' target="_blank">Honda</a>
               <a className='name' href='https://www.mediafire.com/folder/242jzwn6icqj0/Hyundai' target="_blank">Hyundai</a>
               <a className='name' href='https://www.mediafire.com/folder/3celstczan9yk/ISUZU' target="_blank">ISUZU</a>
               <a className='name' href='https://www.mediafire.com/folder/mbaxbhmtwlq0w/Iveco' target="_blank">Iveco</a>
               <a className='name' href='https://www.mediafire.com/folder/csioko1izukkk/Jaguar' target="_blank">Jaguar</a>
               <a className='name' href='https://www.mediafire.com/folder/ypy4b16tg0kbg/Jeep' target="_blank">Jeep</a>
               <a className='name' href='https://www.mediafire.com/folder/1umtugmjahbcv/Kawasaki' target="_blank">Kawasaki</a>  
               <a className='name' href='https://www.mediafire.com/folder/vy3amd3ogp8cz/Kia' target="_blank">Kia</a>
               <a className='name' href='https://www.mediafire.com/folder/ygqfuv4jf3uwm/Lancia' target="_blank">Lancia</a>
               <a className='name' href='https://www.mediafire.com/folder/ys80iv0095td3/Land+Rover' target="_blank">Land Rover</a>
               <a className='name' href='https://www.mediafire.com/folder/l7aik8lcmwev9/MAN' target="_blank">MAN</a>   
             </div>
          </div>

          <div class="item">
             <div className='info'>
               <a className='name' href='https://www.mediafire.com/folder/57kocw9j46mdf/Mini' target="_blank">Mini</a>
               <a className='name' href='https://www.mediafire.com/folder/20qt7g6ua4erf/Mitsubishi' target="_blank">Mitsubishi</a>
               <a className='name' href='https://www.mediafire.com/folder/806orlrrki640/New+Holland' target="_blank">New Holland</a>
               <a className='name' href='https://www.mediafire.com/folder/qzh324pqchvue/Nissan' target="_blank">Nissan</a>
               <a className='name' href='https://www.mediafire.com/folder/584hckw5j1z49/Opel' target="_blank">Opel</a>
               <a className='name' href='https://www.mediafire.com/folder/mkaxrcun3lp8r/Peugeot' target="_blank">Peugeot</a>
               <a className='name' href='https://www.mediafire.com/folder/zzf2024ouaemo/Porsche' target="_blank">Porsche</a>
               <a className='name' href='https://www.mediafire.com/folder/4pqgs4fsi7ari/Renault' target="_blank">Renault</a>
               <a className='name' href='https://www.mediafire.com/folder/ej7fpqxu1lw79/Rover' target="_blank">Rover</a>  
               <a className='name' href='https://www.mediafire.com/folder/2v14grh47gq4z/SAAB' target="_blank">SAAB</a>
               <a className='name' href='https://www.mediafire.com/folder/g2p8bfil5y16q/Scania' target="_blank">Scania</a>
               <a className='name' href='https://www.mediafire.com/folder/5653zv0huupfi/Seat' target="_blank">Seat</a>
               <a className='name' href='https://www.mediafire.com/folder/jumnwnuafvqpu/Smart' target="_blank">Smart</a>   
             </div>
          </div>

          <div class="item">
             <div className='info'>
               <a className='name' href='https://www.mediafire.com/folder/br6ys5bs6tw1m/Ssang_Yong' target="_blank">Ssang Yong</a>
               <a className='name' href='https://www.mediafire.com/folder/6s3ucyplgiu7k/Suzuki' target="_blank">Suzuki</a>
               <a className='name' href='https://www.mediafire.com/folder/3pwm1tcu3gnom/Toyota' target="_blank">Toyota</a>
               <a className='name' href='https://www.mediafire.com/folder/83fuplkj8mhwx/Valtra' target="_blank">Valtra</a>
               <a className='name' href='https://www.mediafire.com/folder/93q1rzj19om7z/Volvo' target="_blank">Volvo</a>
               <a className='name' href='https://www.mediafire.com/folder/g7wyisok421m1/VW' target="_blank">VW</a> 
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

