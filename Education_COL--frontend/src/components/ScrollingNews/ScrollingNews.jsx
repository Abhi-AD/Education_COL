import './ScrollingNews.css'
const ScrollingNews = () => {
     return (
          <div className="top-0 left-0 right-0 shadow">
               <div className="position-absolute bg-second  d-flex align-items-center p-0 px-4 text-light fw-bold" style={{ zIndex: '200', height: '2.5rem' }}>
                    Breaking News
               </div>
               <ul className="d-flex list-unstyled m-0 scrollnews">
                    <li className="text-nowrap position-relative py-2 px-4 scrollnewsli">
                         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ab labore quo laudantium id
                         mollitia? Illum excepturi quae provident, et consequuntur facilis. Unde reiciendis perferendis nam,
                         eaque cumque sed recusandae.
                    </li>
                    <li className="text-nowrap position-relative py-2 px-4 scrollnewsli">
                         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ab labore quo laudantium id
                         mollitia? Illum excepturi quae provident, et consequuntur facilis. Unde reiciendis perferendis nam,
                         eaque cumque sed recusandae.
                    </li>
               </ul>
          </div>
     )
}

export default ScrollingNews