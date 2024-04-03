import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid px-0 py-3"
        style={{
          overflow: "hidden",
          background: "#252525",
          bottom: "-0%",
          color: "#787878",
        }}
      >
        <div className="row text-center fw-bold fs-3">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <p>Ⓒ 2022 #VANLIFE</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
