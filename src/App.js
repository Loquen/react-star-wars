import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './App.css';

import {getAllStarships} from './services/sw-api';
import StarshipPage from './components/StarshipPage/StarshipPage';

class App extends Component {
  state = {
    starships: []
  }
  
  async componentDidMount() {
    const starshipsData = await getAllStarships();
    this.setState({
      starships: starshipsData.results
    })
    console.log(this.state.starships);
  }

  getStarship (id){
    return this.state.starships[id];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          STAR WARS STARSHIPS
        </header>
        <Switch>
          <Route exact path='/' render={props => 
            <main className="App-ship-list">
              {this.state.starships.map((starship, idx) => (
                <Link className='App-ship-btn' to={`/starships/${idx + 1}`}>
                  <div  key={starship.name}>
                    {starship.name}
                  </div>
                </Link>
              ))}
            </main>
          } />
          
          <Route path='/starships/:id' render={props => {
            return(
              (this.state.starships.length)
              ? <StarshipPage
                  {...props} 
                  starship={this.state.starships[props.match.params.id - 1]}
                />
              : 'Loading...'
            )}
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
