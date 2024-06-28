import { Link } from 'react-router-dom';
import { LgLogo } from '../../images';
import './Login.css'
const Login = () => {
     return (
          <section className=" gradient-form bg-main">
               <div className="container py-5 h-100 ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                         <div className="col-xl-10">
                              <div className="card border-0 rounded-3 text-black">
                                   <div className="row g-0">
                                        <div className="col-lg-6">
                                             <div className="card-body p-md-5 mx-md-4">
                                                  <div className="text-center">
                                                       <p className="mt-1 mb-0 pb-1">We are The COL Team</p>
                                                       <img
                                                            src={LgLogo}
                                                            alt="logo"
                                                            className='mt-0 w-25 h-25'
                                                       />
                                                  </div>
                                                  <form>
                                                       <p className='text-center fs-5 fw-bold text-danger'>Please login to your account?</p>
                                                       <div className="row">
                                                            <div data-mdb-input-init className="form-outline mb-4">
                                                                 <label className="form-label" htmlFor="form2Example11">
                                                                      Username
                                                                 </label>
                                                                 <input
                                                                      type="email"
                                                                      id="form2Example11"
                                                                      className="form-control"
                                                                      placeholder="Phone number or email address"
                                                                 />
                                                            </div>
                                                            <div data-mdb-input-init className="form-outline mb-4">
                                                                 <label className="form-label" htmlFor="form2Example22">
                                                                      Password
                                                                 </label>
                                                                 <input
                                                                      type="password"
                                                                      id="form2Example22"
                                                                      className="form-control"
                                                                 />
                                                            </div>
                                                       </div>
                                                       <div className="text-center pt-1 mb-5 pb-1">
                                                            <Link
                                                                 to={`/`}
                                                                 data-mdb-button-init
                                                                 data-mdb-ripple-init
                                                                 className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 mx-2"
                                                                 type="button"
                                                            >
                                                                 Log in
                                                            </Link>
                                                            <a className="text-muted text-main" href="#!">
                                                                 Forgot password?
                                                            </a>
                                                       </div>
                                                       <div className="d-flex align-items-center justify-content-center pb-4">
                                                            <p className="mb-0 me-2">Don&apos;t have an account?</p>
                                                            <Link to='/register'
                                                                 type="button"
                                                                 data-mdb-button-init
                                                                 data-mdb-ripple-init
                                                                 className="btn btn-outline-danger"
                                                            >
                                                                 Create new
                                                            </Link>
                                                       </div>
                                                  </form>
                                             </div>
                                        </div>
                                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                             <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                                  <h4 className="mb-4">We are more than just a company</h4>
                                                  <p className="small mb-0">
                                                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                       enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                       nisi ut aliquip ex ea commodo consequat.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Login;
