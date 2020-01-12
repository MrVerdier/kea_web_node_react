import React, {useState} from 'react'
// import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function AddEmailForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let [response, setResponse] = useState('')

    const loginUser = async () => {
        const result = await fetch(`/users/login`, { 
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const body = await result.json()
        setResponse(body.response)
        console.log(response)
    }

    return (
        <>
        <div id="login">
            <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
            <button onClick={() => loginUser()}>Login</button>
            {(response === 200) ? "Logged in, proceed to Emails" : "Please Log in with the correct email and password" }
        </div>
    </>
    )
}