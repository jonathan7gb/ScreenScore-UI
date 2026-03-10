import axios from 'axios';
import type { Movie, GetMoviesResponse } from '../types/Movie';

export const api = axios.create({
  baseURL: 'https://screenscore-api-yrw8.onrender.com', 
});

export const getMovies = async (title: string): Promise<Movie[]> => {
  const response = await api.get<GetMoviesResponse>('/filmes/externos', {
    params: { title } 
  }); 
  
  return response.data.movies; 
};

export const getMovieDetail = async (movie_id: number): Promise<Movie> => {
  const response = await api.get<Movie>(`/filmes/externos/${movie_id}`); 
  
  return response.data; 
};