import React, {useState} from 'react'
import useSocket from 'use-socket.io-client';

export default function Logout({user}) {

    // let history = useHistory();
    const [status, setStatus] = useState("")
    const [socket] = useSocket('http://localhost:8080');

    const logout = async () => {
        const result = await fetch(`/api/destroysession`)
        const body = await result.json()

        setStatus(body.status)
        socket.emit('remove-person', user);
    }


    console.log(status)
        
    return(
        <div className="logout">
            <h1>Are you sure?</h1>
            {/* <button onClick={() => { history.push("/login")}}> */}
            <button onClick={() => logout()} className="logout-button">
            Yes log me out
            </button>
        </div>
    )
}