
import { useContext } from 'react';
import styles from '../styles/components/ExperienceBar.module.css'
import { ChallengeContexts } from "../contexts/ChallengesContext";
export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengeContexts)
    const percentToNexLevel = Math.round((currentExperience * 100) / experienceToNextLevel)
    return (

        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNexLevel}%` }}></div>
                <span
                    className={styles.currentExperience}
                    style={{ left: `${percentToNexLevel}%` }}>
                    {currentExperience} xp
                    </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}