import React from 'react'
import Image from 'next/image';

import HeaderPage from '../components/HeaderPage'
import Navbar from '../components/Navbar'

export default function About() {

  
  return (
    <>
    <Navbar showContent={false} />
    <div id="about_us" className="about-us container-fluid">
    <div className="container">
      <div className="session-title row">
        <h2>About Me</h2>
        <p style={{textAlign:'justify'}}>
        I am Md. Solayman Hossen Selim,
        I am a passionate Full-Stack Developer with a proven track record of creating and implementing innovative web solutions. My expertise spans the entire software development life cycle, from front-end to back-end development. With a strong foundation in both client and server-side technologies, I am dedicated to delivering high-quality, scalable, and user-friendly applications
        </p>
        <div className="heading-line" />
      </div>
      <div className="about-row row">
        <div className="image-col col-md-4">
        <img src="/assets/images/about.png" alt=""  />
          <button className="btn btn-primary">
            <i className="fas fa-download" /> Download CV
          </button>
        </div>
        <div className="detail-col col-md-8">
          <h2>Md. Solayman Hossen Selim</h2>
          <h6>Full Stack Web Developer</h6>
          <p>
In my role as a Software Engineer at Meeting Me, I am currently engaged.
 Prior to this, I gained valuable experience as a Junior Software Engineer at Aussie Bangla and iSense Technolab.

          </p>
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="info-list">
                <ul>
                  <li>
                    <span>Birthday:</span>22.11.1993
                  </li>
                  <li>
                    <span>City:</span>Tangail
                  </li>
                  <li>
                    <span>Study:</span>IUBAT University
                  </li>
                  <li>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="info-list">
                <ul>
                  <li>
                    <span>Age:</span>30 Years
                  </li>
                  <li>
                    <span>Degree:</span>BSc
                  </li>
                  <li>
                    <span>Mail:</span>salimkc7@gmail.com
                  </li>
                  <li>
                  <span>Mobile:</span>+88 01518375925 ,+88 01832865017
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>

  
  )
}
