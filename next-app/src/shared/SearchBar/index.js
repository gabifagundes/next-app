import React,{ Component } from 'react';
import CustomInput from '../CustomInput';


class SearchBar extends Component{

    render(){
      const { searchMovie, className } = this.props;
    return (
      <React.Fragment>
          <CustomInput
            id="standard-name"
            placeholder="Procure seu filme por aqui :)"
            name="search"
            className={className}
            label="Pesquise seu filme"
            onChange={searchMovie}
            margin="normal"
          />
      </React.Fragment>
    );
    };
}

export default SearchBar;