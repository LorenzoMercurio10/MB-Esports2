import './Video.css'

function Video() {
    return ( 
        <section id="home">
            <div>
                <div className="video ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/e-O-cDxHJ-0?&autoplay=1&mute=1&controls=0&loop=1" title="YouTube video" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
} 

export default Video;
