import React, { useState } from "react"

function Contact() {
  const [data,setData] = useState({
    fullName:'',
    phone:'',
    email:'',
    message:'',
  });
  const inputEvent=(e)=>{
      const {name,value}= e.target;
      setData((preVal)=>{
        return {
          ...preVal,
          [name] :value,
        }
      })
      setData(" "); 
  }
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(
      `My name is ${data.fullName}. My Mobile number is ${data.phone}. and email is ${data.email}, Here is what I want to say ${data.message}`
      )
  }
  return (
    <>
      <div className="my-fs-5">
        <h1 className="text-center">Contect US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-5 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group mb-3">
                <label for="exampleFormControlInput1">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullName}
                  onChange={inputEvent}
                  placeholder="Enter your full Name"
                />
              </div>
              <div className="form-group mt-3">
                <label for="exampleFormControlInput1">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter your Mobile number"
                />
              </div>
              <div className="form-group mt-3">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group mt-3">
                <label for="exampleFormControlTextarea1">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <div className="col-12 mt-2">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
