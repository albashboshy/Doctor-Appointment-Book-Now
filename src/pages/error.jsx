import React from 'react'
import './error.css'
import Banner from '../components/banner'
//animation page 
import Pagetransition from '../components/pagetransition'
// divinder
import Divinder from "../components/divinder";
export default function Error() {
  return (
    
    <Pagetransition>
    <div className='error'>
            <div className="container">
              <Banner  title='page not found' subtitle='page not found'/>
              
                <div className="row">
                  <div className="col-sm-12 error-page">
                    <h2>4 <span className='emoji'> &#128546;</span> 4</h2>
                    <h4>The Page you were looking for,<br/> couldn't be found.</h4>
                    <h5>The page you are looking for might have been removed, had its <br/> name changed, or is temporarily unavailable.</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="btn-control">
                      <button className='btn btn-primary er-btn'> <a href="/">Back </a></button>
                          <button className='btn btn-primary er-btn'> <a href="/">Back to home </a></button>
                    </div>
                  </div>
                   </div>
            </div>
    </div>
    <Divinder/> 
    </Pagetransition>
  )
}
