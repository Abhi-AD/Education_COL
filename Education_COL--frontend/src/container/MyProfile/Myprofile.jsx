import { useState } from 'react';
import './MyProfile.css';

const MyProfile = () => {
     const [profileImage, setProfileImage] = useState(null);

     const handleImageChange = (event) => {
          const file = event.target.files[0];
          if (file) {
               const reader = new FileReader();
               reader.onloadend = () => {
                    setProfileImage(reader.result);
               };
               reader.readAsDataURL(file);
          }
     };

     const removeImage = () => {
          setProfileImage(null);
          document.getElementById('customFile').value = "";
     };

     return (
          <div className="container">
               <div className="row">
                    <div className="col-12">
                         <div className="my-5">
                              <h3>My Profile</h3>
                              <hr />
                         </div>

                         <form className="file-upload mb-5">
                              <div className="row mb-5 gx-5">
                                   <div className="col-xxl-8 mb-5 mb-xxl-0">
                                        <div className="bg-secondary-soft px-4 py-5 rounded">
                                             <div className="row g-3">
                                                  <h4 className="mb-4 mt-0">Contact detail</h4>
                                                  <div className="col-md-6">
                                                       <label className="form-label">First Name *</label>
                                                       <input type="text" className="form-control" placeholder="" aria-label="First name" value="Abhishek" />
                                                  </div>
                                                  <div className="col-md-6">
                                                       <label className="form-label">Last Name *</label>
                                                       <input type="text" className="form-control" placeholder="" aria-label="Last name" value="Dangi" />
                                                  </div>
                                                  <div className="col-md-6">
                                                       <label className="form-label">Phone number *</label>
                                                       <input type="text" className="form-control" placeholder="" aria-label="Phone number" value="9822046156" />
                                                  </div>
                                                  <div className="col-md-6">
                                                       <label className="form-label">Mobile number *</label>
                                                       <input type="text" className="form-control" placeholder="" aria-label="Phone number" value="9848352406" />
                                                  </div>
                                                  <div className="col-md-6">
                                                       <label htmlFor="inputEmail4" className="form-label">Email *</label>
                                                       <input type="email" className="form-control" id="inputEmail4" value="dangiabhi@gmail.com" />
                                                  </div>
                                                  <div className="col-md-6">
                                                       <label className="form-label">Skype *</label>
                                                       <input type="text" className="form-control" placeholder="" aria-label="Phone number" value="Scaralet D" />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="col-xxl-4">
                                        <div className="bg-secondary-soft px-4 py-5 rounded">
                                             <div className="row g-3">
                                                  <h4 className="mb-4 mt-0">Upload your profile photo</h4>
                                                  <div className="text-center">
                                                       <div className="square position-relative display-2 mb-3">
                                                            {profileImage ? (
                                                                 <img src={profileImage} alt="Profile Preview" className="img-fluid rounded-circle" />
                                                            ) : (
                                                                 <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                                                            )}
                                                       </div>
                                                       <input type="file" id="customFile" name="file" hidden onChange={handleImageChange} />
                                                       <label className="btn btn-success-soft btn-block" htmlFor="customFile">Upload</label>
                                                       <button type="button" className="btn btn-danger-soft" onClick={removeImage}>Remove</button>
                                                       <p className="text-muted mt-3 mb-0"><span className="me-1">Note:</span>Minimum size 300px x 300px</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="row mb-5 gx-5">
                                   <div className="col-xxl-6 mb-5 mb-xxl-0">
                                        <div className="bg-secondary-soft px-4 py-5 rounded">
                                             <div className="row g-3">
                                                  <h4 className="mb-4 mt-0">Social media detail</h4>
                                                  <div className="col-md-6">
                                                       <label className="form-label"><i className="fab fa-fw fa-facebook me-2 text-facebook"></i>Facebook *</label>
                                                       <input type="text" className="form-control" placeholder="" aria-label="Facebook" value="http://www.facebook.com" />
                                                  </div>
                                                  <div className="col-md-6">
                                                       <label className="form-label"><i className="fab fa-fw fa-twitter text-twitter me-2"></i>Twitter *</label>
                                                       <input type="text" className="form-control" placeholder="" aria-label="Twitter" value="http://www.twitter.com" />
                                                  </div>
                                                  <div className="col-md-6">
                                                       <label className="form-label"><i className="fab fa-fw fa-linkedin-in text-linkedin me-2"></i>Linkedin *</label>
                                                       <input type="text" className="form-control" placeholder="" aria-label="Linkedin" value="http://www.linkedin.com" />
                                                  </div>
                                                  <div className="col-md-6">
                                                       <label className="form-label"><i className="fab fa-fw fa-instagram text-instagram me-2"></i>Instagram *</label>
                                                       <input type="text" className="form-control" placeholder="" aria-label="Instagram" value="http://www.instagram.com" />
                                                  </div>
                                                  <div className="col-md-6">
                                                       <label className="form-label"><i className="fas fa-fw fa-basketball-ball text-dribbble me-2"></i>Dribbble *</label>
                                                       <input type="text" className="form-control" placeholder="" aria-label="Dribbble" value="http://www.dribbble.com" />
                                                  </div>
                                                  <div className="col-md-6">
                                                       <label className="form-label"><i className="fab fa-fw fa-pinterest text-pinterest"></i>Pinterest *</label>
                                                       <input type="text" className="form-control" placeholder="" aria-label="Pinterest" value="http://www.pinterest.com" />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="col-xxl-6">
                                        <div className="bg-secondary-soft px-4 py-5 rounded">
                                             <div className="row g-3">
                                                  <h4 className="my-4">Change Password</h4>
                                                  <div className="col-md-6">
                                                       <label htmlFor="exampleInputPassword1" className="form-label">Old password *</label>
                                                       <input type="password" className="form-control" id="exampleInputPassword1" />
                                                  </div>
                                                  <div className="col-md-6">
                                                       <label htmlFor="exampleInputPassword2" className="form-label">New password *</label>
                                                       <input type="password" className="form-control" id="exampleInputPassword2" />
                                                  </div>
                                                  <div className="col-md-12">
                                                       <label htmlFor="exampleInputPassword3" className="form-label">Confirm Password *</label>
                                                       <input type="password" className="form-control" id="exampleInputPassword3" />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="gap-3 d-md-flex justify-content-md-end text-center">
                                   <button type="button" className="btn btn-danger btn-lg">Delete profile</button>
                                   <button type="button" className="btn btn-primary btn-lg">Update profile</button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default MyProfile;
