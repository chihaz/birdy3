import React from 'react'
import "./Poste.css"
import Avatar from "./img/avatar.jpg"
import coeur from "./img/coeur.png"
import commentaire from "./img/commentaire.png"
import partage from "./img/partage.png"


function Poste({nom,user, heure,texte,image, avatar,like, comment}) {
  return (
    <div className='poste'>
        <div className='avatar'>
            <img src={Avatar} width="5%"></img>
        </div>
        <div className='contenu'>
            <div className='entete'>
                <div className='enteteTexte'>

                    <h3>
                        {nom}
                        <span className="head">
                            {user}
                        </span>
                    </h3>
                </div>
                <div className='descri'>
                    <p>{texte}</p>
                </div>
            </div>
        
            <img className='posteimage' src={image}></img>
            <div className='footer'>
                <img src={coeur} width="25px" height="25px"></img>
                <p>{like}</p>

                <img src={commentaire} width="25px" height="25px"></img>
                <p>{comment}</p>

                <img src={partage}  width="25px" height="25px"></img>
            
            </div>
        </div>
    </div>
  )
}

export default Poste