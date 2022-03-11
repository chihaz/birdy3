import React, { useState } from 'react'
import "./inscription.css"
import Logo from "../feed/img/birdyLogo.png"; 

function Inscription() {
    

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
                Inscription
              </span>

              <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Email"/>
                <span className="focus-input100"></span>
               
              </div>

              <div className="wrap-input100 validate-input" data-validate = "Password is required">
                <input className="input100" type="password" name="pass" placeholder="Mot de passe"/>
                <span className="focus-input100"></span>
                
              </div>
              <div className="wrap-input100 validate-input" data-validate = "Password is required">
                <input className="input100" type="password" name="pass" placeholder="Confirmer le mot de passe"/>
                <span className="focus-input100"></span>
                
              </div>
              
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  Incription
                </button>
              </div>

             
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inscription