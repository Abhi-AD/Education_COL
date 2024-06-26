import { Link } from "react-router-dom";

const Card = () => {
     const cardData = [
          '9', '18', '27', '36', '45', '54', '63', '72', '81', '90', '99', '108'
     ];

     return (
          <div id="card" className="carousel slide mx-auto p-4 bg-gray" data-bs-ride="carousel">
               <div className="carousel-inner">
                    {[...Array(Math.ceil(cardData.length / 4))].map((_, index) => (
                         <div key={index} className={`carousel-item mt-3 mb-3${index === 0 ? ' active' : ''}`}>
                              <div className="row">
                                   {cardData.slice(index * 4, index * 4 + 4).map((item, idx) => (
                                        <div key={index * 4 + idx} className="col-md-3">
                                             <div className="card  shadow bg-main border-0 mt-4 shadow d-flex justify-content-center align-items-center">
                                                  <h5 className="card-title fs-4 mt-5 mb-5">Card title</h5>
                                                  <img className="img-fluid" src="https://img.freepik.com/free-photo/sunset-silhouettes-trees-mountains-generative-ai_169016-29371.jpg?t=st=1719385265~exp=1719388865~hmac=5963721223ab15ca0d61f602b9b3321f18a0511f302f36f8738b09563281dc84&w=1380" alt="card" />
                                                  <div className="card-body">
                                                       <p>{item}</p>
                                                       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                                       <Link to={`/`} className="btn bg-secondary  text-light mb-2">Go somewhere</Link>
                                                  </div>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    ))}
               </div>
               <button className="carousel-control-prev sliding_button align-self-center" type="button" data-bs-target="#card" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
               </button>
               <button className="carousel-control-next sliding_button align-self-center" type="button" data-bs-target="#card" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
               </button>
          </div>
     );
};

export default Card;
