import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/denisonfer.png" alt="Denison Ferreira"/>

      <div>
        <strong>Denison Ferreira</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
    );
}

export default Profile;