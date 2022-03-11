import React from 'react'
import "./Feed.css"
import EcrireTweet from './EcrireTweet' 
import Poste from './Poste'
import test from './img/birdyLogo.png'

function Feed() {
  return (
    <div className='feed'>
        <div className='banniere'>
          {/*baniere*/}
          <h1>Acceuil</h1>
        </div>
        
        {/*textarea pour tweeter*/}
        <EcrireTweet/>
        {/*contenu du feed */}
        <Poste image={test} nom="chihez " user="@chihe" heure="12H30" texte="bonjour a tous" like="10" comment="99"/>
        <Poste image={test} nom="chihez " user="@chihe" heure="12H30" texte="bonjour a tous" like="10" comment="99"/>
        <Poste image={test} nom="chihez " user="@chihe" heure="12H30" texte="bonjour a tous" like="10" comment="99"/>
        <Poste image={test} nom="chihez " user="@chihe" heure="12H30" texte="bonjour a tous" like="10" comment="99"/>
        <Poste image={test} nom="chihez " user="@chihe" heure="12H30" texte="bonjour a tous" like="10" comment="99"/>




    </div>
  )
}

export default Feed