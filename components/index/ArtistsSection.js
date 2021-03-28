import { connect } from "react-redux";
import {choseArtist} from '../../redux/artist/artistAction'

const ArtistsSection = (props) => {
    const { choseArtist } = props

    return ( 
        <section className="artists-section">
            <div className="one" title="Billie Eilish" onClick={() => choseArtist(0)} ><p></p></div>
            <div className="two" title="Dua Lipa" onClick={() => choseArtist(1)} ><p></p></div>
            <div className="three" title="Justin Beiber" onClick={() => choseArtist(2)} ><p></p></div>
            <div className="four" title="Pitbull" onClick={() => choseArtist(3)} ><p></p></div>
            <div className="five" title="Selena Gomez" onClick={() => choseArtist(4)} ><p></p></div>
            <div className="six" title="Taylor Swift" onClick={() => choseArtist(5)} ><p></p></div>
            <div className="seven" title="Justin Timberlake" onClick={() => choseArtist(6)} ><p></p></div>
            <div className="eight" title="Enrique Iglesias" onClick={() => choseArtist(7)} ><p></p></div>
            <div className="nine" title="Rihanna" onClick={() => choseArtist(8)} ><p></p></div>
            <div className="ten" title="Shakira" onClick={() => choseArtist(9)} ><p></p></div>
            <div className="eleven" title="Bts" onClick={() => choseArtist(10)} ><p></p></div>
        </section>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        choseArtist: (artistId) => dispatch(choseArtist(artistId))
    }
}

export default connect(null, mapDispatchToProps)(ArtistsSection);