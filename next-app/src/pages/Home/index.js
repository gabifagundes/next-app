import React, { Component } from 'react';
import getMovies from '../../services/Movies';
import SearchBar from '../../shared/SearchBar';
import Card from '../../shared/Card';
import styles from './Home.module.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Heart from "../../assets/Icons/icon-heart-full.svg";
import Tooltip from "@material-ui/core/Tooltip";
import Button from '../../shared/Button';
import NotFound from '../../assets/Illustrations/not-found3.svg';

class Home extends Component {
  state = {
    topMovies: "",
    pageDetail: "",
    selectedMovie: null,
    titleHome: ""
  };

  componentDidMount() {
    getMovies.getTopMovies().then(res => {
      this.setState({ topMovies: res.data });
    });
  }

  searchMovie = e => {
    const { value } = e.target;
    const query = value.replace(/ /g, "%20");
    value
      ? getMovies.searchMovies(query).then(res => {
          this.setState({ selectedMovie: res.data.results });
        })
      : this.setState({ selectedMovie: null });
  };

  render() {
    const { topMovies, selectedMovie } = this.state;
    const top = topMovies
      ? topMovies.results.map(item => {
        return <Card key={item.id} data={item} {...this.props} />;
      })
      : null;
    const search = selectedMovie
      ? selectedMovie.map(item => {
        return <Card key={item.id} data={item} {...this.props} />;
      })
      : null;

    const title = title => { return (
                               <h1 className="white f16 f24-ns  fw6">
                                 {title}
                               </h1>
                             ); }

    return (
      <div className="u-sizeFull flex flex-row flex-wrap ">
        <div className="u-sizeFull flex justify-between items-end">
          <SearchBar
            searchMovie={this.searchMovie}
            selectedMovie={this.state.selectedMovie}
            className="w-100"
          />
          <Tooltip title="Meus favoritos" placement="top">
            <Link to={`/favorites`} alt="home" className={styles.button}>
              <img src={Heart} className="App-logo" alt="logo" />
            </Link>
          </Tooltip>
        </div>

        <div className="u-sizeFull flex flex-column flex-row-ns flex-wrap-ns">
          {!selectedMovie && (
            <React.Fragment>
              {title("Top movies")}
              <div className="u-sizeFull flex flex-wrap flex-row">
                {top}
              </div>
            </React.Fragment>
          )}

          {selectedMovie && !selectedMovie.length && (
            <div className="u-sizeFull tc">
              <div className="mt32 mb32">
                <img src={NotFound} alt="Página nao identificada" />
              </div>
              {title(
                "Ahh que pena! Não encontramos o filme que você procurava :("
              )}

              <Link to={`/`} alt="home" className="mt32-ns mb32-ns">
                <Button  label="Voltar para home" />
              </Link>
            </div>
          )}

          {selectedMovie && selectedMovie.length !== 0 && (
            <React.Fragment>
              {title("Encontramos alguns filmes pra você :)")}
              <div className="u-sizeFull flex flex-wrap flex-column flex-row-ns">
                {search}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Home;