import React from "react";
import Button from "../Button";

const CardImages = ({
  addClass,
  title,
  img1,
  img2,
  title1,
  title2,
  text1,
  text2,
  link1,
  link2,
  btnText,
  btnLink
}) => {
  let className =
    "border-r-lg bg-l shadow margin-tb-lg t-margin-n display-f direction-c align-l justify-c padding-lg " +
    addClass;
  return (
    <section className={className}>
      <h2 className="margin-b-md">{title}</h2>
      <a href={link1}>
        <div>
          <img src={img1} alt={title1} className="width-p-lg height-a" />
          <h3 className="margin-b-md">{title1}</h3>
          <p className="margin-b-md color-m">{text1}</p>
        </div>
      </a>
      <a href={link2}>
        <div>
          <img src={img2} alt={title2} className="width-p-lg height-a" />
          <h3 className="margin-b-md">{title2}</h3>
          <p className="margin-b-md color-m">{text2}</p>
        </div>
      </a>
      {btnText !== undefined &&
        btnLink !== undefined && <Button text={btnText} link={btnLink} />}
    </section>
  );
};

export default CardImages;
