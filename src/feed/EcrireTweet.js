import React from 'react'
import "./EcrireTweet.css"

function EcrireTweet() {
  return (
    <div className="tweetbox">
        <from>
            <div className='area'>
                {/** penser a ajouter l'avta */}
                <input placeholder='Ecrire un tweet'></input>
             </div>
            <button className='btntweet'>Tweeter</button>
        </from>
    </div>
  );
}

export default EcrireTweet