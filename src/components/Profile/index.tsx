import styles from '../../styles/pages/Profile.module.css';

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/dyhalmeida.png" alt="Diego Almeida" />
            <div>
                <strong>Diego Almeida</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}