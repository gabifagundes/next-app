import React, { Component } from 'react';
import HeartLight from '../../assets/Icons/icon-heart-white.svg';
import HeartFull from "../../assets/Icons/icon-heart-full.svg";
import IconButton from '@material-ui/core/IconButton';
import styles from './FavoriteButton.module.css';
import _ from 'lodash';


class FavoriteButton extends Component {
  state={
    liked:false,
  }

  componentDidMount(){
    const {data} = this.props;
    const favoritedItens = JSON.parse(localStorage.getItem("favorites")) || [];
    const hasFavorited = _.findIndex(favoritedItens, data);
    hasFavorited >= 0 ? this.setState({ liked: true }) : this.setState({ liked: false }) ;
  }

  addFavorite=()=>{
    const { liked }=this.state;
    const { data }= this.props;
    this.setState({ liked: !liked });
    const old = JSON.parse(localStorage.getItem("favorites")) || [];
    var newFavorite = data;
    const hasFavorited = _.findIndex(old, newFavorite);
    if (liked) {
      _.remove(old, newFavorite);
      localStorage.setItem("favorites", JSON.stringify(old));
      return;
    }
    if (hasFavorited<0){
      old.push(newFavorite);
      localStorage.setItem("favorites", JSON.stringify(old));
      return;
    }
  };

  render() {
    const { type  } = this.props;
    const { liked } = this.state;
    return (
      <React.Fragment>
        {type === "Icon" ? (
          <IconButton
            aria-label="Delete"
            className={styles.icon}
            onClick={this.addFavorite}
          >
            <img
              src={liked ? HeartFull : HeartLight}
              className="Heart"
              alt="Heart"
            />
          </IconButton>
        ) : (
          <button className={styles.button} onClick={this.addFavorite}>
            <img
              src={liked ? HeartFull : HeartLight}
              className="Heart"
              alt="Heart"
            />
            <span className="ml4">Add to Favorites</span>
          </button>
        )}
      </React.Fragment>
    );
  }
}

export default FavoriteButton;