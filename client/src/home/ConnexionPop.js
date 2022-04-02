import React, { useState } from 'react'
import "./ConnexionPop.css"
import Logo from "../feed/img/birdyLogo.png"; 
import { Link } from 'react-router-dom';

function ConnexionPop() {
    

  return (
    <div className='bg-model'>
        
      <div>
        <div className="container-login100">
          <div className="wrap-login100">
            <div>
              <img src={Logo} alt="Birdy"/>
            </div>

            <form>
              <span className="login100-form-title">
                Connexion
              </span>

              <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Email"/>
                <span className="focus-input100"></span>
               
              </div>

              <div className="wrap-input100 validate-input" data-validate = "Password is required">
                <input className="input100" type="password" name="pass" placeholder="Mot de passe"/>
                <span className="focus-input100"></span>
                
              </div>
              
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  Connexion
                </button>
              </div>

              <div >
                
                <Link className="txt2" to="#">
                  Mot de passe oublie?
                </Link>
              </div>

              <div>
                <Link className="txt2" to='./Incription'>
                  Cree un compte
                  
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnexionPop