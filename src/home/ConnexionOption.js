import React, { useState } from 'react'
import "./ConnexionOption.css";
import ConnexionPop from './ConnexionPop';
import {Link} from 'react-router-dom';

function ConnexionOption() {
    
  return (
    <div className='option'>
        <h1>Ca se passe maintenant</h1>

        <div className='blocBtn'>
            <h3>Rejoigne Birdy dés aujourd'hui</h3>
            <br/>
            <button className='insc'>S'inscrire</button>
        </div>
        <div className='blocBtn'>
            <h3>Vous avez deja un compte?</h3>
            <br/>
            <Link to='./Connexion' className="connect">Connexion</Link>
        </div>
        
    </div>
  )
}

export default ConnexionOption