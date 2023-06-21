import React from "react";
import DashboardHeader from "./DashboardHeader";

import { Link } from "react-router-dom";
const CompanyData = ({ company }) => {
  
  return (
    <>
          <div className="container text-center">
        <div className="row">
          <div className="col col-logo-name">
            <img className="img-logo-company" src={company.logo} alt="j"/>
            <h3 className="name-company">{company.name}</h3>
          </div>
<div className="nn">

          <div className="col col-box">
            <i className="fa-solid fa-location-dot curical-icon"></i>
            Indusrty:
            <p> {company.indusrty} </p>
          </div>
          <div className="col col-box">
            <i className="fa-solid fa-location-dot curical-icon"></i>
            Indusrty:
            <p> {company.indusrty} </p>
          </div>
          <div className="col col-box ">
            <i className="fa-solid fa-industry curical-icon"></i>
            Indusrty:
            <p> {company.indusrty} </p>
          </div>
          <div className="col col-box">
            <i className="fa-solid fa-people-group curical-icon "></i>
            Indusrty:
            <p> {company.indusrty} </p>
          </div>
        </div>
      </div>
</div>
      <hr />

      <div className="container text-start">
        <div className="row">
          <div className="col-7">
            <h2>Company Profile</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quis
              odit porro, quasi officia dolor facilis incidunt non facere
              aspernatur consectetur et repellendus autem dignissimos aliquid,
              doloribus itaque! Quasi, similique! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Inventore quidem et, ad sapiente,
              quia sint beatae doloremque id illum tempore maiores error
              laboriosam possimus saepe eos deleniti aspernatur in excepturi!
            </p>
            <hr />
            <h2>Contact</h2>
            <div className="container text-start col-Contact ">
              <div className="row py-2">
                <div className="col-5 ">
                  <button className="btn-Contact">
                    https://www.linkedin.com/
                  </button>
                </div>
                <div className="col -5">
                  <button className="btn-Contact">
                    https://www.linkedin.com/
                  </button>
                </div>
                <div className="row py-2 ">
                  <div className="col -5">
                    <button className="btn-Contact">
                      https://www.linkedin.com/
                    </button>
                  </div>
                  <div className="col-7">
                    <button className="btn-Contact">
                      https://www.linkedin.com/
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <h2>Working at {company.name}</h2>
              <div className="container text-start col-Contact ">
                <div className="row py-2">
                  <div className="col-7 ">
                    <img
                      className="img-col-1"
                      src="https://www.biospace.com/getasset/9c2883e8-16b0-4c5f-8e98-ba3560edeead/"
                    />
                  </div>
                  <div className="col -5">
                    <img
                      className="img-col-2"
                      src="https://web-static.wrike.com/blog/content/uploads/2016/11/Working-Effectively.jpg?av=d6fcc963c5c6f56257c39149bf1fd177"
                    />

                    <img
                      className="img-col-2"
                      src="https://assets.website-files.com/6320fabc41e0512485e11e03/632631404cf8f7ec9812df2e_happy-employees-1080x675.jpg"
                    />
                  </div>
                </div>
              </div>
              <hr />
              <h2>Team</h2>

              <div className="row">
                <div className="col">
                  <div className="card team-card">
                    <img
                      className="card-img img-avatar"
                      src="https://mercomp.pl/wp-content/uploads/2018/05/user-avatar-1.png"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-name">Noor Ahmad </h5>
                      <h5 className="card-jobtitle">Full-stack </h5>
                    </div>
                    <div className="icon-card">
                      <i className="fa-brands fa-linkedin icon-card-color"></i>

                      <i className="fa-brands fa-whatsapp icon-card-color"></i>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card team-card">
                    <img
                      className="card-img img-avatar"
                      src="https://mercomp.pl/wp-content/uploads/2018/05/user-avatar-1.png"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-name">Noor Ahmad </h5>
                      <h5 className="card-jobtitle">Full-stack </h5>
                    </div>
                    <div className="icon-card">
                      <i className="fa-brands fa-linkedin icon-card-color"></i>

                      <i className="fa-brands fa-whatsapp icon-card-color"></i>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card team-card">
                    <img
                      className="card-img img-avatar"
                      src="https://mercomp.pl/wp-content/uploads/2018/05/user-avatar-1.png"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-name">Noor Ahmad </h5>
                      <h5 className="card-jobtitle">Full-stack </h5>
                    </div>
                    <div className="icon-card">
                      <i className="fa-brands fa-linkedin icon-card-color"></i>

                      <i className="fa-brands fa-whatsapp icon-card-color"></i>
                    </div>
                  </div>
                </div>
              </div>
             

            </div>
          </div>

          <div className="col-3">
            <h4>Tech Stack</h4>

            <div className="container text-center ">
              <div className="row row-cols-3 py-4">
                <div className="col">
                  <img
                    className="img-tech-stack"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                  />
                </div>
                <div className="col">
                  <img
                    className="img-tech-stack"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                  />
                </div>
                <div className="col">
                  <img
                    className="img-tech-stack"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                  />
                </div>

                <br />

                <div className="col">
                  <img
                    className="img-tech-stack"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                  />
                </div>

                <div className="col">
                  <img
                    className="img-tech-stack"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                  />
                </div>

                <div className="col">
                  <img
                    className="img-tech-stack"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                  />
                </div>
              </div>
              <hr />
              <h3>Office Locations</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyData;
