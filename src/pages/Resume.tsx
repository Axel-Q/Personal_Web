import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { fadeInUp, staggerContainer } from '../utils/animations';
import styles from './Resume.module.css';
import '../styles/theme.css';

const Resume: React.FC = () => {
  const education = [
    {
      degree: 'MSc in Computer Science',
      university: 'Northeastern University',
      location: 'Vancouver, Canada',
      period: '2023 - 2026',
      gpa: 'GPA: 4.0/4.0',
      courses: [
        'Data Structures',
        'Algorithms and Applications',
        'Cloud Networking',
        'Cloud Computing',
        'Distributed Systems',
        'Object-Oriented Design ',
        'Web and Mobile Development'
      ]
    },
    {
      university: 'University of Amsterdam',
      location: 'Amsterdam, Netherlands',
      isCompact: true
    }
  ];

  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Tech Corp',
      period: '2020 - Present',
      description: 'Led development of multiple web applications using React and TypeScript.'
    },
    {
      title: 'Web Developer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: 'Developed responsive websites and e-commerce solutions for clients.'
    }
  ];

  return (
    <PageTransition>
      <div className={styles.container}>
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className={styles.title}
        >
          Resume
        </motion.h1>

        <div className={styles.resumeLayout}>
          {/* Education Section - Left Column */}
          <div className={styles.column}>
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className={styles.sectionTitle}
            >
              Education
            </motion.h2>
            <div className={styles.sectionContent}>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className={`${styles.resumeCard} ${edu.isCompact ? styles.compactCard : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {edu.isCompact ? (
                    <div className={styles.compactContent}>
                      <h3 className={styles.primaryText}>{edu.university}</h3>
                      <span className={styles.compactLocation}>{edu.location}</span>
                    </div>
                  ) : (
                    <>
                      <div className={styles.cardHeader}>
                        <h3 className={styles.primaryText}>{edu.university}</h3>
                        <span className={styles.period}>{edu.period}</span>
                      </div>
                      
                      <div className={styles.cardContent}>
                        <div className={styles.degreeRow}>
                          <div className={styles.degreeGpaContainer}>
                            <h4 className={styles.secondaryText}>{edu.degree}</h4>
                            {edu.gpa && <span className={styles.inlineGpa}>{edu.gpa}</span>}
                          </div>
                          <span className={styles.location}>{edu.location}</span>
                        </div>
                        
                        {edu.courses && (
                          <div className={styles.coursesSection}>
                            <span className={styles.courseLabel}>Relevant Coursework</span>
                            <div className={styles.coursesList}>
                              {edu.courses.map((course, i) => (
                                <span key={i} className={styles.courseItem}>
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Section - Right Column */}
          <div className={styles.column}>
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className={styles.sectionTitle}
            >
              Experience
            </motion.h2>
            <div className={styles.sectionContent}>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={styles.resumeCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className={styles.cardHeader}>
                    <h3 className={styles.primaryText}>{exp.company}</h3>
                    <span className={styles.period}>{exp.period}</span>
                  </div>
                  
                  <div className={styles.cardContent}>
                    <h4 className={styles.secondaryText}>{exp.title}</h4>
                    <p className={styles.description}>
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume; 