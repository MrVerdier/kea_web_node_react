import React, { useState, useEffect } from 'react'

export default function HomePage() {
    const [articleInfo, setArticleInfo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/users`)
            const body = await result.json()
            setArticleInfo(body)
        }
        fetchData()       
    }, [])
    
    return (
        <>
            <h1>Home</h1>
            <table>
                <thead>               
                    <tr>
                        <th>First Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                {articleInfo.map((user, key) => (
                <tbody key={key}>
                    <tr key={key}>
                        <td>{user.firstname}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                </tbody>
                ))} 
            </table>
        </>
    )
}