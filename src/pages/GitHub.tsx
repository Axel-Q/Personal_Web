import React from 'react';
import PageTransition from '../components/layout/PageTransition';
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
        <h1>GitHub Stats</h1>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>Stars</h3>
            <p>{data.stars}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Commits</h3>
            <p>{data.commits}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Repositories</h3>
            <p>{data.repositories}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Contributions</h3>
            <p>{data.contributions}</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default GitHub; 