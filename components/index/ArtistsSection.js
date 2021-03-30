import { connect } from "react-redux";
import {choseArtist} from '../../redux/artist/artistAction'

const ArtistsSection = (props) => {
    const { choseArtist } = props

    return ( 
        <section className="artists-section">
            <div className="artist one" title="Billie Eilish" onClick={() => choseArtist(0)} ></div>
            <div className="artist two" title="Dua Lipa" onClick={() => choseArtist(1)} ></div>
            <div className="artist three" title="Justin Beiber" onClick={() => choseArtist(2)} ></div>
            <div className="artist four" title="Pitbull" onClick={() => choseArtist(3)} ></div>
            <div className="artist five" title="Selena Gomez" onClick={() => choseArtist(4)} ></div>
            <div className="artist six" title="Taylor Swift" onClick={() => choseArtist(5)} ></div>
            <div className="artist seven" title="Justin Timberlake" onClick={() => choseArtist(6)} ></div>
            <div className="artist eight" title="Enrique Iglesias" onClick={() => choseArtist(7)} ></div>
            <div className="artist nine" title="Rihanna" onClick={() => choseArtist(8)} ></div>
            <div className="artist ten" title="Shakira" onClick={() => choseArtist(9)} ></div>
            <div className="artist eleven" title="Bts" onClick={() => choseArtist(10)} ></div>
        </section>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        choseArtist: (artistId) => dispatch(choseArtist(artistId))
    }
}

export default connect(null, mapDispatchToProps)(ArtistsSection);