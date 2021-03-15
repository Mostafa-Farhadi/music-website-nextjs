import MusicBox from '../components/Free Music Page/MusicBox'

const Home = () => {
  return ( 
    <div id="homepage">
      <div className="head"></div>

      <MusicBox
        nameOfClass = "top-chart"
        title="Top Chart" 
        information="Listen top chart" 
      />

      <MusicBox
        nameOfClass = "new-releases"
        title="New Releases" 
        information="Listen recently release music" 
      />

      <MusicBox
        nameOfClass = "featured-artists"
        title="Featured Artists" 
        information="Select you best to listen" 
      />

      <div className="foot"></div>
    </div>
  );
}

export default Home;
