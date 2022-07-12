import { useEffect, useState, useRef } from 'react';
import './Pages.css';
import React from 'react';
import { i18n } from './i18n';



export default function Remap() {
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
         <span className='title'>SOFTWARES</span>
     </div>
    
      <div className="carousel1" ref={carousel}>
        <div class="item">  
        <div className='info'>
        <a className='name' href='https://www.mediafire.com/file/t2242peivp805ag/AEMTuner_2.98.exe_%25281%2529.zip/file' target="_blank">AEMTuner_2.98</a>
        <a className='name' href='https://www.mediafire.com/file/m8zvjihu0tz1vzn/ALIENTECH_KSuite_HT_Setup_v2.exe/file' target="_blank">ALIENTECH_KSuite_HT</a>
        <a className='name' href='https://www.mediafire.com/file/i1x9cmjoio2invi/Bosch_ecu_NUMBER.rar/file' target="_blank">Bosch_ECU_NUMBER</a>
        <a className='name' href='https://www.mediafire.com/file/ykrn4f1d6epw2ih/BoschECUDatabase.rar/file' target="_blank">BoschECUDatabase</a>
        <a className='name' href='https://www.mediafire.com/file/8uzb5usekj5qeh3/checksum_corrector-20220530T123913Z-001.zip/file' target="_blank">Checksum Corrector</a>
        <a className='name' href='https://www.mediafire.com/file/vbu3bb8up3kru3a/checksum_corrector.zip/file' target="_blank">Checksum Corrector V2</a>
        <a className='name' href='https://www.mediafire.com/file/jugwvbs8draeq17/ChekSumBosch.zip/file' target="_blank">ChekSum Bosch</a>
        <a className='name' href='https://www.mediafire.com/file/x3j71eyjvs0wm8c/Chiptuning_Kennfelder_Audi_Fiat_Nissan_Bmw_Opel_Vw.rar/file' target="_blank">Chiptuning Kennfelder Audi Fiat Nissan Bmw Opel Vw</a>
        <a className='name' href='https://www.mediafire.com/file/ifjxeogot4dwmbg/conections.zip/file' target="_blank">Conections</a>
        <a className='name' href='https://www.mediafire.com/file/6ncagtupr0pdxeb/CrankWheelPulser1.001.exe/file' target="_blank">Crank Wheel Pulser</a>
        <a className='name' href='https://www.mediafire.com/file/ngqlq4uy91karex/Dicatec.zip/file' target="_blank">Dicatec</a>
        <a className='name' href='https://www.mediafire.com/file/k1cqe2o2x34zksq/DTCRemover.rar/file' target="_blank">DTCRemover</a>
        <a className='name' href='https://www.mediafire.com/file/i8mjv33vvltn553/DTCRemover_MarckStore_%25281.8.8%2529.zip/file' target="_blank">DTCRemover_MarckStore</a>
          
        </div>
        </div>

        <div class="item">
        <div className='info'>
          <a className='name' href='https://www.mediafire.com/file/uqttptc33potq7a/EugeneSetup_v2.32.exe/file'>Eugene V2.32</a>
          <a className='name' href='https://www.mediafire.com/file/8ui401oeqp3qtaq/flash.rar/file'>Flash</a>
          <a className='name' href='https://www.mediafire.com/file/77n4fzmcjitr369/FlashKit29_%25282%2529.rar/file'>FlashKit29</a>
          <a className='name' href='https://www.mediafire.com/file/zqtdbxpjs1jd9br/FORScanSetup2.3.10.beta.exe/file'>FORScan 2.3.10</a>
          <a className='name' href='https://www.mediafire.com/file/3pt861ze8kg42ux/ftmanager.zip/file'>FT Manager</a>
          <a className='name' href='https://www.mediafire.com/file/v90ohyv210pqr78/keygen_autocom_2020.23_by_rolex_tech.rar/file'>Autocom</a>
          <a className='name' href='https://www.mediafire.com/file/xmkukob2vuz63os/Ksuite253.rar/file'>Ksuite 2.53</a>
          <a className='name' href='https://www.mediafire.com/file/58mga5vgpp46glk/KTM_BENCH.rar/file'>KTM_BENCH</a>
          <a className='name' href='https://www.mediafire.com/file/ivn33qxegq1b2jm/m1_tune_1.4.0.0286.exe/file'>M1 TUNE 1.4.0.0286</a>
          <a className='name' href='https://www.mediafire.com/file/pdoqxqsmwky3sw0/Mecanica_2000.rar/file'>Mecanica 2000</a>
          <a className='name' href='https://www.mediafire.com/file/s7cjujum4ddouun/MTune-installer-1.142.exe/file'>Mtune installer 1.142</a>
          <a className='name' href='https://www.mediafire.com/file/5yztrx714og65qn/new_trasdata_clone.rar/file'>New Trasdata</a>
          <a className='name' href='https://www.mediafire.com/file/x49cokl9opk75th/NexusInstallPackageWeb_v1.37.0.exe/file'>Nexus v1.37.0</a>   
        </div>
        </div>

        <div class="item">
        <div className='info'>
        <a className='name' href='https://www.mediafire.com/file/78cld2y710iqig2/ECUsafe.rar/file' target="_blank">ECUsafe</a>
        <a className='name' href='https://www.mediafire.com/file/i88cihnosb29rci/EGR-Remover-1.4.44-Full_%25281%2529.rar/file' target="_blank">EGR-Remover-1.4.44</a>
        <a className='name' href='https://www.mediafire.com/file/7iriakvpsap0w4r/EMUBlackSetup_2_138_%25281%2529.exe/file' target="_blank">EMU Black</a>
        <a className='name' href='https://www.mediafire.com/file/tdra0lmp4m5dx05/orange_programmer.rar/file'>Orange Programmer</a>
        <a className='name' href='https://www.mediafire.com/file/181cjv49fxwlout/PCLink_EN_6.22.25.exe/file'>PCLink EN 6.22.25</a>
        <a className='name' href='https://www.mediafire.com/file/paui8a5kpq2mjz4/Pinout_ECU.zip/file'>Pinout ECU</a>
        <a className='name' href='https://www.mediafire.com/file/8nxpjwts40e05v9/PSA_ECU_PIN.rar/file'>PSA ECU PIN</a>
        <a className='name' href='https://www.mediafire.com/file/rtk749g5asvfxlq/SetupTunerProRT_v500_9290.exe/file'>TunerProRT v500 9290</a>
        <a className='name' href='https://www.mediafire.com/file/k77e34qs45lqujo/SyvecsSetup-Generic-2021-11-10.exe/file'>SyvecsSetup Generic</a>
        <a className='name' href='https://www.mediafire.com/file/z4t2fucq62m8ko5/techlibrary_termxv2build50.zip/file'>Techlibrary Termxv2build50</a>
        <a className='name' href='https://www.mediafire.com/file/gry32bazrehwmsv/TunerStudioMS_Setup_v3.1.08.exe/file'>TunerStudioMS v3.1.08</a>
        <a className='name' href='https://www.mediafire.com/file/04i4ep7ohp2aiie/upa_scripts.rar/file'>Upa Scripts</a>
        <a className='name' href='https://www.mediafire.com/file/c5l9k44idrylmqc/upa_usb_1.3_softwer.rar/file'>Upa Usb 1.3 softwer</a>
        
        </div>
        </div>

        <div class="item">
        <div className='info'>
        <a className='name' href='https://www.mediafire.com/file/vkex66nmfjcxvfi/WinOls_-4.51_NP_%25281%2529.rar/file'>WinOls 4.51 VM</a>
        <a className='name' href='https://www.mediafire.com/folder/zr5n95qssh704/AUTOCOM'>AUTOCOM</a>
        <a className='name' href='https://www.mediafire.com/folder/gtnvxsu4sk9c7/DIMSPORT'>DIMSPORT</a>
        <a className='name' href='https://www.mediafire.com/folder/8cw0r7ikbhg86/SIMPLO'>SIMPLO</a>
        <a className='name' href='https://www.mediafire.com/folder/g69aij38tdhi6/SMARTPHONE'>SMARTPHONE</a>
        <a className='name' href='https://www.mediafire.com/folder/tzrhmsxthmdo8/SPC+MAX+FULL'>SPC+MAX+FULL</a>
        
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

