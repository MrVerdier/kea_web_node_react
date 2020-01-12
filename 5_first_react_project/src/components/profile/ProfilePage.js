import React from 'react'
import Profile from './Profile'
import img from './../../test.jpg';

export default class ProfilePage extends React.Component {
    render() {

        // const hobbies = ["Knitting", "Gaming", "Bird Watching"]
        // const pets = ["Dog", "Cat", "Parrot"]

        const profiles = [
            {
            name: "Anders Verdier",
            img: img,
            age: "27",
            hobbies: ["Knitting", "Gaming", "Bird Watching"],
            pets: ["Dog", "Cat", "Parrot"]
        },{
            name: "Pernille Nørskov",
            img: img,
            age: "unknown",
            hobbies: ["Knitting", "Gaming", "Bird Watching"],
            pets: ["Pig", "Bird", "Cow"]
        }
        ]


        return (
            <div className="App">
            <header className="App-header">
            {
            profiles.map((profile, index) => {
             return <Profile key={"profile" + index} profileInfo={profile}/>
            })
            }
            </header>
          </div>
        )
    }
}