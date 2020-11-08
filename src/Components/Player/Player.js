import React from 'react';
import './Player.css';

const Player = ({ player }) => {

    const { name, img, age, fb } = player;

    return (
        <div className="col-md-4">
            <div className="player">
                <img width="100px" src={img} alt="" />
                <h4>{name}</h4>
                <h5>{age} years old</h5>
                <a target="_blank" href={fb}><button className="custom-btn">Facebook Profile</button></a>
            </div>
        </div>
    );
};

export default Player;