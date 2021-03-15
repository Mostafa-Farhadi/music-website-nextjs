import Head from 'next/head'

import TopChart from '../components/Free Music Page/TopChart'
import NewReleases from '../components/Free Music Page/NewReleases'
import FeaturedArtists from '../components/Free Music Page/FeaturedArtists'

const Home = () => {

  return ( 
    <div id="homepage">

      <Head>
        <title>Music Website | Home</title>
        <meta name="keywords" content="Music"/>
      </Head>

      <header className="head"></header>

      <TopChart
        nameOfClass = "top-chart"
        title="Top Chart" 
        information="Listen top chart" 
      />

      <NewReleases
        nameOfClass = "new-releases"
        title="New Releases" 
        information="Listen recently release music" 
      />

      <FeaturedArtists
        nameOfClass = "featured-artists"
        title="Featured Artists" 
        information="Select you best to listen" 
      />

      <footer className="foot"></footer>
    </div>
  );
}

export default Home;
