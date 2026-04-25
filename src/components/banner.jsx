import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./banner.css";
export default function Banner(props) {
  let { title, subtitle} = props;
  return (
    
    <div className="container">
      <div className="banner">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h2>{title}</h2>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} /> Home  /     </Link>
                    <Link to={`#${subtitle.toLowerCase()}`}>{subtitle}</Link>
            </li>
          </div>
        </div>  
      </div>
    </div>
  );
}
