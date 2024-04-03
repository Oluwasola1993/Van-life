import React from "react";
import Bimg from "../assets/Images/image 53.png";
import "../assets/Styles/Style.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const vansPage = () => {
    navigate("/Van");
  };

  return (
    <>
      <div className="container-fluid px-0" style={{ overflow: "hidden" }}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <img id="img" src={Bimg} alt="" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 text-white ">
            <h1 className="fs-1 fw-bold" id="head1">
              You got the travel plans, we <br /> got the travel vans.
            </h1>
            <p className="fs-4" id="para1">
              Add adventure to your life by joining the #vanlife movement.{" "}
              <br />
              Rent the perfect van to make your perfect road trip.
            </p>
            <button
              style={{
                background: "#ff8c38",
                position: "absolute",
                top: "440px",
                left: "22%",
                width: "42%",
              }}
              id="three"
              className="btn btn py-2 text-white"
              onClick={vansPage}
            >
              Find your van
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
