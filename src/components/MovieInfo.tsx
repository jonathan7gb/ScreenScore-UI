import type { Movie } from '../types/Movie';

interface MovieInfoProps {
    movie: Movie;
}

export function MovieInfo({ movie }: MovieInfoProps) {
    return (
        <div className="mt-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row gap-8">
            
            <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.posterImage}`} 
                    alt={`Pôster de ${movie.title}`} 
                    className="w-full rounded-lg shadow-lg object-cover"
                />
            </div>

            <div className="flex flex-col gap-4">
                <h1 className="text-white text-4xl font-bold">
                    {movie.title}
                </h1>
                
                <p className="text-gray-400 text-lg italic">
                    Título original: {movie.originalTitle} ({movie.originalLanguage.toUpperCase()})
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                    {movie.genres.map((genre) => (
                        <span key={genre} className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold transition-all duration-500 opacity-50 cursor-pointer hover:opacity-100 hover:scale-105 ">
                            {genre}
                        </span>
                    ))}
                    {movie.adult && (
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            +18
                        </span>
                    )}
                </div>

                <div className="mt-6">
                    <h3 className="text-white text-2xl font-semibold mb-2">Sinopse</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {movie.overview}
                    </p>
                </div>

                <div className="mt-4">
                    <p className="text-gray-400">
                        <strong className="text-white">Data de Lançamento: </strong> 
                        {new Date(movie.releaseDate).toLocaleDateString('pt-BR')}
                    </p>
                </div>
            </div>

        </div>
    )
}