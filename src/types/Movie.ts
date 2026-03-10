export interface Movie {
  id: number;
  title: string;
  originalLanguage: string;
  originalTitle: string;
  adult: boolean;
  releaseDate: string;
  posterImage: string;
  overview: string;
  genres: string[]; 
}

export interface GetMoviesResponse {
  movies: Movie[];
}