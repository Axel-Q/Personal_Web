import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { 
  HiChevronLeft, 
  HiChevronRight,
  HiHome,
  HiDocument,
  HiCollection,
  HiCode
} from 'react-icons/hi';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isExpanded, onToggle }: SidebarProps) => {
  const navItems = [
    { path: '/', label: 'Home', icon: <HiHome size={20} /> },
    { path: '/resume', label: 'Resume', icon: <HiDocument size={20} /> },
    { path: '/projects', label: 'Projects', icon: <HiCollection size={20} /> },
    { path: '/github', label: 'GitHub', icon: <HiCode size={20} /> },
  ];

  return (
    <motion.nav
      className={`${styles.sidebar} ${!isExpanded ? styles.collapsed : ''}`}
      animate={{ width: isExpanded ? 'var(--sidebar-width)' : 'var(--sidebar-width-collapsed)' }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className={styles.logo}>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1>Axel's</h1>
            <h2>Portfolio</h2>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`${styles.logoIcon} ${styles.clickable}`}
            onClick={onToggle}
            title="Expand Sidebar"
          >
            A
          </motion.div>
        )}
      </div>
      
      <ul className={styles.navItems}>
        {navItems.map(item => (
          <li key={item.path}>
            <NavLink 
              to={item.path}
              className={({ isActive }) => 
                `${isActive ? styles.activeLink : styles.link} ${!isExpanded ? styles.iconOnly : ''}`
              }
              title={item.label}
            >
              <span className={styles.icon}>{item.icon}</span>
              {isExpanded && <span className={styles.label}>{item.label}</span>}
            </NavLink>
          </li>
        ))}
        <li className={styles.toggleButtonContainer}>
          <button 
            className={`${styles.toggleButton} ${!isExpanded ? styles.collapsed : ''}`}
            onClick={onToggle}
            aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            <span className={styles.icon}>
              {isExpanded ? <HiChevronLeft size={16} /> : <HiChevronRight size={16} />}
            </span>
            {isExpanded && <span className={styles.label}>Collapse</span>}
          </button>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Sidebar; 