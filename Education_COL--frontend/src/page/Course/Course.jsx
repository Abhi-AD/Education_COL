import { Join } from "../../container/import";
import useDarkMode from "../../hooks/useDarkMode";
import SwipeToSlide from "./SwipeToSlide";

const Course = () => {
     const { isDarkMode } = useDarkMode();
     return (
          <div className={`${isDarkMode ? "darkmode" : ""}`}>
               <SwipeToSlide />
               <Join />
          </div>
     )
}

export default Course