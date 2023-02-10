import React from "react";
import { Link } from "react-router-dom";



const Header = () => {

    return(
        <React.Fragment>
            <div className="logo">
            <h3>Rapid Hotel & Resort</h3>
            </div>
            <div className="nav">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/rooms">Rooms</Link>
                <Link className="link" to="/book">Book</Link>
            </div>
        </React.Fragment>
    )
}

export default Header;