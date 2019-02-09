import React, { Component } from 'react';
import styles from './Card.module.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import FavoriteButton from '../FavoriteButton';

class CardMovie extends Component {

  render() {
    const { data, getMovie} = this.props;
    const { poster_path,title} = data;
    const poster =
      "https://image.tmdb.org/t/p/w500/" + poster_path;
    const style = {
      backgroundImage: `url('${poster}')`
    };
    return (
      <React.Fragment>
        {this.props.data.poster_path && (
          <div
            className={`u-sizeFull u-sm-size4of12 u-md-size3of12 u-lg-size3of12 relative dib mb20 ph10 ${
              styles.card
            }`}
          >
            <Link
              className="u-sizeFull"
            onClick={() => getMovie(this.props.data)}
              to={`/detail`}
            >
              <div className={`u-sizeFull ${styles.poster}`}>
                <div className={styles.img} style={style} />
                    <span className={`f18 ttu fw6 white no-underline pr20 ${styles.poster_hover}`}>{title}</span>
                
              </div>
            </Link>
            <FavoriteButton type="Icon" data={this.props.data}/>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default CardMovie;

CardMovie.defaultProps = {
    data:[{vote_count: 959,
    id: 450465,
    video: false,
    vote_average: 6.9,
    title: "Vidro",
    popularity: 360.395,
    poster_path: "/jpz1x6YLFWqWfnGD8h3lQe1ZpDT.jpg",
    original_language: "en",
    original_title: "Glass",
    genre_ids: [
        53,
        9648,
        18
    ],
    backdrop_path: "/jpz1x6YLFWqWfnGD8h3lQe1ZpDT.jpg",
    adult: false,
    overview: "Após a conclusão de Fragmentado (2017), Kevin Crumb (James McAvoy), o homem com 23 personalidades diferentes, passa a ser perseguido por David Dunn (Bruce Willis), o herói de Corpo Fechado (2000). O jogo de gato e rato entre o homem inquebrável e a Fera é influenciado pela presença de Elijah Price (Samuel L. Jackson), que manipula os encontros entre eles e mantém segredos sobre os dois.",
    release_date: "2019-01-16"}]
};