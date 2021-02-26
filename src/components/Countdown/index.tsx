import React from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {

    const { startNewChallenge } = React.useContext(ChallengesContext)

    const [time, setTime] = React.useState(0.1 * 60);
    const [isActive, setIsActive] = React.useState(false);
    const [hasFinished, setHasFinished] = React.useState(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    React.useEffect(() => {

        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }

    }, [isActive, time]);

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }


    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    className={styles.countdownButton}
                    disabled
                >
                    Ciclo encerrado
                </button>
            ) : (
                    <React.Fragment>
                        {
                            isActive
                                ? (
                                    <button onClick={resetCountDown} className={`${styles.countdownButton} ${styles.countdownButtonActive}`} type="button">
                                        Abandonar ciclo
                                    </button>

                                )
                                : (
                                    <button onClick={startCountDown} className={`${styles.countdownButton}`} type="button">
                                        Iniciar ciclo
                                    </button>
                                )
                        }
                    </React.Fragment>
                )}
        </div>
    );
}