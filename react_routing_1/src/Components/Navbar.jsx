export const Navbar = ()=>{
    return (
    <>
        <div style={{
            display : "flex",
            gap : "40px",
            margin : "auto",
            width : "30%",
            textAlign : "center"
        }}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/users">Users</a>
            <a href="/user">userDetail</a>
        </div>
    </>
    )
}