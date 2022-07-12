import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React,{useEffect, useState} from 'react';
import Remap from './Pages/Remap';
import Home from "./Pages/Home";
import Login from "./Login";
import Mecanica from "./Pages/Mecanica";
import Arquivo from "./Pages/Arquivo";
import Cursos from "./Pages/Cursos";
import Decode from "./Pages/Decode";
import Pinagem from "./Pages/Pinagem";
import Leve from "./Pages/Leve";
import Pesada from "./Pages/Pesada";
import Stg1 from "./Pages/Arquivos/Stg1";
import Stg2 from "./Pages/Arquivos/Stg2";
import Stg3 from "./Pages/Arquivos/Stg3";
import Stg4 from "./Pages/Arquivos/Stg4";
import Stg5 from "./Pages/Arquivos/Stg5";
import Egr from "./Pages/Arquivos/Egr";
import Mod from "./Pages/Arquivos/Mod";
import Original from "./Pages/Arquivos/Original";
import LoginMec from "./LoginMec";
import LoginAr from "./LoginAr";
import LoginCursos from "./LoginCursos";
import LoginDecode from "./LoginDecode";
import LoginPinagem from "./LoginPinagem";
import "./Login.css";



export default function App () {

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/LoginPinagem" element={<LoginPinagem/>} />
          <Route exact path="/LoginDecode" element={<LoginDecode/>} />
          <Route exact path="/LoginCursos" element={<LoginCursos/>} />
          <Route exact path="/LoginAr" element={<LoginAr/>} />
          <Route exact path="/LoginMec" element={<LoginMec/>} />
          <Route exact path="/Remap" element={<Remap/>} />
          <Route exact path="/Mecanica" element={<Mecanica/>} />
          <Route exact path="/Arquivo" element={<Arquivo/>} />
          <Route exact path="/Cursos" element={<Cursos/>} />
          <Route exact path="/Decode" element={<Decode/>} />
          <Route exact path="/Pinagem" element={<Pinagem/>} />
          <Route exact path="/Leve" element={<Leve/>} />
          <Route exact path="/Pesada" element={<Pesada/>} />
          <Route exact path="/Stg1" element={<Stg1/>} />
          <Route exact path="/Stg2" element={<Stg2/>} />
          <Route exact path="/Stg3" element={<Stg3/>} />
          <Route exact path="/Stg4" element={<Stg4/>} />
          <Route exact path="/Stg5" element={<Stg5/>} />
          <Route exact path="/Egr" element={<Egr/>} />
          <Route exact path="/Mod" element={<Mod/>} />
          <Route exact path="/Original" element={<Original/>} />   
        </Routes>
        </Router>


  );
  
}