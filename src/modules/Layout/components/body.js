import React, { Component } from "react";
import Home from "../../../pages/Home";
import Detail from "../../../pages/details";
import Favorites from "../../../pages/Favorites";
import NotFound from "../../../pages/NotFound";
import { Route, Switch } from "react-router-dom";

class Body extends Component {
  state = {
    selectedMovie: ""
  };

  getMovie = movie => {
    this.setState({ selectedMovie: movie });
  };

  render() {
    const { selectedMovie } = this.state;
    return (
      <React.Fragment>
        <div className="u-sizeFull flex justify-center">
          <div className="u-size9of12 mt20">
            <div>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => <Home getMovie={this.getMovie} />}
                />
                <Route
                  path="/detail"
                  component={() => <Detail data={selectedMovie} />}
                />
                <Route
                  path="/favorites"
                  component={() => <Favorites getMovie={this.getMovie} />}
                />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
