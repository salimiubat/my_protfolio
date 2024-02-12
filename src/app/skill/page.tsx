import React from 'react'
import Navbar from '../components/Navbar'

export default function Skill() {
  return (
    <div>
    <Navbar showContent={false} />


<div id="skills" className="skills container-fluid">
  <div className="row">
    <div className="col-md-6 skii-div tech-skill">
      <div className="title">
        <h2>Technical Skill</h2>
        <p>Professional Skills</p>
      </div>
      <ul>
        <li>
          <label htmlFor="">Python</label>
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow={95}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </li>
        <li>
          <label htmlFor="">Django</label>
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </li>
        <li>
          <label htmlFor="">Django Rest Framework</label>
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow={55}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </li>
        <li>
          <label htmlFor="">Vuejs</label>
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow={65}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </li>
        <li>
          <label htmlFor="">HTML5</label>
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow={65}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </li>
        <li>
          <label htmlFor="">Celery</label>
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "83%" }}
              aria-valuenow={65}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </li>
      </ul>
    </div>
    <div className="col-md-6 skii-div pro-skill">
      <div className="title">
        <h2>Technical Skill</h2>
        <p>Professional Skills</p>
      </div>
      <ul>
        <li>
          <label htmlFor="">React Js</label>
          <div className="progress">
            <div
              className="progress-bar bg-warning progress-bar-striped"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow={70}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </li>
        <li>
          <label htmlFor="">Next Js</label>
          <div className="progress">
            <div
              className="progress-bar bg-warning progress-bar-striped"
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </li>
        <li>
          <label htmlFor="">Vuetify </label>
          <div className="progress">
            <div
              className="progress-bar bg-warning progress-bar-striped"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow={60}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </li>
        <li>
          <label htmlFor="">Bootstrap</label>
          <div className="progress">
            <div
              className="progress-bar bg-warning progress-bar-striped"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </li>
        <li>
          <label htmlFor="">Material-UI</label>
          <div className="progress">
            <div
              className="progress-bar bg-warning progress-bar-striped"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </li>
        <li>
          <label htmlFor="">Ajax</label>
          <div className="progress">
            <div
              className="progress-bar bg-warning progress-bar-striped"
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

    </div>
  )
}
