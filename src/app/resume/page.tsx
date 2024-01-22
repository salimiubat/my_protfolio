import React from 'react'
import Navbar from '../components/Navbar'

export default function page() {
  return (
    <>

      <Navbar showContent={false} />
      <link rel="stylesheet" href="assets/resume/resume.css" />
      <div className="container">


        <div className="content-wrapper" style={{ margin: "20px" }}>
          <aside>
            <div className="profile-img-wrapper">
              <img src="assets/images/name.png" alt="profile" />
            </div>
            <h1 className="profile-name">Md. Solayman Hossen Selim</h1>
            <div className="text-center">
              <span className="badge badge-white badge-pill profile-designation">
                Full Stack Web Developer
              </span>
            </div>
            <nav className="social-links">
              <a href="#!" className="social-link">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#!" className="social-link">
                <i className="fab fa-twitter" />
              </a>
              <a href="#!" className="social-link">
                <i className="fab fa-behance" />
              </a>


            </nav>
            <div className="widget">
              <h5 className="widget-title">personal information</h5>
              <div className="widget-content">
                <p>BIRTHDAY : 22 Nov 1993</p>
                <p>WEBSITE :salim-wl81.onrender.com</p>
                <p>PHONE : +88 01518375925</p>
                <p>MAIL : salimkc7@gmail.com</p>
                <p>Location : Uttara,Dhaka</p>
                <button className="btn btn-download-cv btn-primary rounded-pill">
                  {" "}
                  <img
                    src="assets/images/download.svg"
                    alt="download"
                    className="btn-img"
                  />
                  DOWNLOAD CV{" "}
                </button>
              </div>
            </div>
            <div className="widget card">
              <div className="card-body">
                <div className="widget-content">
                  <h5 className="widget-title card-title">LANGUAGES</h5>
                  <p>Bangla : Native</p>
                  <p>English : Proficient</p>

                </div>
              </div>
            </div>
            <div className="widget card">
              <div className="card-body">
                <div className="widget-content">
                  <h5 className="widget-title card-title">INTERESTS</h5>
                  <p>Video games</p>
                  <p>Cricket</p>
                  <p>Basketball</p>

                </div>
              </div>
            </div>
          </aside>
          <main>
            <section className="resume-section" style={{ marginLeft: "40px", marginTop: "50px" }}>
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section-title">CAREER OBJECTIVES</h2>
                  <ul className="time-line">
                    <p style={{ textAlign: "justify" }}>To work as a Software Engineer applying my knowledge in the field of testing, designing, and
                      maintenance to cater to the specific needs of the people. I wish to work in a team of motivated
                      individuals who wish to work towards the advancement of the company and its goals.</p>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <h2 className="section-title">Education</h2>
                  <ul className="time-line">
                    <li className="time-line-item">
                      <span className="badge badge-primary">01/2016 - 12/2019</span>
                      <h6 className="time-line-item-title">Bachelor of Computer Science and Engineering</h6>
                      <p className="time-line-item-subtitle">International University of Business Agriculture and Technology</p>
                      <p className="time-line-item-content">CGPA-3.53</p>
                    </li>
                    <li className="time-line-item">
                      <span className="badge badge-primary">05/2010 - 03/2012</span>
                      <h6 className="time-line-item-title">Higher Secondary School Certificate (HSC)</h6>
                      <p className="time-line-item-subtitle">Sristy College of Tangail, Tangail</p>
                      <p className="time-line-item-content">GPA-4.40</p>
                    </li>

                    <li className="time-line-item">
                      <span className="badge badge-primary">01/2008 - 02/2010</span>
                      <h6 className="time-line-item-title">Secondary School Certificate (SSC)</h6>
                      <p className="time-line-item-subtitle">Shahid Jahangir High School, Tangail</p>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6">
                  <h2 className="section-title">Work Experience</h2>
                  <ul className="time-line">
                    <li className="time-line-item">
                      <span className="badge badge-primary">09/2022 - Present</span>
                      <h6 className="time-line-item-title">Software Engineer</h6>
                      <p className="time-line-item-subtitle">Meeting Me, Tikatuli, Hatkhola, Dhaka</p>
                    </li>
                    <li className="time-line-item">
                      <span className="badge badge-primary">12/2020-12/2020</span>
                      <h6 className="time-line-item-title">Junior Software Engineer</h6>
                      <p className="time-line-item-subtitle">Aussie Bangla, Baridhara DOHS, Dhaka</p>
                    </li>
                    <li className="time-line-item">
                      <span className="badge badge-primary">08/2019 - 02/2020</span>
                      <h6 className="time-line-item-title">Junior Software Engineer</h6>
                      <p className="time-line-item-subtitle">iSense Technolab, Dhaka Trade Center, Karwan Bazar, Dhaka</p>
                    </li>
                  </ul>
                </div>


                <div className="col-lg-6">
                  <h2 className="section-title">Personal Projects</h2>
                  <ul className="time-line">
                    <li className="time-line-item">
                      <h6 className="time-line-item-title">Pharmacy Management System</h6>
                      <p className="time-line-item-content">Django</p>
                    </li>
                    <li className="time-line-item">
                      <h6 className="time-line-item-title">Django Movement Pass</h6>
                      <p className="time-line-item-content">Django</p>
                    </li>
                    <li className="time-line-item">
                      <h6 className="time-line-item-title">Django Blood Donation System</h6>
                      <p className="time-line-item-content">Django</p>
                    </li>
                    <li className="time-line-item">
                      <h6 className="time-line-item-title">School Management System</h6>
                      <p className="time-line-item-content">Django + ASP.NET</p>
                    </li>
                    <li className="time-line-item">
                      <h6 className="time-line-item-title">Railway Reservation System</h6>
                      <p className="time-line-item-content">Django</p>
                    </li>
                    <li className="time-line-item">
                      <h6 className="time-line-item-title">Library Management System</h6>
                      <p className="time-line-item-content">Java Swing</p>
                    </li>
                    <li className="time-line-item">
                      <h6 className="time-line-item-title">Salary Management System</h6>
                      <p className="time-line-item-content">PHP</p>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6">
                  <h2 className="section-title">Skills</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="time-line">
                        <li className="time-line-item">
                          <h6 className="time-line-item-title">Python</h6>
                        </li>
                        <li className="time-line-item">
                          <h6 className="time-line-item-title">Django</h6>
                        </li>
                        <li className="time-line-item">
                          <h6 className="time-line-item-title">DRF (Django Rest Framework)</h6>
                        </li>
                        <li className="time-line-item">
                          <h6 className="time-line-item-title">Vue.js</h6>
                        </li>
                        <li className="time-line-item">
                          <h6 className="time-line-item-title">HTML</h6>
                        </li>
                        <li className="time-line-item">
                          <h6 className="time-line-item-title">React.js</h6>
                        </li>
                        <li className="time-line-item">
                          <h6 className="time-line-item-title">CSS</h6>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="time-line">
                        <li className="time-line-item">
                          <h6 className="time-line-item-title">Vuetify</h6>
                        </li>
                        <li className="time-line-item">
                          <h6 className="time-line-item-title">Bootstrap</h6>
                        </li>
                        <li className="time-line-item">
                          <h6 className="time-line-item-title">Celery</h6>
                        </li>
                        <li className="time-line-item">
                          <h6 className="time-line-item-title">Ajax</h6>
                        </li>
                        <li className="time-line-item">
                          <h6 className="time-line-item-title">JavaScript</h6>
                        </li>
                        <li className="time-line-item">
                          <h6 className="time-line-item-title">MUI (Material-UI)</h6>
                        </li>
                        <li className="time-line-item">
                          <h6 className="time-line-item-title">SQL</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>

  )
}
