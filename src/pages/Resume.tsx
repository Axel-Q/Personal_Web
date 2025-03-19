import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import styles from './Resume.module.css';

const Resume: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Tech Corp',
      period: '2020 - Present',
      description: 'Led development of multiple web applications using React and TypeScript.'
    },
    // Add more experiences...
  ];

  return (
    <PageTransition>
      <div className={styles.container}>
        <h1>Resume</h1>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className={styles.period}>{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume; 