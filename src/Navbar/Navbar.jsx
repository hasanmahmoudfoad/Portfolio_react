import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
    

      <div className="NB font-Montserrat">
        <div className="container">
          <div className="nav-toggle">
            <div className="nav-toggle-bar"></div>
          </div>
          <navbar className="navbar">
            <ul>
              <li className="diff"><Link to="intro">Home</Link></li>
              <li className="diff"><Link to="about">About</Link></li>
              <li className="diff"><Link to="work">Experience</Link></li>
              <li className="diff"><Link to="projects">Projects</Link></li>
              <li className="diff"><Link to="technology">My Skills</Link></li>
            </ul>

            <div className="clearfix hidden"></div>
          </navbar>
        </div>

        <nav>
          <div className="container">
            <div className="row">
              <div className="col-2">
                <a href="#">
                  <div className="logo">
                    <div className="logocontainer">
                      <img alt="Hasan Mahmoud" src="/images/nav-logo.png" />
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-10">
                <ul id="wrapper">
                  <li className="different"><Link to="intro">Home</Link></li>
                  <li className="different"><Link to="about">About</Link></li>
                  <li className="different"><Link to="work">Experience</Link></li>
                  <li className="different"><Link to="projects">Projects</Link></li>
                  <li className="different"><Link to="technology">My Skills</Link></li>
                </ul>
                <div className="clearfix hidden"></div>
              </div>
            </div>
          </div>
        </nav>
      </div>

    </>
  )
}
