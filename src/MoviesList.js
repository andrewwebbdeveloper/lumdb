import React, { Component } from 'react';
import Movie from './Movie';

class MoviesList extends Component {
  state = {
    movies: [],

  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=db2cc553340037f8975582668d878841&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      // console.log(movies);
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      // console.log(e);
    }
  }

  render() {
    const { movies } = this.state;
    return (

      <div>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}

      </div>


    );
  }
}


export default MoviesList; 
