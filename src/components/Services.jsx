import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Tax Preparation & Planning',
      description: 'Comprehensive tax services for individuals and businesses, including preparation, planning, and compliance.'
    },
    // {
    //   title: 'Financial Auditing',
    //   description: 'Detailed financial audits to ensure accuracy and compliance with accounting standards and regulations.'
    // },
    {
      title: 'Bookkeeping & Accounting',
      description: 'Accurate bookkeeping and accounting services to keep your financial records organized and up-to-date.'
    },
    // {
    //   title: 'Financial Planning',
    //   description: 'Strategic financial planning to help you achieve your long-term financial goals and objectives.'
    // },
    // {
    //   title: 'Business Consulting',
    //   description: 'Expert advice on business financial management, budgeting, and growth strategies.'
    // },
    // {
    //   title: 'Payroll Services',
    //   description: 'Efficient payroll processing and management to ensure timely and accurate employee compensation.'
    // }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;