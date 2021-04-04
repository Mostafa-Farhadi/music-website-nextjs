import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  return (
    <div id="home">
      <Head>
        <title>Music Website | Home</title>
        <meta name="keywords" content="Home"/>
        </Head>
          <h1>Listen to Best Musics</h1>
          <Link href="/music">
            <a>LISTEN NOW</a>
          </Link>
    </div>
  );
}

export default Home;
