import React, { useState } from "react";
import Banner from "../components/banner";
import "./contactus.css";

// import contactlogo from "../assets/contactlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faEnvelope,
  faEarth,
  faPhone,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

// animation page 
import Pagetransition from "../components/pagetransition";
// divinder
import Divinder from "../components/divinder";

export default function Contactus() {
  // handel state for form validation
  const [form, setForm] = React.useState({
    name:"",
    email:"",
    phone:"",
    department:"",
    message:""
  },
  
);
let [error , setError] = useState(true)

// this function for handel change
let handlerchange=(e)=>{
  let {name,value}= e.target

  setForm((prev) => ({
    ...prev,
    [name]: value
  }))

}

// this function for submit form
const formhandler = (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.phone || !form.department || !form.message) {
    setError(true);
    return;
  }

  setError(false);
 
 setTimeout(() => {
   refresh();
    setError(true)
 }, 1500);
  
  

};
// this function for reset form
let refresh = () => {
  setForm({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: ""
  });
 
};
  return (
    <Pagetransition>
    <div className="container">
      <Banner title="contact us" subtitle="contact us" ico="faHome" />
    
      <div className="contact-us">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12  ">
              <form action="" onSubmit={
                formhandler}>
                <div className="form-control ">
                  <input type="text" placeholder="Your name"name='name' value={form.name} required onChange={handlerchange}/>
                  <input type="email" placeholder="Email" name='email' value={form.email}  required onChange={handlerchange} />
                  <input type="tel" placeholder="phone number" name='phone' value={form.phone} required onChange={handlerchange}/>
                  <select  onChange={handlerchange} name='department' value={form.department} required>
                    <option value=''>select department</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Ear, Nose, Throat">Ear, Nose, Throat</option>
                  </select>
                  <textarea placeholder="type message" name='message' value={form.message} onChange={handlerchange} />
                  <input type="submit" />
                </div>
              </form>
        {error === false  && <p style={{color:"green", textAlign:"center"  }}>✅ Message sent successfully</p>}

            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              {/* <img src={contactlogo} alt="contactlogo" /> */}
              <div className="side">
                <div className="overlay">
                  <h3>
                    contact us for any
                    <br /> informations
                  </h3>
                  <li className="location">
                    <FontAwesomeIcon icon={faMap} />
                    location
                  </li>
                  <hr />
                  <h3 className="address">
                    2005 Stokes Isle Apt. 896, Venaville
                    <br /> 10010, USA
                  </h3>
                  <hr />
                  <li className="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email & Phone
                  </li>
                  <hr />
                  <h3 className="em-phone">info@myhealth.com</h3>
                  <span className="thephone">(+965)66989078</span>
                  <br />
                  <li className="follow-up">
                    <FontAwesomeIcon icon={faEarth} />
                    Follow us{" "}
                  </li>
                  <hr />
                  <div className="icons">
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faXTwitter} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container info-cards">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="inf-card">
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                </li>
                <h3>Contact Number</h3>
                <p>+001 123 456 790</p>
                <p>+002 3424 44 00</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="inf-card">
                <li>
                  <FontAwesomeIcon icon={faVoicemail} />
                </li>
                <h3>Email Address</h3>
                <p>info@myhealth.com</p>
                <p>example@support.com</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="inf-card">
                <li>
                  <FontAwesomeIcon icon={faMap} />
                </li>
                <h3>Address</h3>
                <p>2005 Stokes Isle Apt. 896,</p>
                <p>Venaville 10010, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Divinder/>
    </Pagetransition>
  );
}
