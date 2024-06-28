import { Card, Footer, FooterCopyRight, Navbar, Profile, ScrollingNews, Stories } from "../../components/import"

const Home = () => {
  return (
    <div>
      <Navbar />
      <ScrollingNews />
      <Stories />
      <Profile />
      <Card />
      <Footer />
      <FooterCopyRight />
    </div>
  )
}

export default Home