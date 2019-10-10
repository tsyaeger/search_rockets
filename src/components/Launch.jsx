import React, { Component } from 'react';

const Launch = ({ launch, handleSelectRocket }) => {
  return (
    <li
      className="selectable"
      onClick={() => {handleSelectRocket(launch.rocket.rocket_id)}}
    >
      <h2> { launch.mission_name }</h2>
      <h3> { launch.rocket.rocket_name } </h3>
    </li>
  );
}

export default Launch;
