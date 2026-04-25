import React from "react";
import { useState } from "react";
// css file
import "./blog-details.css";
// banner file
import Banner from "../components/banner";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFontAwesome } from "react-icons/fa";
import {
  faCalendar,
  faQuoteLeft,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// import Pagetransition from "../components/pagetransition";
// images
import main from "../assets/main.jpg";
import doctor1 from "../assets/doc1.jpg";
import doctor2 from "../assets/doc2.jpg";
import blodpreasure from "../assets/woman.jpg";
import operation1 from "../assets/operation-teeth.jpg";
import operation2 from "../assets/pic2.67db6c474a828bd7a0cd (1).jpg";
import operation3 from "../assets/pic4.28ea761e88293ca4d821.jpg";
// import shape from "../assets/shape1-1112f1ac0dc18e511a91.png";
import Pagetransition from "../components/pagetransition";
// divinder
import Divinder from "../components/divinder";
export default function BlogDetail() {
  let [form, setform] = React.useState({
    author: "",
    email: "",
    comment: "",
  });
  let [error, seterror] = useState(true);
  const handlechange = (e) => {
    let { name, value } = e.target;
    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!form.author || !form.email || !form.comment) return;
    seterror(false);
    setTimeout(() => {
      setform({
        author: "",
        email: "",
        comment: "",
      });
      seterror(true);
    }, 2000);
  };
  const comments = [
    {
      name: "George",
      date: "May 09, 2021 at 10:45 am",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: `${doctor1}`,
    },
    {
      name: "Sarah",
      date: "June 14, 2022 at 02:30 pm",
      comment:
        "This service was really helpful and easy to use. I had a great experience overall.",
      img: `${doctor2}`,
    },
    {
      name: "Ahmed",
      date: "August 01, 2023 at 08:15 am",
      comment:
        "The website design is clean and user-friendly. Everything is clear and simple.",
      img: `${doctor1}`,
    },
    {
      name: "Emily",
      date: "January 20, 2024 at 06:50 pm",
      comment:
        "The support team was very fast and responded to all my questions in a short time.",
      img: `${doctor2}`,
    },
  ];
  return (
    <Pagetransition>
      <div className="blog-details">
       
        <Banner title="blog-details" subtitle="blog-details" />
            <Divinder />
        
        <div className="container">
          <div className="row details-blogs">
            <div className="col-sm-12 col-md-8 right-side">
              <div className="part-one">
                <img src={main} alt="main-image" loading="lazy" />
                <div className="info-det">
                  <img src={doctor1} alt="doctor" loading="lazy" />
                  <h5 className="doc-name">Mark David </h5>
                  <div className="date">
                    <FontAwesomeIcon icon={faCalendar} />
                    <p> 19 July 2021</p>
                  </div>
                </div>
                <h2 className="blg-big-title">
                  Precious Tips To Help You Get Better.
                </h2>
                <p className="opinon">
                  You just need to enter the keyword and select the keyword type
                  to generate a list of 6 title ideas and suggestions. If you’re
                  not satisfied with the results, you can always hit the refresh
                  button to generate a new list of unique titles.
                </p>
                <div className="quote">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  <p>
                    Once you’ve gotten all the titles and have chosen the best
                    one, the next thing you need to do is to craft a magnetic
                    content. Great content marketers excel at creating content.
                  </p>
                </div>
                <div className="last-pg">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              </div>
              <div className="part-two">
                <div className="img-container">
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <img src={doctor2} alt="doctorimage" loading="lazy" />
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <img src={blodpreasure} alt="doctorimage" loading="lazy" />
                    </div>
                  </div>
                </div>
                <div className="texts">
                  <p>
                    You just need to enter the keyword and select the keyword
                    type to generate a list of 6 title ideas and suggestions. If
                    you’re not satisfied with the results, you can always hit
                    the refresh button to generate a new list of unique titles.
                  </p>
                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>
                  <div className="tages">
                    <div className="sub-tages">
                      <span>Tags:</span>
                      <ol>
                        <li>
                          <a href="#">Health</a>
                        </li>
                        <li>
                          <a href="#">Growth</a>
                        </li>
                        <li>
                          <a href="#">life</a>
                        </li>
                      </ol>
                    </div>
                    <div className="share">
                      <span className="sub-share">share:</span>
                      <ol>
                        <li>
                          <FontAwesomeIcon icon={faFacebook} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faInstagram} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faXTwitter} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faLinkedin} />
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="bg-box-card">
                    <img src={doctor2} alt="doctorimage" loading="lazy" />
                    <div className="info-box">
                      <h3 className="name">Sonar Z. Moyna</h3>
                      <p>
                        Aenean sollicitudin, lorem quis biber idum auctor anisi
                        elit consequat happ quam vel enim augue.
                      </p>
                      <div className="links">
                        <ol>
                          <li>
                            <FontAwesomeIcon icon={faFacebook} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faInstagram} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faXTwitter} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faLinkedin} />
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comments">
                <h3>8 comments </h3>
                <div className="container">
                  <div className="row">
                    {comments.map((item, index) => {
                      return (
                        <div className="col-sm-12" key={index}>
                          <div
                            className={`box-comment ${index % 2 == 0 ? "active" : "active-right"}`}
                          >
                            <div className="fs-part">
                              <img src={item.img} alt={item.name} loading="lazy" />
                              <div className="info">
                                <h3>{item.name}</h3>
                                <h4>{item.date}</h4>
                              </div>
                            </div>
                            <p>{item.comment}</p>
                            <button className="btn btn-primary reply">
                              reply
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="reply">
                <div className="container">
                  <div className="row ">
                    <div className="col-sm-12">
                      <div className="box-reply row justify-content-center">
                        <h3>leave a reply</h3>
                        <form
                          action="#"
                          className="form-control fm-bg"
                          onSubmit={(e) => {
                            handlesubmit(e);
                          }}
                        >
                          <div className="one row ">
                            <div className="col-sm-6">
                              <input
                                type="text"
                                placeholder="Author"
                                name="author"
                                value={form.author}
                                onChange={(e) => {
                                  handlechange(e);
                                }}
                              />
                            </div>
                            <div className="col-sm-6 col-md-6">
                              <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={form.email}
                                onChange={(e) => {
                                  handlechange(e);
                                }}
                              />
                            </div>
                          </div>
                          <input
                            type="textarea"
                            placeholder="Comment"
                            name="comment"
                            value={form.comment}
                            onChange={(e) => {
                              handlechange(e);
                            }}
                          />
                          <input type="submit" />
                          {error ? null : (
                            <p className="alert alert-success">
                              your comment submited
                            </p>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 ">
              <div className="row">
                <div className="col-sm-12">
                  <div className="se-box">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="search"
                    />
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 recent-posts">
                  <h2>Recent Posts</h2>
                  <div className="box-posts">
                    <img src={operation1} alt="operation" loading="lazy" />
                    <div className="info-posts">
                      <h4>Precious Tips To Help You Get Better.</h4>
                      <p>
                        <FontAwesomeIcon icon={faCalendar} /> 21 june 2021
                      </p>
                    </div>
                  </div>
                  <div className="box-posts">
                    <img src={operation2} alt="operation" loading="lazy" />
                    <div className="info-posts">
                      <h4>Ten Doubts You Should Clarify About.</h4>
                      <p>
                        <FontAwesomeIcon icon={faCalendar} /> 21 march 2025
                      </p>
                    </div>
                  </div>
                  <div className="box-posts">
                    <img src={operation3} alt="operation"  loading="lazy"/>
                    <div className="info-posts">
                      <h4>The 10 Steps Needed For Putting.</h4>
                      <p>
                        <FontAwesomeIcon icon={faCalendar} /> 21 june 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 gallery">
                  <div className="gallery-cont">
                    <h2>our gallery</h2>
                    <div className="images-cont">
                      <img src={doctor1} alt="doctor"  loading="lazy"/>
                      <img src={doctor2} alt="doctor2" loading="lazy"/>
                      <img src={operation1} alt="operation" loading="lazy"/>
                      <img src={doctor2} alt="doctor" loading="lazy" />
                      <img src={operation2} alt="operation" loading="lazy"/>
                      <img src={operation3} alt="operation3"loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 big-tages">
                  <h2>Tags</h2>
                  <div className="last-tages">
                    <div className="fs-tages tages">
                      <a href="#">improvement</a>
                      <a href="#">health</a>
                      <a href="#">life</a>
                      <a href="#"> covid</a>
                    </div>
                  </div>
                  <div className="last-tages">
                    <div className="sc-tages tages">
                      <a href="#">healthy</a>
                      <a href="#">growth</a>
                      <a href="#">eduction</a>
                    </div>
                  </div>
                  <div className="last-tages">
                    <div className="th-tages tages">
                      <a href="#">manage</a>
                      <a href="#">general</a>
                    </div>
                  </div>
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
