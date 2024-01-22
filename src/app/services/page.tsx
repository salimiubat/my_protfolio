import React from 'react'
import Navbar from '../components/Navbar'

export default function page() {
    return (
        <div>
            <Navbar showContent={false} />

            <div id="services" className="services container-fluid">
                <div className="container">
                    <div className="session-title row">
                        <h2>Servcies I Provide</h2>
                        <p style={{textAlign:"justify"}}>
                        As a Full-Stack Developer, I offer a comprehensive range of services aimed at delivering high-quality web solutions. My expertise covers both front-end and back-end development, allowing me to create robust and scalable applications. Here is a detailed breakdown of the services I provide:
                        </p>
                        <div className="heading-line" />
                    </div>
                    <div className="services-row row">

                        <div className="col-md-4 seric-div">
                            <div className="service-card">
                                <i className="fas fa-desktop" />
                                <h4>Web Application Development</h4>
                                <p>
                                    Proficient in creating robust and scalable web applications, I excel in dynamic interfaces with Vue Js, Next Js and React Js. My services cover responsive design implementation using HTML, CSS, Vuetify, Bootstrap, and JavaScript.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 seric-div">
                            <div className="service-card">
                                <i className="fab fa-uikit" />
                                <h4>API Development and Integration</h4>
                                <p>
                                    Experienced in creating RESTful APIs using Django Rest Framework (DRF), I offer services in API development and integration, ensuring seamless communication between various software components.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 seric-div">
                            <div className="service-card">
                                <i className="fas fa-bullhorn" />
                                <h4>Database Design and Management</h4>
                                <p>
                                    With strong skills in SQL, I specialize in designing efficient and secure database structures. Services include schema creation, optimization, and ensuring data integrity throughout the application.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 seric-div">
                            <div className="service-card">
                                <i className="far fa-file-image" />
                                <h4>Custom Software Development</h4>
                                <p>
                                    Leveraging expertise in Python Django, DRF, Vue Js, Next Js and React Js, I provide end-to-end custom software development services. From conceptualization to deployment, I specialize in crafting tailored solutions to meet the unique requirements of clients.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 seric-div">
                            <div className="service-card">
                                <i className="fas fa-suitcase" />
                                <h4>System Maintenance and Debugging</h4>
                                <p>
                                    Providing ongoing support for software systems, I offer maintenance services to keep applications up-to-date, secure, and running smoothly. My debugging skills enable the identification and resolution of issues for optimal system performance.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 seric-div">
                            <div className="service-card">
                                <i className="fas fa-mobile-alt" />
                                <h4>Project Management and Collaboration</h4>
                                <p>
                                    Beyond coding, I bring strong project management skills to the table. Adept at collaborating with cross-functional teams, I ensure effective communication and timely project delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
