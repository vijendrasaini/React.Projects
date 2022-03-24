export const Navbar = ()=>{

    // function logOut(){
    //     localStorage.clear('user')
    //     return "/login"
    // }
    return (
        <>
        <div style={{border : "1px solid black", padding : "10px", width : "400px", margin : "auto", display : "flex", justifyContent : "space-between", marginTop : "100px", marginBottom : "50px"}}>
            <a href="/">Home</a>
            <a href="/login">{localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')).email.split('@')[0]:"Login"}</a>
        </div>
        </>
    )
}