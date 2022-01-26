import React from "react";
import './App.css';

function App() {
  return (
    <>
    <div className="header">
      <div className="title">BESTBET</div>
        <div className="buttoncontainer">
          <div className="langbutton">ENG</div>
          <button className="buttonin">LOG IN</button>
          <button className="buttonup">SIGN UP</button>
        </div>
    </div>
    <div className="headerbot">
    <div className="linkcontainer">
          <div className="link">Hot Games</div>
          <div className="link">Slots</div>
          <div className="link">Live Casino</div>
          <div className="link">Sports</div>
          <div className="link">Arcade</div>
          <div className="link">Poker</div>
          <div className="link">Togel</div>
          <div className="link">Promosi</div>
          <div className="link">Live TV</div>
        </div>
    </div>
    <div className="body">
      <img className ='home-img' src={`https://nx-cdn.trgwl.com/Images/banners/home/pp-nexus-sweet-bonanza-desktop.jpg`}/>
      <div className="content">Top Games</div>
      <div className="matches">
        <div classname="matchesdetail">
          <div className="matchesimg">
            <img src={`https://cdn.mos.cms.futurecdn.net/TKek356qqsbof4L2GedFWY-970-80.jpg.webp`}/>
            <div className="text">VS</div>
            <img src={`https://cdn.mos.cms.futurecdn.net/YA3tjv8MS9nQQShL2ikCWc-970-80.jpg.webp`}/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
