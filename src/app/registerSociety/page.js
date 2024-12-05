'use client'
//page for user to register a society

import { useState } from "react"

//need to figure out what details need to be known first
export default function registerSociety() {


    const [ username, setUsername ] = useState('');



    //borrow functions from formalbridge

    return (
        <>
        <p>register society or log in</p>
        <p>Society Name</p>
        <input value={username} onChange={() => setUsername(e.target.input)} />
        </>
    )
}