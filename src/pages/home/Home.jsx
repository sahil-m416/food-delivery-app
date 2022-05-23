import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from './../../Components/Button/Button'
export default function Home() {

    const dispatch = useDispatch()

    function onInc() {
        dispatch({ type: 'Inc' })
    }
    function onDec() {
        dispatch({ type: 'Dec' })
    }

    function onDecten() {
        dispatch({ type: 'Dec-ten', payload: counter + 10 })
    }
    const counter = useSelector(function (selector) {
        return selector.counter;
    })
    return (
        <>
            <div>Home</div>
            <h1>{counter}</h1>
            <Button onClick={onInc}>Inc</Button>
            <Button onClick={onDec}>Dec</Button>
            <Button onClick={onDecten}>Dec-Ten</Button>
        </>
    )
}
