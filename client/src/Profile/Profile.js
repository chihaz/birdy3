import React from 'react'
import avatar from './img/avatar.jpg'
import Poste from '../feed/Poste'
import test from './img/birdyLogo.png'
import './Profile.css'
import './style.css'

function Profile() {
  return (
    <div>
       <div className='Profile'>
            <div className='profile__header'>
                <i className='fas fa-arrow-left'></i>
                <div className='profile__header__container'>
                    <h2>Nom</h2>
                    <div className="profile__header__container__subheading">
                        <p>2 Tweets</p>
                    </div>
                </div>
            </div>

            <div className='coverBox'>
                <div>
                    <img className="coverbox__coverimage" src={test} />
                    <img 
                        className="coverbox__profileimage"
                        src={avatar}
                        alt=""
                    />
                </div>
                <button className="coverBox__editButton">Edit Profile</button>
            </div>
            <div className="profile__title">
                <h2>NOM</h2>
                <span>@Nom</span>
            </div>
            <div className="profile__bio">
                <span>Aspiring Software Engineer | Club Gamma and Hacktoberfest 2021 Contributor | he/him</span>
                <div className="profile__bio__subtext">
                    <i className="fas fa-map-marker-alt"></i> <span>  New Delhi, India</span> &nbsp; &nbsp;
                    <i className="far fa-calendar-alt"></i> <span>  Joined September 2019</span>
                </div>
                <div className="profile__bio__following">
                    <span>
                        <b>237</b>
                    </span> 
                    <span> Following</span> &nbsp; &nbsp;
                    <span>
                        <b>32</b>
                    </span> 
                    <span>  Followers</span>
                </div>
            </div>
            <div className='ProfileContent'>
                <div className="profile__sectionHeader">
                    <div className="profile__sectionHeader__box active">Tweets</div>
                </div>
                <div className="line"></div>
                <Poste image={test} nom="chihez " user="@chihe" heure="12H30" texte="bonjour a tous" like="10" comment="99"/>
                <Poste image={test} nom="chihez " user="@chihe" heure="12H30" texte="bonjour a tous" like="10" comment="99"/>
            
            </div>
            
        </div>
    </div>
  )
}

export default Profile