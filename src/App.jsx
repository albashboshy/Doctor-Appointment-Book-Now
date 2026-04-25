
import { Navbar } from 'react-bootstrap'
import './App.css'
import Button from 'react-bootstrap/Button'
import NavbarHeader from './components/nav/navbar'
import Home from './pages/home'
import Footer from './components/footer/footer'
import {  Routes, Route,Link, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
//  All pages 
import Aboutus from './pages/aboutus'
import Contactus from './pages/contactus'
import Ourteam from './pages/ourteam'
import FAQS from './pages/fqs'
import Booking from './pages/booking'
import Error  from  './pages/error'
import Login from './pages/login'
import Signup from './pages/signup'
import Service from './pages/service'
import ServiceDetail from './pages/service-detail'
import Blog from './pages/blog'
import BlogDetail from './pages/blog-detail'
function App() {
   const location = useLocation();


  return (
    <>
       <NavbarHeader />
      
       <AnimatePresence mode='wait'>
      <Routes>
        <Route location={location} key={location.pathname}/>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route  path='/aboutus' element={<Aboutus/>} />
        <Route path='/ourteam' element={<Ourteam />}/>
        <Route path='/faqs'  element={<FAQS />}/>
        <Route path='/booking' element={<Booking />}/>
        <Route path='/error'  element={<Error />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/service' element={<Service/>} />
        <Route path='/service-detail' element={<ServiceDetail/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog-detail' element={<BlogDetail/>} />
      </Routes>
      </AnimatePresence>
       <Footer />
    </>
  )
}

export default App
