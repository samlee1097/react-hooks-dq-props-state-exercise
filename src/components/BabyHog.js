import React from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({eyeColor, babyInfo}) {
  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
  }

  const babyEyeColor = function(){
    if (eyeColor === 'blue'){
      return BlueBaby;
    } else if (eyeColor === 'sun'){
      return SunBaby;
    } else if (eyeColor === 'glowing'){
      return GlowingBaby;
    } else {
      return normalBaby;
    }
  }
  
  return (
    <li className="hogbabies">
      <h1>{babyInfo.name}</h1>
      <h3>Weight:</h3>
      <h3>Hobby: {babyInfo.hobby}</h3>
      <h4>Eye Color: {eyeColor[0].toUpperCase() + eyeColor.slice(1)}</h4>

      <button name="+">Increase Weight</button>
      <button name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={babyEyeColor()}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
