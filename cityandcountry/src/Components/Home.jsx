import { useEffect, useState } from "react"


export const Home = ()=>{

    const [cities, setCities] = useState([])
    useEffect(()=>{
        getData()
    },[])
    async function getData(){
        const data = await fetch('http://localhost:7000/cities')
        const res = await data.json()
        setCities(res)
    }
    async function deleteCity(id){
        const data = await fetch(`http://localhost:7000/cities/${id}`,{
            method : "DELETE",
        })
        getData()
    }
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Country	City</th>
                        <th>Population</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { cities?.map(city=><tr key={city.id}>
                        <td>{city.id}</td>
                        <td>{city.country}</td>
                        <td>{city.population}</td>
                        <td><button>Edit</button></td>
                        <td><button onClick={()=>deleteCity(city.id)}>Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}