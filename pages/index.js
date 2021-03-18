import Head from 'next/head'
import Artist from '../components/index/Artist'
import Album from '../components/index/Album'
import Music from '../components/index/Music'
import Player from '../components/index/Player'

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
