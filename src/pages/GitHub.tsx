import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import styles from './GitHub.module.css';
import useSWR from 'swr';

const GitHub: React.FC = () => {
  const { data, error } = useSWR('/api/github-stats', async () => {
    // Placeholder data - replace with actual API call
    return {
      stars: 120,
      commits: 450,
      repositories: 25,
      contributions: 1200
    };
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>; 

  return (
    <PageTransition>
      <div className={styles.container}>
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          GitHub Stats
        </motion.h1>
        <motion.div 
          className={styles.statsGrid}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {Object.entries(data).map(([key, value]) => (
            <motion.div 
              key={key}
              className={styles.statCard}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{key}</h3>
              <p>{value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default GitHub; 