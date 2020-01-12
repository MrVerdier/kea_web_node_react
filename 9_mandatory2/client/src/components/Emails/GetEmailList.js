import React, { useState, useEffect } from 'react'

export default function GetEmailList() {

    const [emailList, setEmailList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/getemails`)
            const body = await result.json()
            setEmailList(body)
            console.log(body)
        }
        fetchData()       
    }, [])

    return(
        <>
        <h1>Sent Emails</h1>
        <div className="email-list">
            {emailList.map((email, key) => (
                <div className="email-list-info" key={key}>
                    <span>From:</span>
                    <div className="from"> {email.from}</div>
                    <span>To:</span>
                    <div className="to">{email.to}</div>
                    <span>Subject:</span>
                    <div className="subject">{email.subject}</div>
                    <span>Message:</span>
                    <div className="message">{email.text}</div>
                </div>
            ))} 
        </div>
    </>
    )
}