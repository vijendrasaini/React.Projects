import { Link} from 'react-router-dom'


export const Navigation = () =>{


    return (
        <>
            <div className="navbar">
                <Link to={"/"}>Home</Link>
                <Link to={"/add-country"}>Add-Country</Link>
                <Link to={"/add-city"}>Add-City</Link>
            </div>
        </>
    )
}