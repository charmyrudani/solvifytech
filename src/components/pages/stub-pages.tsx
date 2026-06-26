import React from 'react';

const containerStyle: React.CSSProperties = {
  padding: '80px 24px',
  maxWidth: '1200px',
  margin: '0 auto',
  minHeight: '60vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: 'var(--color-bg-light)',
  borderRadius: '12px',
  marginTop: '40px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
};

const headingStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  color: 'var(--color-text-dark)',
  marginBottom: '16px',
  fontWeight: '700'
};

const textStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  color: 'var(--color-text-muted)',
  maxWidth: '600px',
  lineHeight: '1.6'
};

export const ServicesPage: React.FC = () => (
  <div style={containerStyle}>
    <h1 style={headingStyle}>Our Services</h1>
    <p style={textStyle}>
      BairesDev provides nearshore software development services, software outsourcing, and staff augmentation. We deliver high-quality code using the top 1% technology talent.
    </p>
  </div>
);

export const TechnologiesPage: React.FC = () => (
  <div style={containerStyle}>
    <h1 style={headingStyle}>Technologies</h1>
    <p style={textStyle}>
      We work with over 100 technologies. Our engineering teams specialize in React, Node.js, Python, Java, .NET, AWS, Machine Learning, and more.
    </p>
  </div>
);

export const IndustriesPage: React.FC = () => (
  <div style={containerStyle}>
    <h1 style={headingStyle}>Industries We Serve</h1>
    <p style={textStyle}>
      We have delivered 1,250+ projects across 130+ sectors including Healthcare, Finance, Startups, Retail, and Telecommunications.
    </p>
  </div>
);

export const AboutPage: React.FC = () => (
  <div style={containerStyle}>
    <h1 style={headingStyle}>About BairesDev</h1>
    <p style={textStyle}>
      Since 2009, we've built software for companies of all types, from startups to Fortune 500 giants, helping them accelerate their product roadmaps.
    </p>
  </div>
);

export const OurWorkPage: React.FC = () => (
  <div style={containerStyle}>
    <h1 style={headingStyle}>Our Work</h1>
    <p style={textStyle}>
      Discover how we scaled IQVIA's clinical research platforms, optimized Urban Outfitters' website performance, and built real-time plant monitoring for Rolls-Royce.
    </p>
  </div>
);

export const BlogPage: React.FC = () => (
  <div style={containerStyle}>
    <h1 style={headingStyle}>BairesDev Blog</h1>
    <p style={textStyle}>
      Read insights from our technology leaders on nearshore software development, AI transformation, scaling software engineering teams, and tech industry trends.
    </p>
  </div>
);

export const ScheduleCallPage: React.FC = () => (
  <div style={containerStyle}>
    <h1 style={headingStyle}>Schedule a Call</h1>
    <p style={textStyle}>
      Ready to accelerate your product roadmap? Set up a time with our software experts to discuss your project requirements and staff augmentation options.
    </p>
  </div>
);
