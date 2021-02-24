import { Profiler } from 'inspector'
import React from 'react'
import styles from '../styles/components/Profile.module.css'

export function Profile (){
    return (

        <div className={styles.profileContainer}>
            <img src="https://github.com/Jeancarlonpereira.png" alt="Jean Pereira"/>
            <div>
                <strong>Jean Pereira</strong>
                <p><img src="icons/level.svg" alt="level"/>
                    Level 1</p>
            </div>
        </div>
    )
}