import React from 'react'
import styles from './style.module.css'
import Input from './../../../Components/Input/Input'
import Button from './../../../Components/Button/Button'

export default function otpCard(props) {
    const { isLoading } = props
    return (
        <div className={styles.container}>
            <h1>OTP Page</h1>
            <Input placeholder="Enter OTP Number" type="number" />
            <Button variant="outlined"
                onClick={props.onClick}
            >
                {
                    isLoading ? "Loading..." : "Submit"
                }
            </Button>
        </div>
    )
}
