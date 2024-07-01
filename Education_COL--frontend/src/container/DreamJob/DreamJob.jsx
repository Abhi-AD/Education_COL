import { Link } from "react-router-dom";

const DreamJob = () => {
     const items = [
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/ec5be16b046b62a2a860b67f9dc55b86.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/ee17a1d06126f8bfc5444ad666e8ba21.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/9e4198383730a6e7036b2c7cf50554d0.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/5a5a608278ba2b74aff5fb081f7df81c.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/02fb63567e1b107d549d5d15e922424b.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/4d6e24add7d7c5d618aeef1795dba038.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/622a116daf32436d38271cd6c49ee3af.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/cfe53c7856b98c0bf010ebcfc8cbfa29.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/91cb8fef8fe424a1ae2406aa58a380d8.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/689bf09a2c1040423fba7a8db0248211.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/b5070669b92945ffb20fadc3ea552d16.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/0f683ab474c5a018baa3bdd53330c9ae.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/e24ce5f542c45a73c05172d9c4f38e2e.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/f271b7c4e1a5c41745580804a2b2b458.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/2c6580da38af7ceff65addfda59f06b9.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/1da11f6f0c244abc5abffc0556730e91.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/f226d6ddcb4f38c2c23f02008bbdf737.png" },
          { imgSrc: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/9a47085894be9870158c9ad4e23c1a24.png" }
     ];

     return (
          <div className="bg-main">
               <div className="container">
                    <div className="p-2">
                         <p className="text-center fw-bold fs-4">Thousands of students achieved their <span className="text-primary fs-3">dream job at</span></p>
                         <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-3">
                              {items.map((item, index) => (
                                   <div key={index} className="col">
                                        <img src={item.imgSrc} alt="" style={{ height: '65px' }} className="mt-4 d-block mx-auto" />
                                   </div>
                              ))}
                         </div>
                         <div className="text-center mb-5 mt-5">
                              <Link type="button" className="text-secondary fs-5 text-decoration-none" to={`/sandboxing`}>
                                   <i className="bi bi-plus-lg" data-aos="fade-left"></i>See More
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default DreamJob;
