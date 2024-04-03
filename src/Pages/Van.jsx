import React from "react";
import Van1 from "../assets/Images/Rectangle 154.png";
import Van2 from "../assets/Images/Rectangle 154 (1).png";
import Van3 from "../assets/Images/3rd.png";
import Van4 from "../assets/Images/Rectangle 154 (2).png";
import Van5 from "../assets/Images/Rectangle 154 (3).png";
import Van6 from "../assets/Images/Rectangle 155.png";

const Van = () => {
  return (
    <>
      <div id="vanCont">
        <div
          className="container-fluid px-0"
          style={{ background: "#fff7ed", overflow: "hidden" }}
        >
          <div className="row px-5 pt-5">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h1>Explore our van options</h1>
            </div>
          </div>
          <div className="row px-5 pt-2 pb-5 btnar">
            <div className="col-sm-12 col-md-12 col-lg-12  btna">
              <div>
                <button className="btn btn" id="btn">
                  Simple
                </button>
              </div>
              <div>
                <button className="btn btn" id="btn">
                  Luxury
                </button>
              </div>
              <div>
                <button className="btn btn" id="btn">
                  Rugged
                </button>
              </div>
              <div className="pt-2 fs-5">
                <a href="" style={{ color: "#636361" }}>
                  Clear filters
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-5" style={{ background: "#fff7ed" }}>
          <div className="row">
            <div className="col-sm-6 col-lg-3 col-md-3 VN">
              <img src={Van1} className="img-fluid pb-sm-2" alt="" />
              <div className="d-flex gap-4">
                <p className="fw-bold fs-5">Modest Explorer</p>
                <p className="fw-bold fs-5">
                  $60 <br />
                  <div className="fw-light">/day</div>
                </p>
              </div>
              <button
                className="btn btn px-4 text-white"
                style={{
                  background: "#e17654",
                  color: "#ffead0",
                  marginTop: "-19%",
                }}
              >
                Simple
              </button>
            </div>
            <div className="col-sm-6 col-lg-3 col-md-3 VN">
              <img src={Van2} className="img-fluid" alt="" />
              <div className="d-flex gap-5">
                <p className="fw-bold fs-3">Beach Bum</p>
                <p className="fw-bold fs-5">
                  $80 <br />
                  <div className="fw-light">/day</div>
                </p>
              </div>
              <button
                className="btn btn px-4"
                style={{
                  background: "#115e59",
                  color: "#ffead0",
                  marginTop: "-18%",
                }}
              >
                Rugged
              </button>
            </div>
            <div className="col-sm-6 col-lg-3 col-md-3 VN">
              <img src={Van3} className="img-fluid" alt="" />
              <div className="d-flex gap-5">
                <p className="fw-bold fs-4">Reliable Red</p>
                <p className="fw-bold fs-5">
                  $80 <br />
                  <div className="fw-light">/day</div>
                </p>
              </div>
              <button
                className="btn btn px-4"
                style={{
                  background: "#161616",
                  color: "#c5b5a1",
                  marginTop: "-20%",
                }}
              >
                Luxury
              </button>
            </div>
            <div className="col-sm-6 col-lg-3 col-md-3 VN">
              <img src={Van4} className="img-fluid" alt="" />
              <div className="d-flex gap-5 gap-sm-2">
                <p className="fw-bold fs-4">Dreamfinder</p>
                <p className="fw-bold fs-5">
                  $65 <br />
                  <div className="fw-light">/day</div>
                </p>
              </div>
              <button
                className="btn btn px-4 text-white"
                style={{
                  background: "#e17654",
                  color: "#ffead0",
                  marginTop: "-20%",
                }}
              >
                Simple
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-3 col-md-3 VN">
              <img src={Van5} className="img-fluid pt-sm-2 " alt="" />
              <div className="d-flex gap-5">
                <p className="fw-bold fs-4">The Cruiser</p>
                <p className="fw-bold fs-5">
                  $120 <br />
                  <div className="fw-light">/day</div>
                </p>
              </div>
              <button
                className="btn btn px-4"
                style={{
                  background: "#161616",
                  color: "#c5b5a1",
                  marginTop: "-20%",
                }}
              >
                Luxury
              </button>
            </div>
            <div className="col-sm-6 col-lg-3 col-md-3 VN">
              <img src={Van6} className="img-fluid pt-sm-2" alt="" />
              <div className="d-flex gap-4">
                <p className="fw-bold fs-4">Green Wonder</p>
                <p className="fw-bold fs-5">
                  $70 <br />
                  <div className="fw-light">/day</div>
                </p>
              </div>
              <button
                className="btn btn px-4"
                style={{
                  background: "#115e59",
                  color: "#ffead0",
                  marginTop: "-20%",
                }}
              >
                Rugged
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Van;
