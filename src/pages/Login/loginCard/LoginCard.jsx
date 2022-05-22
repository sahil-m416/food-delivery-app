import React from 'react'
import Button from '../../../Components/Button/Button'
import Input from '../../../Components/Input/Input'
export default function loginCard(props) {
    const { mobileNumber, onClick, onSubmit, onChange, isLoading } = props

    return (
        <div className="styles.container">
            <h1>Login Page</h1>
            <Input
                value={mobileNumber}
                onChange={onChange}
                onClick={onClick}
                placeholder="Enter you Mobile Number"
                type="number"
            />
            <Button
                onClick={onSubmit}
                variant="filled"
            >
                {
                    isLoading ? "Loading" : "Click me"
                }
            </Button>
        </div>
    )
}