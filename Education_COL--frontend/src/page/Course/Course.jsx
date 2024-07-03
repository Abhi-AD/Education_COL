import { Footer, FooterCopyRight, Navbar } from "../../components/import";
import { Join } from "../../container/import";
import useDarkMode from "../../hooks/useDarkMode";
import SwipeToSlide from "./SwipeToSlide";

const Course = () => {
     const { isDarkMode } = useDarkMode();
     return (
          <div className={`${isDarkMode ? "darkmode" : ""}`}>
               <Navbar />
               <SwipeToSlide />
               <Join />
               <Footer />
               <FooterCopyRight />
          </div>
     )
}

export default Course