import React from "react";
import CardAbout from "../components/cards/CardAbout";
import CardInfo from "../components/cards/CardInfo";

const About = props => {
  return (
    <main className="padding-lg about">
      <CardAbout />
      <CardInfo
        title="What Makes Me Different From Other Developers?"
        text="You can choose to work with many designers and developers, but most of them don't follow best practices and create a bare minimum solution to your problems. Find out how I am different below."
        addClass="about-instructions"
      />
      <CardInfo
        title="I Develop My Projects Mobile First"
        text="Some time ago the percentage of users accessing the web on their mobile devices surpassed that of desktops. Instead of developing for the desktop, and then editing as the screen size gets smaller, I adopt the highly converting practice of developing for mobile and then editing as more space becomes available. This results in the best experience for all of your users."
        addClass="about-mobile"
      />
      <CardInfo
        title="I Design Every Element With Purpose"
        text="I start every project by asing my clients what the end goal of their website is. Is it to get a sale? To get some contact info? To give users information? Whatever the purpose, I make sure that every design choice helps you achieve that goal."
        addClass="about-purpose"
      />
      <CardInfo
        title="I Keep Your Data Safe"
        text="Crime has shifted more and more towards the internet over the past couple of years. It's no longer safe to have data on the web without some safeguards to protect it. All of the projects I complete utilize strong security protocols to protect you and your customers from data theft."
        addClass="about-security"
      />
      <CardInfo
        title="I Optimize Every Project"
        text="Site speed has always been important, but recently it has become a necessity. I utilize the best coding practices to keep your site fast and compliant with every web standard."
        addClass="about-reason-optimize"
      />
      <CardInfo
        title="I Treat Every Project like My Own"
        text="I put the same time and effort as I do to finish my own projects on every project I complete. That means you get the best service possible, and it also means you get great support for any problems you have."
        addClass="about-reason-care"
      />

      <CardInfo
        title="Interested in Learning More?"
        text="Connect with me and I'll help you succeed, guaranteed."
        btnText="Contact"
        btnLink="/contact"
        addClass="about-contact"
      />
    </main>
  );
};

export default About;
