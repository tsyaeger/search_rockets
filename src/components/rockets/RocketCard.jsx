import React, { Component } from 'react';
import RocketImagePanel from './RocketImagePanel';
import RocketData from './RocketData';
import {defaultRocketImg} from './../../helpers/helpers.js'
import './rocketCard.css'

const RocketCard = (props) => {
  const {
      handleClosePopup,
      rocket,
      rocket: {flickr_images} = [defaultRocketImg]
  } = props

  return (
    <div className='rocket-popup'>
      <div className='rocket-popup-inner'>
        <h1 className="rocket-name-header">{rocket.rocket_name}</h1>
        <RocketImagePanel image={flickr_images}/>
        <RocketData rocket={rocket}/>
        <h1
          className="close-x selectable"
          onClick={() => {handleClosePopup()}}>
          &times;
        </h1>
      </div>
    </div>
  );
}
export default RocketCard;
