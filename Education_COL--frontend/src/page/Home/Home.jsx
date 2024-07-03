import { Card, Profile, ScrollingNews, Stories } from "../../components/import"
import { Join } from "../../container/import"
import useDarkMode from "../../hooks/useDarkMode";

const Home = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={`${isDarkMode ? "darkmode" : ""}`}>
      <ScrollingNews />
      <Stories />
      <Profile />
      <Card />
      <Join />
    </div>
  )
}

export default Home