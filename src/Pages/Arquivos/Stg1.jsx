import { useEffect, useState, useRef } from 'react';
import '../Pages.css';
import React from 'react';
import { i18n } from '../i18n';



export default function () {
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
         <span className='title'>{i18n.t('messages.stg1')}</span>
     </div>
      
      <div className="carousel1" ref={carousel}>
        <div class="item">  
          <div className='info'>
           <a className='name' href='https://www.mediafire.com/folder/qdogj7vnl84fq/Alfa' target="_blank">Alfa</a>
           <a className='name' href='https://www.mediafire.com/folder/pwynkq85dcy9f/Audi' target="_blank">Audi</a>
           <a className='name' href='https://www.mediafire.com/folder/xuas43qnqc7s4/Bentley' target="_blank">Bentley</a>
           <a className='name' href='https://www.mediafire.com/folder/9gqeelhimr2lg/BMW' target="_blank">BMW</a>
           <a className='name' href='https://www.mediafire.com/folder/9ocz0x6wbdu9g/Chevrolet' target="_blank">Chevrolet</a>
           <a className='name' href='https://www.mediafire.com/folder/pub3jfdcpccp0/Chrysler' target="_blank">Chrysler</a>
           <a className='name' href='https://www.mediafire.com/folder/w9kmy3gw5ot69/Citroen' target="_blank">Citroen</a>
           <a className='name' href='https://www.mediafire.com/folder/bl6oevzx6pqbb/Dacia' target="_blank">Dacia</a>
           <a className='name' href='https://www.mediafire.com/folder/ad4eg3x0tyxy9/Daewoo' target="_blank">Daewoo</a>
           <a className='name' href='https://www.mediafire.com/folder/70p5fbuvrllby/DAF' target="_blank">DAF</a>  
           <a className='name' href='https://www.mediafire.com/folder/0rkxezmqqaz3l/Dodge' target="_blank">Dodge</a>
           <a className='name' href='https://www.mediafire.com/folder/9bq90sf5r6e6w/Fendt' target="_blank">Fendt</a>
           <a className='name' href='https://www.mediafire.com/folder/5zpx8u6zbl8if/Ferrari' target="_blank">Ferrari</a>
          </div>
        </div>

        <div class="item">
          <div className='info'>
           <a className='name' href='https://www.mediafire.com/folder/x94jt1vnslfg5/Fiat' target="_blank">Fiat</a> 
           <a className='name' href='https://www.mediafire.com/folder/7d3m486edgqvv/Ford' target="_blank">Ford</a>
           <a className='name' href='https://www.mediafire.com/folder/ctxs8r2qi6wnj/Honda' target="_blank">Honda</a>
           <a className='name' href='https://www.mediafire.com/folder/rpqtq3qx514ti/Hyundai' target="_blank">Hyundai</a>
           <a className='name' href='https://www.mediafire.com/folder/naiozxa0idzk3/ISUZU' target="_blank">ISUZU</a>
           <a className='name' href='https://www.mediafire.com/folder/vmvmasjyu2lwl/Iveco' target="_blank">Iveco</a>  
           <a className='name' href='https://www.mediafire.com/folder/tdf3awkbitoju/Jaguar' target="_blank">Jaguar</a>
           <a className='name' href='https://www.mediafire.com/folder/h0godxbn6ctq2/Jeep' target="_blank">Jeep</a>
           <a className='name' href='https://www.mediafire.com/folder/pi0vke99w8eyu/Kawasaki' target="_blank">Kawasaki</a>
           <a className='name' href='https://www.mediafire.com/folder/ul92wpgj31xs2/Kia' target="_blank">Kia</a>
           <a className='name' href='https://www.mediafire.com/folder/ttjclfc46rvog/Lancia' target="_blank">Lancia</a>
           <a className='name' href='https://www.mediafire.com/folder/58fq1c7rgzkis/Land+Rover' target="_blank">Land Rover</a>
           <a className='name' href='https://www.mediafire.com/folder/vciadm9aaqjuo/MAN' target="_blank">MAN</a>
         </div>
       </div>

        <div class="item">
          <div className='info'>
            <a className='name' href='https://www.mediafire.com/folder/062vs27wxayil/MAZDA' target="_blank">MAZDA</a>
            <a className='name' href='https://www.mediafire.com/folder/1b2y202dcjx4n/Mini' target="_blank">Mini</a>
            <a className='name' href='https://www.mediafire.com/folder/g0c2saaz7ojq3/Mitsubishi' target="_blank">Mitsubishi</a>
            <a className='name' href='https://www.mediafire.com/folder/7uxnunmvlzmk8/New+Holland' target="_blank">New Holland</a>
            <a className='name' href='https://www.mediafire.com/folder/sq6b04y0itj73/Nissan' target="_blank">Nissan</a>
            <a className='name' href='https://www.mediafire.com/folder/3ocyv64k89gdt/Opel' target="_blank">Opel</a>
            <a className='name' href='https://www.mediafire.com/folder/0q06dwh532thr/Peugeot' target="_blank">Peugeot</a>
            <a className='name' href='https://www.mediafire.com/folder/czr9kw5ksjqd5/Porsche' target="_blank">Porsche</a>
            <a className='name' href='https://www.mediafire.com/folder/060tvnu83n3rd/Renault' target="_blank">Renault</a>
            <a className='name' href='https://www.mediafire.com/folder/fmnvivt0c94cc/Rover' target="_blank">Rover</a>
            <a className='name' href='https://www.mediafire.com/folder/nr6qvyvz33qaz/SAAB' target="_blank">SAAB</a>
            <a className='name' href='https://www.mediafire.com/folder/89i9cj5wbkaqy/Scania' target="_blank">Scania</a>
            <a className='name' href='https://www.mediafire.com/folder/3utwivtvklgw5/Seat' target="_blank">Seat</a>
          </div>
        </div>

        <div class="item">
           <div className='info'>
           <a className='name' href='https://www.mediafire.com/folder/smrho1e5twvxn/Smart' target="_blank">Smart</a>
           <a className='name' href='https://www.mediafire.com/folder/9pln5nf23vwcy/Ssang_Yong' target="_blank">Ssang Yong</a>
           <a className='name' href='https://www.mediafire.com/folder/w3oj6r4d0wgo1/Suzuki' target="_blank">Suzuki</a>
           <a className='name' href='https://www.mediafire.com/folder/9ez7cayglg7t2/Toyota' target="_blank">Toyota</a>
           <a className='name' href='https://www.mediafire.com/folder/vv9cdef9duzim/Valtra' target="_blank">Valtra</a>
           <a className='name' href='https://www.mediafire.com/folder/uty2be5lbm3ea/Volvo' target="_blank">Volvo</a>
           <a className='name' href='https://www.mediafire.com/folder/zb89wu2vi9zxk/VW' target="_blank">VW</a>
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

