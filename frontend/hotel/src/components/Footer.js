import React from "react";
import { Link } from "react-router-dom";






const Footer = () => {

    return (
        <React.Fragment>
            <div className="footer">
                <div className="info-div">
                    <div className="info-1">
                        <h2>Address</h2>
                        <p> 300, Pink road, Mojida, New York, USA</p>
                    </div>
                    <div className="info-2">
                        <h2>Resevation</h2>
                        <p>+1303456789</p>
                        <p>reservation@rapidhotel.com</p>
                    </div>
                    <div className="info-3">
                        <h2>Navigation</h2>
                        <Link className="last-link" to="/" >Home</Link><br/><br/>
                        <Link className="last-link" to="/rooms" >Rooms</Link><br/><br/>
                        <Link className="last-link" to="/book" >Book</Link><br/><br/>
                    </div>
                    <div className="info-4">
                        <h2>Newsletter</h2>
                        <form>
                            <input type="email" className="form-email"/>
                            <button className="the-btn" type="submit">Sign Up</button>
                            <p>Subscribe newsletter to get updates</p>
                        </form>
                    </div>
                </div>
                <hr/>
                <span>Copyright &copy; 2023 All rights reserved.</span><br/><br/>
            </div>
        </React.Fragment>
    )
}
export default Footer;