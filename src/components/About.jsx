import React from 'react';
import './About.css';
import accountingStockImage from "../images/accounting-stock.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>About Mercury Accounting</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Founded in 2026, Mercury Accounting is an experienced independent firm serving both businesses and individuals seeking reliable financial services. As an individual and independent firm, you will get an personalized approach to your financial needs.</p>
            <p>We are committed to integrity, accuracy, and building long-term relationships with our clients. Whether you're a small business owner, a growing enterprise, or an individual taxpayer, we provide the expertise and support you need to navigate complex financial landscapes.</p>
          </div>
          <div className="about-image">
            <img src={accountingStockImage} alt="Mercury Accounting Team" className="team-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;