import React, {useState, useEffect} from 'react'

export default function Favorite({drinkId}) {

    const [favoriteStatus, setFavoriteStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`/api/drinks/getfavorite?id=${drinkId}`)
            const body = await data.json()
            if (body === false) {
                setFavoriteStatus(false)
            } else {
                setFavoriteStatus(true)
            }
        }
        fetchData()
    }, [drinkId])

    const favoriteThis = async () => {
        fetch('/api/drinks/setfavoritedrink', {
            method:'POST',
            body:JSON.stringify({drinkId}),
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }


    return (
        <>
        <button onClick={favoriteThis} disabled={favoriteStatus}>Favorite</button>
        </>
    ) 
}