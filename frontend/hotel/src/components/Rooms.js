import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import Header from "./Header";
import Footer from "./Footer";



const Rooms = () => {

    // function to get single rooms data from backend 
    const [single, setSingle] = useState([]);

    const getSingle = async() => {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/api/v1/single/`)
        setSuite(res.data)
    }

    useEffect(() => {
        getSingle();
    },[])

    // function to get twin rooms data from backend 
    const [twin, setTwin] = useState([]);

    const getTwin = async() => {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/api/v1/twin/`)
        setTwin(res.data)
    }

    useEffect(() => {
        getTwin();
    },[])

    // function to get studio rooms data from backend 
    const [studio, setStudio] = useState([]);

    const getStudio = async() => {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/api/v1/studio/`)
        setStudio(res.data)
    }

    useEffect(() => {
        getStudio();
    },[])

   // function to get suite data from backend 
    const [suite, setSuite] = useState([]);

    const getSuite = async() => {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/api/v1/suite/`)
        setSuite(res.data)
    }

    useEffect(() => {
        getSuite();
    },[])

    return (
        <React.Fragment>
            <div className="room-top">
                <br/><br/> 
            <Header/>
            <div className="room-tlk">
                <h1>Our Rooms</h1>
            </div>
            </div>
            <div className="room-con">
            {/* map through single room  */}
            {single && single.length > 0 ? single.map((s) => (
                <div className="cat">
                <h2>Single Room</h2>

                <div className="room-img">
                    <img src={s.image1}/>
                    <img src={s.image2}/>
                    <img src={s.image3}/>
                    {s.image4 ?<img src={s.image4}/>:"" }
                    {s.image5 ?<img src={s.image5}/>:"" }
                    {s.image6 ?<img src={s.image6}/>:"" }
                    {s.image7 ?<img src={s.image7}/>:"" }
                </div>
                <div className="room-img">
                    <p><b>Description: </b></p>
                    <p>ssssssssss</p>
                    <p><Link>Book a single room</Link> </p>
                </div>
                </div>
                )): ""}

            {/* map through twin room  */}
                {twin && twin.length > 0 ? twin.map((t) => (
                <div className="cat">
                <h2>Twin Room</h2>

                <div className="room-img">
                    <img src={t.image1}/>
                    <img src={t.image2}/>
                    <img src={t.image3}/>
                    {t.image4 ?<img src={t.image4}/>:"" }
                    {t.image5 ?<img src={t.image5}/>:"" }
                    {t.image6 ?<img src={t.image6}/>:"" }
                    {t.image7 ?<img src={t.image7}/>:"" }
                </div>
                <div className="room-img">
                    <p><b>Description: </b></p>
                    <p>ssssssssss</p>
                    <p><Link>Book a twin room</Link> </p>
                </div>
                </div>
                )): ""}


            {/* map through studio room  */}
                {studio && studio.length > 0 ? studio.map((s) => (
                <div className="cat">
                <h2>Studio Room</h2>

                <div className="room-img">
                    <img src={s.image1}/>
                    <img src={s.image2}/>
                    <img src={s.image3}/>
                    {s.image4 ?<img src={s.image4}/>:"" }
                    {s.image5 ?<img src={s.image5}/>:"" }
                    {s.image6 ?<img src={s.image6}/>:"" }
                    {s.image7 ?<img src={s.image7}/>:"" }
                </div>
                <div className="room-img">
                    <p><b>Description: </b></p>
                    <p>ssssssssss</p>
                    <p><Link>Book a studio room</Link> </p>
                </div>
                </div>
                )): ""}


            {/* map through suite  */}
                {suite && suite.length > 0 ? suite.map((s) => (
                <div className="cat">
                <h2>Suites</h2>

                <div className="room-img">
                    <img src={s.image1}/>
                    <img src={s.image2}/>
                    <img src={s.image3}/>
                    {s.image4 ?<img src={s.image4}/>:"" }
                    {s.image5 ?<img src={s.image5}/>:"" }
                    {s.image6 ?<img src={s.image6}/>:"" }
                    {s.image7 ?<img src={s.image7}/>:"" }
                </div>
                <div className="room-img">
                    <p><b>Description: </b></p>
                    <p>ssssssssss</p>
                    <p><Link>Book a suite</Link> </p>
                </div>
                </div>
                )): ""}
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Rooms;