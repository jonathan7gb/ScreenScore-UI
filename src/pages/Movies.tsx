import {Header} from "../components/Header";
import {AllMovies} from "../components/AllMovies";
import {Footer} from "../components/Footer";

function Movies() {
  return (
     <div className='bg-background min-h-screen'>
      
      <Header />
      <AllMovies />
      <Footer />

    </div>
  );
}

export default Movies;