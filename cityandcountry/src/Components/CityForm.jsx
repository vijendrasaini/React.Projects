import { useEffect, useState } from "react"


export const CityForm = () =>{
    const dummy = {
        city : "",
        country : "",
        population : ""
    }
    const [countries, setCountries] = useState([])
    const [ cityData, setCityData ] = useState(dummy)
    useEffect(()=>{
        getCountries()
    },[])
    async function getCountries(){
        const data = await fetch('http://localhost:7000/countries')
        const res = await data.json()
        setCountries(res)
    }
    function handleInput(e){
        e.preventDefault()
        const { name, value }  = e.target
        setCityData({...cityData, [name] : value})
    }
    async function sendData(){
        const res = await fetch('http://localhost:7000/cities',{
            method : "POST",
            body : JSON.stringify(cityData),
            headers : {
                "content-type" : "application/json"
            }
        })
        setCityData(dummy)
    }
    return (
        <>
            <tbody style={
                {
                    width: "40%",
                    margin : "auto",
                    textAlign : "center"
                    // display : 
                }
            }>
                <tr>
                    <td>City-Name</td>
                    <td><input value={cityData.city} onChange={handleInput} name="city" type="text" /></td>
                </tr>
                <tr>
                    <td>Country-Name</td>
                    <td>
                        <select onChange={handleInput} name="country" id="">
                            {countries?.map(country=><option key={country.id}>{country.country}</option>)}
                        </select>
                    </td>
                    {/* <td><input value={cityData.country} onChange={handleInput} name="country" type="text" /></td> */}
                </tr>
                <tr>
                    <td>Population</td>
                    <td><input value={cityData.population} onChange={handleInput} name="population" type="Number" /></td>
                </tr>
            </tbody>
            <button onClick={sendData}>ADD-CITY</button>
            
        </>
    )
}