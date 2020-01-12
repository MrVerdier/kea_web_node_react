import React from 'react'
import CustomDrink from './CustomDrink'
import UserDrinks from './UserDrinks'
import FavoriteDrinks from './../Favorite/FavoriteDrinks'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Profile({user}) {

    return (
        <div className="profile-page">
             <div className="sub-links">
                <AnchorLink href='#customDrink'>Upload Drinks</AnchorLink>
                <AnchorLink href='#userDrink'>Your Drinks</AnchorLink>
                <AnchorLink href='#FavoriteDrinks'>Favorites</AnchorLink>
            </div>
            <div className="user-container">
                <h2>Username: "{user.username}"</h2>
                <div className="user-info">First Name: "{user.firstName}"</div>
                <div className="user-info">Last Name: "{user.lastName}"</div>
                <div className="user-info">Email: "{user.email}"</div>
            </div>
            <h2>Upload a new drink!</h2>
            <section id="customDrink">
                <CustomDrink />
            </section>
            <section id="userDrink">
                <UserDrinks />
            </section>
            <section id="FavoriteDrinks">
                <FavoriteDrinks />
            </section>
        </div>
    )
}

