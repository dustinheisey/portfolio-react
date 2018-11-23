import React from "react";
import ImgBenefits from "../../assets/benefits.jpg";
import CardImage from "../cards/CardImage";

const Benefits = props => {
  return (
    <CardImage
      imgSrc={ImgBenefits}
      imgAlt="Benefits of getting an online presence"
      title="Why Online?"
      text="Find out why you can't succeed without an online presence in 2018."
      btnText="Explore The Benefits"
      btnLink="/benefits"
      addClass="landing-benefits"
      call={true}
    />
  );
};

export default Benefits;
