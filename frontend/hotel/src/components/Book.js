import React,{ useState, useEffect} from "react";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";




const Book = () => {

    // reservation function 
    const [customer_name, setcustomer_name] = useState("");
    const [customer_email, setcustomer_email] = useState("");
    const [customer_phone, setcustomer_phone] = useState("");
    const [room, setroom] = useState("");
    const [checkin, setcheckin] = useState("");
    const [checkout, setcheckout] = useState("");

    const BookRoom = async(e) => {

        e.preventDefault();
        let formfield = new FormData() 
        formfield.append('customer_name',customer_name)
        formfield.append('customer_email',customer_email)
        formfield.append('customer_phone',customer_phone)
        formfield.append('room',room)
        formfield.append('checkin',checkin)
        formfield.append('checkout',checkout)


        await axios({
            url:`${process.env.REACT_APP_BACKEND_URI}/api/v1/reservation/`,
            method: 'POST',
            data: formfield,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            console.log(response.data)
        }).catch((err) => console.log(err))

    }


    // contact function
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");

    const Contact = async(e) => {

        e.preventDefault();
        let formfield = new FormData() 
        formfield.append('name',name)
        formfield.append('email',email)
        formfield.append('message',message)

        await axios({
            url:`${process.env.REACT_APP_BACKEND_URI}/api/v1/contact/`,
            method: 'POST',
            data: formfield,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            console.log(response.data)
        }).catch((err) => console.log(err))

    }

    return (
        <React.Fragment>
            {/* <Header/> */}
            <div className="book-con">
                <Header/><br/><br/>
                <div className="book">
                    <br/>
                    <div className="form-div">
                        <h2>Book A Room</h2>
                        <form method="POST" onSubmit={BookRoom}>
                        <label>Fullname</label><br/>
                        <input type="text"
                        name="customer_name" 
                        placeholder="Fullname"
                        value={customer_name}
                        onChange={(e) => setcustomer_name(e.target.value)}
                        required/><br/>

                        <label>Email</label><br/>
                        <input type="email" 
                        name="customer_email"
                        placeholder="Email" 
                        value={customer_email}
                        onChange={(e) => setcustomer_email(e.target.value)}
                        required/><br/>

                        <label>Phone</label><br/>
                        <input type="phone" 
                        name="customer_phone" 
                        placeholder="Phone" 
                        value={customer_phone}
                        onChange={(e) => setcustomer_phone(e.target.value)}
                        required/><br/>

                        <label>Room Type</label><br/>
                        <select name="room" 
                        value={room}
                        onChange={(e) => setroom(e.target.value)}
                        required> 
                            <option value="single room">Single Room</option>
                            <option value="single room">Twin Room</option>
                            <option value="single room">Studio Room</option>
                            <option value="single room">Suite</option>
                        </select><br/>

                        <label>check-in date </label><br/>
                        <input type="date"
                        name="checkin" 
                        value={checkin}
                        onChange={(e) => setcheckin(e.target.value)} 
                        required/><br/>

                        <label>check-out date</label><br/>
                        <input type="date" 
                        name="checkout" 
                        value={checkout}
                        onChange={(e) => setcheckout(e.target.value)}
                        required/><br/><br/>

                        <button className="submit" type="submit">Book</button>
                        </form>  
                    </div>
                    <br/><br/>
                    <div className="iframe">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834"></iframe>
                    </div>
                </div><br/><br/><br/>

                <form className="contact" method="POST" onSubmit={Contact}>
                    <h2>Contact Us</h2>
                    <input 
                    type="text"
                    name="name" 
                    placeholder="Fullname" 
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required/><br/>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required/><br/>
                    <textarea 
                    name="message" 
                    placeholder="Your Message..." 
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                    required>

                    </textarea><br/><br/>
                    <button type="submit" className="submit">Send</button>
                </form>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Book;