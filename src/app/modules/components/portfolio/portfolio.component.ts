import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  title: String;
  result: Object;
  searchMovie(title: String) {
    this.movieService.searchMovieByTitle(title)
    .subscribe( (result) =>  {
      this.result = result;
      console.log(result);
    });
  }
  isShowDivIf = true;
   
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

}

