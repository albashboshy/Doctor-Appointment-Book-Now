import React from 'react'
import "./login-signup.css"
import { useState } from 'react'
import logo from '../assets/logo.png'
// animtion page 
import Pagetransition from '../components/pagetransition'
// divinder
import Divinder from "../components/divinder";
export default function Signup() {
  let [isSuccess, setIsSuccess] = useState(false);
  let [form, setform] =React.useState({
    name: "",
    email: "",
    username: "",
    password: "",
  })
  let handlechange = (e) => {
    let { name, value } = e.target;
    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  let handlesubmit = (e) => {
    e.preventDefault();
    if(!form.name || !form.email || !form.username || !form.password)  return
    setIsSuccess(true);
    setTimeout(() => {
      refresh();
      setIsSuccess(false);
    }, 2000);
    
    
  }
  let refresh = () => {
    setform({
      name: "",
      email: "",
      username: "",
      password: "",
    });
  };
  return (
    <Pagetransition>  
    <div className='container signup'>

        <div className='container'>
                <div className="login">
                  <div className="container">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-sm-12 col-md-8 col-lg-6 ">
                        <div className="shape ">
                          <img src={logo} alt="logo" loading='lazy' />
                          <form action="#" className='form-control justify-content-center align-items-center' onSubmit={handlesubmit}>
                             <input type="text" className='form-control' placeholder='name'name='name' value={form.name} required onChange={handlechange}/>
                              <input type="email" className='form-control' placeholder='email'  required name='email' value={form.email} onChange={handlechange}/>
                            <input type="text" className='form-control' placeholder='username'required name='username' value={form.username} onChange={handlechange}/>
                            <input type="password" className='form-control' placeholder='password' required  name='password' value={form.password} onChange={handlechange}/>
                            <button className='btn btn-primary lg-in'> register now </button>
                            
                            <a href="#signup" className='new-account'>alredy i  have an account ?</a>
                            <a href="#login" className='login register'> login</a>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                   {isSuccess && (
                  <div className="success-message text-center mt-3 ">
                    <p className='alert alert-success'>Registration successful! 😊</p>
                  </div>
                )}
                </div>
               
            </div>
    </div>
    <Divinder/>
    </Pagetransition>
  )
}
