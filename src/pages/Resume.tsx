import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { fadeInUp, staggerContainer } from '../utils/animations';
import styles from './Resume.module.css';
import '../styles/theme.css';

interface Experience {
  title?: string;
  company: string;
  period: string;
  location?: string;
  description?: string;
  tags?: string[];
  positions?: { 
    title: string; 
    description: string;
    location?: string;
    tags?: string[];
  }[];
}

const Resume: React.FC = () => {
  const education = [
    {
      degree: 'MSc in Computer Science',
      university: 'Northeastern University',
      location: 'Vancouver campus',
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
      location: 'Amsterdam',
      isCompact: true
    }
  ];

  const experiences = [
    {
      title: 'Cloud Upgrade Architect',
      company: 'SAP',
      period: 'Jan 2024 - Present',
      location: 'Vancouver',
      description: 'Led development of multiple web applications using React and TypeScript.',
      tags: ['Internship']
    },
    {
      company: 'Northeastern University',
      period: 'Jan 2024 - Present',
      positions: [
        { 
          title: 'Teaching Assistant', 
          description: 'Provided academic support and guidance to computer science students.',
          location: 'Vancouver',
          tags: ['Part-time']
        },
        { 
          title: 'Career Peer Ambassador', 
          description: 'Assisted students with resume reviews and career development resources.',
          location: 'Vancouver, Canada',
          tags: ['Part-time']
        }
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Phlips',
      period: 'May 2024 - Aug 2024',
      location: 'Soochow',
      description: 'Led development of multiple web applications using React and TypeScript.',
      tags: ['Internship']
    },
    {
      title: 'HR professional',
      company: 'Owens Corning',
      period: 'Oct 2021 - Aug 2023',
      location: 'Hangzhou',
      description: 'Led development of multiple web applications using React and TypeScript.',
      tags: ['Full-time']
    },
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
                        <span className={styles.location}>{edu.location}</span>
                      </div>
                      
                      <div className={styles.cardContent}>
                        <div className={styles.degreeRow}>
                          <div className={styles.degreeGpaContainer}>
                            <h4 className={styles.secondaryText}>{edu.degree}</h4>
                            {edu.gpa && <span className={styles.inlineGpa}>{edu.gpa}</span>}
                          </div>
                          <span className={styles.period}>{edu.period}</span>
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
                    <span className={styles.location}>{exp.location || exp.positions?.[0]?.location || ''}</span>
                  </div>
                  
                  <div className={styles.cardContent}>
                    {exp.title ? (
                      // Regular single job title
                      <div>
                        <div className={styles.titleRow}>
                          <div className={styles.titleTagGroup}>
                            <h4 className={styles.secondaryText}>{exp.title}</h4>
                            {exp.tags && exp.tags.map((tag, i) => (
                              <span key={i} className={styles.expTag}>{tag}</span>
                            ))}
                          </div>
                          <span className={styles.period}>{exp.period}</span>
                        </div>
                        {exp.description && (
                          <p className={styles.description}>
                            {exp.description}
                          </p>
                        )}
                      </div>
                    ) : (
                      // Multiple positions with descriptions
                      <div>
                        {exp.positions && (
                          <ul className={styles.roleList}>
                            {exp.positions.map((position, i) => (
                              <li key={i} className={styles.roleItem}>
                                <div className={styles.positionHeader}>
                                  <div className={styles.titleTagGroup}>
                                    <h4 className={styles.roleItemTitle}>{position.title}</h4>
                                    {position.tags && position.tags.map((tag, tagIndex) => (
                                      <span key={tagIndex} className={styles.expTag}>{tag}</span>
                                    ))}
                                  </div>
                                  <span className={styles.period}>{exp.period}</span>
                                </div>
                                <span className={styles.roleItemDescription}>{position.description}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
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