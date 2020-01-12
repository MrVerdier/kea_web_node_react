// import React from 'react'
// import Theme from './Theme.js'


// export default class ThemePage extends React.Component {
//     handleColorSelection = (text) => {
//         console.log(text)
//     }
//     render() {
//         return (
//             <Theme colorSelection={this.handleColorSelection}/>
//         ) 
//     }
// }

import React from "react";
import ButtonWithProps from "../button/ButtonWithProps";

export default class ThemePage extends React.Component {
    render() {
        const { onColorChange } = this.props;

        return (
            <div>
                <h1>Theme Page</h1>
                <input type="color" onChange={event => console.log(event.target.value)}></input>
                <ButtonWithProps informButtonPage={(message) => onColorChange(message)}/>
            </div>
        );
    }
}


