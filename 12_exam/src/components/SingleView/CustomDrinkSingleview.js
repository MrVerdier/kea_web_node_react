import React, {useState, useEffect} from 'react'

export default function DrinkSingleview( {match} ) {

    const drinkId = match.params.drinkid
    const [viewDrink, setViewDrink] = useState([])

    useEffect(() => {
        const fetchData = async () => {  
            const result = await fetch(`/api/drinks/getcustomdrinksbyid?id=${drinkId}`)
            const body = await result.json()
            setViewDrink(body)
        }
        fetchData()
    }, [drinkId])

    const seperateIngredients = viewDrink.map((item) => {
        const test = item.ingredients.split(',')
        return test
    })

    return(
        <div className="singleview-page" id="singleview">
             {viewDrink && viewDrink.map((item, key) => (
                <div className="drink-view" key={key}>
                    <img src={process.env.PUBLIC_URL + `/uploads/${item.image_url}`} alt="drink"></img>
                    <div className="drink-meta">
                        <span>{item.category} <span role="img" aria-label="spacer">&#127864;</span> </span>
                    </div>
                    <h2>{item.name}</h2>
                    <div className="ingredients-list">
                        {   
                        seperateIngredients.map((item) => (
                            <ul>
                                {item.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        ))
                        }
                    </div>
                    <h4>Instructions</h4>
                    <p>{item.instructions}</p>
                </div>
            ))}
        </div>
    )
}