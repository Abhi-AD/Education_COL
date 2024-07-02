import { Card, Footer, FooterCopyRight, Navbar, Profile, ScrollingNews, Stories } from "../../components/import"
import { Join } from "../../container/import"
import useDarkMode from "../../hooks/useDarkMode";

const Home = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={`${isDarkMode ? "darkmode" : ""}`}>
      <Navbar />
      <ScrollingNews />
      <Stories />
      <Profile />
      <Card />
      <Join />
      <Footer />
      <FooterCopyRight />
    </div>
  )
}

export default Home