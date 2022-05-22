import React from 'react'
import styles from './style.module.css'
export default function (props) {
    return (
        <button className={styles.button} onClick={props.onClick} >{props.children}</button>
    )
}