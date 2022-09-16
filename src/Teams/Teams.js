import './Teams.css'
import Nav from 'react-bootstrap/Nav';

function Teams() {
    return (

        <>
        <section id="teams">
            <div className="teams-block">
                <img className="teams-image-background" src="img/sfondoteams.jpg" alt="about-background" width="100%"></img>
                <div className="teams-nav">
                    <p className="team-header" >TEAMS</p>
                        <Nav className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link className="team-fifa" href="#fifa">
                                    <img className="foto-white-fifa" src="img/fifa_white.png"  width="200" height="200" />
                                    <img className="foto-green-fifa" src="img/fifa_verde.png"  width="200" height="200" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="team-rocket-league" href="#rocket-league">
                                    <img className="foto-rocket-league" src="img/rocket_bianco.png"  width="200" height="200" />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                </div>
            </div>
        </section>
        <section id="#fifa">
            <article className="fifa-players">
                <div className="card-logo1">
                    <img className="player1-fifa" src="img/omino_stilizzato.png" alt="player-1" width="350" height="350"></img>
                    <div className="nick-player1-fifa">
                        <span className="name-player1-fifa">Nick-Player 1</span>
                        <span className="role-player1-fifa">Ruolo</span>
                        <span className="real-name-player1-fifa">Nome e Cognome</span>
                        <div className="socials-player1-fifa">
                            <Nav.Link href="https://www.instagram.com/mb__esport/" target="_blank" className="player-instagram">
                                <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                            </Nav.Link>
                            <Nav.Link href="https://twitter.com/mb__esport" target="_blank" className="player-twitter">
                                <img src="img/twitter.png" alt="twitter" height="23" width="29"></img>
                            </Nav.Link>
                            <Nav.Link href="https://www.twitch.tv/cerbero_podcast" target="_blank" className="player-twitch">
                                <img src="img/twitch.png" alt="twitch" height="23" width="25"></img>
                            </Nav.Link>
                            <Nav.Link href="https://www.tiktok.com/@alessialanza" target="_blank" className="player-tiktok">
                                <img src="img/tiktok.png" alt="tiktok" height="23" width="25"></img>
                            </Nav.Link>
                        </div>
                    </div>
                </div> 
                <div className="card-logo2">
                    <img className="player2-fifa" src="img/omino_stilizzato.png" alt="player-2" width="350" height="350"></img>
                    <div className="nick-player1-fifa">
                        <span className="name-player1-fifa">Nick-Player 2</span>
                        <span className="role-player1-fifa">Ruolo</span>
                        <span className="real-name-player1-fifa">Nome e Cognome</span>
                        <div className="socials-player1-fifa">
                            <Nav.Link href="https://www.instagram.com/mb__esport/" target="_blank" className="player-instagram">
                                <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                            </Nav.Link>
                            <Nav.Link href="https://twitter.com/mb__esport" target="_blank" className="player-twitter">
                                <img src="img/twitter.png" alt="twitter" height="23" width="29"></img>
                            </Nav.Link>
                            <Nav.Link href="https://www.twitch.tv/cerbero_podcast" target="_blank" className="player-twitch">
                                <img src="img/twitch.png" alt="twitch" height="23" width="25"></img>
                            </Nav.Link>
                            <Nav.Link href="https://www.tiktok.com/@alessialanza" target="_blank" className="player-tiktok">
                                <img src="img/tiktok.png" alt="tiktok" height="23" width="25"></img>
                            </Nav.Link>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section id="#rocket-league">
            <article className="rocket-league-players">
                <div className="card-logo1">
                    <img className="player1-rocket-league" src="img/omino_stilizzato.png" alt="player-1" width="350" height="350"></img>
                    <div className="nick-player1-rocket-league">
                        <span className="name-player1-rocket-league">Nick-Player 1</span>
                        <span className="role-player1-rocket-league">Ruolo</span>
                        <span className="real-name-player1-rocket-league">Nome e Cognome</span>
                        <div className="socials-player1-rocket-league">
                            <Nav.Link href="https://www.instagram.com/mb__esport/" target="_blank" className="player-instagram">
                                <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                            </Nav.Link>
                            <Nav.Link href="https://twitter.com/mb__esport" target="_blank" className="player-twitter">
                                <img src="img/twitter.png" alt="twitter" height="23" width="29"></img>
                            </Nav.Link>
                            <Nav.Link href="https://www.twitch.tv/cerbero_podcast" target="_blank" className="player-twitch">
                                <img src="img/twitch.png" alt="twitch" height="23" width="25"></img>
                            </Nav.Link>
                            <Nav.Link href="https://www.tiktok.com/@alessialanza" target="_blank" className="player-tiktok">
                                <img src="img/tiktok.png" alt="tiktok" height="23" width="25"></img>
                            </Nav.Link>
                        </div>
                    </div>
                    
                </div> 
                <div className="card-logo2">
                    <img className="player2-rocket-league" src="img/omino_stilizzato.png" alt="player-2" width="350" height="350"></img>
                    <div className="nick-player2-rocket-league">
                        <span className="name-player2-rocket-league">Nick-Player 2</span>
                        <span className="role-player2-rocket-league">Ruolo</span>
                        <span className="real-name-player2-rocket-league">Nome e Cognome</span>
                        <div className="socials-player2-rocket-league">
                            <Nav.Link href="https://www.instagram.com/mb__esport/" target="_blank" className="player-instagram">
                                <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                            </Nav.Link>
                            <Nav.Link href="https://twitter.com/mb__esport" target="_blank" className="player-twitter">
                                <img src="img/twitter.png" alt="twitter" height="23" width="29"></img>
                            </Nav.Link>
                            <Nav.Link href="https://www.twitch.tv/cerbero_podcast" target="_blank" className="player-twitch">
                                <img src="img/twitch.png" alt="twitch" height="23" width="25"></img>
                            </Nav.Link>
                            <Nav.Link href="https://www.tiktok.com/@alessialanza" target="_blank" className="player-tiktok">
                                <img src="img/tiktok.png" alt="tiktok" height="23" width="25"></img>
                            </Nav.Link>
                        </div>
                    </div>
                </div>
                <div className="card-logo3">
                    <img className="player3-rocket-league" src="img/omino_stilizzato.png" alt="player-3" width="350" height="350"></img>
                    <div className="nick-player3-rocket-league">
                        <span className="name-player3-rocket-league">Nick-Player 3</span>
                        <span className="role-player3-rocket-league">Ruolo</span>
                        <span className="real-name-player3-rocket-league">Nome e Cognome</span>
                        <div className="socials-player3-rocket-league">
                            <Nav.Link href="https://www.instagram.com/mb__esport/" target="_blank" className="player-instagram">
                                <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                            </Nav.Link>
                            <Nav.Link href="https://twitter.com/mb__esport" target="_blank" className="player-twitter">
                                <img src="img/twitter.png" alt="twitter" height="23" width="29"></img>
                            </Nav.Link>
                            <Nav.Link href="https://www.twitch.tv/cerbero_podcast" target="_blank" className="player-twitch">
                                <img src="img/twitch.png" alt="twitch" height="23" width="25"></img>
                            </Nav.Link>
                            <Nav.Link href="https://www.tiktok.com/@alessialanza" target="_blank" className="player-tiktok">
                                <img src="img/tiktok.png" alt="tiktok" height="23" width="25"></img>
                            </Nav.Link>
                        </div>
                    </div>
                </div>
                <div className="card-logo4">
                    <img className="player4-rocket-league" src="img/omino_stilizzato.png" alt="player-4" width="350" height="350"></img>
                    <div className="nick-player4-rocket-league">
                        <span className="name-player4-rocket-league">Nick-Player 4</span>
                        <span className="role-player4-rocket-league">Ruolo</span>
                        <span className="real-name-player4-rocket-league">Nome e Cognome</span>
                        <div className="socials-player4-rocket-league">
                            <Nav.Link href="https://www.instagram.com/mb__esport/" target="_blank" className="player-instagram">
                                <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                            </Nav.Link>
                            <Nav.Link href="https://twitter.com/mb__esport" target="_blank" className="player-twitter">
                                <img src="img/twitter.png" alt="twitter" height="23" width="29"></img>
                            </Nav.Link>
                            <Nav.Link href="https://www.twitch.tv/cerbero_podcast" target="_blank" className="player-twitch">
                                <img src="img/twitch.png" alt="twitch" height="23" width="25"></img>
                            </Nav.Link>
                            <Nav.Link href="https://www.tiktok.com/@alessialanza" target="_blank" className="player-tiktok">
                                <img src="img/tiktok.png" alt="tiktok" height="23" width="25"></img>
                            </Nav.Link>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        </>
    );
}

export default Teams;
