import React from "react";
import axios from "axios";

const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=13f2a9b970b1366ea5911d705a1cffd3"
});

export default class App extends React.Component{
    state = {
        movies: [],
        moviesList: []
    };

    componentDidMount = () => this.getMovies();
    getMovies = async () => {
        const response = await moviesApi.get();
        const moviesData = response.data.results.map(item => {
            return{
                id: item.id,
                title: item.title,
                description: item.overview,
                adult: item.adult,
                poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
            }
        });

        this.setState({
            movies: moviesData,
            moviesList: moviesData
        });
    };
    handleSearchChange = event => {
        const moviesFilter = this.state.movies.filter(item => item.title.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({moviesList: moviesFilter});
    };

    render(){
        return(
            <div>
                <div>
                    <h2 id="title">Movies</h2>
                    <input type="text" placeholder='Search Movie' onChange={this.handleSearchChange} id='search'/>
                </div>
                <div id="gallery">
                    <div id="gridGallery">
                        {this.state.moviesList.map((item, index) => (
                            <div key={index}>
                                <p>{item.title}</p>
                                <img src={item.poster_path} alt={'Movie Poster'}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }   
}