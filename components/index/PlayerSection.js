import { connect } from "react-redux";

const PlayerSection = (props) => {
    const { Music } = props
    console.log(Music);

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