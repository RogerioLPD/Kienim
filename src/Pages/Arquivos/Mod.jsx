import { useEffect, useState, useRef } from 'react';
import '../Pages.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { i18n } from '../i18n';



export default function Mod() {
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
         <span className='title'>{i18n.t('messages.modificados')}</span>
     </div>
      
      <div className="carousel1" ref={carousel}>
         <div class="item">  
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/folder/mngn6onfwoi88/Alfa_147_1.9_JTD_16V_2003_Turbodiesel___103KWKW_Bosch_0281011455_55188111_367333_254A.Original' target="_blank">Alfa 147 1.9 JTD 16V 2003 Turbodiesel Bosch</a>
              <a className='name' href='https://www.mediafire.com/folder/v8wk30eit87ac/Alfa_147_1.9_JTD_16V_2003_Turbodiesel___103KWKW_Bosch_0281011455_55188111_367333_77EC.Original' target="_blank">Alfa 147 1.9 JTD 16V 2010 Turbodiesel Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/u2f6lj1o680m3rq/Alfa_147_1.9_JTD_KW_Bosch__67890793700__62F9.Limited_Mappack/file' target="_blank">Alfa 147 1.9  JTD  Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/fwjvtqzp5drl6vt/Alfa__1.4_T_2009_99.3KWKW_51872437__CDAC.TUNPC/file' target="_blank">Alfa 1.4 T 2009 TUNPC</a>
              <a className='name' href='https://www.mediafire.com/file/d36j91zt8ip6fqt/Alfa__1.9_JTD_2004_84.6KWKW_Bosch_0281011488_55198492_372060_C69E.TUNPC/file' target="_blank">Alfa 1.9 T 2009 TUNPC</a>
              <a className='name' href='https://www.mediafire.com/file/upct7nfct9f8tlw/Alfa__1.9_JTD_2008_110.3KWKW_Bosch_0281012883_51806561_386726_C97A.Importierted_Version/file' target="_blank">Alfa 1.9 JTD 2008 Importierted Version</a>
              <a className='name' href='https://www.mediafire.com/file/w8e96syd5jugp0f/Alfa__1.9_JTD_2008_110.3KWKW_Bosch__51806561_386726_41F2.Importierted_Version/file' target="_blank">Alfa 1.9 JTD 2008 Bosch Importierted Version</a>
              <a className='name' href='https://www.mediafire.com/file/9c3rw3lt0x3o9xo/Alfa__1.9_JTD_26-07-2003_84.6KWKW_Bosch_0281010332_55185365_366536_789B.made_of_2.3_JTD_pc1-00004.ols_-_tunpc/file' target="_blank">Alfa 1.9 JTD 2003 Bosch 2.3 JTD</a>
              <a className='name' href='https://www.mediafire.com/file/o1f4oqea73y8qqe/Alfa__2.0JTDM_2011_125KWKW_Bosch_0281018045_51888608_516798_FC9C.TUNNJA/file' target="_blank">Alfa 2.0JTDM 2011 Bosch</a>  
              <a className='name' href='https://www.mediafire.com/file/p3u9twbl2qxh3a4/Alfa__2.0JTDm_2013_125KWKW_Bosch_0281018725_55252369_526916_5031.TUNPC/file' target="_blank">Alfa 2.0JTDm 2013 125KWKW Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/qrkj0pld5v7ff61/Alfa__2.0_JTD_2013_125KWKW_Bosch_0281017782_51892680_515031_B283.tun_pdg/file' target="_blank">Alfa 2.0 JTD 2013 125KWKW Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/a9zd7d4gvzdpypc/Audi_A3_1.8_T_1999_Turbo-Benzin__110.3KWKW_Bosch_0261204806_557B__358127_DED7.Limited_Mappack/file' target="_blank">Audi A3 1.8 T 1999 Turbo Benzin 110.3KWKW Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/utcnbbsl082yezn/Audi_A3_1.9_TDI_2001_Turbodiesel__95.6KWKW_Bosch_0281010308_038906019CK_360763_5CEF.Tuning_OK/file' target="_blank">Audi A3 1.9 TDI 2001 Turbodiesel 95.6KWKW Bosch</a>
            </div>
         </div>

        <div class="item">
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/file/4nwtqzz6zt35hkh/Audi_A3_1.9_TDI_2001_Turbodiesel__95.6KWKW_Bosch_0281010308_038906019CK_360763_E811.Tuning_Fremd_-_OK/file' target="_blank">Audi A3 1.9 TDI 2001 Turbodiesel 95.6KWKW Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/oasnrh13z96ndsx/Audi_A3_2.0TFSI_chain_drive_KW_Bosch_0261204474_8P0907115Q__358187_725C.Limited_Mappack/file' target="_blank">Audi A3 2.0TFSI drive KW Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/ql1917p88jt4hhf/Audi_A3_2.0_TFSI_2010_Turbo-Benzin_147.1KWKW_Bosch_0261S05898_8P0907115Q__502774_1C13.Importierte_Version/file' target="_blank">Audi A3 2.0 TFSI 2010 Turbo Benzin Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/igelpx71xi3zkjq/Audi_A3_2.0_TFSI_2010_Turbo-Benzin_147.1KWKW_Bosch_0261S05898_8P0907115Q__502774_645A.Version_1/file' target="_blank">Audi A3 2.0 TFSI 2010 Turbo Benzin Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/ekh7y0qagg4xgx3/Audi_A4_1.8_TFSI_2010_117.7KWKW_Bosch__8K1907115_503655_0129.Original_182hp_281nm/file' target="_blank">Audi A4 1.8 TFSI 2010 Bosch Original 182hp</a>
              <a className='name' href='https://www.mediafire.com/file/klzrfq5vykry7ia/Audi_A4_1.8_TFSI_2010_117.7KWKW_Bosch__8K1907115_503655_FC39.236hp_355nm/file' target="_blank">Audi A4 1.8 TFSI 2010 Bosch 236hp</a>
              <a className='name' href='https://www.mediafire.com/file/429uvuklvm4rwh9/Audi_A4_2.0_TDI_2011_100KWKW_Bosch__03L906018DN_515572_AF24.Stage1%252B_5084.ols/file' target="_blank">Audi A4 2.0 TDI 2011 100KWKW Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/w2aw8ca716det56/Audi_A4_2.0_TFSI__Benzin__132.4KWKW_Bosch__8K2907115L__513877_0D63.Version_1/file' target="_blank">Audi A4 2.0 TFSI Benzin 132.4KWKW Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/6gswq2r2hojqt4x/Audi_A4_2.7_TDI_CR_139.7KWKW_Bosch__8K0907401_501416_420A.Limited_Mappack/file' target="_blank">Audi A4 2.7 TDI Bosch Limited Mappack</a>  
              <a className='name' href='https://www.mediafire.com/file/9ps3x9281mh05ty/Audi_A5_2.7_TDI_CR_2009_Turbo-Diesel__119.9KWKW_Bosch__8K1907401A__502388_262E.Original_%252B_Limited_Mappack/file' target="_blank">Audi A5 2.7 TDI CR 2009 Turbo-Diesel Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/vs3es1xd6lxu730/Audi_A5_3.0_TDI_CR__Turbo-Diesel__176.5KWKW_Bosch__37390626531_390626_50B7.Original_%252B_Limited_Mappack/file' target="_blank">Audi A5 3.0 TDI CR Turbo-Diesel Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/dli5dqy4fndw4bv/Audi_A5_3.0_TDI_CR__Turbo-Diesel__176.5KWKW_Bosch__8K1907401A__500150_93AF.Original%252BLimited_Mappack/file' target="_blank">Audi A5 3.0 TDI CR Turbo-Diesel Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/klml357tucg1x1h/Audi_A6_3.0_TDI_CR_2011_Turbo-Diesel__176.5KWKW_Bosch__4F0907401E__516623_91B9.readout/file' target="_blank">Audi A6 3.0 TDI CR 2011 Turbo-Diesel Bosch readout</a>  
            </div>
        </div>

        <div class="item">
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/file/njiwvky235mf4ze/Audi_A6_3.0_TDI_CR_2011_Turbo-Diesel__176.5KWKW_Bosch__4F0907401E__516623_F3D2.madeorg/file' target="_blank">Audi A6 3.0 TDI CR 2011 Turbo-Diesel Bosch </a>
              <a className='name' href='https://www.mediafire.com/file/p9etcxlls6eafug/Audi_A8_4.2_TDI_2008_Turbodiesel__239.8KWKW_Bosch__4E1907409A__392905_DC1C.Nur_V-Max/file' target="_blank">Audi A8 4.2 TDI 2008 Turbo diesel Bosch Nur V-Max</a>
              <a className='name' href='https://www.mediafire.com/file/7ccbc7ozqb4e01w/Audi_Q3_2.0_TDI_CR_2012_Turbo-Diesel_103KWKW_Bosch_03L906018CM_03L906018ES_521662_4D5F.Stgae1/file' target="_blank">Audi Q3 2.0 TDI CR 2012 Turbo-Diesel Bosch Stgae1</a>
              <a className='name' href='https://www.mediafire.com/file/j81wxx3urbw7pdi/Audi_Q5_3.0_TDI_CR_2009_Turbo-Diesel__155.2KWKW_Bosch__4L0907401A__518087_13ED.tunpdg/file' target="_blank">Audi Q5 3.0 TDI CR 2009 Turbo-Diesel Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/f32nxs3bqt4axqx/Audi_RS6_5.0_TFSI_V10_386.1KWKW_Bosch_0261S02710_420907552A__507879_174F.Limited_Mappack/file' target="_blank">Audi RS6 5.0 TFSI V10 Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/i04w0ffdn3eyhtv/Audi_RS6_KW_Bosch__4H0906014_544979_098D.Importierte_Version/file' target="_blank">Audi RS6  Bosch Importierte Version</a>
              <a className='name' href='https://www.mediafire.com/file/bg38zjtrs74bst4/Audi_RS6_KW_Bosch__4H0906014_544979_1017.with_cks/file' target="_blank">Audi RS6  Bosch With CKS</a>
              <a className='name' href='https://www.mediafire.com/file/n10rq8u5jeo1nuf/Audi_S4_4.2_V8_2005_Benzin_253KWKW_Bosch_0261208776_8E0907560_374035_D0DA.Importierte_Version/file' target="_blank">Audi S4 4.2 V8 2005 Benzin Bosch Importierte Version</a>
              <a className='name' href='https://www.mediafire.com/file/ozadiatey1tn9ch/Audi_TT_3.2_VR6_Quattro_KW_Bosch_0261208234_022906032DR_501204_696E.Limited_Mappack/file' target="_blank">Audi TT 3.2 VR6 Bosch Limited Mappack</a>  
              <a className='name' href='https://www.mediafire.com/file/flf7c9sv13qq2sj/Audi_KW_Bosch_0261B04884_5F14.Limited_Mappack/file' target="_blank">Audi Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/ang4tu05r4rb90l/BMW_118D_cabrio_2013_Turbo-Diesel__105.2KWKW_Bosch__O_73T1IB032A_518800_2628.tunpdg_part_Stage1%252B_9518.ols/file' target="_blank">BMW 118D cabrio 2013 Turbo-Diesel  Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/jmslis6k664y566/BMW_120D_KW_Bosch_0281011763__3618XX_70E5.Limited_Mappack/file' target="_blank">BMW 120D Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/22q8qwgxk9mvi4i/BMW_530D_530D_2010_Turbo-Diesel__180.2KWKW_Bosch__O_78T7-00000972-024__51F9.tun_pdg_made_of_Stage1%252B_zocyjem.ols/file' target="_blank">BMW 530D 2010 Turbo-Diesel Bosch</a>
            </div>
        </div>

        <div class="item">
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/file/0d6pmjyxc7ul3aj/BMW_530d_GT_530D_2010_Turbo-Diesel__180.2KWKW_Bosch__O_78T8-00000972-024__4DFA.Stage1%252B_made_of_00432.ols/file' target="_blank">BMW GT 530D 2010 Turbo-Diesel Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/qietvll062t11xm/BMW_E39_540i_1998_Benzin__210.4KWKW_Bosch_0261204620__356367_7AB6.Tuning_OK/file' target="_blank">BMW 540i 1998 Benzin Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/z8li6rsv8yr0zf2/BMW_E46_3.0i_KW_Siemens_5WK90014__430055_A427.Limited_Mappack/file' target="_blank">BMW E46 3.0i Siemens Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/34ajgzk7pan1r4f/BMW_E46_330D_2005_Turbodiesel_150KWKW_Bosch_0281011223_Bosch__361842_7B43.Stage123/file' target="_blank">BMW E46 330D 2005 Turbodiesel Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/mvp2evr8z56qzqb/BMW_E60-E61_3.0d_2004_Turbo-Diesel__200.1KWKW_Bosch_0281013852_O_629965_390198_251C.tuning_ok/file' target="_blank">BMW E60-E61 3.0d 2004 Turbo-Diesel Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/5sbf2790a26w34v/BMW_E60-E61_525D_2008_145KWKW_Bosch__O_32JAE5_500774_E493.Version_1/file' target="_blank">BMW E60-E61 525D 2008 Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/09jwxcxni9ixc8a/BMW_E65_2.0d_2009_Turbo-Diesel__155.2KWKW_Bosch_0281016728__X_78SS-000009D0-086__5DAF.msi_100183.ols_Stage1%252B/file' target="_blank">BMW E65 2.0d 2009 Turbo-Diesel Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/v59uinlwtaeucdw/BMW_E83_X3-2.0D_2010_Turbo-Diesel__KW_Bosch_0281B02510_168A.Limited_Mappack/file' target="_blank">BMW E83 X3-2.0D 2010 Turbo-Diesel Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/vd7i3cr4n9zvi7w/BMW_E90-E91%252C_DAM_335i_Turbo_225.1KWKW_Siemens_5E62.Limited_Mappack/file' target="_blank">BMW 335i Turbo Siemens Limited Mappack</a>  
              <a className='name' href='https://www.mediafire.com/file/6mc7oh0c85m6xth/BMW_E90-E91-_E92-E93_2.0d_2007_Turbo-Diesel_130.2KWKW_Bosch__O_73MPIB585A_396564_172A.Importierte_Version/file' target="_blank">BMW E90-E91- E92-E93 2.0d 2007 Turbo-Diesel Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/snj607ctl5z79d4/BMW_E90-E91_335i_KW_Siemens_9973.Limited_Mappack/file' target="_blank">BMW E90-E91 335i Siemens Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/ycyoelrhnru2366/BMW_E92-E93_M3_4.0i_V8__Benzin__308.9KWKW_Siemens_F8DB.Limited_Mappack/file' target="_blank">BMW E92-E93 M3 4.0i V8 Benzin Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/ewss5xvlpwy3wns/BMW_N20_Engine_2.0T_%2528DAMOS%2529_N20B20_KW_Bosch_0261B13114_30B9.Limited_Mappack/file' target="_blank">BMW N20 2.0T Bosch Limited Mappack</a>
            </div>
        </div>

        <div class="item">
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/file/mt3kk50k51qnosc/BMW_x1_2.0d_2010_Turbo-Diesel__105.2KWKW_Bosch__O_73S7UB141A_507453_6CAE.Stage1%252B_01260.ols/file' target="_blank">BMW x1 2.0d 2010 Turbo-Diesel Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/m6yznf7wkbk601a/BMW_x3_2.0d_2008_Turbo-Diesel__119.9KWKW_Bosch__O_70MEHC189A_391389_D2C9.Stage1%252B_made_of_9576.ols/file' target="_blank">BMW x3 2.0d 2008 Turbo-Diesel Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/iioghkoowd13j19/BMW__730d_2011_Turbo-Diesel__155.2KWKW_Bosch__O_78T8-000009D0-046__5D56.Original_216hp_510NM/file' target="_blank">BMW 730d 2011 Turbo-Diesel Bosch 216hp</a>
              <a className='name' href='https://www.mediafire.com/file/cwkwftd4q7e927t/BMW__730d_2011_Turbo-Diesel__155.2KWKW_Bosch__O_78T8-000009D0-046__D879.Stage1%252B_zocyjem.ols_%2528308hp_553_Nm%2529/file' target="_blank">BMW 730d 2011 Turbo-Diesel Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/ugqu9r726x4c5gp/BMW__F10_2009_119.9KWKW_Bosch__O_71S7DC121A_509478_EC86.Original_173_pk_en_339_Nm/file' target="_blank">BMW F10 2009 Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/evrzqaizbe97des/BMW_KW_Bosch_0281012191__372066_5542.Limited_Mappack/file' target="_blank">BMW Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/7kbaicfteljys97/BMW_KW_Siemens_E4BB.Limited_Mappack/file' target="_blank">BMW Siemens Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/67rwrrq1ohdjsog/BMW_KW_63D9.Limited_Mappack/file' target="_blank">BMW Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/dwtuqsm96173t6q/Chevrolet_Cruze_2.0_VCDI_2011_119.9KWKW_Delphi__03P906021B__DCM3.7-B1E-UGB69J-Z20-J309-A2-118-V-ME-P-D-101104_CCEC.AT_ORI_%252B_damos_maps/file' target="_blank">Chevrolet Cruze 2.0 VCDI 2011 Delphi</a>  
              <a className='name' href='https://www.mediafire.com/file/fwr0s02o0n2v3xy/Chrysler_Grand_Cherokee_2.8_CRD_2005_Turbo-Diesel__139.7KWKW_Bosch__CR4C-642-52W1-WK-BIN10_OP-160kW-DPF_DL_4x2_with_Dpf_EGS53-300__D840.Limited_Mappack/file' target="_blank">Chrysler Grand Cherokee 2.8 2005 Turbo-Diesel Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/jt3zolkd0m9ekgk/Fiat_croma_1.9_JTD_KW_Bosch_0281012149_51822364_391922_E279.Limited_Mappack/file' target="_blank">Fiat croma 1.9 JTD Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/j47cxzr9way5g8r/Fiat_Ducato_2.3_MULTIJET_2013_95.6KWKW_55246589__81A6.100%2525_Stage1%252B_6244.ols/file' target="_blank">Fiat Ducato 2.3 MULTIJET 2013</a>
              <a className='name' href='https://www.mediafire.com/file/p3vsewmbis02io6/Ford_C-Max_1.0_Turbo_91.9KWKW_Bosch_533098_1D9F.Easyfile_MAPS/file' target="_blank">Ford C-Max 1.0 Turbo Bosch</a>
            </div>
        </div>

        <div class="item">
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/file/b1c3pmrvlvwnt16/Ford_C-max_1.6SCTi_2011_110.3KWKW_Bosch_515364_4DCF.100%2525_stage_1_00643.ols/file' target="_blank">Ford C-max 1.6SCTi 2011 Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/vesluyanseak2o5/Ford_Cmax_1.6t_ecooost_2014_136.1KWKW_Bosch_537967_EF78.tunpdg_made_of_l1-10041.ols/file' target="_blank">Ford Cmax 1.6t ecooost 2014 Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/f1dzfcsz7qb3scn/Ford_Focus_1.6TDCI_2012_110.3KWKW_Bosch_522019_F657.TUNPC_WCKS/file' target="_blank">Ford Focus 1.6TDCI 2012 Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/axnwk7lscanaap4/Ford_Focus_1.6T_ECOBOOST_2011_110.3KWKW_Bosch_515464_C5E2.TUN_KK_WithoutCKS_OK/file' target="_blank">Ford Focus 1.6T ECOBOOST 2011 Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/rinn0i551dpmsht/Ford_Focus_2.0_EcoBoost_2012_183.9KWKW_Bosch_527693_836F.TUNPC_made_of_Stage_1_%2528niet_geprobeerd%2529/file' target="_blank">Ford Focus 2.0 EcoBoost 2012 Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/rea9tr93v0epkfz/Ford_Focus_2.0_T_04-04-2014_184KWKW_Bosch_033A.tunpdg_%252B_checksum_l1-10057.ols/file' target="_blank">Ford Focus 2.0 2014 Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/tv0jn1czinkxa3g/Hyundai__crd_KW_Bosch_8DCB.Limited_Mappack/file' target="_blank">Hyundai Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/2m2ekzlyfd8lxug/Kia_KW_Bosch_C233.Limited_Mappack/file' target="_blank">Kia KW Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/nl19aftg8be1gz6/Lancia_Delta_1.8T__2011_147.1KWKW_Bosch_0261B07485_51804818__024E.Limited_Mappack/file' target="_blank">Lancia Delta 1.8T 2011 Bosch Limited Mappack</a>  
              <a className='name' href='https://www.mediafire.com/file/4w5vln0dp74bse9/Land_Rover_Defender_2.2TD4_-_%2528DAMOS%2529_KW_Bosch_389394_42CD.Limited_Mappack/file' target="_blank">Land Rover Defender 2.2TD4 Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/x1cxpnmh5rguyhq/Land_Rover_Defender_2.2_EU5_2.2TDCI_2012_Turbo-Diesel__89.7KWKW_Visteon_CH12-12K532-GAH.VBF_93BF.Limited_Mappack/file' target="_blank">Land Rover Defender 2.2 EU5 2.2TDCI 2012 Turbo-Diesel</a>
              <a className='name' href='https://www.mediafire.com/file/zehg2hrixhu1a9h/Land_Rover_Defender_2.4_TD5_2008_89.7KWKW_Visteon_NNW511240_7H12-12K532-_DNNS506880_6171.Limited_Mappack/file' target="_blank">Land Rover Defender 2.4 TD5 2008 Visteon</a>
              <a className='name' href='https://www.mediafire.com/file/yno132dmdrtgpxx/Land_Rover_Range_Rover_3.0_TDV6_2010_180.2KWKW_Bosch__9X2Q-14C204-PE_503443_2261.Limited_Mappack/file' target="_blank">Land Rover Range Rover 3.0 TDV6 2010  Bosch</a>   
            </div>
        </div>

        <div class="item">
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/file/zbxg41slmtrdz1a/Land_Rover_Range_Rover_4.4_TDV8_2012_230.2KWKW_Bosch_527223_A565.Stage1%252B_made_of_9921.ols/file' target="_blank">Land Rover Range Rover 4.4 TDV8 2012 Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/6ydsye84gx28f39/Land_Rover_Range_Rover_Evoque_2.2_SD4_2012_Turbo-Diesel__139.7KWKW_Bosch_BJ32-12K532-VTE_E33D.Limited_Mappack/file' target="_blank">Range Rover Evoque 2.2 SD4 2012 Turbo-Diesel Bosch</a>
              <a className='name' href='https://www.mediafire.com/folder/ncksznia6fdfg/MB_Sprinter_2.2_CDI__2002_Turbodiesel___94.9KWKW_Bosch_0281010425_Bosch__351385_0C82' target="_blank">MB Sprinter 2.2 CDI 2002 Turbodiesel Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/2jp6ryjas4ngt49/MB_A180_1.8_CDI_Blue_Efficiency_2011_KW_Bosch_4DB4.Limited_Mappack/file' target="_blank">MB A180 1.8 CDI Blue Efficiency 2011 Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/t5ig4u3ue3pifco/MB_Actros_OM501LA.II-1-00_KW_Temic_E51_C914.Limited_Mappack/file' target="_blank">MB Actros Temic E51 Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/55lshlrf9fuugvt/MB_A_200_Turbo_2005_Turbo-Benzin__147.1KWKW_Siemens-Continental_M600059000000_77F8.Limited_Mappack/file' target="_blank">MB A200 Turbo 2005 Turbo-Benzin Siemens-Continental</a>
              <a className='name' href='https://www.mediafire.com/file/g4awilmg9r48pg7/MB_C_200_CDI_2011_Turbo-Diesel__100KWKW_Delphi__CRD3.x__1409.Original_%252Bdamos_maps/file' target="_blank">MB C200 CDI 2011 Turbo-Diesel Delphi</a>
              <a className='name' href='https://www.mediafire.com/file/kmymfa0sdtdq6ij/MB_C_320CDI_2005_155.2KWKW_Bosch_E3AD.Original_%252Bdamos_maps/file' target="_blank">MB C320 CDI 2005 Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/5m8q1pny1zafpct/MB_E_220CDI_2010_Turbo-Diesel__125KWKW_Delphi_CRD-646-NMA48-211SA-125kw-41O-EF-D80-SAC_4CA6.Limited_Mappack/file' target="_blank">MB E220 CDI 2010 Turbo-Diesel Delphi</a>  
              <a className='name' href='https://www.mediafire.com/file/htdcgg5ptf8l4rs/MB_S350_hybrid_KW_1565.Limited_Mappack/file' target="_blank">MB S350 hybrid Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/mdtwm54vgsne8wd/MB_S_320_1999_Benzin_160.3KWKW_Bosch_0261204918_Bosch__355555_20C5.Carlson_Umbau_Auf_4%252C8_Liter_/file' target="_blank">MB S320 1999 Benzin Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/gpvtudt1lqiufct/MB_S_600_V12_Biturbo_2003_Turbo-Benzin__368KWKW_Bosch_0261XXXXXX_271-21-0.DAM__3E56.Limited_Mappack/file' target="_blank">MB S600 V12 Biturbo 2003 Turbo-Benzin Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/y3mk0g4ow3k9uu4/MB__270cdi_KW_Bosch_A4D2.Limited_Mappack/file' target="_blank">MB 270cdi Bosch Limited Mappack</a>   
            </div>
        </div>

        <div class="item">
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/file/cu2csvo8leuuw1c/MB__350cgi_KW_Bosch_396785_D642.Limited_Mappack/file' target="_blank">MB 350cgi Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/tjd1n1axn7gr9av/MB_KW_Bosch_F88D.Original_%252Bdamos_maps/file' target="_blank">MB KW Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/u8cnfnip71zxwl2/Mini_Cooper_1.6_Turbo_2011_Turbo-Benzin__155.2KWKW_Bosch_0261S04443_07615526_395150_1A20.V-Max_Tuning_-_Perfekt/file' target="_blank">Mini Cooper 1.6 Turbo 2011 Turbo-Benzin Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/pql4toqn1tgm3x9/Mini_Cooper_D_1.6d_2011_81.6KWKW_Bosch__O_7CP9EI111B_513571_1AF1.Stage1%252B_9950.ols/file' target="_blank">Mini Cooper D 1.6d 2011 Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/3dbn17vcwp97wmb/Mini_Cooper_S_KW_Bosch_7AE8.Limited_Mappack/file' target="_blank">Mini Cooper S Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/aiv9odg4gfdzmh0/Mini__1.4d_KW_Bosch_0281B01807__3618XX_A8D1.Original_%252B_part_damos_maps/file' target="_blank">Mini 1.4d Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/hw59fkaamtbkffg/Nissan_Qashqai_1.5_DCI_2011_80.9KWKW_B3D7.Original_123hp_251nm/file' target="_blank">Nissan Qashqai 1.5 DCI 2011</a>
              <a className='name' href='https://www.mediafire.com/file/ysy9fvnp68n6p09/Opel_Astra-J_1.6_Turbo_2011_Turbo-Benzin__132.4KWKW_Ac_Delco_FF34.Limited_Mappack/file' target="_blank">Astra-J 1.6 Turbo 2011 Turbo-Benzin DELCO Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/ft2a9ydhywai0yz/Opel_Corsa-D_1.3_CDTi_2012_Turbo-Benzin_A13DTC_55.2KWKW_Bosch_0281018186_L5CSEM0120_--_L5CSEM0120_506698_3159.M5CSEM0120_Limited_Mappack/file' target="_blank">Corsa-D 1.3 2012 Turbo-Benzin A13DTC Bosch</a>  
              <a className='name' href='https://www.mediafire.com/file/2gtzp77y5yfjk03/Opel_Vectra-B_1.9_CDTi_2004_Turbodiesel__110.3KWKW_Bosch_0281011667_09ED.Original_%252Bdamos_maps/file' target="_blank">Vectra-B 1.9 CDTi 2004 Turbodiesel Bosch</a>
              <a className='name' href='https://www.mediafire.com/file/2biycmlc6mga5np/Opel__Astra_1.4i_66KWKW_Bosch_0261208394_55354328_376087_E7B9.Limited_Mappack/file' target="_blank"> Astra 1.4i Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/67jpmqr9d0okuy9/Peugeot_308_2.0_HDI_16V_2008_103KWKW_Delphi_ECCF.Limited_Mappack/file' target="_blank">Peugeot 308 2.0 HDI 16V 2008 Delphi Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/u6iuc5k9uzd8qdv/Peugeot_353_EDC16C34_DAMOS_KW_Bosch_B1A5.Original_%252B_part_damos_maps/file' target="_blank">Peugeot 353 EDC16C34 Bosch</a>   
            </div>
        </div>

        <div class="item">
            <div className='info'>
              <a className='name' href='https://www.mediafire.com/file/ipqwzjmjgnbob0r/Peugeot_407_2.0_HDI_2010_Turbo-Diesel__125KWKW_Delphi__1_090729_T6A6LB01_DELIV_6_D2X7_AM6_PostDMS1_090729_PSA_31DE.Original_Limited_Mappackfrans/file' target="_blank">Peugeot 407 2.0 HDI 2010 Turbo-Diesel Delphi</a>
              <a className='name' href='https://www.mediafire.com/file/4t4m2osancv8nfo/Peugeot_407_3.0_HDI_DT20_2011_Turbo-Diesel__KW_Delphi_BDA4.Original_%252B_part_damos_maps/file' target="_blank">Peugeot 407 3.0 HDI DT20 2011 Turbo-Diesel Delphi</a>
              <a className='name' href='https://www.mediafire.com/file/po6zcmw3os4vwpv/Peugeot_RCZ_1.6_THP_147.1KWKW_Bosch_66A3.Limited_Mappack/file' target="_blank">Peugeot RCZ 1.6 THP Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/65v4nsdr9ckxzl5/Peugeot__1.6_HDI_2010_KW_Siemens_PR18171000000_763D.Limited_Mappack/file' target="_blank">Peugeot 1.6 HDI 2010 Siemens Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/file/0vp4ns9jpce6fqb/Peugeot__2.7_biturbo_HDI_KW_Siemens_5WS40379A-T__PP0B2M2000000_B27E.Limited_Mappack/file' target="_blank">Peugeot 2.7 biturbo  Siemens Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/folder/pxwc57dpzjiww/Porsche' target="_blank">Porsche </a>
              <a className='name' href='https://www.mediafire.com/folder/21h5uxithb64i/Renault' target="_blank">Renault</a>
              <a className='name' href='https://www.mediafire.com/file/igjtiyhtb42741q/Saab_9-3_KW_Bosch_378504_1E59.Limited_Mappack/file' target="_blank">Saab 9-3 Bosch Limited Mappack</a>
              <a className='name' href='https://www.mediafire.com/folder/ngn3qz7yq1o2p/Seat' target="_blank">Seat</a>  
              <a className='name' href='https://www.mediafire.com/folder/t49cl0b0rxruq/Smart' target="_blank">Smart</a>
              <a className='name' href='https://www.mediafire.com/folder/tgs4gkywi6iav/Volvo' target="_blank">Volvo</a>
              <a className='name' href='https://www.mediafire.com/folder/y56087btkjg3z/VW' target="_blank">VW</a>   
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

