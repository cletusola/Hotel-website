import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import about1 from '../images/about_1.png'
import about2 from '../images/about_2.png'
import food1 from '../images/8.png'
import food2 from '../images/9.png'






const Home = () => {

    return (
        <React.Fragment>
            <div className="top-div"><br/>
                <div className="home-logo">
                <h3>Rapid Hotel & Resort</h3>
                </div>
                <div className="home-nav">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/rooms">Rooms</Link>
                <Link className="link" to="/book">Book</Link>
                <div className="intro">
                    <h2>Life Is Beautiful</h2>
                    <p>Unlock to enjoy the view of Martine</p>
                </div>
            </div>
            </div>
            <div className="abb-all">
                <div className="abb-txt">
                    <p><b>About Us</b></p>
                    <h2>A Luxuries Hotel with Nature</h2>
                    <p className="p">Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.
                    </p>
                </div>
                <div className="abb-img">
                    <img className="abb-img1" src={about1}/>
                    <img className="abb-img2" src={about2}/>
                </div>
            </div><br/>
            <div className="all-room">
                    <div className="all-rm-1">
                        <h3>Single Room</h3>
                    </div>
                    <div className="all-rm-2">
                        <h3>Twin Room</h3>
                    </div>
                    <div className="all-rm-3">
                        <h3>Studio Room</h3>
                    </div>
                    <div className="all-rm-4">
                        <h3>Suite</h3>
                    </div>
            </div>
            <div className="abb-all">
                <div className="abb-txt">
                    {/* <p><b>Our Foods</b></p> */}
                    <h2>We Serve Fresh and Delicious Food</h2>
                    <p className="p">Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.</p>
                </div>
                <div className="abb-img">
                    <img className="abb-img1" src={food1}/>
                    <img className="abb-img2" src={food2}/>
                </div>
            </div><br/><br/><br/><br/><br/>
            <div className="mk-rs">
                <span>Make Reservation  +303456789</span>
            </div><br/>
            <Footer/>
        </React.Fragment>
    )
}
export default Home;