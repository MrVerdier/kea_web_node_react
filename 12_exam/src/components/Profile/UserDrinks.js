import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";

export default function UserDrinks() {

    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        const fetchData = async () => {  
            const result = await fetch(`/api/drinks/getuserdrinks`)
            const body = await result.json()
            setDrinks(body)
        }
        fetchData()
    }, [drinks])


    return(
        <>
            <h2>Your custom drinks</h2>
            <div className="user-custom-drinks">
                {drinks && drinks.map((item, key) => (
                    <div key={key}>
                        {item.drinks.map((drink, key) => (
                            <Link to={`/customdrinksingleview/${drink.id}`} key={key} className="drink-link">
                                <div className="drink-container">
                                    <div className="card-info">
                                        <h3>{drink.name}</h3>
                                        <div>{drink.category}</div>
                                    </div>
                                    <div className="image-cover">
                                        <img src={process.env.PUBLIC_URL + `/uploads/${drink.image_url}`} alt='drink' />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}


