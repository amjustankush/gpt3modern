import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <a href='#home'>Request Early Access to Get Started</a>
      <h2 className="gradient__text">The possibilities are <br /> beyond your imagination</h2>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <a href='#home'>Request Early Access to Get Started</a>
    </div>
  </div>
);

export default Possibility;
