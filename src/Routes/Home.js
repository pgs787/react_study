import React from "react";
import Movie from "../components/Movie.js";
import axios from "axios";
import "./Home.css";

export class Home extends React.Component {
  state = {
    isloading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    this.setState({
      movies,
      isloading: false
    });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isloading, movies } = this.state;
    return (
      <div className="container">
        {isloading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
