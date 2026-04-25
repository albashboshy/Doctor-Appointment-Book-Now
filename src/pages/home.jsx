import React from "react";
import { useState } from "react";
import headerimg from "../assets/doctorlogo.png";
import "./home.css";
import "../pages/aboutus.css";
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
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
// animation page
import Pagetransition from "../components/pagetransition";
// photos
import doc from "../assets/doc2.jpg";
import mobile from "../assets/mobile-f82d73222992d2101a09.png";
import woman from "../assets/contactlogo.png";

// medical photos data
import Banner from "../components/banner";
import Diagnostics from "../assets/image (1).svg";
import Treatment from "../assets/image (2).svg";
import Surgery from "../assets/image (3).svg";
import Emergency from "../assets/image (4).svg";
import Vaccine from "../assets/image (5).svg";
import QualifiedDoctors from "../assets/image (6).svg";
import overviews from "../assets/overviews.jpg";
import doctorchildrens from "../assets/doc-childrens.jpg";
import femaledoc from "../assets/image.jpeg";
import dentist from "../assets/doctor-2.jpg";
import surgon from "../assets/doc1.jpg";
import opdentist  from '../assets/pic1.a3848a1189e2114e1b47.jpg'
import opOperation from  '../assets/pic2.67db6c474a828bd7a0cd (1).jpg';
import opOperation2 from  '../assets/pic3.89b8315141d75bd31ced (1).jpg'

// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
//  divinder 
import Divinder from '../components/divinder'
export default function Home() {
  // form validation
  let [form, setform] = React.useState({
    name: "",
    department: "",
    doctor: "",
    phone: "",

    date: "",
  });
  let [isSuccess, setIsSuccess] = useState(false);

  let handlechange = (e) => {
    let { name, value } = e.target;
    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const today = new Date();
  const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .split("T")[0];
  let handlesubmit = (e) => {
    e.preventDefault();

    let { name, department, doctor, phone, date } = form;
    if (!department || !name || !phone || !doctor || !date) {
      setIsSuccess(false);
      return;
    }
    setIsSuccess(true);

    setTimeout(() => {
      refresh();
      setIsSuccess(false);
    }, 2000);
  };
  let refresh = () => {
    setform({
      name: "",
      department: "",
      doctor: "",
      phone: "",

      date: "",
    });
  };
  // medical data
  let MedicalServices = [
    {
      id: 1,
      name: "Diagnostics",
      description:
        "Accurate tests and screenings to identify health conditions early",
      image: Diagnostics,
    },
    {
      id: 2,
      name: "Treatment",
      description: "Personalized treatment plans to ensure effective recovery",
      image: Treatment,
    },
    {
      id: 3,
      name: "Surgery",
      description: "Advanced surgical procedures performed by expert surgeons",
      image: Surgery,
    },
    {
      id: 4,
      name: "Emergency",
      description: "24/7 emergency care for urgent and critical situations",
      image: Emergency,
    },
    {
      id: 5,
      name: "Vaccine",
      description: "Safe and reliable vaccinations for all age groups",
      image: Vaccine,
    },
    {
      id: 6,
      name: "Qualified Doctors",
      description:
        "Experienced and certified doctors providing high-quality care",
      image: QualifiedDoctors,
    },
  ];
  // patinets reviews
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
  // news data 
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
    let [move, setmove] = React.useState(false);

  return (
    <Pagetransition>
      <div className="big-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <h5>We provide all type of medical services</h5>
              <h2>Protect your health and take care of yourself</h2>
              <button className="btn ">
                <a href="#"> read more </a>
              </button>
              <span className="plus">+</span>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="con-img">
                <img src={headerimg} alt="doctor" />
                <p className="shape">
               
                  <FontAwesomeIcon icon={faSquare} />
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* divinder */}
        <Divinder />
        {/* <div className="row">
          <div
            className="col-sm-12"
            style={{ height: "40px", backgroundColor: "white" }}
          ></div>
        </div> */}
        {/* divinder */}
        {/* Start  part of about us  */}
        <div className="container sec-aboutus">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="imgs-container">
                <div className="first-img">
                  <img src={overviews} alt="" />
                </div>
                <div className="sec-img">
                  <img src={doc} alt="" />
                </div>
                <div className="third-img">
                  <img src={doctorchildrens} alt="" />
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
                  We provide the special tips and advice’s of heath care
                  treatment and high level of best technology involve in the our
                  hospital.
                </p>
                <div className="about-cards">
                  <div className="row g-4 ">
                    <div className="col-sm-12 col-md-12 col-lg-6 h-card">
                      <li>
                        <FontAwesomeIcon icon={faAmbulance} /> Emergency Help
                      </li>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 h-card">
                      <li>
                        <FontAwesomeIcon icon={faBed} />
                        Qualified Doctors
                      </li>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 h-card">
                      <li>
                        <FontAwesomeIcon icon={faDroplet} />
                        Best Professionals
                      </li>
                    </div>
                    <div className="col-sm-12 col-lg-6 h-card">
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
        {/* end thepart of about us  */}
        {/* start working section */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12 working-section">
              <h5>Working Process</h5>
              <p className="question">How we works?</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className={`home-card ${move ? 'move-out' :null}`} onMouseLeave={()=>{
              setmove(!move);
            }}>
                <h2>01</h2>
                <h3>Make Appointmnet</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                </p>
                <button className="btn btn-success hm-card">
                  view more
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4" >
              <div className="home-card active">
                <h2 className="dis-active">02</h2>
                <h3 className="dis-active">Take Treatment</h3>
                <p className="dis-active">
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                </p>
                <button className="btn btn-success hm-card hm-dis-active">
                  view more
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className={`home-card ${move ? 'move-out' :null}`} onMouseLeave={()=>{
                setmove(!move)
              }}>
                <h2>03</h2>
                <h3 >register</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                </p>
                <button className="btn btn-success hm-card">
                  view more
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end working section */}
        {/* start booking Appointmnet */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 big-shape back-side">
              <div className="book">
                <form
                  className="p-4 shadow rounded bg-white fm"
                  onSubmit={handlesubmit}
                >
                  <h2 className="text-center book-now">Book Appointment</h2>

                  {/* Department */}
                  <div className="mb-3 ">
                    <select
                      className="form-select form-control m-auto"
                      value={form.department}
                      name="department"
                      onChange={handlechange}
                      required
                    >
                      <option disabled value="">
                        Choose department
                      </option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Neurology">Neurology</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Dermatology">Dermatology</option>
                      <option value="Ear, Nose, Throat">
                        Ear, Nose, Throat
                      </option>
                    </select>
                  </div>

                  {/* Doctor */}
                  <div className="mb-3">
                    <select
                      className="form-select form-control m-auto"
                      name="doctor"
                      onChange={handlechange}
                      value={form.doctor}
                      required
                    >
                      <option disabled value="">
                        Choose doctor
                      </option>
                      <option value="David Milan">David Milan</option>
                      <option value="Mark Jean">Mark Jean</option>
                      <option value="Addition Smith">Addition Smith</option>
                      <option value="David Benjamin">David Benjamin</option>
                      <option value="Mahfuz Raid">Mahfuz Raid</option>
                      <option value="Mahmoud Ahmed">Mahmoud Ahmed</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control m-auto"
                      placeholder="Enter your name"
                      name="name"
                      onChange={handlechange}
                      value={form.name}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control m-auto"
                      placeholder="Enter your phone"
                      name="phone"
                      value={form.phone}
                      onChange={handlechange}
                      required
                    />
                  </div>

                  {/* Date */}
                  <div className="mb-3">
                    <input
                      type="date"
                      className="form-control m-auto"
                      min={localDate}
                      name="date"
                      value={form.date}
                      onChange={handlechange}
                      required
                    />
                  </div>

                  {/* Button */}
                  <button className="btn btn-primary form-btn m-auto home-btn">
                    Appointment Now
                  </button>
                </form>
              </div>
              {isSuccess && (
                <div className="alert alert-success text-center mess">
                  Appointment Booked 😊
                </div>
              )}
            </div>
            <div className="col-sm-12 col-md-6 ">
              <div className="imgs-containerx">
                <img src={mobile} alt="mobile"  className="mobile" loading="lazy"/>
                <img src={woman} alt="woman" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        {/* end  booking Appointmnet */}
        {/* Start services */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="service-right">
                <h4>services</h4>
                <p className="s-large">
                  We Cover A Big  Variety Of <br /> Medical Services
                </p>
                <p className="s-small">
                  We provide the special tips and advice’s of heath care
                  treatment and high level of best.
                </p>
                <button className="btn btn-success all-services">All Services</button>
              </div>
            </div>
            {/* swiper */}
            <div className="col-sm-12 col-md-12 col-lg-8">
  <div className="s-swiper">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={14}
   loop={true}
  speed={2000}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
    
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,   
        },
      }}
    >
      {MedicalServices.map((service) => {
        return (
          <SwiperSlide key={service.id}>
            <div className="card-service">
              <img src={service.image} alt={service.name}  loading="lazy"/>
              <h2 className="bg-title se-bg-title">{service.name}</h2>
              <p className="description se-desc">
                {service.description}
              </p>
              <button className="btn btn-primary view-more">
                view more
              </button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
</div>

            {/* end swiper */}
          </div>
        </div>
        {/* End  services */}
        
        {/* Start testmonial  */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <p className="testimonialhead-title">Testimonial</p>
        <h2 className="big-title" id='se-big-title' >
        
          See What Are The Patients  <br/>
          Saying About us
        </h2>
        
            </div>
          </div>
          <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 testimonial">
                      <div className="testimonial-bx">
                        <img src={doc} alt="doc" className="img-1" loading="lazy" />
                        <img src={dentist} alt="doctor" className="img-2" loading="lazy" />
                        <img src={femaledoc} alt="doctor" className="img-3"  loading="lazy"/>
                        <img src={surgon} alt="doctor" className="img-4" loading="lazy"/>
                       
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
                                <div className="quote-item qoute-box">
                                  <span className="qu-1">
                                  
                                    <FontAwesomeIcon
                                      icon={faQuoteLeft}
                                      className="fa-left"
                                    />
                                  </span>
                                  <p className="text">{item.text}</p>
                                  <div className="client-info client-home">
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
        
        {/* end testmonial  */}
        {/* start last news */}
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
                        <img src={rev.docimg} alt="image" loading="lazy" />
                        <p className="doc-name">{rev.name}</p>
                        <p className="date"> <FontAwesomeIcon icon={faCalendar} />{rev.date}</p>
                        </div>
                        <h2 className="big-title home-big-title">{rev.title}</h2>
                        <button><a href="#">read more </a> <span> <FontAwesomeIcon icon={faArrowAltCircleRight} /></span></button>
                    </div>
                  </div>
                    )
                  })
                 }
                  
                </div>
              </div>
               <Divinder />
        {/* end  last news */}
      </div>
     
    </Pagetransition>
  );
}
