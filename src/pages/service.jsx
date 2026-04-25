import React from 'react'
import './service.css'

import Banner from '../components/banner'
import Diagnostics from '../assets/image (1).svg'
import Treatment from '../assets/image (2).svg'
import Surgery from '../assets/image (3).svg'
import Emergency from '../assets/image (4).svg'
import Vaccine from '../assets/image (5).svg'
import QualifiedDoctors from '../assets/image (6).svg'
// import doc from "../assets/doc2.jpg";
import dentist from "../assets/doctor-2.jpg";
import surgon from "../assets/doc1.jpg";
// import overviews from "../assets/overviews.jpg";
// import doctorchildrens from "../assets/doc-childrens.jpg";
import opdentist  from '../assets/pic1.a3848a1189e2114e1b47.jpg'
import femaledoc from "../assets/image.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCalendar, faArrowAltCircleRight} from "@fortawesome/free-regular-svg-icons";
import opOperation from  '../assets/pic2.67db6c474a828bd7a0cd (1).jpg';
import opOperation2 from  '../assets/pic3.89b8315141d75bd31ced (1).jpg'
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
// animation page 
import Pagetransition from '../components/pagetransition'
// divinder
import Divinder from '../components/divinder'

export default function Service() {
 let MedicalServices = [
  {
    id: 1,
    name: "Diagnostics",
    description: "Accurate tests and screenings to identify health conditions early",
    image: Diagnostics
  },
  {
    id: 2,
    name: "Treatment",
    description: "Personalized treatment plans to ensure effective recovery",
    image: Treatment

  },
  {
    id: 3,
    name: "Surgery",
    description: "Advanced surgical procedures performed by expert surgeons",
    image: Surgery
  },
  {
    id: 4,
    name: "Emergency",
    description: "24/7 emergency care for urgent and critical situations",
    image: Emergency
  },
  {
    id: 5,
    name: "Vaccine",
    description: "Safe and reliable vaccinations for all age groups",
    image: Vaccine
  },
  {
    id: 6,
    name: "Qualified Doctors",
    description: "Experienced and certified doctors providing high-quality care",
    image: QualifiedDoctors 
  }
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
    <div>
      <div className="container">
        <div className="service">
            <Banner title='service'  subtitle='service'/>
            <Divinder />
            <div className="row">
               {
                MedicalServices.map((service)=>{
                    return (

                         <div className="col-sm-12 col-md-6 col-lg-4" key={service.id}>
                  <div className="card-service s-card">
                    <img src={service.image} alt={service.name} loading='lazy' />
                    <h2 className='bg-title'>{service.name}</h2>
                    <p className='description'>{service.description}</p>
                    <button className='btn btn-primary'>view more</button>
                  </div>
                </div>
                    )
                })
               }
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
                <img src={femaledoc} alt="doctor-image" loading='lazy' />
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
                <img src={surgon} alt="doctor-image" loading='lazy' />
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
      {/* last news */}
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
                    <img src={rev.img} alt={`${rev.name}`}  loading='lazy'/>
                    <div className="new-info">
                      <img src={rev.docimg} alt="image" loading='lazy' />
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
      </div>
    </div>
    <Divinder/>
    </Pagetransition>
  )
}
