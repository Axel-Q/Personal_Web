import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects = [
    {
      id: '1',
      title: 'Project One',
      description: 'A full-stack web application',
      tags: ['React', 'Node.js', 'MongoDB'],
      imageUrl: '/project1.jpg',
      githubUrl: 'https://github.com/yourusername/project1',
    },
    // Add more projects...
  ];

  const filters = ['all', 'React', 'Node.js', 'MongoDB'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <PageTransition>
      <div className={styles.container}>
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          Projects
        </motion.h1>
        
        <motion.div 
          className={styles.filters}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {filters.map(filter => (
            <motion.button
              key={filter}
              variants={fadeInUp}
              className={`${styles.filterButton} ${activeFilter === filter ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className={styles.projectGrid}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id} 
              className={styles.projectCard}
              variants={scaleIn}
              whileHover={{ y: -5 }}
            >
              <div className={styles.projectImage}>
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <motion.span 
                      key={tag} 
                      className={styles.tag}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Projects; 