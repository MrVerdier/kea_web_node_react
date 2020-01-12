import React from 'react'

// class Profile {}


export default class Profile extends React.Component {
    render() {
        // let element = this.props
        // let userName = element.name
        // let userImg = element.img
        // let userAge = element.age
        // let userHobbies = element.hobbies
        // let userPets = element.pets

        const { img, name, age, hobbies, pets } = this.props.profileInfo
        
        return (
            <div className="profileWrapper">
                <img src={img} className="App-logo" alt="logo" />
                <div>
                    <h1>{name}</h1>
                    <ul>
                        <li>Age :{age}</li>
                        <li>Occupation: Student</li>
                        <li>Hobbies: {
                            hobbies.map((e, index)=>{
                                return (<i key={"hobby" + index}>{e}, </i>)
                            })
                        }</li>
                        <h2>Pets: </h2>
                        <ul>{
                            pets.map((element, index)=>{
                                return (<div key={"pets" + index}><li>{element}</li></div>)
                            })
                        }</ul>
                    </ul>
                </div>
                <a
                    className="App-link"
                    href="https://www.facebook.com/anders.verdier"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img src="https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/1226/facebook-icon-preview-1.png" alt="someimage">
                    </img>
                    </a>
                    <hr></hr>
            </div>
         
        )
    }
}

