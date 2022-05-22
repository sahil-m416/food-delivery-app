import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'

export default function NotFound() {
    const navigate = useNavigate()
    function onNavigate() {
        navigate('/login')
    }
    return (
        <>
            <h1>404 !!! NotFound</h1>
            <h2>Goto Login</h2>

            <Button onClick={onNavigate} >Login</Button>
        </>

    )
}
