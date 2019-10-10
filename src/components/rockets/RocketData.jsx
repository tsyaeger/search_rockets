import React from 'react';
import {reformatDateStr, intToDollars} from './../../helpers/helpers.js'

const RocketData = ({ rocket }) => {
    const {country,
          company,
          active,
          first_flight,
          cost_per_launch,
          success_rate_pct,
          description,
          wikipedia} = rocket;

    const isActiveStr = active ? "Active" : "Inactive"

    return (
        <div className='rocket-data-wrapper'>
          <p>{`Country: ${country}`}</p>
          <p>{`Company: ${company}`}</p>
          <p>{`Status: ${isActiveStr}`}</p>
          <p>{`First Flight: ${reformatDateStr(first_flight)}`}</p>
          <p>{`Cost Per Launch: ${intToDollars(cost_per_launch)}`}</p>
          <p>{`Success Rate: ${success_rate_pct}%`}</p>
          <p>{description}</p>
          <a href={wikipedia}>Wikipedia</a>
        </div>
    );
}
export default RocketData;

//ADD PROPTYPES
