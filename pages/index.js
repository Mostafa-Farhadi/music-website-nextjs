import Head from 'next/head'
import ArtistsSection from '../components/index/ArtistsSection'
import AlbumsSection from '../components/index/AlbumsSection'
import MusicsSection from '../components/index/MusicsSection'
import PlayerSection from '../components/index/PlayerSection'

const Home = () => {

  return ( 
    <div id="home">
      <Head>
        <title>Music Website | Home</title>
        <meta name="keywords" content="Music"/>
      </Head>
      <ArtistsSection />
      <AlbumsSection />
      <MusicsSection />
      <PlayerSection />
    </div>
  );
}

export default Home;
