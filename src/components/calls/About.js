import React from "react";
import Mobile from "../../assets/mobile.svg";
import Purposeful from "../../assets/bulb.svg";
import Security from "../../assets/security.svg";
import Optimization from "../../assets/optimize.svg";
import CardList from "../cards/CardList";

const About = props => {
  return (
    <CardList
      title="You Need More Than Just a Website"
      img1={Mobile}
      img2={Purposeful}
      img3={Security}
      img4={Optimization}
      title1="Responsive"
      title2="Made With Purpose"
      title3="Secure"
      title4="Optimized"
      text1="Make users love your site on all screen sizes."
      text2="Design your app thoughtfully."
      text3="Keep your data safe."
      text4="Use new technology for blazing fast speeds."
      text="Learn how I'm different from your average UX Professional."
      btnText="Discover My Process"
      btnLink="/about"
      addClass="landing-about"
    />
  );
};

export default About;
