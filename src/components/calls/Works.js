import React from "react";
import Team from "../../assets/team.jpg";
import Aerials from "../../assets/aerials.jpg";
import CardImages from "../cards/CardImages";

const Works = props => {
  return (
    <CardImages
      title="Check Out My Recent Work"
      img1={Team}
      img2={Aerials}
      title1="MY Team Gear"
      title2="Aerials Gymnastics"
      link1="https://www.my-teamgear.com"
      link2="http://www.aerialsgymnastics.net"
      text1="Custom team gear for every sport and fan imaginable."
      text2="Join a high performing gymnastics gym that treats its students like family."
      btnText="See More"
      btnLink="/works"
      addClass="landing-works"
    />
  );
};

export default Works;
