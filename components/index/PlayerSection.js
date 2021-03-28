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
                    <h1>{Music.music.name}</h1>
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