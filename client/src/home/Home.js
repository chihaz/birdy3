import React from 'react'
import ConnexionOption from './ConnexionOption';
import Acceuil from "./img/acceuil.png";
import "./Home.css"

function Home() {
  return (
    <div className='home'>
        <img src={Acceuil}/>
        <ConnexionOption/>
    </div>
  )
}

export default Home