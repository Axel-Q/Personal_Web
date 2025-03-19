import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/resume', label: 'Resume' },
    { path: '/projects', label: 'Projects' },
    { path: '/github', label: 'GitHub' },
  ];

  return (
    <motion.nav
      className={`${styles.sidebar} ${!isExpanded ? styles.collapsed : ''}`}
      animate={{ width: isExpanded ? 'var(--sidebar-width)' : 'var(--sidebar-width-collapsed)' }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <button 
        className={styles.toggleButton}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
      >
        {isExpanded ? <HiChevronLeft /> : <HiChevronRight />}
      </button>

      <div className={styles.logo}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1>Axel's</h1>
            <h2>Portfolio</h2>
          </motion.div>
        )}
      </div>
      
      <ul className={styles.navItems}>
        {navItems.map(item => (
          <li key={item.path}>
            <NavLink 
              to={item.path}
              className={({ isActive }) => 
                isActive ? styles.activeLink : styles.link
              }
            >
              {isExpanded ? item.label : item.label[0]}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Sidebar; 