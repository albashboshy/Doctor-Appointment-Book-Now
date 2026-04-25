import React from "react";
import Banner from "../components/banner";
import { useState } from "react";
import "./booking.css";
// page animation
import Pagetransition from "../components/pagetransition";
export default function Booking() {
  let [form, setform] = React.useState({
    name: "",
    department: "",
    doctor: "",
    phone: "",

    date: "",
  });
let [isSuccess, setIsSuccess] = useState(false);

  let handlechange = (e) => {
    let { name, value } = e.target;
    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const today = new Date();
  const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .split("T")[0];
  let handlesubmit = (e) => {
    e.preventDefault();

    let { name, department, doctor, phone, date } = form;
    if (!department || !name || !phone || !doctor || !date) {
     setIsSuccess(false);
  return;
    }
setIsSuccess(true);

setTimeout(() => {
  refresh();
  setIsSuccess(false);
}, 2000);
  };
  let refresh = () => {
    setform({
      name: "",
      department:'',
      doctor:'',
      phone: "",

      date: "",
    });
  };
  return (
    
    <Pagetransition>  
    <div className="booking">
      <div className="container">
        <Banner title="Booking" subtitle="booking" />
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center  ">
          <div className="col-sm-12 col-md-6 big-shape back-side">
            <div className="book">
              <form
                className="p-4 shadow rounded bg-white fm"
                onSubmit={handlesubmit}
              >
                <h2 className="text-center ">Book Appointment</h2>

                {/* Department */}
                <div className="mb-3 ">
                  <select
                    className="form-select form-control m-auto"
                    value={form.department}
                    name="department"
                    onChange={handlechange}
                    required
                  >
                    <option disabled value=''>Choose department</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Ear, Nose, Throat">Ear, Nose, Throat</option>
                  </select>
                </div>

                {/* Doctor */}
                <div className="mb-3">
                  <select
                    className="form-select form-control m-auto"
                    name="doctor"
                    onChange={handlechange}
                    value={form.doctor}
                    required
                  >
                    <option disabled value=''>Choose doctor</option>
                    <option value="David Milan">David Milan</option>
                    <option value="Mark Jean">Mark Jean</option>
                    <option value="Addition Smith">Addition Smith</option>
                    <option value="David Benjamin">David Benjamin</option>
                    <option value="Mahfuz Raid">Mahfuz Raid</option>
                    <option value="Mahmoud Ahmed">Mahmoud Ahmed</option>
                  </select>
                </div>

                {/* Name */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control m-auto"
                    placeholder="Enter your name"
                    name="name"
                    onChange={handlechange}
                    value={form.name}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control m-auto"
                    placeholder="Enter your phone"
                    name="phone"
                    value={form.phone}
                    onChange={handlechange}
                    required
                  />
                </div>

                {/* Date */}
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control m-auto"
                    min={localDate}
                    name="date"
                    value={form.date}
                    onChange={handlechange}
                    required
                  />
                </div>

                {/* Button */}
                <button className="btn btn-primary form-btn m-auto">
                  Appointment Now
                </button>
              </form>
            </div>
          </div>
        </div>
       {isSuccess && (
  <div className="alert alert-success text-center mess">
    Appointment Booked 😊
  </div>
)}
      </div>
    </div>
    </Pagetransition>
  );
}
