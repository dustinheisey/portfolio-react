import React from "react";
import Button from "../Button";

const CardImage = ({
  addClass,
  imgSrc,
  imgAlt,
  title,
  text,
  link,
  btnText,
  btnLink
}) => {
  return (
    <div className={addClass}>
      {link !== undefined ? (
        <a href={link}>
          <section className="border-r-lg bg-l shadow margin-tb-lg t-margin-n display-f direction-c height-p-lg align-c grow">
            <img
              src={imgSrc}
              alt={imgAlt}
              className="border-r-tl-lg border-r-tr-lg width-p-lg height-a"
            />
            <div className="padding-md height-p-xmd">
              <h2 className="margin-b-md text-xmd">{title}</h2>
              <p className="margin-b-md text-md">{text}</p>
              {btnText !== undefined &&
                btnLink !== undefined && (
                  <Button text={btnText} link={btnLink} />
                )}
            </div>
          </section>
        </a>
      ) : (
        <section className="border-r-lg bg-l shadow margin-tb-lg t-margin-n display-f direction-c height-p-lg align-c">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="border-r-tl-lg border-r-tr-lg width-p-lg height-a"
          />
          <div className="padding-md height-p-xmd">
            <h2 className="margin-b-md">{title}</h2>
            <p className="margin-b-md color-m">{text}</p>
            {btnText !== undefined &&
              btnLink !== undefined && <Button text={btnText} link={btnLink} />}
          </div>
        </section>
      )}
    </div>
  );
};

export default CardImage;
