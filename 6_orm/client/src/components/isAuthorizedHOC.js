import React from 'react'

const IsAuthorizedHOC = WrappedComponent => props => {
    return (
        <WrappedComponent IsAuthorized={true}/>
    )
}

export default IsAuthorizedHOC