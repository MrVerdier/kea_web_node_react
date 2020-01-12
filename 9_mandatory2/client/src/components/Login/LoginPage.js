import React from 'react'
// import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'

export default function LoginPage() {
    return (
        <>
            <h1>Login</h1>
            <LoginForm />
            {/* <Link to='/emails' >Not a user? sign up here</Link> */}
        </>
    )
}