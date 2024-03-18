import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div id="mainbody">
        <h3>Sega Råttan, för dig som älskar godis</h3>
        Ni hittar oss vid Vasaplan, närmare bestämt i hörnet av Vasagatan – Skolgatan. Butiken ligger i ”Blåa huset”, ett av 
        Umeås vackraste hus! 
        <br/><br/>
        Sega Råttan är den lilla kiosk med det stora utbudet! Vår affärsidé är att sälja godis, läsk, tobak, engångs-vapes, 
        vapes-startkit och E-juicer! Saknar du något eller är ute efter ett speciell märke, tveka inte att fråga oss om hjälp!
        Vi gör inköpsresor för att ständigt kunna erbjuda dig nyheterna på marknaden samtidigt som vi självklart 
        har alla klassiker som t ex sega råttor!
        <br/><br/><br/>
        <h4>Öppetider</h4>
        <table>
          <tr>
            <th>Dag</th>
            <th>Tider</th>
          </tr>
          <tr>
            <td>Måndag</td>
            <td>9:00 - 21:30</td>
          </tr>   
          <tr>
            <td>Tisag</td>
            <td>9:00 - 21:30</td>
          </tr>
          <tr>
            <td>Onsdag</td>
            <td>9:00 - 21:30</td>
          </tr>
          <tr>
            <td>Torsdag</td>
            <td>9:00 - 21:30</td>
          </tr>
          <tr>
            <td>Fredag</td>
            <td>9:00 - 22:30</td>
          </tr>
          <tr>
            <td>Lördag</td>
            <td>10:00 - 22:30</td>
          </tr>
          <tr>
            <td>Söndag</td>
            <td>12:00 - 18:30</td>
          </tr>
        </table>
        <br/>
        Vi hälsar alla godisälskare välkomna, gammal som ung!
        <br/><br/>
        <i>Lars, Madde, Emelina. <br/>
        ”Sega Råttan, för dig som älskar godis”</i>
        <br/><br/>
        <h4>Följ oss på facebook och instagram</h4>
        <a href="https://www.instagram.com/segarattan/"><img src="images/instagramlogo.png" alt="Länk till vår instagram sida" style={{height:65 +"px"}}/></a>
        <a href="https://www.facebook.com/segarattaniumea"><img src="images/facebooklink.jpg" alt="Länk till vår facebook sida"/></a>
      </div>
    )
  }
}

export default Home;