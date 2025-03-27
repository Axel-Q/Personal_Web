import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { fadeInUp, staggerContainer } from '../utils/animations';
import styles from './Resume.module.css';
import '../styles/theme.css';

interface Experience {
  title?: string;
  company: string;
  period: string;
  location: string;
  bullets?: string[];
  tags?: string[];
  positions?: { 
    title: string; 
    period: string;
    bullets: string[];
    tags: string[];
  }[];
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
    },
    {
      university: 'University of Strasbourg',
      location: 'Strasbourg',
      isCompact: true
    },
  ];

  const experiences = [
    {
      title: 'Cloud Upgrade Engineer Intern',
      company: 'SAP',
      period: 'Jan 2025 - Aug 2025',
      location: 'Vancouver',
      bullets: [
        'Conducted root-cause analysis using ABAP/JAVA to diagnose and resolve Snote patch issues including dependency conflicts, version incompatibility, transport request errors, and HTTP connection errors (type G/H), swarming with senior developers and cross-functional teams to deliver corrective patches.',
        'Assisted customers in planning and executing SAP upgrades and database migrations, leveraging tools and methods such as DMO, system conversion, and SLT; addressed technical considerations including Unicode conversion, ABAP/Java stack alignment, and custom code compatibility to ensure data integrity and minimize business disruption.'
      ],
      tags: ['Internship']
    },
    {
      company: 'Northeastern University',
      period: 'Jan 2025 - Present',
      location: 'Vancouver',
      positions: [
        { 
          title: 'Cloud Computing Teaching Assistant', 
          period: 'Jan 2025 - Present',
          bullets: [
            'Mentored students in building scalable and distributed system and machine learning solutions through hands-on projects.'
          ],
          tags: ['PART-TIME']
        },
        { 
          title: 'Career Peer Ambassador', 
          period: 'Jan 2025 - Present',
          bullets: [
            'Provided personalized career guidance and job search strategies to computer science and engineering students.',
          ],
          tags: ['PART-TIME']
        }
      ]
    },
    {
      title: 'Full Stack Development Intern',
      company: 'Philips',
      period: 'May 2024 - Aug 2024',
      location: 'Soochow',
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
                    </div>
                    <span className={styles.location}>{exp.location}</span>
                  </div>
                  
                  <div className={styles.cardContent}>
                    {exp.title ? (
                      // Regular single job title
                      <div>
                        <div className={styles.titleRow}>
                          <div className={styles.titleTagGroup}>
                            <h4 className={styles.secondaryText}>{exp.title}</h4>
                            {exp.tags?.map((tag, i) => (
                              <span key={i} className={styles.expTag}>{tag}</span>
                            ))}
                          </div>
                          <span className={styles.period}>{exp.period}</span>
                        </div>
                        <div className={styles.bulletList}>
                          {exp.bullets?.map((bullet, i) => (
                            <div key={i} className={styles.bulletPoint}>
                              <span className={styles.bulletMarker}></span>
                              <span className={styles.bulletText}>{bullet}</span>
                            </div>
                          ))}
                        </div>
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
                                    {position.tags.map((tag, tagIndex) => (
                                      <span key={tagIndex} className={styles.expTag}>{tag}</span>
                                    ))}
                                  </div>
                                  <span className={styles.period}>{position.period}</span>
                                </div>
                                <div className={styles.bulletList}>
                                  {position.bullets.map((bullet, bulletIndex) => (
                                    <div key={bulletIndex} className={styles.bulletPoint}>
                                      <span className={styles.bulletMarker}></span>
                                      <span className={styles.bulletText}>{bullet}</span>
                                    </div>
                                  ))}
                                </div>
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