import useDarkMode from '../../hooks/useDarkMode';
import './Contact.css';

const Contact = () => {
     const { isDarkMode } = useDarkMode();
     return (
          <div className={`${isDarkMode ? "bg-dark" : "bg-primary"}`}>
               <div className="container">
                    <div className="row align-items-center ">
                         <div className="col-md-6 mt-5">
                              <div className="shadow p-5 card border-0">
                                   <p className="fs-2 fw-bold">Send us a Message</p>
                                   <p className="fs-6 fw-normal text-primary">Fields marked with * are mandatory</p>
                                   <form className="mt-5">
                                        <div className="form-group mb-3">
                                             <label className="fs-5" htmlFor="fullName">Full Name</label>
                                             <input type="text" className="form-control bg-white mt-2 p-3" id="fullName" placeholder="Enter your full name" />
                                        </div>
                                        <div className="form-group mb-3">
                                             <label className="fs-5" htmlFor="phoneNumber">Phone Number</label>
                                             <input type="tel" className="form-control bg-white mt-2 p-3" id="phoneNumber" placeholder="Enter your phone number" />
                                        </div>
                                        <div className="form-group mb-3">
                                             <label className="fs-5" htmlFor="email">Email</label>
                                             <input type="email" className="form-control bg-white mt-2 p-3" id="email" aria-describedby="emailHelp" placeholder="Enter your email" />
                                        </div>
                                        <div className="form-group mb-3">
                                             <label className="fs-5" htmlFor="subject">Subject</label>
                                             <input type="text" className="form-control bg-white mt-2 p-3" id="subject" placeholder="Enter the subject" />
                                        </div>
                                        <div className="form-group mb-3">
                                             <label className="fs-5" htmlFor="message">Message</label>
                                             <textarea className="form-control bg-white mt-2 p-3" id="message" rows="3" placeholder="Enter your message"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary border-0 bg-primary text-light">Submit</button>
                                   </form>
                              </div>
                         </div>
                         <div className="col-md-6 card border-0 mt-5  ">
                              <div className="row justify-content-between">
                                   <div className="col-md-4">
                                        <p className='fw-semibold fs-4'>Our Location</p>
                                   </div>
                                   <div className="col-md-4">
                                        <p className='fs-5 text-uppercase text-main'>Get direction <i className="bi bi-arrow-right"></i></p>
                                   </div>
                              </div>
                              <iframe
                                   width="100%"
                                   height="500"
                                   frameBorder="0"
                                   style={{ border: 0, borderRadius: '10px' }}
                                   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.46923387120768!2d85.32107667175656!3d27.72266675325045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1720005578231!5m2!1sen!2snp"
                                   allowFullScreen
                                   title="Map"
                                   loading="lazy"
                                   referrerPolicy="no-referrer-when-downgrade"
                              />





                              <div className="col-md-8 mt-5">
                                   <div className='d-flex'>
                                        <div className="contact-border border-0 rounded-circle d-flex justify-content-center align-items-center" style={{ marginRight: '13px' }}>
                                             <i className="bi bi-geo-alt-fill fs-6 text-light"></i>
                                        </div>
                                        <p className=''>P84G+P57, Kathmandu, Bagmati, Nepal</p>
                                   </div>

                              </div>
                              <div className="col-md-8">
                                   <div className='d-flex'>
                                        <div className="contact-border border-0 rounded-circle d-flex justify-content-center align-items-center" style={{ marginRight: '13px' }}>
                                             <i className="bi bi-telephone-fill fs-6 text-light"></i>
                                        </div>
                                        <p className=''>015912344</p>
                                   </div>
                              </div>
                              <div className="col-md-8">
                                   <div className='d-flex'>
                                        <div className="contact-border border-0 rounded-circle d-flex justify-content-center align-items-center" style={{ marginRight: '13px' }}>
                                             <i className="bi bi-envelope-fill fs-6 text-light"></i>
                                        </div>
                                        <p className=''>collaborate@col.com</p>
                                   </div>

                              </div>
                              <p className='mt-3 fw-semibold fs-5'>Connect With Us</p>
                              <div className="row mb-5" style={{ marginLeft: '1rem' }}>
                                   <div className="contact-border border-0 rounded-circle d-flex justify-content-center align-items-center" style={{ marginRight: '13px' }}>
                                        <i className="bi bi-facebook fs-6 text-light"></i>
                                   </div>
                                   <div className="contact-border border-0 rounded-circle d-flex justify-content-center align-items-center" style={{ marginRight: '13px' }}>
                                        <i className="bi bi-instagram fs-6 text-light"></i>
                                   </div>
                                   <div className="contact-border border-0 rounded-circle d-flex justify-content-center align-items-center" style={{ marginRight: '13px' }}>
                                        <i className="bi bi-twitter fs-6 text-light"></i>
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     );
}

export default Contact;