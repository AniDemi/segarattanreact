import React from "react";

class Hitta extends React.Component {
  render () {
    return (
      <div id="mainbody" style={{lineHeight: 2}}>
        <h3>Hitta till oss/Kontakta oss</h3>
        Sega Råttan <br/>
        Vasagatan 11B <br/>
        903 29 UMEÅ <br/>
        090-12 00 83 <br/>
        073-095 70 83 <br/>
        <a href=" mailto:segarattan.vasagatan11b@gmail.com" style={{color:"black"}}>Maila butiken</a> <br/><br/>

        <h4>Klicka på kartan för mer detaljerad beskrivning!</h4>
        <div style={{textAlign:"center"}}>
          <div style={{display:"inline", border:0}}><iframe className="maxwidth" title="karta för butiken" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.5143570134805!2d20.266223567196683!3d63.826079926636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5b0dd52cf6e1%3A0x18c7e45322672059!2sSega%20R%C3%A5ttan%20i%20Ume%C3%A5%20AB!5e1!3m2!1sen!2sse!4v1707453586942!5m2!1sen!2sse" width="450" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          <div style={{display:"inline"}} ><img className="maxwidth" src="images/storeimage.jpg" alt="Bild av butiken" style={{height:"350px"}}/></div>
        </div>
      </div>
    );
  }
}

export default Hitta;