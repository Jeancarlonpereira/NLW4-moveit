import { Profiler } from 'inspector'
import React, { useContext } from 'react'
import styles from '../styles/components/Profile.module.css'
import { ChallengeContexts } from "../contexts/ChallengesContext";
export function Profile (){
    const {level} = useContext(ChallengeContexts)
    return (

        <div className={styles.profileContainer}>
            <img src="https://github.com/Jeancarlonpereira.png" alt="Jean Pereira"/>
            <div>
                <strong>Jean Pereira</strong>
                <p><img src="icons/level.svg" alt="level"/>
                    Level {level}</p>
            </div>
        </div>
    )
}