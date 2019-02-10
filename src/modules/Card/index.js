import React, { Component } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import FavoriteButton from "../FavoriteButton";
import * as movies from "../../constants/Movies";

class CardMovie extends Component {
  render() {
    const { data, getMovie } = this.props;
    const { poster_path, title, release_date } = data;
    const poster = movies.LINK_POSTER + poster_path;
    const year = release_date ? release_date.slice(0, 4) : null;
    const style = {
      backgroundImage: `url('${poster}')`
    };
    return (
      <React.Fragment>
        {poster_path && (
          <div
            className={`u-sizeFull u-sm-size4of12 u-md-size3of12 u-lg-size3of12 relative dib mb20 ph10 ${
              styles.card
            }`}
          >
            <Link
              className="u-sizeFull"
              onClick={() => getMovie(data)}
              to={`/detail`}
            >
              <div className={`u-sizeFull ${styles.poster}`}>
                <div className={styles.img} style={style} />
                <div
                  className={`f18 ttu fw6 white no-underline pr20 flex flex-column ${
                    styles.poster_hover
                  }`}
                >
                  <span className="f24-ns">{title}</span>
                  <span>{year}</span>
                </div>
              </div>
            </Link>
            <FavoriteButton type="Icon" data={data} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default CardMovie;
