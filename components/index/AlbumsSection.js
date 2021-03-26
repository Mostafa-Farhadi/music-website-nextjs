import { connect } from "react-redux";

const AlbumsSection = (props) => {
    return ( 
        <section className="albums-section"><h2>{props.artist}</h2></section>
    );
}

const mapStateToProps = state => {
    return {
        artist: state.artist.albumesName
    }
}

export default connect(mapStateToProps, null)(AlbumsSection);