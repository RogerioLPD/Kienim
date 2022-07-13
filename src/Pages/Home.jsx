import { useEffect, useState, useRef } from 'react';
import './Home.css';
import React from 'react';
import { i18n } from './i18n';
import Globe from './globe.png';

const I18N_STORAGE_KEY = 'i18nextLng'

export default function Home() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY))
  const handleSelectChange = event => {
    localStorage.setItem(
      I18N_STORAGE_KEY,
      event.target.value
    )
    window.location = window.location
  }

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + 'static/shoes.json')
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
    
    <div className="container">
      <select className='select' onChange={handleSelectChange} value={language}>
        <option className='idioma'>Selecione um idioma</option>
        <option value="pt-BR">PT</option>
        <option value="en-US">EN</option>
      </select>
      <div className='globe'>
        
            <img src={Globe}/>
          </div>
      <div className="logo">
        <span className='name'>{i18n.t('messages.itWorks')}</span>
      </div>
      
      <div className='carousel'>
      <a class="item" href='/Login'>
          <div className='image' >
            <img src="https://i.ebayimg.com/images/g/pAsAAOSwZAthZ7LO/s-l500.jpg"/>
          </div>
          
       
        <a className='info' href='/Login'>
          <span className='name'>{i18n.t('messages.name')}</span>
          <span className='oldPrice'>R$ 8.990,00</span>
          <span className='price'>{i18n.t('messages.price')}</span>
          <a className='click' href='/Remap'>{i18n.t('messages.click')}</a>
        </a>
        </a>
        <a class="item" href='/LoginMec'>
          <div className='image1'>
            <img src='https://i1.wp.com/rio.expert/wp-content/uploads/2019/02/manutencao-do-motor-a-diesel-1.jpg?fit=750%2C419&ssl=1'/>
          </div>
          
       
        <div className='info1' href='/LoginMec'>
          <span className='name'>{i18n.t('messages.mecanica')}</span>
          <span className='oldPrice'>R$ 1.099.99</span>
          <span className='price'>{i18n.t('messages.price')}</span>
          <a className='click' href='/Mecanica'>{i18n.t('messages.click')}</a>
        </div>
        </a>
        <a class="item" href='/LoginAr'>
          <div className='image2'>
            <img src="https://pradopowerchips.com.br/blog/wp-content/uploads/2019/12/0435_CursoDeRemapeamento_Nivel1_FundoHotmart_1920x1080-compressed.jpg"/>
          </div>
          
       
        <div className='info1'href='/LoginAr'>
          <span className='name'>{i18n.t('messages.arquivo')}</span>
          <span className='oldPrice'>R$ 5.099.99</span>
          <span className='price'>{i18n.t('messages.price')}</span>
          <a className='click' href='/Arquivo'>{i18n.t('messages.click')}</a>
        </div>
        </a>
      </div>

      
      <div className='carousel1'>
     
          <a class="item" href='/LoginCursos'>
          <div className='image3'>
            <img src="https://projetod.com.br/wp-content/uploads/2019/09/cursoinj.jpg"/>
          </div>
          
       
        <div className='info'>
          <span className='name'>{i18n.t('messages.cursos')}</span>
          <span className='oldPrice'>R$ 12.999.99</span>
          <span className='price'>{i18n.t('messages.price')}</span>
          <a className='click' href='/Cursos'>{i18n.t('messages.click')}</a>
        </div>
        </a>
        <a class="item" href='/LoginDecode'>
          <div className='image4'>
            <img src="https://motoristprod.s3.amazonaws.com/uploads/redactor_rails/picture/data/3244/motorist-ecu-tuning-june-2020.png"/>
          </div>
          
       
        <div className='info'>
          <span className='name'>{i18n.t('messages.decode')}</span>
          <span className='oldPrice'>R$ 1.699.99</span>
          <span className='price'>{i18n.t('messages.price')}</span>
          <a className='click' href='/Decode'>{i18n.t('messages.click')}</a>
        </div>
        </a>
        <a class="item" href='/LoginPinagem'>
          <div className='image5'>
            <img src="https://hotmart.s3.amazonaws.com/product_contents/5d6d67ac-8c91-45c3-8590-4418429bc9fa/capa.PNG"/>
          </div>
          
       
        <div className='info'>
          <span className='name'>{i18n.t('messages.pinagem')}</span>
          <span className='oldPrice'>R$ 999.99</span>
          <span className='price'>{i18n.t('messages.price')}</span>
          <a className='click' href='/Pinagem'>{i18n.t('messages.click')}</a>
        </div>
        </a>





      </div>
        

      
        <div className="footer">
      <span className="footer">{i18n.t('messages.footer')}</span>
    </div>
    
      </div>
    
     
    
  );
}

