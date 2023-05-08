import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../interfaces/apiResponse';
import { Movie } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private API_URL: string = 'http://www.omdbapi.com/?apikey=a0146f9&';

  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string): Observable<Movie[]> {
    return this.http.get<ApiResponse>(this.API_URL + '&s=' + searchTerm).pipe(
      map(response => {
        return response.Search
      })
    )
  }

}
