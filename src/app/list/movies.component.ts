import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private movielist: Array<any>;
  constructor( private router: Router) { }

  ngOnInit() {
    this.movielist = [
      {
        title: 'Pulp Fiction', 
        producer: 'Lawrence Bender', 
        director: 'Quentin Tarantino', 
        release_date: 'October 26, 1994', 
        genre: 'Drama/Crime',
        ratings: '4',
        picture: 'https://images-na.ssl-images-amazon.com/images/I/81ERtO24ZbL._RI_.jpg'
      },
      {
        title: 'Interstellar', 
        producer: 'Emma Thomas, Christopher Nolan', 
        director: 'Christopher Nolan', 
        release_date: 'November 5, 2014', 
        genre: 'Science Fiction',
        ratings: '5',
        picture: 'https://pre00.deviantart.net/862d/th/pre/f/2016/227/6/d/interstellar_poster_variation_by_theossfx-dadx3il.jpg'
      },
      {
        title: 'Dunkirk', 
        producer: 'Christopher Nolan', 
        director: 'Emma Thomas', 
        release_date: 'July 13, 2017', 
        genre: 'Historical Fiction',
        ratings: '4.4',
        picture: 'https://pre00.deviantart.net/6b55/th/pre/f/2017/187/d/9/d90a1a3fe173e96e786dffda9cc50301-dbfa97a.jpg'
      },
      {
        title: 'Kill Bill: Volume 1', 
        producer: '	Lawrence Bender', 
        director: 'Quentin Tarantino', 
        release_date: 'October 10, 2003', 
        genre: 'Action',
        ratings: '4',
        picture: 'https://i2.wp.com/la-screenwriter.com/wp-content/uploads/2012/03/kill-bill-vol-1-poster-01.jpg'
      },
      {
        title: 'Blade Runner 2049', 
        producer: 'Andrew A. Kosove', 
        director: 'Denis Villeneuve', 
        release_date: 'October 3, 2017', 
        genre: 'Science Fiction',
        ratings: '4.1',
        picture: 'https://dspncdn.com/a1/media/692x/f8/a7/c3/f8a7c36bbf2e82cbe65ecf78f27a8af3.jpg'
      },
      {
        title: 'Avatar', 
        producer: 'James Cameron', 
        director: 'James Cameron', 
        release_date: 'December 16, 2009', 
        genre: 'Science Fiction',
        ratings: '3.9',
        picture: 'https://i.pinimg.com/originals/c3/2e/40/c32e40b633ff92a2d3048f5ce8570c90.jpg'
      },
      {
        title: 'Fear and Loathing in Las Vegas', 
        producer: 'Patrick Cassavetti, Stephen Nemeth', 
        director: 'Terry Gilliam', 
        release_date: 'May 22, 1998',
        genre: 'Drama',
        ratings: '4.2',
        picture: 'https://20ui41tp7v127j03rcnp97oh-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/kaun_loathing.jpg'
      },
      {
        title: 'The Sixth Sense', 
        producer: 'Frank Marshall', 
        director: 'M. Night Shyamalan', 
        release_date: 'August 6, 1999', 
        genre: 'Drama',
        ratings: '3.9',
        picture: 'http://img.moviepostershop.com/the-sixth-sense-movie-poster-1999-1020196111.jpg'
      },
      {
        title: 'The Grand Budapest Hotel', 
        producer: 'Wes Anderson', 
        director: 'Wes Anderson', 
        release_date: '7 March 2014', 
        genre: 'Drama',
        ratings: '3.9',
        picture: 'https://www.heyuguys.com/images/2014/11/The-Grand-Budapest-hotel-Poster.jpg'
      },
      {
        title: 'Ghost in the Shell', 
        producer: 'Avi Arad', 
        director: 'Rupert Sanders', 
        release_date: 'March 31, 2017', 
        genre: 'Action/Thriller',
        ratings: '4.2',
        picture: 'https://popcornusa.s3.amazonaws.com/movies/650/1891-11062-GhostInT.jpg'
      },
      {
        title: 'Crazy, Stupid, Love', 
        producer: 'Frank Marshall', 
        director: 'Glenn Ficarra, John Requa', 
        release_date: 'July 19, 2011', 
        genre: 'Comedy/Drama',
        ratings: '4.5',
        picture: 'https://www.dvdsreleasedates.com/posters/800/C/Crazy,-Stupid,-Love.-2011-movie-poster.jpg'
      },
      {
        title: 'Limitless', 
        producer: 'Leslie Dixon, Scott Kroopf, Ryan Kavanaugh', 
        director: 'Neil Burger', 
        release_date: 'March 8, 2011', 
        genre: 'Drama',
        ratings: '4.9',
        picture: 'https://images-na.ssl-images-amazon.com/images/I/91F-MOXhgLL._SL1500_.jpg'
      }
    ];
  }
  showMovie(title: string) {
    alert("You have clicked on " + title);
  }
  selectMovie( id: number) {
    console.log('la');
    this.router.navigate(['/movie', id]);
  }

}
