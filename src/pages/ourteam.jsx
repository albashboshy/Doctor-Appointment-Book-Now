import React from 'react'
import Banner from '../components/banner'

// import doc from "../assets/doc2.jpg";
import dentist from "../assets/doctor-2.jpg";
import surgon from "../assets/doc1.jpg";
// import overviews from "../assets/overviews.jpg";
// import doctorchildrens from "../assets/doc-childrens.jpg";
import "./aboutus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import femaledoc from "../assets/image.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import memberone from "../assets/member1-22ac1d594f69ddaf3e08.jpg"
import membertwo from "../assets/member5-24eb182159ea2d58610f.jpg"
import memberthree from "../assets/member3-0d822ecc51b2532abe0e.jpg"
// animation page 
import Pagetransition from '../components/pagetransition'
// divinder
import Divinder from "../components/divinder";
export default function Ourteam () {
  return (
    <Pagetransition>
    <div className='ourteam'>
      <div className="container">
        <Banner  title="our team" subtitle="our team"/>
        <Divinder/>
        <div className="row">
          <div className="container part-three">
        
        <div className="row doctors-cards">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="doc-card">
              <div className="doc-img">
                <img src={femaledoc} alt="doctor-image" loading='lazy' />
              </div>
              <div className="info-doct">
                <h3>Dr. jolia mark</h3>
                <h4>Surgeon</h4>
                <div className="icons">
                  <span>
             
                    <FontAwesomeIcon icon={faFacebook} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faXTwitter} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* start here */}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="doc-card">
              <div className="doc-img">
                <img src={memberone} alt="doctor-image" loading='lazy' />
              </div>
              <div className="info-doct">
                <h3>Dr. Addition Smith</h3>
                <h4>Surgeon</h4>
                <div className="icons">
                  <span>
              
                    <FontAwesomeIcon icon={faFacebook} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faXTwitter} />{" "}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="doc-card">
              <div className="doc-img">
                <img src={membertwo} alt="doctor-image"  loading='lazy'/>
              </div>
              <div className="info-doct">
                <h3>Dr.jack ranger
</h3>
                <h4>chiroprator</h4>
                <div className="icons">
                  <span>
                 
                    <FontAwesomeIcon icon={faFacebook} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faXTwitter} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="doc-card">
              <div className="doc-img">
                <img src={memberthree} alt="doctor-image" loading='lazy' />
              </div>
              <div className="info-doct">
                <h3>Dr. mahmoud ahmed</h3>
                <h4>Surgeon</h4>
                <div className="icons">
                  <span>
                
                    <FontAwesomeIcon icon={faFacebook} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faXTwitter} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* end here  */}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="doc-card">
              <div className="doc-img">
                <img src={dentist} alt="doctor-image" loading='lazy' />
              </div>
              <div className="info-doct">
                <h3>Dr. Mahfuz Riad</h3>
                <h4>dentist</h4>
                <div className="icons">
                  <span>
                 
                    <FontAwesomeIcon icon={faFacebook} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faXTwitter} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="doc-card">
              <div className="doc-img">
                <img src={surgon} alt="doctor-image"  loading='lazy'/>
              </div>
              <div className="info-doct">
                <h3>Dr. David Benjamin</h3>
                <h4>Cardiologist</h4>
                <div className="icons">
                  <span>
                 
                    <FontAwesomeIcon icon={faFacebook} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faXTwitter} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
        </div>
      </div>
    </div>
    <Divinder/>
    </Pagetransition>
  )
}
