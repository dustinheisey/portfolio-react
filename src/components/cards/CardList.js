import React from "react";
import Button from "../Button";

const CardFeatures = ({
  addClass,
  title,
  img1,
  img2,
  img3,
  img4,
  title1,
  title2,
  title3,
  title4,
  text1,
  text2,
  text3,
  text4,
  text,
  btnText,
  btnLink
}) => {
  let className =
    "border-r-lg bg-l shadow margin-tb-lg t-margin-n display-f direction-c align-l justify-c padding-lg " +
    addClass;
  return (
    <section className={className}>
      <h2 className="margin-b-lg">{title}</h2>
      <div className="display-f align-c justify-l width-p-lg">
        <div className="height-vh-sm width-vh-sm border-r-lg display-f align-c justify-c margin-r-lg">
          <img
            src={img1}
            alt="Mobile First"
            className="height-p-xmd t-height-p-lg"
          />
        </div>
        <div className="display-f direction-c align-l justify-se">
          <h3>{title1}</h3>
          <p className="color-m">{text1}</p>
        </div>
      </div>
      <div className="display-f align-c justify-l width-p-lg">
        <div className="height-vh-sm width-vh-sm border-r-lg display-f align-c justify-c margin-r-lg">
          <img
            src={img2}
            alt="Purposeful Design"
            className="height-p-xmd t-height-p-lg"
          />
        </div>
        <div className="display-f direction-c align-l justify-se">
          <h3>{title2}</h3>
          <p className="color-m">{text2}</p>
        </div>
      </div>
      <div className="display-f align-c justify-l width-p-lg">
        <div className="height-vh-sm width-vh-sm border-r-lg display-f align-c justify-c margin-r-lg">
          <img
            src={img3}
            alt="Security"
            className="height-p-xmd t-height-p-lg"
          />
        </div>
        <div className="display-f direction-c align-l justify-se">
          <h3>{title3}</h3>
          <p className="color-m">{text3}</p>
        </div>
      </div>
      <div className="display-f align-c justify-l width-p-lg">
        <div className="height-vh-sm width-vh-sm border-r-lg display-f align-c justify-c margin-r-lg">
          <img
            src={img4}
            alt="Optimization"
            className="height-p-xmd t-height-p-lg"
          />
        </div>
        <div className="display-f direction-c align-l justify-se">
          <h3>{title4}</h3>
          <p className="color-m">{text4}</p>
        </div>
      </div>
      <h4 className="margin-tb-lg">
        <strong>{text}</strong>
      </h4>

      {btnText !== undefined &&
        btnLink !== undefined && <Button text={btnText} link={btnLink} />}
    </section>
  );
};

export default CardFeatures;
