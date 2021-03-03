import React from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/Countdown.module.css';

export default function Countdown() {


    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountDown, 
        resetCountDown 
    } = React.useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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