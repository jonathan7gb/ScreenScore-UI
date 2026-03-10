import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import {AllMovies} from "../components/AllMovies";

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