import React from "react";

class Leverantor extends React.Component {
  render () {
    return (
      <div id="mainbody" style={{lineHeight:2}}>
        <h3>För leverantörer</h3>
        Kontaktuppgifter: <br/>
        Sega Råttan i Umeå AB <br/>
        Org nr:    556425-5809 <br/>
        Tele:       090-12 00 83 <br/>
        Ägare:    Bostadsagenturen i Umeå AB <br/>
        Kontaktperson: Lars Lindqwist <br/>
        <a href="mailto:lars.lindqwist@gmail.com" style={{color:"black"}}>Mail</a>
      </div>
    );
  }
}

export default Leverantor;