import { Join } from '../../container/import';
import './Services.css';

const serviceData = [
     {
          icon: "bi bi-laptop",
          title: "Unique design",
          description: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
     },
     {
          icon: "bi bi-person",
          title: "Different Layout",
          description: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
     },
     {
          icon: "bi bi-chat",
          title: "Make it Simple",
          description: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
     },
     {
          icon: "bi bi-image",
          title: "Responsiveness",
          description: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
     },
     {
          icon: "bi bi-check-square",
          title: "Testing for Perfection",
          description: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
     },
     {
          icon: "bi bi-gear",
          title: "Advanced Options",
          description: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
     }
];

const Services = () => {
     return (
          <div>
               <section className="services-section service" id="services" style={{ padding: '100px 0' }}>
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-12">
                                   <div className='' style={{ paddingBottom: '45px' }}>
                                        <h2 className='' style={{ fontWeight: '700', color: '#20247b', fontSize: '45px', margin: '0 0 15px', borderLeft: '5px solid #fc5356', paddingLeft: '15px' }}>What I Do</h2>
                                        <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites</p>
                                   </div>
                              </div>
                         </div>
                         <div className="row">
                              {serviceData.map((service, index) => (
                                   <div className="col-sm-6 col-lg-4" key={index}>
                                        <div className="services">
                                             <div className="icon bg-primary text-light text-center rounded-circle fs-3">
                                                  <i className={service.icon}></i>
                                             </div>
                                             <div className="feature-content">
                                                  <h5 className='text-primary fw-bold'>{service.title}</h5>
                                                  <p className='m-0 text-dark'>{service.description}</p>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>
               <Join />
          </div>
     );
};

export default Services;
