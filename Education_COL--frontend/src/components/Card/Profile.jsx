const Profile = () => {
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
          <div id="profile" className="carousel slide bg-second" data-bs-ride="carousel">
               <div className="carousel-inner">
                    {[...Array(Math.ceil(imageData.length / 6))].map((_, index) => (
                         <div key={index} className={`carousel-item${index === 0 ? ' active' : ''}`}>
                              <div className="row">
                                   {imageData.slice(index * 6, index * 6 + 6).map((imageUrl, idx) => (
                                        <div key={index * 6 + idx} className="col-md-2 mb-4 mt-4">
                                             <div className="card border-0 shadow d-flex justify-content-center align-items-center profile">
                                                  <img src={imageUrl} alt={`Image ${index * 6 + idx + 1}`} className="profile shadow border-0" />
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    ))}
               </div>
               <button className="carousel-control-prev sliding_button align-self-center" type="button" data-bs-target="#profile" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
               </button>
               <button className="carousel-control-next sliding_button align-self-center" type="button" data-bs-target="#profile" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
               </button>
          </div>
     );
};

export default Profile;
