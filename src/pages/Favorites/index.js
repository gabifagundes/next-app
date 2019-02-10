import React, { Component } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/Icons/icon-arrow-white.svg";
import Card from "../../modules/Card";

class Favorites extends Component {
  state = {
    favorites: []
  };

  componentDidMount() {
    this.setState(() => {
      return { favorites: JSON.parse(localStorage.getItem("favorites")) || [] };
    });
  }

  render() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const movies = favorites
      ? favorites.map(item => {
          return <Card key={item.id} data={item} {...this.props} />;
        })
      : null;
    return (
      <div>
        <div className="u-sizeFull">
          <Link to={`/`} alt="home">
            <img src={Arrow} className="App-logo" alt="logo" />
          </Link>
          <span className="white f24"> / Favorites</span>
        </div>
        <h1 className="white fw6">Meus favoritos</h1>
        <div className="u-sizeFull flex flex-column flex-row-ns flex-wrap-ns">
          {movies}
        </div>
      </div>
    );
  }
}

export default Favorites;
