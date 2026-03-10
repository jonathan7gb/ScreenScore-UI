import { Header } from '../components/Header'
import { Hero } from '../components/HeroSection'
import { FeaturedMovies } from '../components/FeaturedMovies'
import { Footer } from '../components/Footer'

function Home() {

  return (
    <div className='bg-background'>
      <Header />
      <Hero />
      <FeaturedMovies />
      <Footer />
    </div>
  )
}

export default Home