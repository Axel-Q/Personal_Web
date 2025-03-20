import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'GraphQL', level: 75 }
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
      scale: 1.1,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
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
                  transition={{ delay: 0.6 + (index * 0.1) }}
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
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className={styles.skillCard}
              variants={skillVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              <h3>{skill.name}</h3>
              <motion.div className={styles.progressBar}>
                <motion.div 
                  className={styles.progressFill}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </motion.div>
              <motion.span 
                className={styles.percentage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {skill.level}%
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Home; 