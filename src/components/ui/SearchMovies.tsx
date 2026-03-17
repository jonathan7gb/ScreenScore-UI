interface SearchMoviesProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

export function SearchMovies({ searchTerm, onSearchChange }: SearchMoviesProps){
    return (
       <div className="w-full md:w-72 mt-4">
            <input 
                type="text" 
                placeholder="Buscar filme pelo título..." 
                value={searchTerm}
                // Quando o usuário digitar, chamamos a função que veio do pai
                onChange={(e) => onSearchChange(e.target.value)}
                className="px-4 py-2 w-full rounded-md bg-transparent text-white border border-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-400"
            />
        </div>
    )
}