import React from 'react'
import Navbar from '../components/Navbar'

export default function ContactPage() {
  return (
    <div>
    <Navbar showContent={false} />

<section id="cntact_us" className="contact-us-single">
  <div className="row no-margin">
    <div className="col-sm-6 no-padding">
      <iframe
        style={{ width: "100%" }}
        src="https://www.google.com/maps/place/Tangail/@24.2476397,89.8759709,13z/data=!3m1!4b1!4m6!3m5!1s0x39fdfbe3d271b363:0x8a0d420f347f7c7c!8m2!3d24.2514853!4d89.9198043!16s%2Fm%2F02vk91l?entry=ttu"
        
        height={480}
        frameBorder={0}
        // allowFullScreen=""
      />
    </div>
    <div className="col-sm-6 cop-ck">
      <h2>Contact Form</h2>
      <div className="row cf-ro">
        <div className="col-sm-3">
          <label>Enter Name :</label>
        </div>
        <div className="col-sm-8">
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            className="form-control input-sm"
          />
        </div>
      </div>
      <div className="row cf-ro">
        <div className="col-sm-3">
          <label>Email Address :</label>
        </div>
        <div className="col-sm-8">
          <input
            type="text"
            name="name"
            placeholder="Enter Email Address"
            className="form-control input-sm"
          />
        </div>
      </div>
      <div className="row cf-ro">
        <div className="col-sm-3">
          <label>Mobile Number:</label>
        </div>
        <div className="col-sm-8">
          <input
            type="text"
            name="name"
            placeholder="Enter Mobile Number"
            className="form-control input-sm"
          />
        </div>
      </div>
      <div className="row cf-ro">
        <div className="col-sm-3">
          <label>Enter Message:</label>
        </div>
        <div className="col-sm-8">
          <textarea
            rows={5}
            placeholder="Enter Your Message"
            className="form-control input-sm"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="row cf-ro">
        <div className="col-sm-3">
          <label />
        </div>
        <div className="col-sm-8">
          <button className="btn btn-primary btn-sm">Send Message</button>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
