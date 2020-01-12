import React from 'react'
import ButtonWithProps from './ButtonWithProps'
import ButtonWithChild from './ButtonWithChild'
import ButtonNew from './ButtonNew'
import './ButtonPage.css'

export default class ButtonPage extends React.Component {
    handleButtonClicks = (text) => {
        console.log(text)
    }

    handleButtonChanges = (text) => {
        console.log(text)
    }

    render() {

        // const buttonText = "click me now!"

        return (
            <div>
                Button Page
                <div>
                    <ButtonWithProps informButtonPage={this.handleButtonClicks} changeButtonState={this.handleButtonChanges}/>
                    <ButtonWithProps informButtonPage={this.handleButtonClicks} changeButtonState={this.handleButtonChanges} buttonText="click me" customStyle={{backgroundColor: "red"}}/>
                    <ButtonWithProps informButtonPage={this.handleButtonClicks} changeButtonState={this.handleButtonChanges} buttonText="Click me now!" customStyle={{backgroundColor: "blue"}}/>

                    <ButtonWithChild informButtonPage={this.handleButtonClicks}>
                        This is a child    
                    </ButtonWithChild>  

                    <ButtonNew customStyle={{backgroundColor: "blue", color: "white"}}>
                        Test
                    </ButtonNew>
                </div>
            </div>
        )
    }
}
