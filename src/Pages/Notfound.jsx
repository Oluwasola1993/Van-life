import { useNavigate } from "react-router-dom";
import err from "../assets/Images/404err.svg";

const Notfound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container-fluid" id="imag">
        <div className="row text-center" id="notfound">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <img src={err} style={{ width: "35.2%" }} alt="" />
            <h1>Sorry, the page you were looking for was not found.</h1>
            <button
              className="btn btn w-50 bg-dark text-white mb-3"
              onClick={goHome}
            >
              Return to home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notfound;
