import React from "react";
import CardInfo from "../cards/CardInfo";

const Contact = props => {
  return (
    <CardInfo
      title="Ready to Invest in Your Business?"
      text="Let's make your online presence today. send me some basic information and I'll get in touch ASAP!"
      btnText="Let's Connect"
      btnLink="/contact"
      addClass="landing-contact"
    />
  );
};

export default Contact;
