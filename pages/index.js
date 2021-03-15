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

      <div className="head"></div>

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

      <div className="foot"></div>
    </div>
  );
}

export default Home;
