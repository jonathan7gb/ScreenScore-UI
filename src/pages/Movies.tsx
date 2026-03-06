import Footer from "../components/Footer";
import Header from "../components/Header";
import FeaturedMovies from "../components/FeaturedMovies";
import AllMovies from "../components/AllMovies";

function Movies() {
  return (
     <body className='bg-background'>
      
      <Header />
      {/* <FeaturedMovies /> */}
      <AllMovies />
      <Footer />
    </body>
  );
}

export default Movies;