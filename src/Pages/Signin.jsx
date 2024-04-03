import React from "react";

const Signin = () => {
  return (
    <>
      <div className="container-fluid" id="container">
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h1 id="heading">Sign in to your account</h1>
            <div>
              <input
                className="form-control form-control-sm w-50 mx-auto"
                placeholder="Email address"
              />
              <input
                id="form"
                className="form-control form-control w-50 mx-auto"
                placeholder="Password"
              />
              <button
                className="btn btn w-50 p-2"
                id="btn2"
                style={{ background: "#ff8c38", color: "white" }}
              >
                Sign in
              </button>
              <p id="p">
                Don’t have an account?{" "}
                <span>
                  <a
                    href=""
                    style={{ color: "#ff8c38", textDecoration: "none" }}
                  >
                    Create one now
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
