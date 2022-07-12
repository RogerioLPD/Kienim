import { useEffect, useState, useRef } from 'react';
import './Pages.css';
import React from 'react';



export default function Leve() {
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
      <a className='home' href='/Mecanica'>Voltar</a>
      <div className='text'> 
         <span className='title'>DIAGRAMAS LINHA LEVE</span>
     </div>
      
       <div className="carousel1" ref={carousel}>
          <div class="item">  
             <div className='info'>
               <a className='name' href='https://www.mediafire.com/file/hahm9islxitwlxj/Audi_A4.pdf/file' target="_blank">Audi A4</a>
               <a className='name' href='https://www.mediafire.com/file/ts2cnrcd14r4813/CHEVROLET_-20220531T123022Z-001%25282%2529.zip/file' target="_blank">CHEVROLET</a>
               <a className='name' href='https://www.mediafire.com/file/y5mbmcbnd6l4oiu/CHEVROLET_-20220531T123022Z-001.zip/file' target="_blank">CHEVROLET 2</a>
               <a className='name' href='https://www.mediafire.com/file/vj1yst6h346myxe/DIAGRAMA_FIAT_IDEA_VENICE_1_4_8V_FLEX_BOSCH_ME7.9.9.pdf/file' target="_blank">FIAT IDEA  1.4 8V FLEX BOSCH ME7.9.9</a>
               <a className='name' href='https://www.mediafire.com/file/77ia941s4gwx94x/DIAGRAMA_FIAT_IDEA_VENICE_ETORQ_1.6_16V_IAW_7GF.pdf/file' target="_blank">FIAT IDEA ETORQ 1.6 16V IAW 7GF</a>
               <a className='name' href='https://www.mediafire.com/file/p98va2okr5eyywy/DIAGRAMA_FIAT_MOBI_SISTEMA_BOSCH_17.3.0.pdf/file' target="_blank">FIAT MOBI SISTEMA BOSCH 17.3.0</a>
               <a className='name' href='https://www.mediafire.com/file/tp9iqyet48nillz/DIAGRAMA_FIAT_PALIO_WEEKEND_ETORQ_PLUS_2013_MAGNETI_MARELLI_IAW_7GF.pdf/file' target="_blank">FIAT PALIO WEEKEND ETORQ PLUS 2013 IAW 7GF</a>
               <a className='name' href='https://www.mediafire.com/file/7vdd58wdrxd7pq0/DIAGRAMA_FIAT_PALIO_IAW_5NF.pdf/file' target="_blank">FIAT PALIO IAW 5NF</a>
               <a className='name' href='https://www.mediafire.com/file/gad9l4rryy9m26r/DIAGRAMA_FIAT_PUNTO_1.4_TJET_FLORENCE_BOSCH_ME7.9.10.pdf/file' target="_blank">FIAT PUNTO 1.4 TJET BOSCH ME7.9.10</a>
               <a className='name' href='https://www.mediafire.com/file/m4sgqktukriqh1f/DIAGRAMA_FORD_KA_1.5_FLEX_SIGMA__EMS_2302_2015_%25281%2529.pdf/file' target="_blank">FORD KA 1.5 FLEX SIGMA SEM 2015</a>
               <a className='name' href='https://www.mediafire.com/file/ai614b99rs9wwhh/DIAGRAMA_FORD_NEW_FIESTA_1.6_16V_SIEMENS_2212_ANO_2014.pdf/file' target="_blank">NEW FIESTA 1.6 16V SIEMENS 2014</a>
               <a className='name' href='https://www.mediafire.com/file/hsqhfhapjrohdoh/DIAGRAMA_FORD_NEW_FIESTA_1.6_16V_SIEMENS_2212_ANO_2015.pdf/file' target="_blank">NEW FIESTA 1.6 16V SIEMENS 2015</a>
               <a className='name' href='https://www.mediafire.com/file/e3tibvvkepq9v2h/DIAGRAMA_FORD_NEW_FIESTA_1.6_16V_SIEMENS_2212_ANO_2016.pdf/file' target="_blank">NEW FIESTA 1.6 16V SIEMENS 2016</a>
             </div>
          </div>

          <div class="item">
             <div className='info'>
               <a className='name' href='https://www.mediafire.com/file/shsvf22zs1rb6g5/DIAGRAMA_FORD_NEW_FOCUS_1.6_16V_BOSCH_ME17_5_8.PDF/file' target="_blank">FORD NEW FOCUS 1.6 16V BOSCH ME17.5.8</a>
               <a className='name' href='https://www.mediafire.com/file/y5d1mkaut1ylamn/DIAGRAMA_HYUNDAI_HB20_1_6_16V_AUTOMATICO_BOSCH_ME17.9.12.pdf/file' target="_blank">HYUNDAI HB20 1.6 16V AUTOMATICO  ME17.9.12</a>
               <a className='name' href='https://www.mediafire.com/file/u5dks5ezmsvw6hr/DIAGRAMA_HYUNDAI_I30_2_0_16V_CVVT_2010_SIEMENS.pdf/file' target="_blank">HYUNDAI I30 2.0 16V CVT 2010 SIEMENS</a>
               <a className='name' href='https://www.mediafire.com/file/xf1crpe3wuqzhdn/DIAGRAMA_HYUNDAI_IX35__2_0_16V_FLEX_SISTEMA_CONTINENTAL_SIM2K-341.pdf/file' target="_blank">HYUNDAI IX35 2.0 16V FLEX CONTINENTAL SIM2K 341</a>
               <a className='name' href='https://www.mediafire.com/file/61d7jxju1dqhucf/DIAGRAMA_PEUGEOT_207_2014_REL%25C3%2589_E_FUSIVEIS.pdf/file' target="_blank">PEUGEOT 207 2014 RELE E FUSIVEIS</a>
               <a className='name' href='https://www.mediafire.com/file/1gcz606paj4jhj5/DIAGRAMA_PEUGEOT_207_HOGGAR_14_OV_FLEX_BOSCH_ME7.4.9_MULTIPLEXADOS.pdf/file' target="_blank">PEUGEOT 207 HOGGAR 14 OV FLEX BOSCH ME7.4.9</a>
               <a className='name' href='https://www.mediafire.com/file/3chvxvc1ddwgca7/DIAGRAMA_PEUGEOT_308_IAW_6KP.pdf/file' target="_blank">PEUGEOT 308 IAW 6KP</a>
               <a className='name' href='https://www.mediafire.com/file/63to9sb5wk9x44q/DIAGRAMA_RENAULT_LOGAN_SANDER_1_0_1_6_FLEX_SISTEMA_VALEO_V42.pdf/file' target="_blank">RENAULT LOGAN SANDER 1.0 1.6 FLEX SISTEMA VALEO</a>
               <a className='name' href='https://www.mediafire.com/file/geiz269h1skzyal/DIAGRAMA_RENAULT_MASTER_2_5_EDC15C7_2006_A_2008.pdf/file' target="_blank">DIAGRAMA RENAULT MASTER 2.5 EDC15C7 2006 A 2008</a>
               <a className='name' href='https://www.mediafire.com/file/lrbvzb4p7tqtdsq/DIAGRAMA_VW_GOL_VOYAGE_G5_1_0_FLEX_SISTEMA_BOSCH_ME7_5_30.pdf/file' target="_blank">GOL VOYAGE G5 1.0 FLEX BOSCH ME7.5.30</a>
               <a className='name' href='https://www.mediafire.com/file/na8g821cxzf83lm/DIAGRAMA_VW_GOL_VOYAGE_G6_1_0_FLEX_SISTEMA_BOSCH_ME17_5_20.pdf/file' target="_blank">GOL VOYAGE G5 1.0 FLEX BOSCH ME7.5.20</a>
               <a className='name' href='https://www.mediafire.com/file/99435szkposxl8z/DIAGRAMA_VW_UP_1_0_12V_TOTAL_FLEX_IMOTION_SISTEMA_BOSCH_ME17_5_24.pdf/file' target="_blank">UP 1.0 12V TOTAL FLEX IMOTION SISTEMA BOSCH ME17.5.24</a>
               <a className='name' href='https://www.mediafire.com/file/rkccmifq3qsch2h/ecu_SID_901_%25E2%2580%2593_RANGER_3.0D.pdf/file' target="_blank">RANGER 3.0D SID 901</a>     
             </div>
          </div>

          <div class="item">
             <div className='info'>
               <a className='name' href='https://www.mediafire.com/file/5l7oblyyrhbfjir/FIAT-20220531T123112Z-001%25282%2529.zip/file' target="_blank">FIAT</a>
               <a className='name' href='https://www.mediafire.com/file/6lbpyixbzg5sc3y/FORD-20220531T124349Z-001.zip/file' target="_blank">FORD</a>
               <a className='name' href='https://www.mediafire.com/file/pdwukb3v3ba6yg9/HONDA-20220531T124410Z-001.zip/file' target="_blank">HONDA</a>
               <a className='name' href='https://www.mediafire.com/file/wfcmgkcgrgo4opb/MERCEDES_BENZ-20220531T124437Z-001.zip/file' target="_blank">MERCEDES BENZ</a>
               <a className='name' href='https://www.mediafire.com/file/vvq5dr8vi2xh62f/NISSAN-20220531T124504Z-001.zip/file' target="_blank">NISSAN</a>
               <a className='name' href='https://www.mediafire.com/file/dnfnfwjwryhw22p/PEUGEOT_-20220531T124536Z-001.zip/file' target="_blank">PEUGEOT</a>
               <a className='name' href='https://www.mediafire.com/file/vvz44fpaplyztv2/PEUGEOT_206_2004.pdf/file' target="_blank">PEUGEOT 206 2004</a>  
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
      <span className="footer">*Acesso gratuito para assinantes dos planos FULL e PRÉ-MENSAL*</span>
    </div>
    
      </div>
    </div>
     
    
  );
}

