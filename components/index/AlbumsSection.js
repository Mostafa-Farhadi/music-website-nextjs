import { connect } from "react-redux";

const AlbumsSection = (props) => {
    return ( 
        <section className="albums-section">
            {
                props.albums.loading ? (
                    <div>
                        <h2>{props.albums.albumesName}</h2>
                        <h2>Loading...</h2>
                    </div>
                ) : (
                    <ul>
                        <h2>{props.albums.albumesName.name}</h2>
                        {props.albums.albumesName.albums.map(album => {
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
        albums: state.artist
    }
}

export default connect(mapStateToProps, null)(AlbumsSection);