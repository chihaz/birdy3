import React from "react";
import "./Sidebar.css";
import birdyLogo from "./img/birdyLogo.png";
import SidebarOption from "./SidebarOption";
import Home from "./img/home.png";
import loupe from "./img/loupe.png";
import cloche from "./img/cloche.png";
import message from "./img/message.png";
import favori from "./img/fav.png";
//import ListAltIcon from "@material-ui/icons/ListAlt";
import personne from "./img/personne.png";
import plus from "./img/plus.png";

//import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={birdyLogo} width="60" height="60" className="icon" />

      <SidebarOption text="Acceuil" image={Home} />
      <SidebarOption image={loupe} text="Recherche" />
      <SidebarOption image={cloche} text="Notifications" />
      <SidebarOption image={message} text="Messages" />
      <SidebarOption image={favori} text="Favoris" />
      {/*<SidebarOption Icon={ListAltIcon} text="Lists" />*/}
      <SidebarOption image={personne} text="Profile" />
      <SidebarOption image={plus} text="Plus" />

        <button className="btnTweet">Tweeter</button>
    </div>
  );
}

export default Sidebar;
