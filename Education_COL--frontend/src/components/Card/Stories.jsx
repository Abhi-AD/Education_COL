import useDarkMode from "../../hooks/useDarkMode";

const Stories = () => {
     const { isDarkMode } = useDarkMode();
     const cardData = [
          '9', '18', '27', '36', '45', '54', '63', '72', '81', '90', '99', '108'
     ];

     return (
          <div className={`${isDarkMode ? "bg-secondary" : " bg-main"}`}>
               <div id="carouselExample" className="carousel slide mx-auto p-4" data-bs-ride="carousel">
                    <div className="carousel-inner">
                         {[...Array(Math.ceil(cardData.length / 4))].map((_, index) => (
                              <div key={index} className={`carousel-item mt-3 mb-3 ${index === 0 ? 'active' : ''}`}>
                                   <div className="row">
                                        {cardData.slice(index * 4, index * 4 + 4).map((item, idx) => (
                                             <div key={index * 4 + idx} className="col-md-3">
                                                  <div className={`card border-0 shadow d-flex justify-content-center align-items-center ${isDarkMode ? "darkmode" : "text-dark"}`} style={{ height: '13rem' }}>
                                                       {item}
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         ))}
                    </div>
                    <button className="carousel-control-prev sliding_button align-self-center" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next sliding_button align-self-center" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Next</span>
                    </button>
               </div>
          </div>
     );
};

export default Stories;
