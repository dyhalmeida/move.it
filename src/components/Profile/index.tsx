import React from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/pages/Profile.module.css';

export default function Profile() {

    const { level } = React.useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/dyhalmeida.png" alt="Diego Almeida" />
            <div>
                <strong>Diego Almeida</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}