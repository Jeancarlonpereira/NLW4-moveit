import styles from "../styles/components/ChallengeBox.module.css";
import { ChallengeContexts } from "../contexts/ChallengesContext";
import { useContext } from "react";
import { CountDownContext } from "../contexts/CountDownContext";


export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengeContexts)
    const { resetCountDown, } = useContext(CountDownContext);

    function HanldeChallengeSucceeded() {
        completedChallenge()
        resetCountDown()

    }

    function HandleChallengeFailed() {
        resetChallenge()
        resetCountDown()
    }
    return (

        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive} >
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            className={styles.challengeFailedButton}
                            type="button"
                            onClick={HandleChallengeFailed}
                        >
                            Falhei
                            </button>
                        <button
                            className={styles.challengeSucceedeButton}
                            type="button"
                            onClick={HanldeChallengeSucceeded}
                        >
                            Completei
                            </button>

                    </footer>

                </div>
            ) :
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de level completando desafios.
                    </p>
                </div>
            }

        </div>
    );

}