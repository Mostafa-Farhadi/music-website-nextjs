import Head from 'next/head'

const Home = () => {

  return ( 
    <div id="home">

      <Head>
        <title>Music Website | Home</title>
        <meta name="keywords" content="Music"/>
      </Head>

      <section className="cover"><h2>cover</h2></section>
      <section className="artist"><h2>artist</h2></section>
      <section className="album"><h2>album</h2></section>
      <section className="music"><h2>music</h2></section>
      <section className="player"><h2>player</h2></section>

    </div>
  );
}

export default Home;
