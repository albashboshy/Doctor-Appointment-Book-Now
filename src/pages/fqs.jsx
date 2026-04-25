import React, { useState } from "react";
import Banner from "../components/banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './fqs.css'
import "./aboutus.css";
import opdentist  from '../assets/pic1.a3848a1189e2114e1b47.jpg'
import opOperation from  '../assets/pic2.67db6c474a828bd7a0cd (1).jpg';
import opOperation2 from  '../assets/pic3.89b8315141d75bd31ced (1).jpg'
import { faArrowAltCircleRight, faCalendar } from "@fortawesome/free-regular-svg-icons";
import femaledoc from "../assets/image.jpeg";
import dentist from "../assets/doctor-2.jpg";
import surgon from "../assets/doc1.jpg";

// import doctorchildrens from "../assets/doc-childrens.jpg";

// animation page 
import Pagetransition from "../components/pagetransition";
// divinder
import Divinder from "../components/divinder";

export default function FAQS() {
  const [openId, setOpenId] = useState(null);
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

  const data = [
    {
      id: 1,
      question: "How many doctors are there in the clinic?",
      answer:
        "There are many doctors in the clinic, some of them are specialist in different fields, and some are general practitioners.",
    },
    {
      id: 2,
      question: "What are the working hours of the clinic?",
      answer:
        "The clinic is open every day, with flexible working hours to serve patients in the morning and evening.",
    },
    {
      id: 3,
      question: "Do I need an appointment before visiting?",
      answer:
        "It is recommended to book an appointment in advance, but walk-in patients are also welcome.",
    },
    {
      id: 4,
      question: "What services does the clinic provide?",
      answer:
        "The clinic provides a variety of medical services, including general checkups, specialist consultations, and diagnostic tests.",
    },
    {
      id: 5,
      question: "Are there any emergency services available?",
      answer:
        "The clinic can handle some emergency cases, but critical emergencies are usually referred to hospitals.",
    },
    {
      id: 6,
      question: "Do you have female doctors available?",
      answer:
        "Yes, the clinic has female doctors in different specialties to meet patient preferences.",
    },
    {
      id: 7,
      question: "What insurance plans are accepted?",
      answer:
        "The clinic accepts several insurance plans, and patients are advised to check with reception for details.",
    },
    {
      id: 8,
      question: "Is there a pharmacy inside the clinic?",
      answer:
        "Yes, there is a pharmacy available where patients can get their prescribed medications and other medical supplies.",
    },
    {
      id: 9,
      question: "How can I contact the clinic?",
      answer:
        "You can contact the clinic by phone, email, or through their official website.",
    },
    {
      id: 10,
      question: "Are lab tests available in the clinic?",
      answer:
        "Yes, the clinic offers basic lab tests, and some advanced tests are sent to external laboratories.",
    },
    {
      id: 11,
      question: "Do you offer online consultations?",
      answer:
        "The clinic provides online consultation services for some specialties to make access easier for patients.",
    },
    {
      id: 12,
      question: "Is there a waiting area for patients?",
      answer:
        "Yes, there is a comfortable waiting area designed to accommodate patients and their families.",
    },
  ];

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Pagetransition>
    <div className="faqs">
      <div className="container">
        <Banner title='FAQ"S' subtitle='FAQ"S' />
        <Divinder />
        <div className="container questions">
          <div className="row">
            {data.map((ques) => {
              const isOpen = openId === ques.id;

              return (
                <div key={ques.id} className="col-lg-12 col-md-12 col-sm-12 col-xl-6 big-card">
                  <button
                    className={`btn btn-primary w-100 d-flex justify-content-between align-items-center ${isOpen ? "active" : ""  }`}
                    onClick={() => toggle(ques.id)}
                  >
                    {ques.question}
                    {/* <FontAwesomeIcon icon={isOpen ? faArrowUp : faArrowDown} /> */}
                    {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown/>}
                  </button>

                  {isOpen && (
                    <div className="card card-body mt-2">
                      {ques.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* start second part  */}
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
                      <h2 className="big-title">{rev.title}</h2>
                      <button><a href="#">read more </a> <span> <FontAwesomeIcon icon={faArrowAltCircleRight} /></span></button>
                  </div>
                </div>
                  )
                })
               }
                
              </div>
            </div>
      {/* end second part  */}
    </div>
    <Divinder />
    </Pagetransition>
  );
}