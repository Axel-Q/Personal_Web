import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/layout/Sidebar';
import LoadingSpinner from './components/ui/LoadingSpinner';
import styles from './App.module.css';

const Home = lazy(() => import('./pages/Home'));
const Resume = lazy(() => import('./pages/Resume'));
const Projects = lazy(() => import('./pages/Projects'));
const GitHub = lazy(() => import('./pages/GitHub'));

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Sidebar 
          isExpanded={isSidebarExpanded} 
          onToggle={() => setIsSidebarExpanded(!isSidebarExpanded)} 
        />
        <main className={`${styles.main} ${!isSidebarExpanded ? styles.mainCollapsed : ''}`}>
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/github" element={<GitHub />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App; 