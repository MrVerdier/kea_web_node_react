import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function FOAAS() {

    const [message, setMessage] = useState("")
    const [subtitle, setSubtitle] = useState("")

    useEffect(()=> {
        const options = {
            headers: {
                'content-type': 'application/json',
                'Accept': 'applictation/json'
            }
        }

        axios(options)
        axios.get("https://foaas.com/cocksplat/Andreas/Anders")
            .then(response => {
                console.log(response.data.message + response.data.subtitle)
                setMessage(response.data.message)
                setSubtitle(response.data.subtitle)
            })
            .catch(err => {
                console.log("error from request", err)
            })
    }, [])
    
    return (
        <>
            <h2>{message}</h2>
            <span>{subtitle}</span>
        </>
    )
}


//https://foaas.com/cocksplat/Andreas/Anders

    // const [message, setMessage] = useState("Hello"); // position 0 is the variable an position 1 is the updated variable // useState can be null or can be set

    // useEffect(()=> {
    //     console.log("Hello there")
    //     // we would like to fetch from an api
        
    //     fetch("https://foaas.com/cocksplat/Anders/Anders")

    // }, []) // tells it wether or not it should update and when


    