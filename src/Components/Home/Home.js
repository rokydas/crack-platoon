import React from 'react';
import Player from '../Player/Player';
import './Home.css';
import amit from '../../images/players/amit.jpg';
import anik from '../../images/players/anik.jpg';
import apu from '../../images/players/apu.jpg';
import bhuian from '../../images/players/bhuian.jpg';
import biltu from '../../images/players/biltu.jpg';
import drubo from '../../images/players/drubo.jpg';
import ovy from '../../images/players/ovy.jpg';
import pallab from '../../images/players/pallab.jpg';
import robin from '../../images/players/robin.jpg';
import shorav from '../../images/players/shorav.jpg';
import shuva from '../../images/players/shuva.jpg';
import shuvaraj from '../../images/players/shuvaraj.jpg';
import roky from '../../images/players/roky.jpg';
import Footer from '../Footer/Footer';

const Home = () => {

    const goalKeepers = [
        {
            id: 1,
            name: 'Amit Debnath',
            age: 22,
            img: amit,
            fb: 'https://www.facebook.com/amit.nath.5851127'
        },
        {
            id: 2,
            name: 'Anik Das (Sunny)',
            age: 22,
            img: anik,
            fb: 'https://www.facebook.com/profile.php?id=100009489875074'
        },
    ]

    const defender = [
        {
            id: 3,
            name: 'Shorav Mojumder',
            age: 22,
            img: shorav,
            fb: 'https://www.facebook.com/shorav.mazumder.3'
        },
        {
            id: 4,
            name: 'Shuva Das',
            age: 22,
            img: shuva,
            fb: 'https://www.facebook.com/shuvadas919'
        },
        {
            id: 5,
            name: 'Roky Das',
            age: 22,
            img: roky,
            fb: 'https://www.facebook.com/rokydas.rokydas.5/'
        },
        {
            id: 6,
            name: 'Drubo Paul',
            age: 23,
            img: drubo,
            fb: 'https://www.facebook.com/profile.php?id=100009338295690'
        },
    ]

    const midfielder = [

        {
            id: 7,
            name: 'Mozammel Hossain',
            age: 22,
            img: bhuian,
            fb: 'https://www.facebook.com/mohammadmozammelhossainbhuian'
        },
        {
            id: 8,
            name: 'Shuvaraj Paul',
            age: 28,
            img: shuvaraj,
            fb: 'https://www.facebook.com/shuvoraj.paul.7'
        },
        {
            id: 9,
            name: 'Pallob Pal Aditto',
            age: 23,
            img: pallab,
            fb: 'https://www.facebook.com/pallobpal.adeta'
        },
        {
            id: 10,
            name: 'Anik Paul Apu',
            age: 22,
            img: apu,
            fb: 'https://www.facebook.com/anik.paul.9440'
        },
    ]

    const forward = [
        {
            id: 11,
            name: 'Pranjal Nath (Biltu)',
            age: 22,
            img: biltu,
            fb: 'https://www.facebook.com/pranjalnath.utsha'
        },
        {
            id: 12,
            name: 'Ovy Mallik',
            age: 22,
            img: ovy,
            fb: 'https://www.facebook.com/profile.php?id=100009516212638'
        },
        {
            id: 13,
            name: 'Robin Mitra',
            age: 22,
            img: robin,
            fb: 'https://www.facebook.com/legolas.fan.98'
        },
    ]

    return (
        <div className="home">
            <div className="pt-5 goal-keepers">
                <h2 className="player-heading pb-5">Goal Keepers</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        {
                            goalKeepers.map(player => <Player player={player} key={player.id} />)
                        }
                    </div>
                </div>
            </div>

            <div className="pt-5 goal-keepers">
                <h2 className="player-heading pb-5">Defender</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        {
                            defender.map(player => <Player player={player} key={player.id} />)
                        }
                    </div>
                </div>
            </div>

            <div className="pt-5 goal-keepers">
                <h2 className="player-heading pb-5">Midfielder</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        {
                            midfielder.map(player => <Player player={player} key={player.id} />)
                        }
                    </div>
                </div>
            </div>

            <div className="pt-5 goal-keepers">
                <h2 className="player-heading pb-5">Forward</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        {
                            forward.map(player => <Player player={player} key={player.id} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;