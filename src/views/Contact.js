import React from "react";
import CardForm from "../components/cards/CardForm";

const Contact = props => {
  return (
    <main className="padding-lg contact">
      <CardForm
        title="Connect"
        text="Just send me your name and email and I'll get in touch with you to answer any questions you have and help you build your next project."
      />
    </main>
  );
};

export default Contact;
