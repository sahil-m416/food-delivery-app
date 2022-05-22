import React from 'react'

export default function Input(props) {
    if (!props.placeholder) {
        throw new Error("Please provide a placeholder")
    }
    return (
        <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
    )
}
