import { useEffect, useState, useRef } from 'react';
import '../Pages.css';
import React from 'react';
import { i18n } from '../i18n';



export default function Egr() {
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
         <span className='title'>{i18n.t('messages.egr')}</span>
     </div>
      
      <div className="carousel1" ref={carousel}>
         <div class="item">  
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/file/91ws3i4425m6y0d/Alfa_A6_3.0_TDI_CR_2013_Turbo-Diesel__230.2KWKW_Bosch__4G0907589_528336_04FD.Stage2%252B_DPF_OFF/file' target="_blank">Alfa A6 3.0 TDI CR 2013 Turbo-Diesel 230.2KWKW Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/xg7vj9em7nb1nau/Alfa__1.9JTDM_2005_110.3KWKW_Bosch__55196563_372327_10D8.EGR_off/file' target="_blank">Alfa 1.9JTDM 2005 110.3KWKW Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/bog3bj1a250as16/BMW__3.5_D_2007_210.4KWKW_Bosch__O_02CT81_390001_8E5D.EGR/file' target="_blank">BMW 3.5 D 2007 210.4KWKW Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/dy4da55jd6ulzue/MB_Sprinter_220CDI_2007_Turbodiesel_91.9KWKW_Bosch__CR40-64x-65T2-906-080KW-40-0MEF-05-IAP-000_DPF7_ME5_381130_0DC2.stage_dani/file' target="_blank">MB Sprinter 220CDI 2007 Turbodiesel 91.9KWKW Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/m9khxorc90rtxz4/MB_Sprinter_220CDI_2007_Turbodiesel_91.9KWKW_Bosch__CR40-64x-65T2-906-080KW-40-0MEF-05-IAP-000_DPF7_ME5_381130_1601.Stage_EGR_DTC/file' target="_blank">MB Sprinter 220CDI 2007 Turbodiesel 91.9KWKW Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/zdrqzcfnr95hgz9/VW_Passat_2.0_TDI_2007_Turbodiesel__125KWKW_Siemens__03G906018EM_4369657628.90.02_94FA.Nur_DPF_OFF/file' target="_blank">VW Passat 2.0 TDI 2007 Turbodiesel 125KWKW Siemens</a>
              <a className='name' href='https://www.mediafire.com/file/ds17qqoe5520cvv/VW_Polo_1.6_TDI_2012_66.2KWKW_Siemens__03L906023MA_SM2F0L9500000_548B.egr_off_%252B_pO40X/file' target="_blank">VW Polo 1.6 TDI 2012 66.2KWKW Siemens</a>
              <a className='name' href='https://www.mediafire.com/file/qm4iuu6h3nh4a32/VW_Transporter_2.0_BiTDI_CR_DPF_2010_Turbo-Diesel_Letzte_bearbeitung_stand_132.4KWKW_Bosch__03L906022JE_515250_B7DA.EGR_OFF/file' target="_blank">VW Transporter  2.0 BiTDI CR DPF 2010 Turbo Diesel</a>
              <a className='name' href='https://www.mediafire.com/file/lbw5ad3zt4pw22d/VW_Transporter_2.0_BiTDI_CR_DPF_2010_Turbo-Diesel_Letzte_bearbeitung_stand_132.4KWKW_Bosch__03L906022JE_515250_DF5B.DPF_OFF/file' target="_blank">VW Transporter 2.0 BiTDI CR DPF 2010 Turbo Diesel</a>  
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

