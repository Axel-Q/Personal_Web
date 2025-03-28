import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import styles from './Projects.module.css';
import { FiGithub, FiExternalLink, FiInfo, FiCode, FiStar, FiGitCommit, FiDatabase, FiActivity } from 'react-icons/fi';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // GitHub stats data
  const githubStats = [
    { label: 'commits', value: '150', icon: <FiGitCommit size={16} /> },
    { label: 'repositories', value: '9', icon: <FiDatabase size={16} /> },
    { label: 'contributions', value: '112', icon: <FiActivity size={16} /> },
  ];

  const projects = [
    {
      id: '1',
      title: 'MoviesTracker',
      description: 'A React Native-powered mobile app for movie ratings and reviews with a sleek UI.',
      tags: ['React Native', 'JavaScript'],
      imageUrl: '/movie_tracker.jpg',
      githubUrl: 'https://github.com/Axel-Q/MoviesTracker',
      liveUrl: '',
    },
    {
      id: '2',
      title: 'Kanbas React Web App',
      description: 'A React web application for CS5610, featuring a Kanban-style board for project management.',
      tags: ['React', 'TypeScript', 'Web Development'],
      imageUrl: '/profile-photo.jpg',
      githubUrl: 'https://github.com/Axel-Q/kanbas-react-web-app',
      liveUrl: '',
    },
    {
      id: '3',
      title: 'Kanbas Node Server',
      description: 'Node.js backend server application that provides API endpoints for the Kanbas web application.',
      tags: ['Node.js', 'JavaScript', 'Backend'],
      imageUrl: '/google.jpg',
      githubUrl: 'https://github.com/Axel-Q/kanbas-node-server-app',
      liveUrl: '',
    },
    {
      id: '4',
      title: 'Mobile Development',
      description: 'Collection of mobile application projects showcasing cross-platform development skills.',
      tags: ['JavaScript', 'Mobile', 'React Native'],
      imageUrl: '/saa.jpg',
      githubUrl: 'https://github.com/Axel-Q/Mobile',
      liveUrl: '',
    },
    {
      id: '5',
      title: 'A1Mobile',
      description: 'Mobile application development assignment featuring modern UI components and responsive design.',
      tags: ['JavaScript', 'Mobile', 'UI Design'],
      imageUrl: '/profile-photo2.jpg',
      githubUrl: 'https://github.com/Axel-Q/A1Mobile',
      liveUrl: '',
    },
    {
      id: '6',
      title: 'A2Mobile',
      description: 'Advanced mobile application project with complex state management and API integration.',
      tags: ['JavaScript', 'Mobile', 'API Integration'],
      imageUrl: '/movie_tracker.jpg',
      githubUrl: 'https://github.com/Axel-Q/A2Mobile',
      liveUrl: '',
    },
    {
      id: '7',
      title: 'VotingAppSolana',
      description: 'Blockchain-based voting application built on the Solana network featuring secure and transparent voting mechanisms.',
      tags: ['TypeScript', 'Blockchain', 'Solana'],
      imageUrl: '/google.jpg',
      githubUrl: 'https://github.com/Axel-Q/VotingAppSolana',
      liveUrl: '',
    }
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
        <div className={styles.githubHeader}>
          <div className={styles.githubProfile}>
            <div className={styles.profileHeader}>
              <motion.div 
                className={styles.profileImage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FiCode size={28} />
              </motion.div>
              <motion.div 
                className={styles.profileInfo}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <h1 className={styles.pageTitle}>My GitHub Projects</h1>
                <div className={styles.githubStats}>
                  <a 
                    href="https://github.com/Axel-Q" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                  >
                    <FiGithub size={16} />
                    <span>@Axel-Q</span>
                  </a>
                  <span className={styles.stat}>
                    <FiDatabase size={16} />
                    <span>9 repositories</span>
                  </span>
                </div>
              </motion.div>
            </div>
            <motion.p 
              className={styles.githubBio}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Showcasing my projects from GitHub. Click on a tag to filter by technology.
            </motion.p>
          </div>
          
          <motion.div 
            className={styles.githubStatsCards}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {githubStats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className={styles.statCard}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.3 + (index * 0.1) }
                }}
              >
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>
                  {stat.icon}
                  <span>{stat.label}</span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
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