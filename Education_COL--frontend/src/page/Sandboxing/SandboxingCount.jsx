import CountUp from "react-countup";
import useDarkMode from "../../hooks/useDarkMode";

const SandboxingCount = () => {
     const { isDarkMode } = useDarkMode();
     return (
          <div className={`${isDarkMode ? 'darkmode' : 'bg-second'}`}>
               <div className="container text-light">
                    <div className="p-5">
                         <p className="text-center fs-4 mb-3 fw-bold">INDIA&apos;S MOST LOVED CODING COMMUNITY ❤️</p>
                         <div className="row align-items-center w-75 mx-auto">
                              {[{ icon: "bi-people-fill", count: 5000000 }, { icon: "bi-activity", count: 2000000 }, { icon: "bi-link-45deg", count: 100000 }].map((item, index) => (
                                   <div key={index} className="col-md-4 text-center">
                                        <div className="d-flex fs-1 gap-2">
                                             <i className={`bi ${item.icon}`}></i>
                                             <CountUp start={0} end={item.count} duration={5} />
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SandboxingCount;
