import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/CompleteChallenge.module.css';


const CompleteChallenge: React.FC = () => {
  const {challengesCompleted} = useContext(ChallengesContext)

  return (
    <div className={styles.completeChallengeContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
    );
}

export default CompleteChallenge;