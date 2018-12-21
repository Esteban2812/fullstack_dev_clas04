import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovie } from '../imovie';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }

  movies:Array<IMovie> = this.movieService.getMovies()
  
}
