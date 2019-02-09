import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import img404 from '../../assets/Illustrations/404.svg';
import Button from '../../shared/Button';

class NotFound extends Component{
    render(){
        return (
          <div>
            <div className="u-sizeFull flex justify-center flex-column items-center">
              <img src={img404} alt="Página nao identificada" />
              <Link to={`/`} alt="home" className="mt32 mb32">
                    <Button label='Voltar para home'/>
              </Link>
            </div>
          </div>
        );
    }
}

export default NotFound;