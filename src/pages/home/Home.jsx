import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from './../../Components/Button/Button'
export default function Home() {

    const dispatch = useDispatch()

    const [d1, setd1] = useMyHookk()
    function onInc() {
        dispatch({ type: 'Inc' })
    }
    function onDec() {
        dispatch({ type: 'Dec' })
    }

    function onDecten() {
        dispatch({ type: 'Dec-ten', payload: counter + 10 })
        setd1(d1 * 2)
    }
    const counter = useSelector(function (selector) {
        return selector.counter;
    })
    return (
        <>
            <div>Home</div>
            <h1>{counter}</h1>
            <h1>{d1}</h1>
            <Button onClick={onInc}>Inc</Button>
            <Button onClick={onDec}>Dec</Button>
            <Button onClick={onDecten}>Dec-Ten</Button>
        </>
    )
}

function useMyHookk() {
    const [counter, setCounter] = useState(100)
    useEffect(function () {
        setTimeout(function () {
            setCounter(500)
        }, 5000)
    }, [])
    return [counter, setCounter]
}

