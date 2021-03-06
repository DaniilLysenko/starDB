import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  render() {
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/5.jpg`} />
        <div>
          <h4>Name</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>2323</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>2323</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>232323</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
