import React from "react";
import "./service-detail.css";
import Banner from "../components/banner";
import operation from "../assets/operation-teeth.jpg";
import { IoIosArrowDown, IoIosArrowDropleft, IoIosArrowDropright, IoIosArrowUp } from "react-icons/io";
import adobe from "../assets/adobe.png"
import wd from '../assets/wd.png'
import { useState } from "react";
// animation page 
import Pagetransition from "../components/pagetransition";
// divinder  file 
import Divinder from "../components/divinder";
export default function ServiceDetail() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };
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

  return (
    <Pagetransition>
    <div>
      <div className="container">
        <div className="service">
          {/* banner component */}
          <Banner title="services details" subtitle="services detail" />
          <Divinder />
          <div className="container">
            <div className="row fs-row">
              <div className="col-sm-12 col-md-12 col-xl-8 fs-one">
                <div className="fs-img">
                  <img src={operation} alt="image" loading='lazy' />
                </div>
                <h2 className="fs-head-title">
                  Why Medical Had Been So Popular Till
                </h2>
                <p className="fs-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div className="container">
                  <div className="row ch-range">
                    <div className="col-sm-12 col-md-6">
                      <ol className="checksinput">
                        <li>
                          <input type="checkbox" checked /> then along come two they
                        </li>
                        <li>
                          <input type="checkbox" checked/> that's just a little bit
                          more than
                        </li>
                        <li>
                          <input type="checkbox"  checked/> standard dummy text ever
                          since
                        </li>
                        <li>
                          <input type="checkbox" checked /> simply dummy text of the
                          printing
                        </li>
                        <li>
                          <input type="checkbox" checked />
                          make a type specimen book
                        </li>
                      </ol>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 range">
                      <div className="range">
                        <div className="info-details">
                          <span className="rg-title">Advanced Technology</span>
                          <span className="percent">96%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="1"
                          disabled
                          value="96"
                        />
                      </div>
                      <div className="range">
                        <div className="info-details">
                          <span className="rg-title">Certified Engineers</span>
                          <span className="percent">79%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="1"
                          disabled
                          value="79"
                        />
                      </div>
                      <div className="range">
                        <div className="info-details">
                          <span className="rg-title">6 years Experience</span>
                          <span className="percent">75%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="1"
                          disabled
                          value="75"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="pop-qu col-sm-12 col-md-12 col-xl-8">
                      <h2>Popular Questions</h2>
                      <p>
                        Standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book
                      </p>
                    </div>
                  </div> */}
                  <div className="container questions">
                    <div className="row">
                      {data.map((ques) => {
                        const isOpen = openId === ques.id;

                        return (
                          <div
                            key={ques.id}
                            className="col-lg-12 col-md-12 col-sm-12  big-card"
                          >
                            <button
                              className={`btn btn-primary w-100 d-flex justify-content-between align-items-center ${isOpen ? "active" : ""}`}
                              onClick={() => toggle(ques.id)}
                            >
                              {ques.question}
                              {/* <FontAwesomeIcon icon={isOpen ? faArrowUp : faArrowDown} /> */}
                              {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
              </div>

              <div className="col-sm-12 col-md-12 col-xl-4 link-part">
                <ol className="nx-links">
                        <li className="active"><a href="#">Engine diagnostic</a> <IoIosArrowDropright/></li>
                        <li><a href="#">lube oil and filter</a> <IoIosArrowDropright/></li>
                        <li><a href="#">belts and hoses</a> <IoIosArrowDropright/></li>
                        <li><a href="#">air conditioning</a> <IoIosArrowDropright/></li>
                        <li><a href="#">break repair</a> <IoIosArrowDropright/></li>
                        <li><a href="#">tire and wheel services</a> <IoIosArrowDropright/></li>
                </ol>
                <div className="download">
                  <h2>download </h2>
                  <div className="adobe">
                    <img src={adobe} alt="image" loading="lazy" />
                    <div className="content">
                      <h4>download our prochures</h4>
                      <a href="#">download</a>
                    </div>
                  </div>
                    <div className="adobe">
                    <img src={wd}alt="image"  loading="lazy"/>
                    <div className="content">
                      <h4> our company details</h4>
                      <a href="#">download</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 action">
             
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
