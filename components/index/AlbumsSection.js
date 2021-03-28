import { connect } from "react-redux";
import {choseAlbum} from '../../redux/album/albumAction'

const AlbumsSection = (props) => {
    const { Artist, choseAlbum } = props
    return ( 
        <section className="albums-section">
            {
                Artist.loading ? (
                    <div className="Loader">
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                    </div>
                ) : (
                    <ul>
                        <h2>{Artist.artist.name}</h2>
                        {Artist.artist.albums.map(album => {
                            return (
                                <li key={album.id} onClick={() => choseAlbum(Artist.artist.id, album.id)} >{album.name}</li>
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
        Artist: state.Artist
    }
}

const mapDispatchToProps = dispatch => {
    return {
        choseAlbum: (ArtistId, AlbumId) => dispatch(choseAlbum(ArtistId, AlbumId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsSection);