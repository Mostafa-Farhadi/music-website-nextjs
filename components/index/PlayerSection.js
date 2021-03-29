import { useRef } from "react";
import { connect } from "react-redux";

const PlayerSection = (props) => {
    const { Music } = props
    const audioEl = useRef(null)


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
                        <img src={`img/cover/${Music.music.picture}.jpg`} alt="" 
                            style={{borderColor: `rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250})`}} />
                        <h3>{Music.music.name}</h3>
                        <div className="play-box" >
                            <audio src={`music/${Music.music.picture}.mp3`} ref={audioEl}> </audio>
                            <button className="play" onClick={() => audioEl.current.play()} >Play</button>
                            <button className="pause" onClick={() => audioEl.current.pause()} >Pause</button>
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