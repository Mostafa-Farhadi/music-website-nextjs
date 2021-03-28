import { connect } from "react-redux";

const AlbumsSection = (props) => {
    return ( 
        <section className="albums-section">
            {
                props.albums.loading ? (
                    <div class="Loader">
                        <div class="rect1"></div>
                        <div class="rect2"></div>
                        <div class="rect3"></div>
                    </div>
                ) : (
                    <ul>
                        <h2>{props.albums.artist.name}</h2>
                        {props.albums.artist.albums.map(album => {
                            return (
                                <li key={album.id}>{album.name}</li>
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
        albums: state.albums
    }
}

export default connect(mapStateToProps, null)(AlbumsSection);