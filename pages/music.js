import Head from 'next/head'
import ArtistsSection from '../components/index/ArtistsSection'
import AlbumsSection from '../components/index/AlbumsSection'
import MusicsSection from '../components/index/MusicsSection'
import PlayerSection from '../components/index/PlayerSection'

const Music = () => {
    return (
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
    );
}

export default Music;
