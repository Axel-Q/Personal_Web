import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import styles from './Projects.module.css';
import { FiGithub, FiExternalLink, FiInfo } from 'react-icons/fi';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects = [
    {
      id: '1',
      title: 'MoviesTracker',
      description: 'A React Native-powered mobile app for movie ratings and reviews with a sleek UI.',
      tags: ['React', 'Node.js', 'MongoDB'],
      imageUrl: '/movie_tracker.jpg',
      githubUrl: 'https://github.com/Axel-Q/MoviesTracker',
      liveUrl: '',
    },
    {
      id: '2',
      title: 'Weather App',
      description: 'Real-time weather forecasting application with interactive maps and data visualization.',
      tags: ['JavaScript', 'React', 'CSS'],
      imageUrl: '/profile-photo.jpg',
      githubUrl: 'https://github.com/yourusername/weather-app',
      liveUrl: 'https://weather-app-demo.vercel.app',
    },
    {
      id: '3',
      title: 'Task Manager',
      description: 'A productivity application for managing tasks with drag-and-drop functionality.',
      tags: ['React', 'Node.js', 'MongoDB'],
      imageUrl: '/google.jpg',
      githubUrl: 'https://github.com/yourusername/task-manager',
    },
    {
      id: '4',
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills, built with React and Framer Motion.',
      tags: ['React', 'TypeScript', 'CSS'],
      imageUrl: '/saa.jpg',
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://your-portfolio.com',
    },
  ];

  // Extract unique tags from all projects
  const allTags = Array.from(new Set(
    projects.flatMap(project => project.tags)
  ));
  
  // Create filters array with 'all' as the first option, followed by sorted tags
  const filters = ['all', ...allTags.sort()];

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
          className={styles.pageTitle}
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div 
                key={project.id} 
                className={styles.projectCard}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.projectImage}>
                  <img src={project.imageUrl} alt={project.title} />
                  <div className={styles.projectLinks}>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
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
                        onClick={() => setActiveFilter(tag)}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <motion.div 
            className={styles.noResults}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FiInfo size={24} />
            <p>No projects found with the selected filter.</p>
            <button 
              onClick={() => setActiveFilter('all')}
              className={styles.resetButton}
            >
              Show all projects
            </button>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
};

export default Projects; 