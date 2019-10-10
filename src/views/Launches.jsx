import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import RocketService from '../services/RocketService';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import {fetchRocketIfNeeded, removeRocketPopup} from "../actions/Rockets";

import Launch from '../components/Launch';
import RocketCard from '../components/rockets/RocketCard';

//ORDER METHODS CALLED IN
// constructor, render, componentDidMount
// defaultProps and propTypes

class LaunchesView extends Component {
    // static propTypes = {
    //     color: propTypes.one('blue', 'red')
    //     dispatch: Protypes.func()
    // }
    //
    // static defaultProps = {
    //     color: 'red',
    //     dispatch: () => {}
    // }

  componentDidMount() {
      //invoked after component is inserted into the tree
      const { dispatch, launchesCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }

  handleSelectRocket = (id) => {
      const { dispatch, rocketCollection } = this.props;
    fetchRocketIfNeeded({ dispatch, rocketCollection, id })
  }

  handleClosePopup = () => {
      const { dispatch, rocketCollection } = this.props;
    removeRocketPopup({ dispatch })
  }


  render() { //only necessary lifecycle method
      //render should be pure - shouldn't modify state
      //should not interact with browser
    const {
      launchCollection,
      launchCollection: {launches},
      rocketCollection,
      rocketCollection: {rocket} }= this.props;

    const mapLaunches = () => {
      let mappedLaunches = launches.map((launch) => (
        <Launch
          key={launch.flight_number}
          launch={launch}
          handleSelectRocket={this.handleSelectRocket}
        />
      ))
      return <ul>{mappedLaunches}</ul>;
    }

    const renderRocket = () => {
        if(rocketCollection.showRocket){
            return (
                <RocketCard
                rocket={rocket}
                handleClosePopup={this.handleClosePopup}
                />
            )
        }
    }

    const renderContent = () => {
      switch(true) {
        case (!launchCollection || launchCollection.fetching):
          return <div> LOADING </div>;
        case (!launches.length):
          return <div> NO DATA </div>;
        default:
          return mapLaunches();
      }
    }


    return (
      <div>
        <h2> SpaceX launches </h2>

        {renderRocket()}

        {renderContent()}
      </div>
    );
  }
}

// LaunchesView.propTypes = {
//
// }

export default ConnectedView(LaunchesView, 'launches');
