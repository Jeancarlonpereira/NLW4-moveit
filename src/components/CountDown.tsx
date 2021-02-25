import { useState, useEffect, useContext } from "react";
import { clearTimeout } from "timers";
import styles from "../styles/components/CountDown.module.css";
import { ChallengeContexts } from "../contexts/ChallengesContext";
let countdownTimeOut: NodeJS.Timeout;

export function CountDown() {
    const { startNewChallenge } = useContext(ChallengeContexts);
    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false)
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown() {
        setIsActive(true)
    }

    function resetCountDown() {
        window.clearTimeout(countdownTimeOut)
        setIsActive(false);
        setTime(0.05 * 60);

    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        }
        else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge()
        }

    }, [isActive, time])

    return (
        <div>
            <div className={styles.countDownContainer}>
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
            {hasFinished ? (
                <button
                    disabled
                    className={styles.countDownButton}
                >
                    Ciclo encerrado
                </button>
            ) :
                (
                    <>
                        { isActive ? (
                            <button type="button" className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                                onClick={resetCountDown}>
                                Abandonar ciclo
                            </button>
                        ) : (
                                <button type="button" className={styles.countDownButton}
                                    onClick={startCountDown}>
                                    Iniciar um ciclo
                                </button>
                            )}
                    </>
                )
            }




        </div>
    );

}