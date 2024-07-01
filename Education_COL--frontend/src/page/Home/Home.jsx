import { Card, Footer, FooterCopyRight, Navbar, Profile, ScrollingNews, Stories } from "../../components/import"
import { Join } from "../../container/import"

const Home = () => {
  return (
    <div>
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