import { useEffect, useState, useRef } from 'react';
import './Pages.css';
import React from 'react';


export default function Pesada() {
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
      <a className='home' href='/'>Voltar</a>
      <div className='text'> 
         <span className='title'>ELÉTRICA E MECÂNICA PESADA</span>
     </div>
      
       <div className="carousel1" ref={carousel}>
           <div class="item">  
              <div className='info'>
                 <a className='name' href='https://www.mediafire.com/file/2rj2zmrl1p3onmd/-MP-PI-e-Tacografo-ok-pdf.pdf/file' target="_blank">MP PI e Tacografo</a>
                 <a className='name' href='https://www.mediafire.com/file/fstoiwy3tar17wp/149517141-Manual-de-esquema-eletrico-SCANIA.pdf/file' target="_blank">SCANIA</a>
                 <a className='name' href='https://www.mediafire.com/file/7f79tf3fp06owp9/276299041-Diagrama-Eletrico-IAW-4GF.pdf/file' target="_blank">Diagrama Eletrico IAW 4GF</a>
                 <a className='name' href='https://www.mediafire.com/file/6l1rmvj4xyv5h3f/365065794-Diagrama-Eletrico-Pajero-full.pdf/file' target="_blank">Diagrama Eletrico Pajero full</a>
                 <a className='name' href='https://www.mediafire.com/file/ldxqpjplhqm604m/439042921-SISTEMA-ELETRICO-PGRT-16-07-01-72-PG-pdf.pdf/file' target="_blank">SISTEMA ELETRICO PGRT SCANIA</a>
                 <a className='name' href='https://www.mediafire.com/file/v54azzn4upt8njf/AMAROK_MANUAL.pdf/file' target="_blank">AMAROK MANUAL</a>
                 <a className='name' href='https://www.mediafire.com/file/4ff7wc62ir59pso/DIAGRAMAS_LINHA_DIESEL.zip/file' target="_blank">DIAGRAMAS LINHA DIESEL</a>
                 <a className='name' href='https://www.mediafire.com/file/m4l2y5zmfuwwsea/Esquema_El%25C3%25A9trcio_Motor_NGD_9.3.pdf/file' target="_blank">Esquema Eletrico Motor NGD</a>
                 <a className='name' href='https://www.mediafire.com/file/ed0zcj704yi6ljr/Esquema_El%25C3%25A9trico_Acteon_Agrale.pdf/file' target="_blank">Esquema Eletrico Acteon Agrale</a>
                 <a className='name' href='https://www.mediafire.com/file/nwrbsko8jwts994/Esquema_El%25C3%25A9trico_Acteon_International.pdf/file' target="_blank">Esquema Eletrico Acteon International</a>
                 <a className='name' href='https://www.mediafire.com/file/93wxa4my93q2zd8/Esquema_El%25C3%25A9trico_Acteon_VW_Caminh%25C3%25B5es_%2528Insurance%2529.pdf/file' target="_blank">Esquema Eletrico Acteon VW Caminhoes Insurance</a>
                 <a className='name' href='https://www.mediafire.com/file/7fzhvg8cs6lac2u/Esquema_El%25C3%25A9trico_Acteon_VW_Caminh%25C3%25B5es_%2528NFB%2529.pdf/file' target="_blank">Esquema Eletrico Acteon VW Caminhoes NFB</a>
                 <a className='name' href='https://www.mediafire.com/file/rfprqe6pkt3o0w0/Esquema_El%25C3%25A9trico_Acteon_VW_Onibus.pdf/file' target="_blank">Esquema Eletrico Acteon VW_Onibus</a>
              </div>
           </div>
            
           <div class="item">  
              <div className='info'>
                 <a className='name' href='https://www.mediafire.com/file/pu3gjf1zyt7p8ug/Esquema_El%25C3%25A9trico_Agrale_-EDC_16C8.pdf/file' target="_blank">Esquema Eletrico Agrale EDC 16C8</a>
                 <a className='name' href='https://www.mediafire.com/file/warqakbx2ixg66z/Esquema_El%25C3%25A9trico_Constellation_CM850_VW_%25281%2529.pdf/file' target="_blank">Esquema Eletrico Constellation CM850 VW</a>
                 <a className='name' href='https://www.mediafire.com/file/uxpdgwbsjx5q2ck/Esquema_El%25C3%25A9trico_Constellation_Motor_Cummisn_Interact.pdf/file' target="_blank">Esquema Eletrico Constellation Motor Cummisn Interact</a>
                 <a className='name' href='https://www.mediafire.com/file/74e06y6fo8zmtdb/Esquema_El%25C3%25A9trico_Constellation12__V1.pdf/file' target="_blank">Esquema Eletrico Constellation12</a>
                 <a className='name' href='https://www.mediafire.com/file/bknz5bkimbe4fxr/Esquema_El%25C3%25A9trico_Delivery_5-140__8-150.pdf/file' target="_blank">Esquema Eletrico Delivery 5-140 8-150</a>
                 <a className='name' href='https://www.mediafire.com/file/7r2xuphmpn3az9r/Esquema_El%25C3%25A9trico_Delivery_Motor_MWM.pdf/file' target="_blank">Esquema Eletrico Delivery Motor MWM</a>
                 <a className='name' href='https://www.mediafire.com/file/tphn455a84ieo2u/Esquema_El%25C3%25A9trico_Ducato_2.8_Multi_Jet.pdf/file' target="_blank">Esquema Eletrico Ducato 2.8 Multi Jet</a>
                 <a className='name' href='https://www.mediafire.com/file/4krpeg1ug2nc05l/Esquema_El%25C3%25A9trico_International_9.3_L.pdf/file' target="_blank">Esquema Eletrico International 9.3L</a>
                 <a className='name' href='https://www.mediafire.com/file/2aisq04mb0mv4cq/Esquema_El%25C3%25A9trico_Intrernational_VW.pdf/file' target="_blank">Esquema Eletrico Intrernational VW</a>
                 <a className='name' href='https://www.mediafire.com/file/zf2x8vragcnu10d/Esquema_El%25C3%25A9trico_Maxx_Force.pdf/file' target="_blank">Esquema Eletrico Maxx Force</a>
                 <a className='name' href='https://www.mediafire.com/file/lgdwxoe5ud0jkyb/Esquema_El%25C3%25A9trico_Mercedes_Caminh%25C3%25B5es_-_PLD_-_ADM.pdf/file' target="_blank">Esquema Eletrico Mercedes Caminhoes PLD ADM</a>
                 <a className='name' href='https://www.mediafire.com/file/n9td2ktruploeh4/Esquema_El%25C3%25A9trico_Mitsubishi_L200_2.5_-_MPI_3.pdf/file' target="_blank">Esquema Eletrico Mitsubishi L200 2.5</a>
                 <a className='name' href='https://www.mediafire.com/file/dux67s59moe2eup/Esquema_El%25C3%25A9trico_Mitsubishi_Pajero_3.2_-_MPI_3.pdf/file' target="_blank">Esquema Eletrico Mitsubishi Pajero 3.2</a>
              </div>
           </div>

           <div class="item">  
              <div className='info'>
                 <a className='name' href='https://www.mediafire.com/file/fgjd00alyq6j1ad/Esquema_El%25C3%25A9trico_Nissan_-_EDC_16C8.pdf/file' target="_blank">Esquema Eletrico Nissan EDC 16C8</a>
                 <a className='name' href='https://www.mediafire.com/file/wmgaemm3dpekdpl/Esquema_El%25C3%25A9trico_Ranger_3.0_-_SID_901_CAN.pdf/file' target="_blank">Esquema Eletrico Ranger 3.0 SID901 CAN</a>
                 <a className='name' href='https://www.mediafire.com/file/n6zi90qa07mg380/Esquema_El%25C3%25A9trico_S10_-_EDC__16C9_-_C%25C3%25B3pia.pdf/file' target="_blank">Esquema Eletrico S10 EDC 16C9</a>
                 <a className='name' href='https://www.mediafire.com/file/0ovvs8dbgivjx6e/Esquema_El%25C3%25A9trico_Scania_-_MS_6.2.pdf/file' target="_blank">Esquema Eletrico Scania MS6.2</a>
                 <a className='name' href='https://www.mediafire.com/file/62adyiy9qe9ap81/Esquema_El%25C3%25A9trico_Scania_HPI_-_EDC_S6_Motorolla.pdf/file' target="_blank">Esquema Eletrico Scania HPI EDC S6 Motorolla</a>
                 <a className='name' href='https://www.mediafire.com/file/f2h4mea0r2mlb3d/Esquema_El%25C3%25A9trico_SD_105.pdf/file' target="_blank">Esquema Eletrico SD 105</a>
                 <a className='name' href='https://www.mediafire.com/file/8dun143bruy81k1/Esquema_El%25C3%25A9trico_Strallis_Iveco_-_MS_6.2.pdf/file' target="_blank">Esquema Eletrico Strallis Iveco MS 6.2</a>
                 <a className='name' href='https://www.mediafire.com/file/j6na1lhv1bv08ev/Esquema_El%25C3%25A9trico_Toyota_Hilux_2.5_-_Toyota_Denso_1.pdf/file' target="_blank">Esquema Eletrico Toyota Hilux 2.5 Denso</a>
                 <a className='name' href='https://www.mediafire.com/file/b24jkxejsewm7sn/Esquema_El%25C3%25A9trico_Tracker_2003_-_ECU_com_conector_Triplo.pdf/file' target="_blank">Esquema Eletrico Tracker_2003</a>
                 <a className='name' href='https://www.mediafire.com/file/ll2lxfo3bsui9pq/Esquema_El%25C3%25A9trico_Volvo_-_D12A.pdf/file' target="_blank">Esquema Eletrico Volvo D12A</a>
                 <a className='name' href='https://www.mediafire.com/file/k4uf2t1rk60shtz/Esquema_El%25C3%25A9trico_Volvo_-_TEA_D13A.pdf/file' target="_blank">Esquema Eletrico Volvo TEA D13A</a>
                 <a className='name' href='https://www.mediafire.com/file/pse7sbv3xny2rfb/Esquema_El%25C3%25A9trico_Volvo_-_TEA.pdf/file' target="_blank">Esquema Eletrico Volvo TEA</a>
                 <a className='name' href='https://www.mediafire.com/file/9bvcofyvbyhmkdf/Esquema_El%25C3%25A9trico_Volvo_-_VECU.pdf/file' target="_blank">Esquema Eletrico Volvo VECU</a>
              </div>
           </div>

           <div class="item">  
              <div className='info'>
                 <a className='name' href='https://www.mediafire.com/file/3pzrq3c9kxfs82a/Esquema_El%25C3%25A9trico_VW_-_EDC_16C8.pdf/file' target="_blank">Esquema Eletrico VW EDC 16C8</a>
                 <a className='name' href='https://www.mediafire.com/file/ci3z2rtwrsam8qa/Esquema_El%25C3%25A9trico_VW_e_Cummins_-_EDC_07_ISC_4_cilindros.pdf/file' target="_blank">Esquema Eletrico VW e Cummins EDC 07 ISC 4 cilindros</a>
                 <a className='name' href='https://www.mediafire.com/file/na3q6l5czm80zv9/Esquema_El%25C3%25A9trico_VW_e_Cummins_-_EDC_07_ISC_6_cilindros.pdf/file' target="_blank">Esquema Eletrico VW e Cummins EDC 07 ISC 6 cilindros</a>
                 <a className='name' href='https://www.mediafire.com/file/x84l4gu1qruhak1/Esquema_El%25C3%25A9trico_Worker_Motor__MWM.pdf/file' target="_blank">Esquema Eletrico Worker Motor MWM</a>
                 <a className='name' href='https://www.mediafire.com/file/59xg8x4ywlq2lle/Esquema_El%25C3%25A9trico_Worker_Motor_Cummins_Interact.pdf/file' target="_blank">Esquema Eletrico Worker Motor Cummins</a>
                 <a className='name' href='https://www.mediafire.com/file/ntjng9a7ly0fek5/Esquema_Eletrico_Acteon_Volvo_-_EDC_7.pdf/file' target="_blank">Esquema Eletrico Acteon Volvo EDC 7</a>
                 <a className='name' href='https://www.mediafire.com/file/eb1q7ljdxapho49/Esquema_Eletrico_Caterpillar_3116.pdf/file' target="_blank">Esquema Eletrico Caterpillar 3116</a>
                 <a className='name' href='https://www.mediafire.com/file/8udk9rr7qa6txcl/Esquema_Eletrico_Sprinter_-_EDC_15C6.pdf/file' target="_blank">Esquema Eletrico Sprinter EDC 15C6</a>
                 <a className='name' href='https://www.mediafire.com/file/5r0z7xjwdpgi68k/Esquema_Eletrico_Strallis_Iveco_-_MS_6.2.pdf/file' target="_blank">Esquema Eletrico Strallis Iveco MS 6.2</a>
                 <a className='name' href='https://www.mediafire.com/file/2x3q8yd26a6g80o/Esquema_Eletrico_Volvo_-_EDC_Semi_Eletr%25C3%25B4nico.pdf/file' target="_blank">Esquema Eletrico Volvo EDC</a>
                 <a className='name' href='https://www.mediafire.com/file/4aaejuh5hb7o6ia/Esquema_pneum%25C3%25A1tico_D12D.pdf/file' target="_blank">Esquema pneumatico D12D</a>
                 <a className='name' href='https://www.mediafire.com/file/9nn77dznid5qutg/SENSORES_E_ATUADORES_PEUGEOT_CITROEN.pdf/file' target="_blank">SENSORES E ATUADORES PEUGEOT CITROEN</a>
                 <a className='name' href='' target="_blank"></a>
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

