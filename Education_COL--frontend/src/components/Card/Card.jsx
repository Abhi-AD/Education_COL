import { Link } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";
import Slider from "react-slick";
import PropTypes from "prop-types";

function SampleNextArrow(props) {
     const { style, onClick } = props;
     return (
          <div
               className={`p-4`}
               style={{ ...style, position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', borderRadius: '50%', zIndex: '1' }}
               onClick={onClick}
          >
               <button className="carousel-control-next sliding_button align-self-center" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
               </button>
          </div>
     );
}

SampleNextArrow.propTypes = {
     className: PropTypes.string,
     style: PropTypes.object,
     onClick: PropTypes.func,
};

function SamplePrevArrow(props) {
     const { style, onClick } = props;
     return (
          <div
               className={` p-4`}
               style={{ ...style, position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', borderRadius: '50%', zIndex: '1' }}
               onClick={onClick}
          >
               <button className="carousel-control-prev sliding_button align-self-center" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
               </button>
          </div>
     );
}

SamplePrevArrow.propTypes = {
     className: PropTypes.string,
     style: PropTypes.object,
     onClick: PropTypes.func,
};

const Card = () => {
     const { isDarkMode } = useDarkMode();
     const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
               {
                    breakpoint: 1440,
                    settings: {
                         slidesToShow: 3,
                         slidesToScroll: 1,
                    }
               },
               {
                    breakpoint: 1000,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1,
                    }
               },
               {
                    breakpoint: 768,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                    }
               }
          ]
     };

     const cardData = [
          '9', '18', '27', '36', '45', '54', '63', '72', '81', '90', '99', '108'
     ];

     return (
          <div id="card" className={`carousel slide mx-auto p-4 ${isDarkMode ? "darkmode" : "bg-main"}`} data-bs-ride="carousel">
               <div className="carousel-inner">
                    <Slider {...settings} className="d-flex">
                         {cardData.map((item, index) => (
                              <div key={index} className="p-2" style={{ gap: "10px" }}>
                                   <div className={`card shadow border-0 mt-4 shadow d-flex justify-content-center align-items-center ${isDarkMode ? "text-light bg-secondary" : "bg-main text-dark"}`}>
                                        <h5 className="card-title fs-4 mt-5 mb-5">Card title</h5>
                                        <img className="img-fluid" src="https://img.freepik.com/free-photo/sunset-silhouettes-trees-mountains-generative-ai_169016-29371.jpg?t=st=1719385265~exp=1719388865~hmac=5963721223ab15ca0d61f602b9b3321f18a0511f302f36f8738b09563281dc84&w=1380" alt="card" />
                                        <div className="card-body">
                                             <p>{item}</p>
                                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                             <Link to={`/`} className="btn border-0 btn-light bg-secondary text-light mb-2">Go somewhere</Link>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </Slider>
               </div>
          </div>
     );
};

export default Card;
