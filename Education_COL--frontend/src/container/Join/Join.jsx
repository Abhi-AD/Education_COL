import { ReactTyped } from "react-typed";
import useDarkMode from "../../hooks/useDarkMode";

const Join = () => {
     const { isDarkMode } = useDarkMode();
     const strings = ["#instagram", "#youtube", "#twitter"];
     return (
          <div className={`${isDarkMode ? "bg-secondary" : "bg-main"}`}>
               <div className="container text-center mt-5">
                    <div className="title">
                         <p className="fs-4 text-uppercase fw-bold">Join us on</p>
                         <p>
                              <ReactTyped
                                   strings={strings}
                                   typeSpeed={100}
                                   loop
                                   backSpeed={20}
                                   showCursor={true}
                                   className="typed-text"
                              />
                         </p>
                    </div>
                    <div className="container mb-5">
                         <div className="row">
                              <div className="col-md-4">
                                   <i className="bi bi-youtube text-danger fs-1 mb-0"></i>
                                   <p className="mb-0 text-capitalize">Youtube</p>
                                   <p className="fw-bold">Col Pvt Ltd</p>
                              </div>
                              <div className="col-md-4">
                                   <i className="bi bi-instagram text-danger fs-1 mb-0"></i>
                                   <p className="mb-0 text-capitalize">instagram</p>
                                   <p className="fw-bold">Col Pvt Ltd</p>
                              </div>
                              <div className="col-md-4">
                                   <i className="bi bi-twitter text-primary fs-1 mb-0"></i>
                                   <p className="mb-0 text-capitalize">twitter</p>
                                   <p className="fw-bold">Col Pvt Ltd</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}


export default Join;
