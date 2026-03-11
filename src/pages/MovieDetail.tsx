import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MovieInfo } from "../components/MovieInfo";
import { getMovieDetail } from "../services/Api";
import type { Movie } from "../types/Movie";

function MovieDetail() {

    const { id } = useParams<{ id: string }>();

    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovie = async () => {
            if (!id) return;

            try {
                setLoading(true);

                const data = await getMovieDetail(Number(id));
                setMovie(data);
            } catch (err) {
                console.error(err);
                setError("Não foi possível carregar os detalhes deste filme.");
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    return (
        <div className='bg-background min-h-screen flex flex-col'>
            <Header />

            <main className="flex-grow">
                {loading ? (
                    <div className="items-center gap-4 flex flex-row justify-center mt-16">
                        <svg className="size-8 animate-spin text-primary dark:text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="font-medium text-gray-700 dark:text-gray-200 text-md">Buscando Dados do Filme...</p>
                    </div>
                ) : error ? (
                    <div className="flex justify-center mt-16">
                       <p className="text-center text-red-500 font-medium text-xl mt-16">{error}</p>
                    </div>
                ) : movie ? (
                    <MovieInfo movie={movie} />
                ) : null}
            </main>

            <Footer />
        </div>
    )
}

export default MovieDetail;