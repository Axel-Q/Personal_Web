import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: 'Python', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'SQL', level: 'Advanced' },
        { name: 'Rust', level: 'Intermediate' },
        { name: 'C/C++', level: 'Intermediate' },
        { name: 'Java', level: 'Intermediate' },
        { name: 'HTML', level: 'Advanced' },
        { name: 'CSS', level: 'Advanced' },
      ]
    },
    {
      category: "Cloud & Databases",
      skills: [
        { name: 'AWS', level: 'Advanced' },
        { name: 'Azure', level: 'Intermediate' },
        { name: 'GCP', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'Firebase', level: 'Advanced' },
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'MySQL', level: 'Advanced' },
        { name: 'DynamoDB', level: 'Intermediate' },
        { name: 'Redis', level: 'Intermediate' },
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: 'React', level: 'Advanced' },
        { name: 'Kubernetes', level: 'Intermediate' },
        { name: 'Docker', level: 'Advanced' },
        { name: 'Jenkins', level: 'Intermediate' },
        { name: 'Git', level: 'Advanced' },
        { name: 'REST API', level: 'Advanced' },
        { name: 'GraphQL', level: 'Intermediate' },
        { name: 'Linux', level: 'Advanced' },
        { name: 'Bash', level: 'Advanced' },
        { name: 'JWT', level: 'Intermediate' },
        { name: 'OAuth', level: 'Intermediate' },
        { name: 'TLS/SSL', level: 'Intermediate' },
      ]
    }
  ];
  
  const certificates = [
    { 
      name: 'AWS Solution Architect Associate Certified', 
      image: '../../public/saa.jpg'
    },
    { 
      name: 'Google Advanced Data Analytics Certificate', 
      image: '../../public/google.jpg'
    }
  ];

  const skillVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <PageTransition>
      {/* Hero Section with intro */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div>
            <motion.h1 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              Hi, I'm <span className={styles.highlight}>Axel Qian</span>
            </motion.h1>
            <motion.p 
              className={styles.subtitle}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
            >
              Full Stack Developer specializing in modern web applications
            </motion.p>
          </div>
          
          {/* Certificates Section */}
          <motion.div className={styles.heroBottomContent}>
            <motion.h3
              className={styles.certificatesTitle}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5 }}
            >
              Certificates
            </motion.h3>
            
            <motion.div 
              className={styles.certificatesContainer}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {certificates.map((cert, index) => (
                <motion.div 
                  key={cert.name}
                  className={styles.certificateBadge}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ delay: 0.1 + (index * 0.1) }}
                >
                  <img src={cert.image} alt={cert.name} />
                  <span>{cert.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className={styles.profileContainer}
          variants={scaleIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
        >
          <div className={styles.profileFrame}>
            <img src="../public/profile-photo.jpg" alt="Axel Qian" />
            <div className={styles.profileOverlay}></div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className={styles.skills}>
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className={styles.skillsTitle}
        >
          Skills
        </motion.h2>
        <motion.div 
          className={styles.skillGrid}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.category}
              className={styles.skillCategory}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <h3>{category.category}</h3>
              <motion.div className={styles.skillList}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    className={`${styles.skillTag} ${styles[`level-${skill.level.toLowerCase()}`]}`}
                    variants={skillVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Home; 