import styles from '../../styles/components/Countdown.module.css';

export default function Countdown() {
    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>2</span>
                    <span>2</span>
                </div>
                <span>:</span>
                <div>
                    <span>0</span>
                    <span>0</span>
                </div>
            </div>
            <button className={styles.countdownButton} type="button">
                Iniciar ciclo
            </button>
        </div>
    );
}