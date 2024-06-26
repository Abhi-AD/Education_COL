import { Card, Footer, Profile, ScrollingNews, Stories } from "../../components/import"

const Home = () => {
  return (
    <div>
      <ScrollingNews />
      <Stories />
      <Profile />
      <Card />
      <Footer />
    </div>
  )
}

export default Home