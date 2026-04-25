import React from "react";
// import { useState } from "react";
import Banner from "../components/banner";
import "./blog.css";
import dentist from "../assets/doctor-2.jpg";
import surgon from "../assets/doc1.jpg";

import femaledoc from "../assets/image.jpeg";
import opdentist from "../assets/pic1.a3848a1189e2114e1b47.jpg";
import opOperation from "../assets/pic2.67db6c474a828bd7a0cd (1).jpg";
import opOperation2 from "../assets/pic3.89b8315141d75bd31ced (1).jpg";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// page animation
import Pagetransition from "../components/pagetransition";
// divinder
import Divinder from "../components/divinder";
import {
  faCalendar,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
export default function Blog() {
  const [Isopened, setopend] = React.useState(true);
  const [Isopened2, setopend2] = React.useState(false);
  const [Isopened3, setopend3] = React.useState(false);
 const  prev = () => {
    if(Isopened === true){
    
      return
    }
    else{
      if(Isopened3 ===true){
        setopend3(false)
        setopend2(true)
      }
      else{
        if(Isopened2 === true){
          setopend2(false)
          setopend(true)
        }
        else{
          setopend(true)
          setopend2(false)
          setopend3(false)
      }
      }
    }
    
   
  }
  const next = () => {
    if(Isopened3 === true){
        return
    }
    else{
      if(Isopened2 === false){
        setopend2(true)
        setopend3(false)
        setopend(false)
      }
      else{
        setopend3(true)
        setopend2(false)
        setopend(false)
      }
    }
  }
  const news = [
    {
      name: "John deo",
      date: "21 july 2021",
      title: "is this hospital threre are special surgon",
      img: `${opdentist}`,
      docimg: `${dentist}`,
    },
    {
      name: "peter packer",
      date: "21 june 2021",
      title: "can you get a diflucan precscription ?",
      img: `${opOperation}`,
      docimg: `${femaledoc}`,
    },
    {
      name: "sonar moyna",
      date: "25 june 2025",
      title: "why is skin considered underrated",
      img: `${opOperation2}`,
      docimg: `${surgon}`,
    },
    {
      name: "mark david",
      date: "02 july 2023",
      title: "is this hospital threre are special surgon",
      img: `${opOperation2}`,
      docimg: `${surgon}`,
    },
    {
      name: "jolia alexander",
      date: "30 march 2025",
      title: "can you get a diflucan precscription ?",
      img: `${opOperation}`,
      docimg: `${femaledoc}`,
    },
    {
      name: "alain mathew",
      date: "01 jan 2025",
      title: "why is skin considered underrated",
      img: `${opOperation2}`,
      docimg: `${surgon}`,
    },
    {
      name: "max das",
      date: "21 july 2021",
      title: "is this hospital threre are special surgon",
      img: `${opdentist}`,
      docimg: `${dentist}`,
    },
    {
      name: "george mathew",
      date: "21 june 2021",
      title: "can you get a diflucan precscription ?",
      img: `${opOperation}`,
      docimg: `${femaledoc}`,
    },
    {
      name: "sarah mandal",
      date: "25 june 2025",
      title: "why is skin considered underrated",
      img: `${opOperation2}`,
      docimg: `${surgon}`,
    },
  ];
  const nextnews = [
    {
      name: "Emily Carter",
      date: "10 Feb 2024",
      title: "How to choose the right doctor for your condition",
      img: `${opOperation2}`,
      docimg: `${surgon}`,
    },
    {
      name: "Michael Brown",
      date: "18 Mar 2023",
      title: "What are the most common surgical procedures today?",
      img: `${opOperation}`,
      docimg: `${femaledoc}`,
    },
    {
      name: "Sophia Wilson",
      date: "05 Jan 2025",
      title: "Why regular skin checkups are important",
      img: `${opdentist}`,
      docimg: `${dentist}`,
    },
    {
      name: "Daniel Lee",
      date: "22 Aug 2022",
      title: "Signs you should not ignore before visiting a doctor",
      img: `${opOperation}`,
      docimg: `${femaledoc}`,
    },
    {
      name: "Olivia Martin",
      date: "14 Apr 2025",
      title: "Can you get prescriptions online safely?",
      img: `${opdentist}`,
      docimg: `${dentist}`,
    },
    {
      name: "James Anderson",
      date: "30 Sep 2024",
      title: "Top tips for faster recovery after surgery",
      img: `${opOperation2}`,
      docimg: `${surgon}`,
    },
    {
      name: "Isabella Thomas",
      date: "11 Dec 2023",
      title: "Dental care basics everyone should follow",
      img: `${opOperation}`,
      docimg: `${femaledoc}`,
    },
    {
      name: "William Jackson",
      date: "27 Nov 2022",
      title: "Understanding hospital departments and services",
      img: `${opdentist}`,
      docimg: `${dentist}`,
    },
    {
      name: "Mia Harris",
      date: "03 May 2025",
      title: "How to maintain healthy skin daily",
      img: `${opOperation2}`,
      docimg: `${surgon}`,
    },
  ];
  const nextnews3 = [
    {
      name: "Liam Walker",
      date: "12 Jan 2026",
      title: "How early diagnosis can save lives",
      img: `${opdentist}`,
      docimg: `${dentist}`,
    },
    {
      name: "Ava Thompson",
      date: "03 Feb 2024",
      title: "Simple habits to boost your immune system",
      img: `${opOperation}`,
      docimg: `${femaledoc}`,
    },
    {
      name: "Noah Robinson",
      date: "19 Mar 2025",
      title: "What happens during a full body checkup?",
      img: `${opOperation2}`,
      docimg: `${surgon}`,
    },
    {
      name: "Emma Clark",
      date: "27 Apr 2023",
      title: "When should you visit a specialist doctor?",
      img: `${opdentist}`,
      docimg: `${dentist}`,
    },
    {
      name: "Oliver Lewis",
      date: "08 Jun 2025",
      title: "Understanding the basics of medical tests",
      img: `${opOperation}`,
      docimg: `${femaledoc}`,
    },
    {
      name: "Charlotte Young",
      date: "15 Jul 2024",
      title: "Healthy lifestyle tips for busy people",
      img: `${opOperation2}`,
      docimg: `${surgon}`,
    },
    {
      name: "Elijah Hall",
      date: "21 Aug 2022",
      title: "Common mistakes patients make before surgery",
      img: `${opdentist}`,
      docimg: `${dentist}`,
    },
    {
      name: "Amelia Allen",
      date: "09 Sep 2023",
      title: "How to prepare for your first doctor visit",
      img: `${opOperation}`,
      docimg: `${femaledoc}`,
    },
    {
      name: "Benjamin King",
      date: "30 Oct 2025",
      title: "The importance of regular health screening",
      img: `${opOperation2}`,
      docimg: `${surgon}`,
    },
  ];
  return (
    <Pagetransition>
    <div className="blog">
      <div className="container">
        <Banner title="blog Grid 3" subtitle="blog  grid" />
      
        {Isopened && (
          <div className="row  last-news">
          
            {news.map((rev) => {
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-4"
                  key={`${rev.name}`}
                >
                  <div className="last-new-card">
                    <img src={rev.img} alt={`${rev.name}`}loading="lazy" />
                    <div className="new-info">
                      <img src={rev.docimg} alt="image" loading="lazy"/>
                      <p className="doc-name">{rev.name}</p>
                      <p className="date">
                   
                        <FontAwesomeIcon icon={faCalendar} />
                        {rev.date}
                      </p>
                    </div>
                    <h2 className="big-title">{rev.title}</h2>
                    <button>
                      <a href="#">read more </a>{" "}
                      <span>
                
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
            <h3 className="page-number">Page 1</h3>
          </div>
        )}

        {Isopened2 && (
          <div className="row  last-news">
           
            {nextnews.map((rev) => {
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-4"
                  key={`${rev.name}`}
                >
                  <div className="last-new-card">
                    <img src={rev.img} alt={`${rev.name}`} loading="lazy" />
                    <div className="new-info">
                      <img src={rev.docimg} alt="image" loading="lazy"/>
                      <p className="doc-name">{rev.name}</p>
                      <p className="date">
                     
                        <FontAwesomeIcon icon={faCalendar} />
                        {rev.date}
                      </p>
                    </div>
                    <h2 className="big-title">{rev.title}</h2>
                    <button>
                      <a href="#">read more </a>{" "}
                      <span>
                  
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
            <h3 className="page-number">Page 2</h3>
          </div>
        )}
        {Isopened3 && (
          <div className="row  last-news">
          
            {nextnews3.map((rev) => {
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-4"
                  key={`${rev.name}`}
                >
                  <div className="last-new-card">
                    <img src={rev.img} alt={`${rev.name}`} loading="lazy" />
                    <div className="new-info">
                      <img src={rev.docimg} alt="image" loading="lazy" />
                      <p className="doc-name">{rev.name}</p>
                      <p className="date">
                   
                        <FontAwesomeIcon icon={faCalendar} />
                        {rev.date}
                      </p>
                    </div>
                    <h2 className="big-title">{rev.title}</h2>
                    <button>
                      <a href="#">read more </a>{" "}
                      <span>
              
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
            <h3 className="page-number">Page 3</h3>
          </div>
        )}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-8 col-md-3">
              <div className="pageniation">
                <span className="back" onClick={()=>{
                  prev()
                
                }}>prev</span>
                <span
                  className={`num ${Isopened && "active"}`}
                  onClick={() => {
                    setopend(true);
                    setopend2(false);
                    setopend3(false);
                  }}
                >
                  1
                </span>
                <span
                  onClick={() => {
                    setopend(false);
                    setopend2(true);
                    setopend3(false);
                  }}
                  className={`num ${Isopened2 && "active"}`}
                >
                  2
                </span>
                <span
                  className={`num ${Isopened3 && "active"}`}
                  onClick={() => {
                    setopend(false);
                    setopend2(false);
                    setopend3(true);
                  }}
                >
                  3
                </span>
                <span className="next" onClick={()=>{
                  next()
                }}>next</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Divinder />
    </Pagetransition>
  );
}
