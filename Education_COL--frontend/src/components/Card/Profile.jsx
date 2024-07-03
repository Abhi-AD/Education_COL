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

function Profile() {
     const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 8,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
               {
                    breakpoint: 1440,
                    settings: {
                         slidesToShow: 6,
                         slidesToScroll: 1,
                    }
               },
               {
                    breakpoint: 1000,
                    settings: {
                         slidesToShow: 4,
                         slidesToScroll: 1,
                    }
               },
               {
                    breakpoint: 768,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1,
                    }
               }
          ]
     };
     const { isDarkMode } = useDarkMode();
     const imageData = [
          'https://img.freepik.com/free-photo/portrait-male-tourist-visiting-great-wall-china_23-2151261922.jpg?t=st=1719559210~exp=1719562810~hmac=7eb5b0e0a3944e5a1048ea45d19436a3621a7530ab8905ccd369ae9f9fe26fb8&w=1060',
          'https://img.freepik.com/free-photo/portrait-male-tourist-visiting-great-wall-china_23-2151261922.jpg?t=st=1719559210~exp=1719562810~hmac=7eb5b0e0a3944e5a1048ea45d19436a3621a7530ab8905ccd369ae9f9fe26fb8&w=1060',
          'https://img.freepik.com/free-photo/portrait-male-tourist-visiting-great-wall-china_23-2151261922.jpg?t=st=1719559210~exp=1719562810~hmac=7eb5b0e0a3944e5a1048ea45d19436a3621a7530ab8905ccd369ae9f9fe26fb8&w=1060',
          'https://img.freepik.com/free-photo/portrait-male-tourist-visiting-great-wall-china_23-2151261922.jpg?t=st=1719559210~exp=1719562810~hmac=7eb5b0e0a3944e5a1048ea45d19436a3621a7530ab8905ccd369ae9f9fe26fb8&w=1060',
          'https://img.freepik.com/free-photo/portrait-male-tourist-visiting-great-wall-china_23-2151261922.jpg?t=st=1719559210~exp=1719562810~hmac=7eb5b0e0a3944e5a1048ea45d19436a3621a7530ab8905ccd369ae9f9fe26fb8&w=1060',
          'https://img.freepik.com/free-photo/portrait-male-tourist-visiting-great-wall-china_23-2151261922.jpg?t=st=1719559210~exp=1719562810~hmac=7eb5b0e0a3944e5a1048ea45d19436a3621a7530ab8905ccd369ae9f9fe26fb8&w=1060',
          'https://img.freepik.com/free-photo/portrait-male-tourist-visiting-great-wall-china_23-2151261922.jpg?t=st=1719559210~exp=1719562810~hmac=7eb5b0e0a3944e5a1048ea45d19436a3621a7530ab8905ccd369ae9f9fe26fb8&w=1060',
          'https://img.freepik.com/free-photo/portrait-male-tourist-visiting-great-wall-china_23-2151261922.jpg?t=st=1719559210~exp=1719562810~hmac=7eb5b0e0a3944e5a1048ea45d19436a3621a7530ab8905ccd369ae9f9fe26fb8&w=1060',
          'https://img.freepik.com/free-photo/portrait-male-tourist-visiting-great-wall-china_23-2151261922.jpg?t=st=1719559210~exp=1719562810~hmac=7eb5b0e0a3944e5a1048ea45d19436a3621a7530ab8905ccd369ae9f9fe26fb8&w=1060',
          'https://img.freepik.com/free-photo/portrait-male-tourist-visiting-great-wall-china_23-2151261922.jpg?t=st=1719559210~exp=1719562810~hmac=7eb5b0e0a3944e5a1048ea45d19436a3621a7530ab8905ccd369ae9f9fe26fb8&w=1060',
          'https://img.freepik.com/free-photo/portrait-male-tourist-visiting-great-wall-china_23-2151261922.jpg?t=st=1719559210~exp=1719562810~hmac=7eb5b0e0a3944e5a1048ea45d19436a3621a7530ab8905ccd369ae9f9fe26fb8&w=1060',
          'https://img.freepik.com/free-photo/portrait-male-tourist-visiting-great-wall-china_23-2151261922.jpg?t=st=1719559210~exp=1719562810~hmac=7eb5b0e0a3944e5a1048ea45d19436a3621a7530ab8905ccd369ae9f9fe26fb8&w=1060',
     ];

     return (
          <div className={` slider-container p-2  ${isDarkMode ? 'bg-second' : 'bg-primary'}`}>
               <Slider {...settings} className="d-flex">
                    {imageData.map((imageUrl, index) => (
                         <div key={index} className="text-center">
                              <div className="card-body d-flex align-items-center justify-content-center" style={{ height: '15rem' }}>
                                   <img src={imageUrl} alt={`Image ${index + 1}`} className="profile shadow border-0" />
                              </div>
                         </div>
                    ))}
               </Slider>
          </div>
     );
}

export default Profile;
