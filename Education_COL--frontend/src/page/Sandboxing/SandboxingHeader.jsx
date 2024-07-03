import { Link } from "react-router-dom"
import Typewriter from "./Typewriter"
import useDarkMode from "../../hooks/useDarkMode";

const SandboxingHeader = () => {
     const { isDarkMode } = useDarkMode();
     return (
          <div className={` ${isDarkMode ? "darkmode2" : "bg-primary"}`}>
               <div className="container">
                    <div className="row p-5">
                         <div className="col-md-5">
                              <p className="fw-bold fs-1 row">
                                   <span>Learn & become the </span>
                                   <span>Top 1% software developer</span>
                              </p>
                              <Typewriter />
                              <div className="">
                                   <Link type="button" className={`text-light fw-bold border-0 btn btn-primary fs-4 bg-second p-3`} to={`/what-we-do`}>
                                        Explore new batches <i className="bi bi-chevron-right" data-aos="fade-left"></i>
                                   </Link>
                              </div>
                         </div>
                         <div className="col-md-1"></div>
                         <div className="col-md-5">
                              <img src="https://img.freepik.com/free-photo/cute-family-playing-summer-field_1157-36897.jpg?w=1060&t=st=1719829570~exp=1719830170~hmac=df54d3852458db3b435bc641f3d85dc63209d81cd97d9898166909af4831ce48" alt="" className="img-fluid" style={{ borderTopLeftRadius: '15rem', borderTopRightRadius: '15rem', height: '25rem' }} />
                         </div>
                         <div className="col-md-1"></div>
                    </div>
               </div>
          </div >
     )
}

export default SandboxingHeader