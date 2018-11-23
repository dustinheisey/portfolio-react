import React from "react";
import CardInfo from "../components/cards/CardInfo";

const Services = props => {
  return (
    <main className="padding-lg services">
      <CardInfo
        title="Services"
        text="I can help you with all stages of your web design and development. Check out my services below."
      />
      <div className="services-grid">
        <CardInfo
          title="Template Customization"
          text="Let's set you up with an online presence as fast as possible."
        />
        <CardInfo
          title="Website Design"
          text="Let me design a purposeful, converting website mockup for all screen sizes."
        />
        {/* <CardInfo
          title="Branding"
          text="Let a design professional create your logo or update it for you."
        /> */}
        <CardInfo
          title="Blogging CMS"
          text="I can develop your blog in your favorite CMS or help you find the one that is best for your specific situation."
        />
        <CardInfo
          title="Custom Projects"
          text="Give me your idea and I'll help it become a reality."
        />
        {/* <CardInfo
          title="Search Engine Optimization"
          text="Get your site to the top of search rankings and optimize it for success."
        /> */}
        <CardInfo
          title="Ecommerce"
          text="Sell your products and services online and see unbelievable growth in your business."
        />
        <CardInfo
          title="Progressive Web Apps"
          text="Convert your website to a strikingly close to native web application."
        />
      </div>
      <CardInfo
        title="Quality First"
        text="Every project is made with absolute attention to detail and genuine care for your success. Learn more about my process."
        btnText="About Me"
        btnLink="/about"
      />
    </main>
  );
};

export default Services;
