import PropTypes from "prop-types";
import Slider from "react-slick";
import useDarkMode from "../../hooks/useDarkMode";

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

function Stories() {
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
     const { isDarkMode } = useDarkMode();
     const cardData = [
          '9', '18', '27', '36', '45', '54', '63', '72', '81', '90', '99', '108'
     ];
     return (
          <div className={` slider-container p-2  ${isDarkMode ? 'bg-second' : 'bg-danger'}`}>
               <Slider {...settings} className="d-flex">
                    {cardData.map((item, index) => (
                         <div key={index} className="card text-center">
                              <div className="card-body d-flex align-items-center justify-content-center" style={{ height: '15rem' }}>
                                   <h3>{item}</h3>
                              </div>
                         </div>
                    ))}
               </Slider>
          </div>
     );
}

export default Stories;
