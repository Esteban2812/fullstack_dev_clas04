import { Injectable } from '@angular/core';
import { IMovie } from './imovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Array<IMovie> = []
  constructor() { }

agregarMovie(movie:IMovie){
  this.movies.push(movie)  
}

getMovies(){
  return this.movies
}

}
