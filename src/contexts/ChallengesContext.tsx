import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye';
    description: number;
    amount: number;
}
interface ChallengesContextData {
    level: number,
    currentExperience: number,
    challengesCompleted: number,
    activeChallenge: Challenge,
    experienceToNextLevel: number,
    levelUp: () => void,
    startNewChallenge: () => void,
    resetChallenge: () => void;
    completedChallenge: () => void;
}
interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengeContexts = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExpereince] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChalenge] = useState(null)
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    function levelUp() {
        setLevel(level + 1)

    }

    function startNewChallenge() {
        const ramdomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[ramdomChallengeIndex]
        setActiveChalenge(challenge)

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {
            new Notification('Novo Desafio!', {
                body: `Valendo ${challenge.amount}xp`
            })
        }
    }

    function resetChallenge() {
        setActiveChalenge(null)
    }

    function completedChallenge() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp();
        }

        setCurrentExpereince(finalExperience);
        setActiveChalenge(null);
        setChallengesCompleted(challengesCompleted + 1)
    }
    return (
        <ChallengeContexts.Provider value={{
            level,
            levelUp,
            currentExperience,
            challengesCompleted,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel,
            completedChallenge
        }}>
            {children}
        </ChallengeContexts.Provider>
    )

}