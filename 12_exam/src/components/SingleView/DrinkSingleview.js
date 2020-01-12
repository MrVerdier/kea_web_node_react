import React, {useState, useEffect} from 'react'
import Favorite from './../Favorite/Favorite'

export default function DrinkSingleview( {match} ) {

    const API_KEY = process.env.REACT_APP_DRINKDB_API_KEY;

    const drinkId = match.params.drinkid
    const [viewDrink, setViewDrink] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {  
            const result = await fetch(`https://www.thecocktaildb.com/api/json/v2/${API_KEY}/lookup.php?i=${drinkId}`)
            const body = await result.json()
            setViewDrink(body)
        }
        fetchData()
    }, [drinkId, API_KEY])


    return(
        <div className="singleview-page" id="singleview">
            {viewDrink.drinks && viewDrink.drinks.map((item, key) => (
                <div className="drink-view" key={key}>
                    <img src={item.strDrinkThumb} alt="drink"></img>
                    <div className="drink-meta">
                        <span>{item.strCategory} <span role="img" aria-label="spacer">&#127864;</span> </span>
                        <span>{item.strIBA} <span role="img" aria-label="spacer">&#127864;</span> </span>
                        <span>{item.strAlcoholic}</span>
                    </div>
                    <h2>{item.strDrink}</h2>
                    <div className="ingredients-list">
                        <ul>
                            { item.strMeasure1 === null ? (""):( <li>{item.strMeasure1} {item.strIngredient1}</li>)}
                            { item.strMeasure2 === null ? (""):( <li>{item.strMeasure2} {item.strIngredient2}</li>)}
                            { item.strMeasure3 === null ? (""):( <li>{item.strMeasure3} {item.strIngredient3}</li>)}
                            { item.strMeasure4 === null ? (""):( <li>{item.strMeasure4} {item.strIngredient4}</li>)}
                            { item.strMeasure5 === null ? (""):( <li>{item.strMeasure5} {item.strIngredient5}</li>)}
                            { item.strMeasure6 === null ? (""):( <li>{item.strMeasure6} {item.strIngredient6}</li>)}
                            { item.strMeasure7 === null ? (""):( <li>{item.strMeasure7} {item.strIngredient7}</li>)}
                            { item.strMeasure8 === null ? (""):( <li>{item.strMeasure8} {item.strIngredient8}</li>)}
                            { item.strMeasure9 === null ? (""):( <li>{item.strMeasure9} {item.strIngredient9}</li>)}
                            { item.strMeasure10 === null ? (""):( <li>{item.strMeasure10} {item.strIngredient10}</li>)}
                            { item.strMeasure11 === null ? (""):( <li>{item.strMeasure11} {item.strIngredient11}</li>)}
                            { item.strMeasure12 === null ? (""):( <li>{item.strMeasure12} {item.strIngredient12}</li>)}
                            { item.strMeasure13 === null ? (""):( <li>{item.strMeasure13} {item.strIngredient13}</li>)}
                            { item.strMeasure14 === null ? (""):( <li>{item.strMeasure14} {item.strIngredient14}</li>)}
                            { item.strMeasure15 === null ? (""):( <li>{item.strMeasure15} {item.strIngredient15}</li>)}
                        </ul>
                    </div>
                    <h4>Instructions</h4>
                    <p>{item.strInstructions}</p>
                </div>
            ))}
            <Favorite drinkId={drinkId}/>
        </div>
    )
}