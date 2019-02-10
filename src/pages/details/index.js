import React, { Component } from "react";
import { Link } from "react-router-dom";
import getMovies from "../../services/Movies";
import Arrow from "../../assets/Icons/icon-arrow-white.svg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import styles from "./Detail.module.css";
import cuid from "cuid";
import Button from "../../modules/Button";
import NotFound from "../../assets/Illustrations/not-found3.svg";
import vote from "../../assets/Logos/logo-imdb.svg";
import FavoriteButton from "../../modules/FavoriteButton";
import * as movies from "../../constants/Movies";
import _ from "lodash";

class Detail extends Component {
  state = {
    people: "",
    castCollapsible: false,
    directorCollapsible: false,
    genres: ""
  };

  componentDidMount() {
    const { data } = this.props;
    getMovies.getDetailMovie(data.id).then(res => {
      this.setState({ people: res.data });
    });
    getMovies.getGenreMovie().then(res => {
      this.setState({ genre: res.data.genres });
    });
  }

  clickCast = () => {
    this.setState(state => ({
      castCollapsible: !state.castCollapsible
    }));
  };

  clickDirector = () => {
    this.setState(state => ({
      directorCollapsible: !state.directorCollapsible
    }));
  };

  collapsibleItem = list => {
    return list.map(item => {
      return (
        <ListItem key={cuid()} className="white">
          <ListItemText
            primary={item.name}
            secondary={item.character || item.job}
          />
        </ListItem>
      );
    });
  };

  render() {
    const { data } = this.props;
    const {
      title,
      poster_path,
      original_title,
      overview,
      genre_ids,
      vote_average
    } = data;
    const { people, genre } = this.state;

    const selectedGenres = genre_ids
      ? genre_ids.map(item => {
          const selected = _.find(genre, { id: item });
          return selected ? (
            <span key={selected.id} className="white mr4">
              {selected.name},{" "}
            </span>
          ) : null;
        })
      : null;

    const actors = people ? this.collapsibleItem(people.cast) : null;

    const team = people ? this.collapsibleItem(people.crew) : null;

    const poster = movies.LINK_POSTER + poster_path;
    return (
      <div>
        <div className="u-sizeFull">
          <Link to={`/`} alt="home">
            <img src={Arrow} className="App-logo" alt="logo" />
          </Link>
          <span className="white f24"> / Detail</span>
        </div>
        {data ? (
          <div className="Grid">
            <div className="u-sizeFull u-sm-size6of12 u-md-size6of12 u-lg-size6of12 order-2 order-1-ns">
              <h1 className="f72-m f32 f72-l ma0 mt20 fw7 white">{title}</h1>
              <h2 className="f24 mt0 fw4 white">({original_title})</h2>
              <div className="mb32 flex flex-column flex-row-ns">
                <span className={`${styles.icon} mr12 mb12 mb0-ns`}>
                  <img src={vote} alt="IMDB" />
                  <span className="white fw5 f16 mh10"> {vote_average}/10</span>
                </span>
                <FavoriteButton data={data} />
              </div>
              <div className="f18">
                <span className={`fw7 ${styles.title}`}>Plot</span>
                <p className="fw5 tj mt10 white f16">
                  {overview ? overview : "Este filme não contém descrição"}
                </p>
              </div>
              {selectedGenres && (
                <div className="f18 dib mb12 ">
                  <span className={`fw7 mr4 ${styles.title}`}>Genres:</span>
                  {selectedGenres}
                </div>
              )}
              <div className={styles.cast}>
                <List component="nav">
                  <ListItem button onClick={this.clickCast}>
                    <ListItemText inset primary="Cast" />
                    {this.state.castCollapsible ? "+" : "-"}
                  </ListItem>
                  <Collapse
                    in={this.state.castCollapsible}
                    timeout="auto"
                    unmountOnExit
                  >
                    {actors}
                  </Collapse>
                </List>
                <List component="nav">
                  <ListItem button onClick={this.clickDirector}>
                    <ListItemText inset primary="Crew" />
                    {this.state.directorCollapsible ? "+" : "-"}
                  </ListItem>
                  <Collapse
                    in={this.state.directorCollapsible}
                    timeout="auto"
                    unmountOnExit
                  >
                    {team}
                  </Collapse>
                </List>
              </div>
            </div>
            <div className="u-sizeFull u-sm-size6of12  u-md-size6of12  u-lg-size6of12 order-1 order-2-ns flex justify-center pl32-ns">
              <img
                src={poster}
                className={`mt32 mt0-ns ml0 ml-32-ns ${styles.img}`}
                alt={title}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-column items-center">
            <div className="mb24 mb32-ns">
              <img src={NotFound} alt="Página nao identificada" />
            </div>
            <h1 className="white f16 f24-ns tc fw6">
              Você não buscou nenhum filme :(
            </h1>

            <Link to={`/`} alt="home" className="mt32-ns mb32-ns">
              <Button label="Voltar para home" />
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Detail;
