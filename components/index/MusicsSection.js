import { connect } from "react-redux";
import { choseMusic } from "../../redux/musicPlayer/musicAction";

const MusicsSection = (props) => {
    const { Album, choseMusic } = props

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
                                <li key={music.id} onClick={() => choseMusic(music)} >{music.name}</li>
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

const mapDispatchToProps = dispatch => {
    return {
        choseMusic: (music) => dispatch(choseMusic(music))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicsSection);