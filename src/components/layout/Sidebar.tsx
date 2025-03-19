import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/resume', label: 'Resume' },
    { path: '/projects', label: 'Projects' },
    { path: '/github', label: 'GitHub' },
  ];

  return (
    <>
      <button 
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      <AnimatePresence>
        {(isOpen || window.innerWidth > 768) && (
          <motion.nav
            className={styles.sidebar}
            initial={{ x: -240 }}
            animate={{ x: 0 }}
            exit={{ x: -240 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className={styles.logo}>
              <h2>Your Name</h2>
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
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar; 