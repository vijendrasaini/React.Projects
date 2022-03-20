import { useContext } from "react";
import { AccountContext } from "../Contexts/AccountContext";

export function Profile(){
    const { token } = useContext(AccountContext)
    const { email, name} = token


    return (
        <>
            <tbody>
                <tr>
                    <td>Email</td>
                    <td>Name</td>
                </tr>
                <tr>
                    <td>{email}</td>
                    <td>{name}</td>
                </tr>
            </tbody>
        </>
    )
}