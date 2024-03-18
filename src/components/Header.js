import React from "react";
import {NavLink, Link} from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="headerimage">
          <img src="images/headerimage.png" alt="Bild av affärens logotyp" style={{display:"block", maxWidth: "inherit"}}/>
        </div>
        <div className="menu" id="desktopmenu">
          <ul>
            <li><NavLink to="/" exact activeClassName="active" >Hem</NavLink></li>
            <li><NavLink to="/sortiment" activeClassName="active">Sortiment</NavLink></li>
            <li><NavLink to="/omoss" activeClassName="active">Om oss</NavLink></li>
            <li><NavLink to="/leverantor" activeClassName="active">För Leverantörer</NavLink></li>
            <li><NavLink to="/hitta" activeClassName="active">Hitta till oss/Kontakta oss</NavLink></li>
          </ul>
        </div>
       
        <div className="menu" id="mobilemenu">
          <div id="slideshow">
            <img src="images/menuicon.png" alt="meny knapp" style={{height: 25+"px", marginLeft:5+"px"}} id="slideshowbtn"/>
            


            <ul id="slidelist">
              <li><NavLink to="/" activeClassName="active">Hem</NavLink></li>
              <li><NavLink to="/sortiment" activeClassName="active">Sortiment</NavLink></li>
              <li><NavLink to="/omoss" activeClassName="active">Om oss</NavLink></li>
              <li><NavLink to="/leverantor" activeClassName="active">För Leverantörer</NavLink></li>
              <li><NavLink to="/hitta" activeClassName="active">Hitta till oss/Kontakta oss</NavLink></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}



export default Header;