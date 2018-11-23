import React from "react";

const CardForm = ({ addClass, title, text, btnText, btnLink }) => {
  let className =
    "border-r-lg bg-l shadow margin-tb-lg display-f direction-c align-l justify-c padding-lg " +
    addClass;
  return (
    <section className={className}>
      <h1 className="margin-b-lg">{title}</h1>
      <p className="margin-sm color-m">{text}</p>
      <form
        name="contact"
        method="POST"
        className="display-f direction-c align-l justify-sb margin-tb-md width-p-lg"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="display-f direction-c justify-sa width-p-lg margin-b-md">
          <label htmlFor="name" className="margin-sm">
            <strong>Name</strong>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            className="border-r-sm bg-f width-p-lg"
          />
        </div>
        <div className="display-f direction-c justify-sa width-p-lg margin-b-md">
          <label htmlFor="email" className="margin-sm">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="border-r-sm bg-f width-p-lg"
          />
        </div>
        <div data-netlify-recaptcha />
        <button
          type="submit"
          className="border-r-md bg-p-d padding-lr-lg padding-tb-md d-padding-lr-md d-padding-tb-sm display-f align-c justify-l cursor-p grow outline-n border-n color-l"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default CardForm;
