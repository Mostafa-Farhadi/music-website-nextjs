import Head from 'next/head'
import ArtistsSection from '../components/index/ArtistsSection'
import AlbumsSection from '../components/index/AlbumsSection'
import MusicsSection from '../components/index/MusicsSection'
import PlayerSection from '../components/index/PlayerSection'

import { Provider } from "react-redux";
import store from '../redux/store';

const Music = () => {
    return (
        <Provider store={store} >
        <div id="music">
            <Head>
            <title>Music Website | Music</title>
            <meta name="keywords" content="Music"/>
            </Head>
            <ArtistsSection />
            <AlbumsSection />
            <MusicsSection />
            <PlayerSection />
        </div>
        </Provider>
    );
}

export default Music;
