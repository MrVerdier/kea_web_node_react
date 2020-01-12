import React, {useState} from 'react'

export default function AddEmailForm() {

    const [toEmail, setToEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [from, setFrom] = useState('')
    const [emailText, setEmailText] = useState('')
    const [response, setResponse] = useState('')

    const sendEmail = async () => {
        const result = await fetch(`/email`, { // add api endpoint url
            method: 'post',
            body: JSON.stringify({ toEmail, subject, from, emailText }),
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
        <h1>Send an Email</h1>
        
        <div id="sendEmail">
            <input type="text" value={toEmail} onChange={(event) => setToEmail(event.target.value)} placeholder="To" />
            <input type="text" value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="Subject" />
            <input type="text" value={from} onChange={(event) => setFrom(event.target.value)} placeholder="From" />
            <textarea rows="4" cols="50" value={emailText} onChange={(event) => setEmailText(event.target.value)} />
            <button onClick={() => sendEmail()}>Send Mail</button>
            {response}
        </div>
    </>
    )
}