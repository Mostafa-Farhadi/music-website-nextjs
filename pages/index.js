import Head from 'next/head'
import Artist from '../components/index/ArtistsSection'
import Album from '../components/index/AlbumsSection'
import Music from '../components/index/MusicsSection'
import Player from '../components/index/PlayerSection'

const Home = () => {

  return ( 
    <div id="home">
      <Head>
        <title>Music Website | Home</title>
        <meta name="keywords" content="Music"/>
      </Head>
      <Artist />
      <Album />
      <Music />
      <Player />
    </div>
  );
}

export default Home;
