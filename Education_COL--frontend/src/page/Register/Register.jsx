import { Link } from "react-router-dom";

const Register = () => {
     return (
          <div className="container">
               <div className="row">
                    <div className="col-12 col-md-6 bsb-tpl-bg-platinum">
                         <div className="d-flex flex-column h-100 p-3 p-xl-5">
                              <h3 className="m-0 mb-3">Welcome!</h3>
                              <img className="img-fluid  rounded-4" loading="lazy" src="https://img.freepik.com/free-psd/realistic-pop-art-effect-portrait-photo-mockup_47987-19486.jpg?t=st=1719556362~exp=1719559962~hmac=7dea9fafdc516cb75ca22357b9ba2f9cbbf936cf73f6e9a4c0ec2ae1f679b5d4&w=740" alt="BootstrapBrain Logo" />
                              <p className="mt-3">Not a member yet? <Link to={`/login`} className="link-secondary text-decoration-none">Register now</Link></p>
                         </div>

                    </div>
                    <div className="col-12 col-md-6 bsb-tpl-bg-lotion">
                         <div className="p-3 p-md-4 p-xl-5">
                              <div className="row">
                                   <div className="col-12">
                                        <h2 className="h3">Registration</h2>
                                        <h3 className="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3>
                                   </div>
                              </div>
                              <form action="#!">
                                   <div className="row mt-3 overflow-hidden g-2">
                                        <div className="col-12">
                                             <label htmlFor="firstName" className="form-label">First Name <span className="text-danger">*</span></label>
                                             <input type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name" required />
                                        </div>
                                        <div className="col-12">
                                             <label htmlFor="lastName" className="form-label">Last Name <span className="text-danger">*</span></label>
                                             <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" required />
                                        </div>
                                        <div className="col-12">
                                             <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                             <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required />
                                        </div>
                                        <div className="col-12">
                                             <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                                             <input type="password" className="form-control" name="password" id="password" required />
                                        </div>
                                        <div className="col-12">
                                             <div className="form-check">
                                                  <input className="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required />
                                                  <label className="form-check-label text-secondary" htmlFor="iAgree">
                                                       I agree to the <a href="#!" className="link-danger text-decoration-none">terms and conditions</a>
                                                  </label>
                                             </div>
                                        </div>
                                        <div className="col-6">
                                             <div className="d-grid">
                                                  <button className="btn bsb-btn-xl btn-secondary" type="submit">Sign up</button>
                                             </div>
                                        </div>
                                   </div>
                              </form>
                              <div className="row">
                                   <div className="col-12">
                                        <hr className="border-secondary-subtle" />
                                        <p className="m-0 text-secondary text-end">Already have an account? <Link to={'/login'} className="link-danger text-decoration-none">Sign in</Link></p>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-12">
                                        <p className="mt-2">Or sign in with</p>
                                        <div className="d-flex gap-2 ">
                                             <a href="#!" className="btn bsb-btn-xl btn-outline-secondary d-flex align-items-center">
                                                  <i className="bi bi-google"></i>
                                                  <span className="ms-2 fs-6">Google</span>
                                             </a>

                                             <a href="#!" className="btn bsb-btn-xl btn-outline-secondary d-flex align-items-center">
                                                  <i className="bi bi-facebook"></i>
                                                  <span className="ms-2 fs-6">Facebook</span>
                                             </a>
                                             <a href="#!" className="btn bsb-btn-xl btn-outline-secondary d-flex align-items-center">
                                                  <i className="bi bi-twitter"></i>
                                                  <span className="ms-2 fs-6">Twitter</span>
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Register;
