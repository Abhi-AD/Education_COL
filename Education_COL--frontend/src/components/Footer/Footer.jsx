import { Link } from "react-router-dom";

const Footer = () => {
     return (
          <div className="bg-dark">
               <div className="bg-main d-flex align-items-center p-3">
                    <div className="container">
                         <div className="d-flex justify-content-between align-items-center">
                              <p className="text-white fs-5 mb-0 fw-bold">Photo</p>
                              <p className="text-white fs-6 mb-0 fw-bold">See all</p>
                         </div>
                         <div className="row p-2 g-3">
                              <div className="col-md-6">
                                   <div className="row g-2">
                                        <div className="col-3">
                                             <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_240/lsci/db/PICTURES/CMS/383800/383816.jpg" className="img-fluid card mb-2 border-0" alt="Image 1" />
                                             <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_240/lsci/db/PICTURES/CMS/383800/383830.jpg" className="img-fluid card mt-2 border-0" alt="Image 2" />
                                        </div>
                                        <div className="col-9">
                                             <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480/lsci/db/PICTURES/CMS/383800/383829.6.jpg" className="img-fluid card w-100 h-100 border-0" alt="Image 3" />
                                        </div>
                                   </div>

                              </div>
                              <div className="col-md-6">
                                   <div className="row g-2">
                                        <div className="col-3">
                                             <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_240/lsci/db/PICTURES/CMS/383800/383828.jpg" className="img-fluid card mb-1 border-0" alt="Image 1" />
                                             <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_240/lsci/db/PICTURES/CMS/383800/383827.jpg" className="img-fluid card border-0" alt="Image 2" />
                                        </div>
                                        <div className="col-9">
                                             <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480/lsci/db/PICTURES/CMS/383800/383821.6.jpg" className="img-fluid card w-100 h-100 border-0" alt="Image 3" />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>





               {/*  */}
               <div className="p-5" >
                    <p className="text-light mb-1 fs-4 text-center "><i className="bi bi-quote"></i></p>
                    <p className="text-light mb-1 fs-4 text-center">That there&apos;s no more Australian cricket team in this competition</p>
                    <p className="text-second fs-16 text-center"><span className="fw-bold text-light">Rohit Sharma</span> on his biggest takeaway from India&apos;s win over Australia in the T20 World Cup</p>
                    <div className="d-flex justify-content-center">
                         <Link className="text-second text-capitalize fs-12 text-center text-decoration-none">share</Link>
                         <p className="text-second mb-1 fs-12 text-center "><i className="bi bi-dot"></i></p>
                         <Link className="text-second fs-12 text-center text-decoration-none">See all</Link>
                    </div>



               </div>
               <hr className="hr mb-5 text-light" />
               {/* menu */}
               <div className="container">
                    <div className="row text-secondary">
                         <div className="col-md-6">
                              <section className="key-series">
                                   <div className="row mt-4">
                                        <p className="text-light fs-6">Key Series</p>
                                        <div className="col-md">
                                             <ul className="series-list list-unstyled">
                                                  <li className="mb-0"><p className="text-secondary fs-14">ICC Men&apos;s T20 World Cup</p></li>
                                                  <li className="mb-0"><p className="text-secondary fs-14">Vitality Blast 2024</p></li>
                                                  <li className="mb-0"><p className="text-secondary fs-14">India vs South Africa [W]</p></li>
                                                  <li className="mb-0"><p className="text-secondary fs-14">Sri Lanka vs West Indies [W]</p></li>
                                                  <li className="mb-0"><p className="text-secondary fs-14">England vs New Zealand [W]</p></li>
                                             </ul>
                                        </div>
                                        <div className="col-md">
                                             <ul className="series-list list-unstyled">
                                                  <li className="mb-0"><p className="text-secondary fs-14">CPL 2024</p></li>
                                                  <li className="mb-0"><p className="text-secondary fs-14">Major League Cricket</p></li>
                                                  <li className="mb-0"><p className="text-secondary fs-14">County Championship Div1</p></li>
                                                  <li className="mb-0"><p className="text-secondary fs-14">County Championship Div2</p></li>
                                                  <li className="mb-0"><p className="text-secondary fs-14">Cricket World Cup League 2</p></li>
                                             </ul>
                                        </div>
                                        <div className="col-md">
                                             <ul className="series-list list-unstyled">
                                                  <li className="mb-0"><p className="text-secondary fs-14">Women&apos;s Championship</p></li>
                                                  <li className="mb-0"><p className="text-secondary fs-14">World Test Championship</p></li>
                                                  <li className="mb-0"><p className="text-secondary fs-14">ICC Women&apos;s T20 World Cup</p></li>
                                             </ul>
                                        </div>
                                   </div>
                              </section>


                         </div>
                         <div className="col-md-2">
                              <section className="key-series">
                                   <div className="col-md mt-4">
                                        <p className="text-light fs-6">Quick Links</p>
                                        <ul className="series-list list-unstyled">
                                             <li className="mb-0"><p className="text-secondary fs-14">Beyond Boundaries</p></li>
                                             <li className="mb-0"><p className="text-secondary fs-14">Mute the World</p></li>
                                             <li className="mb-0"><p className="text-secondary fs-14">T20 Rendezvous</p></li>
                                             <li className="mb-0"><p className="text-secondary fs-14">All About the Grip</p></li>
                                             <li className="mb-0"><p className="text-secondary fs-14">TimeOut</p></li>
                                             <li className="mb-0"><p className="text-secondary fs-14">TimeOut Hindi</p></li>
                                             <li className="mb-0"><p className="text-secondary fs-14">Safe Hands</p></li>
                                             <li className="mb-0"><p className="text-secondary fs-14">Hindi Videos</p></li>
                                             <li className="mb-0"><p className="text-secondary fs-14">ICC Rankings</p></li>
                                        </ul>
                                   </div>
                              </section>


                         </div>
                         <div className="col-md-2">
                              <section className="key-series">
                                   <div className="col-md mt-4">
                                        <p className="text-light fs-6">Follow ESPNcricinfo</p>
                                        <ul className="series-list list-unstyled">
                                             <li className="mb-0"><p className="text-secondary fs-14">Instagram</p></li>
                                             <li className="mb-0"><p className="text-secondary fs-14">WhatsApp</p></li>
                                             <li className="mb-0"><p className="text-secondary fs-14">Twitter</p></li>
                                             <li className="mb-0"><p className="text-secondary fs-14">Facebook</p></li>
                                             <li className="mb-0"><p className="text-secondary fs-14">YouTube</p></li>
                                        </ul>
                                   </div>
                              </section>


                         </div>
                         <div className="col-md-2">
                              <section className="key-series">
                                   <div className="col-md mt-4">
                                        <p className="text-light fs-6">ESPNcricinfo Apps</p>
                                        <ul className="series-list list-unstyled">
                                             <li className="mb-0"><p className="text-secondary fs-14">Android App</p></li>
                                             <li className="mb-0"><p className="text-secondary fs-14">iOS App</p></li>
                                        </ul>
                                        <p className="text-light fs-6">ESPN Sites</p>
                                        <ul className="series-list list-unstyled">
                                             <li className="mb-0"><p className="text-secondary fs-14">The Cricket Monthly</p></li>
                                             <li className="mb-0"><p className="text-secondary fs-14">ESPN</p></li>
                                        </ul>
                                   </div>
                              </section>


                         </div>
                    </div>
               </div>
          </div >
     )
}

export default Footer