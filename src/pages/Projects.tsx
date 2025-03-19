import React, { useState } from 'react';
import PageTransition from '../components/layout/PageTransition';
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
        <h1>Projects</h1>
        
        <div className={styles.filters}>
          {filters.map(filter => (
            <button
              key={filter}
              className={`${styles.filterButton} ${activeFilter === filter ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles.projectGrid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects; 