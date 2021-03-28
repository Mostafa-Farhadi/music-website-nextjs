import { connect } from "react-redux";
import {choseArtist} from '../../redux/artist/artistAction'

const ArtistsSection = (props) => {
    const { choseArtist } = props

    return ( 
        <section className="artists-section">
            <div className="one" onClick={() => choseArtist("Eilish")} ><p></p></div>
            <div className="two" onClick={() => choseArtist("Lipa")} ><p></p></div>
            <div className="three" onClick={() => choseArtist("Beiber")} ><p></p></div>
            <div className="four" onClick={() => choseArtist("Pitbull")} ><p></p></div>
            <div className="five" onClick={() => choseArtist("Gomez")} ><p></p></div>
            <div className="six" onClick={() => choseArtist("Swift")} ><p></p></div>
            <div className="seven" onClick={() => choseArtist("Timberlake")} ><p></p></div>
            <div className="eight" onClick={() => choseArtist("Iglesias")} ><p></p></div>
            <div className="nine" onClick={() => choseArtist("Rihanna")} ><p></p></div>
            <div className="ten" onClick={() => choseArtist("Shakira")} ><p></p></div>
            <div className="eleven" onClick={() => choseArtist("Bts")} ><p></p></div>
        </section>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        choseArtist: (artist) => dispatch(choseArtist(artist)),
        
    }
}

export default connect(null, mapDispatchToProps)(ArtistsSection);