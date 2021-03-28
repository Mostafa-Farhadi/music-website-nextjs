import { connect } from "react-redux";

const AlbumsSection = (props) => {
    const { Artist } = props
    return ( 
        <section className="albums-section">
            {
                Artist.loading ? (
                    <div class="Loader">
                        <div class="rect1"></div>
                        <div class="rect2"></div>
                        <div class="rect3"></div>
                    </div>
                ) : (
                    <ul>
                        <h2>{Artist.artist.name}</h2>
                        {Artist.artist.albums.map(album => {
                            return (
                                <li key={Artist.id}>{album.name}</li>
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsSection);