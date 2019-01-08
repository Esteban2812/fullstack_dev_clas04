import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovie } from '../imovie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  movies : IMovie[]

  constructor(private movieService:MovieService, private router:Router) { }

  

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

  //movies:Array<IMovie> = this.movieService.getMovies()
  
  nuevaPelicula(){
    this.router.navigate(["peliculas","nueva"])
  }

}
