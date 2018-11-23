import React from "react";
import Button from "../Button";

const CardInfo = ({ addClass, title, text, btnText, btnLink }) => {
  let className =
    "border-r-lg bg-l shadow margin-tb-lg t-margin-n display-f direction-c align-l justify-c padding-lg " +
    addClass;
  return (
    <section className={className}>
      <h1 className="margin-b-md">{title}</h1>
      <p className="margin-b-md color-m">{text}</p>
      {btnText !== undefined &&
        btnLink !== undefined && <Button text={btnText} link={btnLink} />}
    </section>
  );
};

export default CardInfo;
