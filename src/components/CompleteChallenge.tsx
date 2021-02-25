import styles from '../styles/components/CompleteChallenge.module.css';


const CompleteChallenge: React.FC = () => {
  return (
    <div className={styles.completeChallengeContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
    );
}

export default CompleteChallenge;