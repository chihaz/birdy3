import React from "react";
import "./SidebarOption.css";

//creation d'un element commun a toutes les options qui est modifier grace a un props
//passe en parametre
function SidebarOption({ text, image }) {
  return (
     //<div className={`sidebarOption ${active && "sidebarOption--active"}`}>      
     
    <div className="sidebarOption">      
      <img src={image} width="30" height="30"/>
      <h6>{text}</h6>
    </div>
  );
}

export default SidebarOption;
