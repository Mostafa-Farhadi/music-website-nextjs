import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { connect } from "react-redux";
import {choseArtist} from '../redux/artist/artistAction';
import { useRef } from 'react';
import { useRouter } from 'next/router';

const Header = (props) => {
    const { choseArtist } = props;
    const [artists, setArtists] = useState([]);
    const [suggests, setSuggests] = useState([]);
    const [enteredText, setEnteredText] = useState("");
    const router = useRouter();
    const searchBox = useRef(null);
    const [enabledSearchBox, setEnabledSearchBox] = useState("false");
    const searchInput = useRef(null);

    useEffect(() => {
        if (router.pathname !== "/music") {
            setEnabledSearchBox("disabled-search-box")
            setSuggests([]);
            searchInput.current.value = "";
        } else {
            setEnabledSearchBox("")
        }
    }, [router.pathname]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/musics")
        .then((result) => {
            let artistsArr = [];
            result.data.forEach(artist => {
                artistsArr.push(artist.name)
            });
            setArtists(artistsArr);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const suggestHandler = event => {
        const text = event.target.value.toLowerCase();
        if (text !== "") {
            let suggestionsArr = [];
            for (let i = 0; i < artists.length; i++) {
                if (artists[i].slice(0, text.length).toLowerCase() === text) {
                    suggestionsArr.push([artists[i].replace(artists[i].substr(0, text.length), ""), i]);
                    setEnteredText(artists[i].slice(0, text.length));
                } else {
                    suggestionsArr;
                }
            }
            setSuggests(suggestionsArr);
        } else {
            setSuggests([]);
        }
    };

    const artistSelection = (artistId) => {
        choseArtist(artistId);
        setSuggests([]);
        searchInput.current.value = "";
    }

    return ( 
        <header id="header">
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/music">
                        <a>Music</a>
                    </Link>
                </li>
            </ul>
            <div>
                <form className={`search-box ${enabledSearchBox}`} autoComplete="off" ref={searchBox}>
                    <img src="img/icon/search.png" alt="search" className="search-logo"/>
                    <input 
                        type="search" 
                        name="search" 
                        id="search" 
                        className="search" 
                        placeholder="Search now..."
                        onChange={event => suggestHandler(event)}
                        ref={searchInput}
                    />
                </form>
                <div className="suggestions">
                    {suggests.map((suggest, index) => (
                            <a key={index} onClick={() => artistSelection(suggest[1])}><span>{enteredText}</span>{suggest[0]}</a>
                    ))}
                </div>
            </div>
        </header>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        choseArtist: (artistId) => dispatch(choseArtist(artistId))
    }
}

export default connect(null, mapDispatchToProps)(Header);