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
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                    </div>
                ) : (
                    <div className="music" >
                        <img src={`img/cover/${Music.music.picture}.jpg`} alt="artist image"
                            style={{backgroundColor: `rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250})`}} />
                        <h3 className="song-name">{Music.music.name}</h3>
                        <div className="play-box" >
                            <audio src={`music/${Music.music.picture}.mp3`} ref={audioEl}> </audio>
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