import React from 'react';
import {Link} from 'react-router-dom';
import PilotList from '../PilotList/PilotList';
import './StarshipPage.css';

function StarshipPage (props) {
  // let starship = props.getStarship(match.params.id);
  console.log(props.starship);

  return (
    <>
    <div className='Starship-page-detail-card'>
      {/* <h1>{props.starship.name}</h1> */}
      <div>NAME: {props.starship.name}</div>
      <div>MODEL: {props.starship.model}</div>
      <div><Link to='/'>RETURN</Link></div>
    </div>
    <PilotList
      pilotArray={props.starship.pilots}
    />
    </>
  )
}

export default StarshipPage;