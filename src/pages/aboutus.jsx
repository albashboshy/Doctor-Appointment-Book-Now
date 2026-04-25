import React from "react";
import Banner from "../components/banner";
import doc from "../assets/doc2.jpg";
import dentist from "../assets/doctor-2.jpg";
import surgon from "../assets/doc1.jpg";
import overviews from "../assets/overviews.jpg";
import doctorchildrens from "../assets/doc-childrens.jpg";
import "./aboutus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmbulance,
  faBed,
  faDroplet,
  faSyringe,
  faQuoteLeft,
  faQuoteRight,
  faCalendar,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import femaledoc from "../assets/image.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import opdentist  from '../assets/pic1.a3848a1189e2114e1b47.jpg'
import opOperation from  '../assets/pic2.67db6c474a828bd7a0cd (1).jpg';
import opOperation2 from  '../assets/pic3.89b8315141d75bd31ced (1).jpg'
// animation apge
import Pagetransition from "../components/pagetransition";
//  divinder
import Divinder from "../components/divinder";
export default function Aboutus() {
  const patientsreviews = [
    {
      text: "The hospital provided excellent care from admission to discharge. The doctors were knowledgeable and compassionate. The staff was professional and supportive throughout my treatment.",
      name: "John Doe",

    },
    {
      text: "I felt safe and well taken care of. The staff was friendly and helpful.The doctors explained everything clearly and followed up after my recovery.",
      name: "Mark Smith",
    },
    {
      text: "Great experience overall. The staff was friendly and helpful. The medical team was attentive and the process was smooth from start to finish.",
      name: "David Lorans",
    },
  ];
   const news =[
    {
      name:'John deo',
      date:'21 july 2021',
      title:"is this hospital threre are special surgon",
      img:`${opdentist}`,
      docimg:`${dentist}`
      
    },
    {
      name:"peter packer",
      date:"21 june 2021",
      title:"can you get a diflucan precscription ?",
      img:`${opOperation}`,
      docimg:`${femaledoc}`
    },
    {
      name:"sonar moyna",
      date:'25 june 2025',
      title:'why is skin considered underrated',
      img:`${opOperation2}`,
      docimg:`${surgon}`
    }
  ]
  return (
    <Pagetransition>
    <div className="about-us">
      <div className="container">
        <Banner title="about us" subtitle="about us" />
      </div>
      <Divinder />
      <div className="container sec-aboutus">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="imgs-container">
              <div className="first-img">
                <img src={overviews} alt="" />
              </div>
              <div className="sec-img">
                <img src={doc} alt="image" loading="lazy" />
              </div>
              <div className="third-img">
                <img src={doctorchildrens} alt="image" loading="lazy" />
              </div>
              <div className="shape"></div>
              <div className="cover">
                <div>
                  <p className="number">20</p>
                  <p className="years">years experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="about-us-two">
              <p className="head-title">about us</p>
              <h2 className="sub-title">
                The Great Place Of Medical <br /> Hospital Center
              </h2>
              <p className="text">
                We provide the special tips and advice’s of heath care treatment
                and high level of best technology involve in the our hospital.
              </p>
              <div className="about-cards">
                <div className="row g-4 ">
                  <div className="col-6 h-card">
                    <li>
                      <FontAwesomeIcon icon={faAmbulance} /> Emergency Help
                    </li>
                  </div>
                  <div className="col-6 h-card">
                    <li>
                      <FontAwesomeIcon icon={faBed} />
                      Qualified Doctors
                    </li>
                  </div>
                  <div className="col-6 h-card">
                    <li>
                      <FontAwesomeIcon icon={faDroplet} />
                      Best Professionals
                    </li>
                  </div>
                  <div className="col-6 h-card">
                    <li>
                      <FontAwesomeIcon icon={faSyringe} className="syringe" />
                      Medical Treatment
                    </li>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary read-more">
                <a href="#">read more</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container part-two">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="st-card">
              <div className="content">
                <h2>120</h2>
                <h4>years with you</h4>
                <p>
                  Etiam ante ante, molestie vitae cursusac, phareta euismod
                  libero
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="st-card">
              <div className="content">
                <h2>400</h2>
                <h4>awords</h4>
                <p>
                  Etiam ante ante, molestie vitae cursusac, phareta euismod
                  libero
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="st-card">
              <div className="content">
                <h2>250</h2>
                <h4>doctors</h4>
                <p>
                  Etiam ante ante, molestie vitae cursusac, phareta euismod
                  libero
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="st-card">
              <div className="content">
                <h2>800</h2>
                <h4> satisfied clients</h4>
                <p>
                  Etiam ante ante, molestie vitae cursusac, phareta euismod
                  libero
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container part-three">
        <p className="head-title">our doctors</p>
        <h2 className="big-title">meet best doctors</h2>
        <div className="row doctors-cards">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="doc-card">
              <div className="doc-img">
                <img src={femaledoc} alt="doctor-image" loading="lazy" />
              </div>
              <div className="info-doct">
                <h3>Dr. Addition Smith</h3>
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
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="doc-card">
              <div className="doc-img">
                <img src={dentist} alt="doctor-image" loading="lazy" />
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
                <img src={surgon} alt="doctor-image" loading="lazy" />
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
        <p className="head-title">Testimonial</p>
        <h2 className="big-title">
          See What Are The Patients <br />
          Saying About us
        </h2>
      </div>
      <div className="container part-four">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 testimonial">
            <div className="testimonial-bx">
              <img src={doc} alt="doc" className="img-1"  loading="lazy"/>
              <img src={dentist} alt="doctor" className="img-2" loading="lazy" />
              <img src={femaledoc} alt="doctor" className="img-3" loading="lazy" />
              <img src={surgon} alt="doctor" className="img-4"  loading="lazy"/>
             
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 ">
            <div className="quotes">
              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-duration="2000"
              >
                <div className="carousel-inner">
                  {patientsreviews.map((item, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <div className="quote-item ">
                        <span className="qu-1">
                        
                          <FontAwesomeIcon
                            icon={faQuoteLeft}
                            className="fa-left"
                          />
                        </span>
                        <p>{item.text}</p>
                        <div className="client-info">
                          <h4>{item.name}</h4>
                          <h5 className="pt-title">Patient</h5>
                        </div>
                        <span className="qu-2">
                          <FontAwesomeIcon
                            icon={faQuoteRight}
                            className="fa-right"
                          />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="carousel-control-prev btns-slide"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                  className="carousel-control-next btns-slide"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container part-five">
        <div className="row">
          <p className="head-title">Latest News</p>
          <h2 className="big-title">Our Latest News</h2>
        </div>
        <div className="row  last-news">
         {
          news.map((rev)=>{
            return(
               <div className="col-sm-12 col-md-6 col-lg-4" key={`${rev.name}`}>
            <div className="last-new-card">
              <img src={rev.img} alt={`${rev.name}`} loading="lazy" />
              <div className="new-info">
                <img src={rev.docimg} alt="iamge" loading="lazy" />
                <p className="doc-name">{rev.name}</p>
                <p className="date"> <FontAwesomeIcon icon={faCalendar} />{rev.date}</p>
                </div>
                <h2 className="big-title">{rev.title}</h2>
                <button><a href="#">read more </a> <span> <FontAwesomeIcon icon={faArrowAltCircleRight} /></span></button>
            </div>
          </div>
            )
          })
         }
          
        </div>
      </div>
      <Divinder />
    </div>
    </Pagetransition>
  );
}
