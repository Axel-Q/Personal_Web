import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { fadeInUp, staggerContainer } from '../utils/animations';
import styles from './Resume.module.css';
import '../styles/theme.css';

interface Experience {
  title: string;
  company: string;
  companyDetails?: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}

const Resume: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    // Scroll to bottom of page approach
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

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
      title: 'Cloud Upgrade Engineer Intern',
      company: 'SAP',
      companyDetails: 'ABAP, SAP HANA, JAVA, HTTP, SSL/TLS, SAML/SSO, SQL',
      period: 'Jan 2023 - Aug 2023',
      location: 'Vancouver',
      bullets: [
        'Conducted root-cause analysis using ABAP/JAVA to resolve system patch bugs, swarming with senior colleagues and cross-functional teams to develop and deliver solutions and subsequent corrective patches, and meet a daily target of 3 cases.',
        'Enhanced system security and operational stability in SAP environments by resolving critical TLS/transport issues (certificate validation, TLS configuration, RFC/SAPRouter connectivity); implemented robust backup/recovery solutions; and ensured accurate data validation for seamless system migrations.'
      ],
      tags: ['Internship']
    },
    {
      title: 'Cloud Computing Course Teaching Assistant',
      company: 'Northeastern University',
      companyDetails: 'AWS(EC2, RDS, VPC, ECR, ECS, CodePipeline), ML',
      period: 'Jan 2023 - Present',
      location: 'Vancouver',
      bullets: [],
      tags: ['Part-time']
    },
    {
      title: 'Full Stack Development Intern',
      company: 'Philips Health Technology',
      companyDetails: 'Python, TypeScript, Redis, Git, TCP',
      period: 'May 2024 - Aug 2024',
      location: 'Vancouver',
      bullets: [
        'Developed a Python-based automated microservice within an Agile Scrum team to synchronize 1 million machine status records daily from Vertica and local Excel files to PostgreSQL. Implemented real-time translation of specific content by integrating the Azure Translation API and utilizing Redis for caching, which reduced API calls and decreased translation response time by 40%. Handled multiple language pairs and optimized costs and performance by using batch translation for large datasets.',
        'Upgraded from Vue2 to Vue3 with TypeScript for enhanced maintainability and type safety. Implemented Redux for state management, added new UI components, and optimized backend code for faster data fetching and loading via frontend-backend separation. Managed Git repositories, overseeing branching, merging, and conflict resolution for seamless collaboration.',
        'Optimized network communication by applying knowledge of TCP/IP protocols, including implementing connection pooling to reduce TCP handshake overhead, using keep-alive connections for persistent communication, and optimizing packet sizes to minimize fragmentation. Monitored network latency and throughput using Azure Monitor, resulting in improved network throughput by 30% and enhanced system reliability with proper error handling and retries.'
      ],
      tags: ['Internship']
    },
    {
      title: 'HR Professional',
      company: 'Owens Corning',
      period: 'Oct 2021 - Aug 2023',
      location: 'Hangzhou',
      bullets: [
        'Served as an effective mediator between Dev&Ops teams'
      ],
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
          onClick={scrollToContent}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
          title="Click to scroll through resume"
          aria-label="Click to scroll through resume"
        >
          Resume
        </motion.h1>
        
        <motion.div 
          className={styles.scrollArrow}
          onClick={scrollToContent}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          title="Scroll down to view resume"
          aria-label="Scroll down to view resume"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <span className={styles.scrollArrowPulse}></span>
          <span className={styles.arrowTooltip}>Click to scroll down</span>
        </motion.div>

        <div className={styles.resumeLayout} ref={contentRef}>
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
                    <div className={styles.companySection}>
                      <h3 className={styles.primaryText}>{exp.company}</h3>
                      {exp.companyDetails && (
                        <span className={styles.companyDetails}>{exp.companyDetails}</span>
                      )}
                    </div>
                    <span className={styles.location}>{exp.location}</span>
                  </div>
                  
                  <div className={styles.cardContent}>
                    <div className={styles.titleRow}>
                      <div className={styles.titleTagGroup}>
                        <h4 className={styles.secondaryText}>{exp.title}</h4>
                        {exp.tags.map((tag, i) => (
                          <span key={i} className={styles.expTag}>{tag}</span>
                        ))}
                      </div>
                      <span className={styles.period}>{exp.period}</span>
                    </div>
                    <div className={styles.bulletList}>
                      {exp.bullets.map((bullet, i) => (
                        <div key={i} className={styles.bulletPoint}>
                          <span className={styles.bulletMarker}></span>
                          <span className={styles.bulletText}>{bullet}</span>
                        </div>
                      ))}
                    </div>
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