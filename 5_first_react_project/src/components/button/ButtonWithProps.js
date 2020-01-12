import React from 'react'

export default class ButtonWithProps extends React.Component {
    handleClick = (event) => {
        this.props.informButtonPage( "Button was clicked")
    }

    handleChange = (event) => {
        this.props.changeButtonState( "Button was hovered")
    }

    render() {

        const {buttonText, customStyle} = this.props
        console.log(this.props)
        
        return(
                <button onClick={this.handleClick} className="btn-small" style={customStyle}>
                    {buttonText ? buttonText : "Submit"}
                </button>
        )
    }
}