import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <section className={styles.hero}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm <span className={styles.highlight}>Your Name</span>
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack Developer specializing in modern web applications
        </motion.p>
      </section>

      <section className={styles.skills}>
        <h2>Skills</h2>
        <div className={styles.skillGrid}>
          {['React', 'TypeScript', 'Node.js', 'GraphQL'].map((skill, index) => (
            <motion.div 
              key={skill}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default Home; 