import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-card-movies',
  templateUrl: './card-movies.component.html',
  styleUrls: ['./card-movies.component.css']
})
export class CardMoviesComponent implements OnInit {

  @Input('movie') movie!: Movie;

  constructor() { }

  ngOnInit(): void { }

  getImages() {
    return this.movie.Poster !== 'N/A' ? this.movie.Poster : 'https://via.placeholder.com/600';
  }

}
