import './ScrollingNews.css'
const ScrollingNews = () => {
     return (
          <div className="left-0 right-0 shadow overflow-hidden">
               <div className="position-absolute bg-second  d-flex align-items-center py-3 px-4 text-light fw-bold" style={{ zIndex: '200' }}>
                    Breaking News
               </div>
               <ul className=" news_body d-flex list-unstyled m-0 text-nowrap px-3 py-3 text-black text-primary position-relative ">
                    <li className="news">
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus non accusamus ipsam sapiente
                    </li>
                    <li className="news">
                         expedita sed quibusdam odit. Exercitationem voluptates laudantium beatae ducimus quo? Incidunt
                    </li>
                    <li className="news">
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus non accusamus ipsam sapiente
                    </li>
               </ul>
          </div>
     );
};

export default ScrollingNews;
