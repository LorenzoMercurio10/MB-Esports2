import './About.css';

function About() {
    return (
    <>
        <section id="about">
            <div className="about-background">
                <div className="col-xs-6 col-md-8 about-text">
                    <h1 className="about-header">ABOUT</h1>
                    <p className="about-history"><span class="mb-esports">MB Esport</span> nasce dal desiderio di congiungere il futuro col passato, rimarcando una territorialità fortemente storica come quella di Monza e della Brianza, pronta per affacciarsi al futuro del mondo dell’intrattenimento competitivo elettronico.</p>
                    <p className="about-history">Ripercorrendo la storia di Carlo Magno, re dei longobardi, colui che ha indossato la corona ferrea, simbolo del re d’Italia, il nostro team concorrerà per il podio dei maggiori titoli esport come <span class="fifa-23">FIFA 23</span> e <span class="rocket-league">Rocket League</span>.</p>    
                </div>
            </div>
        </section>
    </>
    );
}

export default About;