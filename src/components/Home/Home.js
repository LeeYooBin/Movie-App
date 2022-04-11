import React from "react";
import axios from "axios";
import './HomeStyle.css';

const trendApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/trending/all/day?api_key=13f2a9b970b1366ea5911d705a1cffd3"
})

export default class Home extends React.Component {
  state = {
    content: [],
    contentList: []
  }

  componentDidMount = () => this.getTrending();
  getTrending = async () => {
    const response = await trendApi.get();
    const trending = response.data.results.map(item => {
        return{
          id: item.id,
          name: item.name,
          description: item.overview,
          adult: item.adult,
          poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
        }
    });

    this.setState({
        content: trending,
        contentList: trending
    });
  }

  render(){
    return(
        <div id="wrapper">
            <h1 id="title">Home</h1>
            <div id="gallery">
                <div  id="gridGallery">
                    {this.state.content.map(item => (
                      <img src={item.poster_path} alt={'Poster'}/>
                    ))}
                </div>
            </div>
        </div>
    )
  }
}