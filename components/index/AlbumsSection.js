import { connect } from "react-redux";

const AlbumsSection = (props) => {
    const { Artist } = props
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
                                <li key={album.id} >{album.name}</li>
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

export default connect(mapStateToProps, null)(AlbumsSection);