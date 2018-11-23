import React from "react";
import CardInfo from "../components/cards/CardInfo";

const Benefits = props => {
  return (
    <main className="padding-lg benefits">
      <CardInfo
        title="What are the benefits of having your own website?"
        text="There are many benefits to owning your own website, and every day their number and importance increases. Check out some of the benefits below."
        addClass="benefits-intro"
      />
      <CardInfo
        title="Expands demand for your product or service"
        text="By having a website, you expand your reach from your local area to potentially the entire world. It doesn't matter how amazing your product or service is if nobody knows about it. Having a website makes many more people aware of your wonderful company."
        addClass="benefits-demand"
      />
      <CardInfo
        title="Gives users answers to questions immediately"
        text="Customers obviously prefer to have their questions answered as soon as possible. With a website you can direct them to those answers immediately instead of having to answer the same questions over and over again."
        addClass="benefits-questions"
      />
      <CardInfo
        title="Gives you an advantage over your competitors"
        text="In 2018 it has become a standard for companies of all industries and sizes to have their own online presence. If you don't follow this trend, your competitors will. Attract your customers by getting a website before your competitors do. "
        addClass="benefits-competitors"
      />
      <CardInfo
        title="And Many More"
        text="There are so many benefits to owning your own website that that it's hard to say them all. Contact me and I can tell you a little more about them."
        btnText="Connect With Me"
        btnLink="/contact"
        addClass="benefits-contact"
      />
    </main>
  );
};

export default Benefits;
