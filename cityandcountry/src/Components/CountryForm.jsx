import { useEffect, useState } from "react"


export const CountryForm = () =>{
    const [country, setCountry] = useState("")
    async function postCountry(){
        const res = await fetch('http://localhost:7000/countries',{
            method : "POST",
            body : JSON.stringify({country}),
            headers : {
                "content-type" : "application/json"
            }
        })
        setCountry("")
    }   
    function inputHandler(e){
        setCountry(e.target.value)
    }
    return (
        <>
            <input value={country} onChange={inputHandler} type="text" placeholder="Type a cityname" />
            <button onClick={postCountry}>ADD-CITY</button>
        </>
    )
}