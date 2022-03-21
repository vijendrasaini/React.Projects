import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <div style={ { 
          display : "flex",
          width : "85%",
          justifyContent : "space-evenly"
      }}>
        <a className="home" href="/">Home</a>
        <a className="mystery" href="/section/mystery">Mystery</a>
        <a className="technology" href="/section/technology">Technology</a>
        <a className="mythology" href="/section/mythology">Mythology</a>
        <a className="history" href="/section/history">history</a>
        </div>

      </div>
    </>
  );
};




