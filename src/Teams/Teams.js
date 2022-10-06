import './Teams.css'
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

function Teams() {

    const [rocketLeague, setRocketLeague] = useState(false);

    return (
        <>
        <section id="teams">
            <div className="teams-block">
                <div className="teams-nav">
                    <p className="team-header">TEAMS</p>
                        <Nav className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link className="team-fifa">
                                    <div onClick={() => setRocketLeague(false)}>
                                        <img className="foto-white-fifa" src="img/fifa_white.png"  alt="fotobiancafifa" />
                                    </div>
                                        {!rocketLeague && <img className="foto-green-fifa" src="img/fifa_verde.png" alt="fotoverdefifa" />}
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="team-rocket-league">
                                    <div onClick={() => setRocketLeague(true)}>
                                        <img className="foto-bianca-rocket-league" src="img/rocket_bianco.png" alt="fotobiancarocket" />
                                    </div>
                                        {rocketLeague && <img className="foto-verde-rocket-league" src="img/rocket_verde.png"  alt="fotoverderockdet" />}
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                </div>
                <article className={!rocketLeague ? 'fifa-players' : 'no-visibility'}>
                    <div className="row justify-content-center fifa-card">
                        <div className="col-xs-12 col-sm-12 col-md-6 card-logo">
                            <img className="player1-fifa" src="img/frankie.png" alt="player-1" width="275" height="275"></img>
                            <div className="nick-player1-fifa">
                                <span className="name-player1-fifa">Frankievai</span>
                                <span className="role-player1-fifa">Player</span>
                                <div className="socials-player1-fifa">
                                    <Nav.Link href="https://www.instagram.com/frenkievai/" target="_blank" className="player-instagram">
                                        <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://www.twitch.tv/frenkievai/" target="_blank" className="player-twitch">
                                        <img src="img/twitch.png" alt="twitch" height="23" width="25"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 card-logo">
                            <img className="player2-fifa" src="img/lmatty.png" alt="player-2" width="275" height="275"></img>
                            <div className="nick-player1-fifa">
                                <span className="name-player1-fifa">LMatti10</span>
                                <span className="role-player1-fifa">Player</span>
                                <div className="socials-player1-fifa">
                                    <Nav.Link href="https://www.instagram.com/lmatti10_/" target="_blank" className="player-instagram">
                                        <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className={rocketLeague ? 'rocket-league-players' : 'no-visibility'}>
                    <div className="row justify-content-center">
                        <div className="col-xs-12 col-sm-12 col-md-6 card-logo">
                            <img className="player1-rocket-league" src="img/gio.png" alt="player-1" width="275" height="275"></img>
                            <div className="nick-player1-rocket-league">
                                <span className="name-player1-rocket-league">Giosprl</span>
                                <span className="role-player1-rocket-league">Coach</span>
                                <div className="socials-player1-rocket-league">
                                    <Nav.Link href="https://twitter.com/giosprl" target="_blank" className="player-twitter">
                                        <img src="img/twitter.png" alt="twitter" height="23" width="29"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="row justify-content-center card3-4">
                        <div className="col-xs-12 col-md-6 card-logo-rocket">
                            <img className="player2-rocket-league" src="img/logo-rocket.png" alt="player-2" width="200" height="200"></img>
                            <div className="justify-content-start nick-player2-rocket-league">
                                <span className="name-player2-rocket-league">Klap</span>
                                <span className="role-player2-rocket-league">Player</span>
                                <div className="socials-player2-rocket-league">
                                    <Nav.Link href="https://twitter.com/klaprll" target="_blank" className="player-twitter">
                                        <img src="img/twitter.png" alt="twitter" height="23" width="29"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 card-logo-rocket">
                            <img className="player3-rocket-league" src="img/logo-rocket.png" alt="player-3" width="200" height="200"></img>
                            <div className="nick-player3-rocket-league">
                                <span className="name-player3-rocket-league">Nua</span>
                                <span className="role-player3-rocket-league">Player</span>
                                <div className="socials-player3-rocket-league">
                                    <Nav.Link href="https://twitter.com/NualereX" target="_blank" className="player-twitter">
                                        <img src="img/twitter.png" alt="twitter" height="23" width="29"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 card-logo-rocket">
                            <img className="player4-rocket-league" src="img/logo-rocket.png" alt="player-4" width="200" height="200"></img>
                            <div className="nick-player4-rocket-league">
                                <span className="name-player4-rocket-league">Destiny</span>
                                <span className="role-player4-rocket-league">Player</span>
                                <div className="socials-player4-rocket-league">
                                    <Nav.Link href="https://twitter.com/Destiny_RL22" target="_blank" className="player-twitter">
                                        <img src="img/twitter.png" alt="twitter" height="23" width="29"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 card-logo-rocket">
                            <img className="player4-rocket-league" src="img/logo-rocket.png" alt="player-4" width="200" height="200"></img>
                            <div className="nick-player4-rocket-league">
                                <span className="name-player4-rocket-league">Dyzer</span>
                                <span className="role-player4-rocket-league">Player</span>
                                <div className="socials-player4-rocket-league">
                                    <Nav.Link href="https://twitter.com/DyzerRl" target="_blank" className="player-twitter">
                                        <img src="img/twitter.png" alt="twitter" height="23" width="29"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
        </>
    );
}

export default Teams;
