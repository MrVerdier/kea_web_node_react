import React from 'react'
import RandomDrink from './RandomDrink'
import TopTenDrinks from './TopTenDrinks'
import CustomDrinks from './CustomDrinks'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Home({user}) {

    return (

        <div className="content-container" id="home">
            <h1>Welcome "{user.username}"</h1>
            <div className="sub-links">
                <AnchorLink href='#randomDrinks'>Random</AnchorLink>
                <AnchorLink href='#topTenDrinks'>Top Ten</AnchorLink>
                <AnchorLink href='#customDrinks'>Custom Drinks</AnchorLink>
            </div>
            <section id="randomDrinks">
                <RandomDrink/>
            </section>
            <section id="topTenDrinks">
             <TopTenDrinks/>
            </section>
            <section id="customDrinks">
             <CustomDrinks/>
            </section>
        </div>
    )
}

