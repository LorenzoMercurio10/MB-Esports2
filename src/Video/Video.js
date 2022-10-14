import './Video.css'

function Video() {
    return ( 
        <>
            <section id="home">
                <div className="video ratio ratio-16x9">
                    <video autoPlay={true} muted controls={false} loop>
                        <source src="img/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>    
                </div>
            </section> 
        </>
    )
}

export default Video;
