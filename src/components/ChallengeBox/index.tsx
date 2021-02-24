import styles from '../../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {

    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeBoxActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" alt="" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 20 minutos.</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeBoxNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                            Avance de level complentando desafios.
                        </p>
                    </div>
                )
            }
        </div>
    );
}