import React from 'react';

const RocketImagePanel = ({ image }) => {
    return (
        <div className='rocket-image-wrapper'>
            <img className="rocket-image" src={image} alt="spaceship" height="350"></img>
        </div>
    );
}
export default RocketImagePanel;
