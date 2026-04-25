import React from 'react'
import './login-signup.css'
import logo from '../assets/logo.png'
// animation page
import Pagetransition from '../components/pagetransition'
// divinder
import Divinder from "../components/divinder";
export default function Login() {
  return (
    <Pagetransition>
    <div className='container'>
        <div className="login">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-sm-12 col-md-8 col-lg-6 ">
                <div className="shape ">
                  <img src={logo} alt="logo" loading='lazy' />
                  <form action="#" className='form-control justify-content-center align-items-center'>
                    <input type="text" className='form-control' placeholder='username' />
                    <input type="password" className='form-control' placeholder='password' />
                    <button className='btn btn-primary lg-in'> login</button>
                    <a href="#" className='forgetpassword'> forget password ?</a>
                    <a href="#signup" className='new-account'>don't have an account</a>
                    <a href="#signup" className='register'> register</a>
                  </form>
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
