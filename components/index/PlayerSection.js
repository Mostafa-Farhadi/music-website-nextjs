import { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";

const PlayerSection = (props) => {
    const { Music } = props
    const audioEl = useRef(null)
    const [isPauseActive, setIsPauseActive] = useState(false)
    const [isPlayeActive, setIsPlayeActive] = useState(true)

    useEffect(() => {
        setIsPauseActive(true)
        setIsPlayeActive(false)
    }, [Music])

    const playHandler = () => {
        audioEl.current.play();
        setIsPauseActive(false);
        setIsPlayeActive(true);
    }
    const pauseHandler = () => {
        audioEl.current.pause();
        setIsPauseActive(true);
        setIsPlayeActive(false);
    }

    return ( 
        <section className="player-section">
            {
                Music.loading ? (
                    <div className="Loader">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                ) : (
                    <div className="music" >
                        <img src={`img/cover/${Music.music.picture}.jpg`} alt="artist image"
                            style={{backgroundImage: `linear-gradient(
                                45deg,
                                rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250}) 0%,
                                rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250}) 33.33%,
                                rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250}) 66.66%,
                                rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250}) 100%
                            )`}}

                            />
                        <h3>{Music.music.name}</h3>
                        <div className="play-box" >
                            <audio src={`music/${Music.music.picture}.mp3`} ref={audioEl} loop> </audio>
                            <button className={`button ${isPlayeActive ? "playActive" : "play"}`} onClick={playHandler} ></button>
                            <button className={`button ${isPauseActive ? "pauseActive" : "pause"}`} onClick={pauseHandler} ></button>
                        </div>
                    </div>
                )
            }
        </section>
    );
}


const mapStateToProps = state => {
    return {
        Music: state.Music
    }
}

export default connect(mapStateToProps, null)(PlayerSection);