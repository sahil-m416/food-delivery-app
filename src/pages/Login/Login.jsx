import React, { useState } from 'react'
import LoginCard from './loginCard/LoginCard'
import styles from './style.module.css'
import OtpCard from './otpCard/OtpCard'
import { requestOtp, onOtpSubmit } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {

    const [isOtpRequested, setIsOtpRequested] = useState(false)
    const [mobileNumber, setMobileNumber] = useState("")
    const [opt, setOpt] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    async function onSubmit() {

        try {
            setIsLoading(!isLoading)
            await requestOtp()
            setIsOtpRequested(true)
            setIsLoading(false)


        } catch (error) {
            alert("Something went wrong")
            setIsLoading(false)
            console.error(error)
        }
    }

    function onClick(e) {
        console.log(e.target.value)
    }
    function onChange(e) {
        setMobileNumber(e.target.value)
    }

    async function otpSub() {
        try {
            setIsLoading(true)
            // // Pass OTP
            await onOtpSubmit()
            setIsLoading(false)
            localStorage.setItem("token", "fakeToken")
            props.setAuth()

        } catch (error) {
            alert("Something went wrong")
            console.error(error)
        }
    }
    return (
        <div className={styles.container}>
            {
                isOtpRequested ?
                    <OtpCard onClick={otpSub} isLoading={isLoading}
                    />
                    :
                    <LoginCard onClick={onClick} onChange={onChange} onSubmit={onSubmit} isLoading={isLoading} />

            }
        </div>

    )
}