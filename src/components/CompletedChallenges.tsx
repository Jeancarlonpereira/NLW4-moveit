import styles from '../styles/components/CompletedChallenges.module.css'
import { ChallengeContexts } from "../contexts/ChallengesContext";
import { useContext } from 'react';
export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengeContexts)
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );

}