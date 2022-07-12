import { useEffect, useState, useRef } from 'react';
import './Pages.css';
import React from 'react';
import { i18n } from './i18n';



export default function Decode() {
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
      <a className='home' href='/'>{i18n.t('messages.home')}</a>
      <div className='text'> 
         <span className='title'>DECODE IMMO OFF AIRBAG</span>
     </div>
      
      <div className="carousel1" ref={carousel}>
          <div class="item">  
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/file/8twedo7njay4oip/25320_ix_35__clear_tested_ok_.bin/file' target="_blank">iX 35 clear tested</a>
              <a className='name' href='https://www.mediafire.com/file/3vkq3ehywyw0q1m/25320_ix_35__crash.bin/file' target="_blank">iX 35 crash</a>
              <a className='name' href='https://www.mediafire.com/file/9191dapet884d89/29F200BB__0_132_900_008_LUK_G1_D3_006_09_C.BIN/file' target="_blank">LUK G1 D3</a>
              <a className='name' href='https://www.mediafire.com/file/2x8h4n90rchnnp8/307_1.6_benzin.rar/file' target="_blank">307 1.6 benzin</a>
              <a className='name' href='https://www.mediafire.com/file/k62hvkbd5ijtwct/5NP02_ST95160_IMMO_OFF_FINAL_C2.BIN/file' target="_blank">5NP02 ST95160 IMMO OFF FINAL C2</a>
              <a className='name' href='https://www.mediafire.com/file/gx9a050mdaoo09u/5NP02_ST95160_IMMO_OFF_FINAL_C5.BIN/file' target="_blank">5NP02 ST95160 IMMO OFF FINAL C5</a>
              <a className='name' href='https://www.mediafire.com/file/hubibmknob2dyh8/5NP02_ST95160_IMMO_OFF_PARCIALE.BIN/file' target="_blank">5NP02 ST95160 IMMO OFF PARCIAL</a>
              <a className='name' href='https://www.mediafire.com/file/qjwpox4uysiw68y/607_2.2hdi.rar/file' target="_blank">607 2.2hdi</a>
              <a className='name' href='https://www.mediafire.com/file/ahtbx69nyfrvq5k/6300_pin_out.rar/file' target="_blank">6300 pin out</a>
              <a className='name' href='https://www.mediafire.com/file/66d03mw4zbadik5/8F.5T_IMMO.bin/file' target="_blank">8F.5T IMMO</a>
              <a className='name' href='https://www.mediafire.com/file/3m5k4r1dfmad1ce/95160_GRAVADA_PELO_CARRO_KM_60000.BIN/file' target="_blank">95160 GRAVADA PELO CARRO KM 60000</a>
              <a className='name' href='https://www.mediafire.com/file/126ab3vmflx4cq0/95160_immo_off_4AFB.BIN/file' target="_blank">95160 immo off 4AFB</a>
              <a className='name' href='https://www.mediafire.com/file/p5qqjzt182q9fqf/95160_PAINEL_GRAN_SIENA_2014_ORIGINAL.BIN/file' target="_blank">95160 PAINEL GRAN SIENA 2014 ORIGINAL</a>  
            </div>
          </div>

          <div class="item">  
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/file/pkol1ppn711jf62/95160_PALIO_BLOQUEADA.BIN/file' target="_blank">95160 PALIO BLOQUEADA</a>
              <a className='name' href='https://www.mediafire.com/file/gxsd7hoztgvarq8/95160_REPARADA.BIN/file' target="_blank">95160 REPARADA</a>
              <a className='name' href='https://www.mediafire.com/file/s2nczuqlo8jfjpo/Adam_Laholm_Seat_Ibiza_2000.zip/file' target="_blank">Adam Laholm Seat Ibiza 2000</a>
              <a className='name' href='https://www.mediafire.com/file/710y61bhi1de323/AIR_BAG_UNOVIVACE95640_51922085_OK_.zip/file' target="_blank">AIR BAG UNOVIVACE 95640</a>
              <a className='name' href='https://www.mediafire.com/file/d731f30h56jnwxv/AM29F200BB-FREE%2521%2521-ok%2521.rar/file' target="_blank">AM29F200BB FREE</a>
              <a className='name' href='https://www.mediafire.com/file/7yc2wzqpt19awfr/CDM20814_WHQL_Certified.zip/file' target="_blank">CDM 20814</a>
              <a className='name' href='https://www.mediafire.com/file/sok50i4bnf9dtdi/cdr2005_GM_OPEL_SERIAL_4626.rar/file' target="_blank">GM OPEL SERIAL 4626</a>
              <a className='name' href='https://www.mediafire.com/file/x2ui4t8j4pqjmpe/CELTA.txt/file' target="_blank">CELTA</a>
              <a className='name' href='https://www.mediafire.com/file/trhx7i2hxuzngdk/DECODE_5NP02.BIN/file' target="_blank">DECODE 5NP02</a>
              <a className='name' href='https://www.mediafire.com/view/pda6jvrf0di3wjv/DRIVER_BICOS_MOTOR_DE_PASSO_CANISTER_MARELLI.jpg/file' target="_blank">DRIVER BICOS MOTOR DE PASSO CANISTER MARELLI</a>
              <a className='name' href='https://www.mediafire.com/view/5olj1lyp6acdj0t/DRIVER_MARELLI.jpg/file' target="_blank">DRIVER MARELLI</a>
              <a className='name' href='https://www.mediafire.com/file/pfbvkaifril1xmz/DUMP_TEST.BIN/file' target="_blank">DUMP TEST</a>
              <a className='name' href='https://www.mediafire.com/file/z6i4piym5bdrbcp/edc17.rar/file' target="_blank">EDC17</a>
               
            </div>
          </div>

          <div class="item">  
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/file/hks1oeo2ia1yn81/FFFFFF.BIN/file' target="_blank">FFFFFF</a>
              <a className='name' href='https://www.mediafire.com/file/a7fj98v9nw3hibu/flash_file.zip/file' target="_blank">FLASH FILE</a>
              <a className='name' href='https://www.mediafire.com/file/tdxqqu7fwr5zngl/golf_0281010091.rar/file' target="_blank">GOLF 0281010091</a>
              <a className='name' href='https://www.mediafire.com/file/ug90l72kr9hper2/GRAN_SIENA_ODOMETRO_ALTERADO_PARA_60000__COM_TEMPERATURA_DE_AC_E_RADIO.BIN/file' target="_blank">GRAN SIENA ODOMETRO ALTERADO PARA 60000 COM TEMPERATURA DE AC E RADIO</a>
              <a className='name' href='https://www.mediafire.com/file/gauqjahjpl12ad5/GRAN_SIENA_TESTE_50_KM.BIN/file' target="_blank">GRAN SIENA TESTE 50 KM</a>
              <a className='name' href='https://www.mediafire.com/file/lnni7rztgy7mslq/IAW_5NP02_ST95160_SOIC_8_CLIO_10_16V_2002_ORIGINAL.BIN/file' target="_blank">IAW 5NP02 ST95160 SOIC 8 CLIO 10 16V 2002 ORIGINAL</a>
              <a className='name' href='https://www.mediafire.com/file/8jtonvuc78pslow/Iaw_8f_16f_18f_decode_%25281%2529.rar/file' target="_blank">IAW 8F 16F 18F DECODE</a>
              <a className='name' href='https://www.mediafire.com/file/o8692lhy38c518i/immo_off/file' target="_blank">IMMO OFF</a>
              <a className='name' href='https://www.mediafire.com/file/peauj551yvdupr0/Immo_OFF.rar/file' target="_blank">IMMO OFF</a>
              <a className='name' href='https://www.mediafire.com/file/554e6h1lzpolro9/iveco_edc17cp52_All_.bin/file' target="_blank">IVECO  EDC17CP52</a>
              <a className='name' href='https://www.mediafire.com/file/euniaq8hhnw33bw/Iveco_immo_on.bin/file' target="_blank">IVECO IMMO ON</a>
              <a className='name' href='https://www.mediafire.com/file/4l2atq7pjgri2wz/Iveco_immo_on.rar/file' target="_blank">IVECO IMMO ON</a>
              
            </div>
          </div>

          <div class="item">  
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/file/cr1exyj6fz2mkxo/Link.txt/file' target="_blank">LINK</a>
              <a className='name' href='https://www.mediafire.com/file/xsd20wejnng53dm/Manual_ST10_Tec.doc.doc/file' target="_blank">MANUAL  ST10</a>
              <a className='name' href='https://www.mediafire.com/file/q6sm55uaofd7q8i/Mercedes_Start_Error.rar/file' target="_blank"> MERCEDES START ERROR</a>
              <a className='name' href='https://www.mediafire.com/file/i9bkvfo8prnbt56/MERIVA_EASYTRONIC_DUMP_ECU_TRANSMISSAO.rar/file' target="_blank">MERIVA EASYTRONIC DUMP ECU TRANSMISSAO</a>
              <a className='name' href='https://www.mediafire.com/file/zvle2cxu780aqj4/MTA.rar/file' target="_blank">MTA</a>
              <a className='name' href='https://www.mediafire.com/file/3sxluxyc7pesbor/nnnnnn.bin/file' target="_blank">NNNN</a>
              <a className='name' href='https://www.mediafire.com/file/kdiiebd7n6ohh3c/Peugeot_and_Citroen_virgin_e_immo_off_%25281%2529.rar/file' target="_blank">Peugeot and Citroen virgin e immo off</a>
              <a className='name' href='https://www.mediafire.com/file/4om0ak52kl22ejd/Peugeot-killer.rar/file' target="_blank">Peugeot killer</a>
              <a className='name' href='https://www.mediafire.com/file/559q44z2dlg9nw2/PIN_DATA_FIAT_IAW8F.5T.rar/file' target="_blank">PIN DATA FIAT IAW8F.5T</a>
              <a className='name' href='https://www.mediafire.com/file/kagph39rlisxl5n/PROCEDIMENTO_KM_GRAN_SIENA.txt/file' target="_blank">PROCEDIMENTO KM GRAN SIENA</a>
              <a className='name' href='https://www.mediafire.com/file/tmlm5evah5gttbo/STANOPASSATECU24C02.rar/file' target="_blank">STANOPASSATECU24C02</a>
              <a className='name' href='https://www.mediafire.com/file/shu0jubvhr1nosj/volvo_1%252C9dci.rar/file' target="_blank">VOLVO</a>
              <a className='name' href='https://www.mediafire.com/file/qrjkm2im3um90c3/AirBag_Resetter_6.4.rar/file' target="_blank">AirBag Resetter 6.4</a>  
            </div>
          </div>

          <div class="item">  
            <div className='info'>
            <a className='name' href='https://www.mediafire.com/file/eardnev96v00nim/lect_orig_ecu_IAW8F.5T_UPA.rar/file' target="_blank">IAW8F.5T UPA</a>
            <a className='name' href='https://www.mediafire.com/file/5hg9rfmo37w1hk0/F1_HAM_IMMOSUZ_gri_sah%25C4%25B1n_ok.rar/file' target="_blank">F1 HAM IMMOSUZ</a>

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

