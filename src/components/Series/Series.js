import React from "react";
import axios from "axios";
import './SeriesStyle.css';

const seriesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=13f2a9b970b1366ea5911d705a1cffd3"
})
  
export default class Series extends React.Component{
    state = {
        series: [],
        seriesList: []
    };

    componentDidMount = () => this.getSeries();
    getSeries = async () => {
        const response = await seriesApi.get();
        const seriesData = response.data.results.map(item => {
        return{
            id: item.id,
            name: item.name,
            description: item.overview,
            adult: item.adult,
            poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
        };
        });

        this.setState({
        series: seriesData,
        seriesList: seriesData
        });
    }
    handleSearchChange = event => {
        const seriesFilter = this.state.series.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({seriesList: seriesFilter,});
    };

    render(){
        return(
        <div>
            <div>
            <h2 id="title">Series</h2>
            <input type="text" placeholder='Search Serie' onChange={this.handleSearchChange} id='search'/>
            </div>
            <div id="gallery">
                <div id="gridGallery">
                    {this.state.seriesList.map((item, index) => (
                        <div key={index}>
                            <p>{item.name}</p>
                            <img src={item.poster_path} alt={'Poster'} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        )
    }
}