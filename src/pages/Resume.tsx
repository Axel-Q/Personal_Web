import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { fadeInUp, slideIn, staggerContainer } from '@/utils/animations';
import styles from './Resume.module.css';

const Resume: React.FC = () => {
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

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className={styles.timeline}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index }}
              >
                {exp.title}
              </motion.h3>
              <motion.h4 
                className={styles.company}
                whileHover={{ color: '#000' }}
              >
                {exp.company}
              </motion.h4>
              <motion.p className={styles.period}>{exp.period}</motion.p>
              <motion.p 
                className={styles.description}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * index }}
              >
                {exp.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Resume; 