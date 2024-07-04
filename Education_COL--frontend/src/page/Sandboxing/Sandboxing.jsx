import { Link } from "react-router-dom"
import { SelectStudent } from "../../components/import"
import { DreamJob, Join } from "../../container/import"
import SandboxingHeader from "./SandboxingHeader"
import SandboxingCount from "./SandboxingCount"
import useDarkMode from "../../hooks/useDarkMode"

const Sandboxing = () => {
     const { isDarkMode } = useDarkMode();
     return (
          <div className={`${isDarkMode ? "darkmode" : ""}`}>
               <SandboxingHeader />
               <SandboxingCount />
               <div className={`${isDarkMode ? 'darkmode2' : 'bg-light'}`}>
                    <div className="container">
                         <div className="row">
                              <div className="p-5">
                                   <div className="text-center">
                                        <p className="fs-5 fw-bold text-second" >NEW MAY&apos;24 BATCH🔥</p>
                                        <p className="fs-6 fw-bold">SIGMA 3.0 : DSA + DEVELOPMENT + APTITUDE</p>
                                        <p className="fs-6">Start your placement preparation today</p>
                                   </div>
                                   <div className="text-center pb-2 ">
                                        <Link type="button" className="move text-light btn btn-secondary fs-4 bg-second" to={`/what-we-do`}>
                                             Explore <i className="bi bi-chevron-double-right" data-aos="fade-left"></i>
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <DreamJob />
               <hr className="hr mt-5 mb-5 text-dark" />
               <SelectStudent />
               <div className="bg-main">
                    <div className="container">
                         <div className="mt-3 mb-3   p-2 text-center">
                              <p className="fw-bold fs-4 ">ON A MISSION TO TEACH MILLIONS</p>
                              <img src="https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/6332598ffef6dfd662b7b03e2f51dffd.jpeg" alt="" className="w-75 mb-3" />
                         </div>
                    </div>
               </div>
               <Join />
          </div>
     )
}

export default Sandboxing