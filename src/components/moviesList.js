import React from 'react';
import { FormattedMessage } from 'react-intl';
import Movie from "./movie";
export default class MoviesList extends React.Component {
/**navigator.language||navigator.browserLanguage */
  
state = {
    error: null,
    isLoaded: false,
    items: []
  };


componentDidMount() {
  fetch("https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items
        });
      },
      // Nota: es importante manejar errores aquí y no en 
      // un bloque catch() para que no interceptemos errores
      // de errores reales en los componentes.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}

  render() {
    return (
      <div>        
        <table className="table">
          <FormattedMessage id = "ColorHead">
          {(txt) => (
          <thead className= {txt}>
            <tr>
              <th scope="col">#</th>
              <th scope="col"><FormattedMessage id="name"/></th>
              <th scope="col"><FormattedMessage id="Company"/></th>
              <th scope="col"><FormattedMessage id="Salary"/></th>
              <th scope="col"><FormattedMessage id="City"/></th>
              <th scope="col"><FormattedMessage id="PulibicationDate"/></th>
              <th scope="col"><FormattedMessage id="Views"/></th>
            </tr>
          </thead> )}
          </FormattedMessage>
          <tbody>
              {this.state.offers.map( (e,i) => <Movie key={i} offer={e}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}