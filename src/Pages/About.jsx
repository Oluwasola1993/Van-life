import React from "react";
import Bimg from "../assets/Images/image 54.png";
import "../assets/Styles/Style.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const van = () => {
    navigate("/Van");
  };
  return (
    <>
      <div className="container-fluid px-0" style={{ overflow: "hidden" }}>
        <div className="row">
          <div className="col-sm-12 col-lg-12 col-md-12">
            <img id="Bimg" src={Bimg} className="img-fluid" alt="" />
            <div className="col-sm-12 col-md-12 col-lg-12 py-4 px-4" id="about">
              <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
              <p className="fs-5">
                Our mission is to enliven your road trip with the perfect travel
                van rental. Our vans are recertified before each trip to ensure
                your travel plans can go off without a hitch. (Hitch costs extra
                😉)
              </p>
              <p className="fs-5">
                Our team is full of vanlife enthusiasts who know firsthand the
                magic of touring the world on 4 wheels.
              </p>
              <div
                className="col-sm-12 col-md-11 col-lg-11 mx-auto"
                id="aboutc"
              >
                <h4 className="fs-3 fw-bold">
                  Your destination is waiting. <br /> Your van is ready.
                </h4>
                <button className="btn btn-dark text-white my-4" onClick={van}>
                  Explore our vans
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
