import React from "react";
import CardInfo from "../components/cards/CardInfo";
import CardImage from "../components/cards/CardImage";
import Aerials from "../assets/aerials-works.jpg";
import Team from "../assets/team-works.jpg";
import Geomancy from "../assets/geomancy-works.jpg";
import Snake from "../assets/snake-works.jpg";

const Works = props => {
  return (
    <main className="padding-lg works">
      <CardInfo
        title="Featured Projects"
        text="Here are some of my featured projects. Work with me and I'll add yours to the list!"
      />
      <div className="works-grid">
        <CardImage
          imgSrc={Aerials}
          imgAlt="Aerials Gymnastics"
          link="http://www.aerialsgymnastics.net"
          title="Aerials Gymnastics"
          text="Join a high performing gymnastics gym that treats its students like family."
        />
        <CardImage
          imgSrc={Team}
          imgAlt="MY Team Gear"
          link="https://www.my-teamgear.com"
          title="MY Team Gear"
          text="Custom team gear for every sport and fan imaginable."
        />
        <CardImage
          imgSrc={Geomancy}
          imgAlt="Geomancy"
          link="https://geomancy.dustinheisey.com"
          title="Geomancy"
          text="Can you tap your way to the final shape?"
        />
        <CardImage
          imgSrc={Snake}
          imgAlt="Snake"
          link="https://snake.dustinheisey.com"
          title="Snake"
          text="Play a nostalgic game with a minimal aesthetic."
        />
      </div>
    </main>
  );
};

export default Works;
