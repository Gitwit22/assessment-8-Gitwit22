import { Injectable } from '@angular/core';
import { Movie } from './movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

movies: Movie[] = [

    {title: "Toy Story", releaseYear: 1995},
    {title: "Forest Gump", releaseYear: 1994}
    
]



  


  getMovies(): Movie[] {
    return this.movies;
  }
}
