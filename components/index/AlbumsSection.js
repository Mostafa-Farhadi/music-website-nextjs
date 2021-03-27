import { connect } from "react-redux";

const AlbumsSection = (props) => {
    return ( 
        <section className="albums-section">
            {
                props.albums.loading ? (
                    <div class="loader">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="shadow"></div>
                        <div class="shadow"></div>
                        <div class="shadow"></div>
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