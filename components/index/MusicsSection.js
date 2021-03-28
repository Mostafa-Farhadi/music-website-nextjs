import { connect } from "react-redux";

const MusicsSection = (props) => {
    const { Album } = props
    return ( 
        <section className="musics-section">
            {
                Album.loading ? (
                    <div className="Loader">
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                    </div>
                ) : (
                    <ul>
                        <h2>{Album.album.name}</h2>
                        {Album.album.musics.map(music => {
                            return (
                                <li key={music.id} >{music}</li>
                            )
                        })}
                    </ul>
                )
            }
        </section>
    );
}

const mapStateToProps = state => {
    return {
        Album: state.Album
    }
}

export default connect(mapStateToProps, null)(MusicsSection);