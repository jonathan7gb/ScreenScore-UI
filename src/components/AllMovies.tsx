import { MovieCard } from "./MovieCard"
import { useState, useEffect } from 'react';
import type { Movie } from '../types/Movie';
import { getMovies } from "../services/Api";
import { SearchMovies } from "./SearchMovies";

export function AllMovies() {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('minions')

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setMovies([]);
            return;
        }

        const delaySearch = setTimeout(async () => {
            try {
                setLoading(true);
                setError(null); 
                const data = await getMovies(searchTerm);
                setMovies(data);
            } catch (err) {
                console.error(err);
                setError('Falha ao carregar a lista de filmes.');
                setMovies([]); 
            } finally {
                setLoading(false);
            }
        }, 500);

        return () => clearTimeout(delaySearch);
        
    }, [searchTerm]);

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    if (error) {
        return <p className="text-center text-red-500 font-medium text-xl mt-16">{error}</p>;
    }

    return (
        <section className="mt-16 px-4 md:px-8 lg:px-16">
            <h2 className="text-white text-3xl font-semibold">Todos os Filmes</h2>
            {!loading && !error && (
                <p className="text-white/50 text-md font-medium">{movies.length} Resultados encontrados</p>
            )}
            <SearchMovies 
                    searchTerm={searchTerm} 
                    onSearchChange={setSearchTerm} 
                />


            <div className="mt-8">
                {loading ? (
                    <div className="items-center gap-4 flex flex-row justify-center mt-16">
                        <svg className="size-8 animate-spin text-primary dark:text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="font-medium text-gray-700 dark:text-gray-200 text-md">Buscando Filmes...</p>
                    </div>
                ) : error ? (
                    <p className="text-center text-red-500 font-medium text-xl mt-16">{error}</p>
                ) : movies.length === 0 ? (
                    <p className="text-gray-400 text-center mt-12">Nenhum filme encontrado para "{searchTerm}".</p>
                ) : (
                    <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8">
                        {movies.map((movie) => (
                            <MovieCard 
                                key={movie.id}
                                src={`https://image.tmdb.org/t/p/w500${movie.posterImage}`} 
                                href={`/movie/${movie.id}`}
                            />
                        ))} 
                    </ul>
                )}
            </div>
        </section>
    )
}
