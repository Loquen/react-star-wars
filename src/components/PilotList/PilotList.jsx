import React, {Component} from 'react';

import {getAllPilots} from '../../services/sw-api';

class PilotList extends Component {
  state = {
    pilots: []
  }

  async componentDidMount(){
    this.pilots = await getAllPilots(this.props.pilotArray);
    this.setState({
      pilots: this.pilots
    });
  }

  render() {
    return (
      <div>
        {this.state.pilots.length 
          ? this.state.pilots.map(pilot => {
            return (<div>{pilot.name}</div>)
          })
          :
            <div>NO PILOTS</div>
        }
      </div>
    );
  }
}

export default PilotList;