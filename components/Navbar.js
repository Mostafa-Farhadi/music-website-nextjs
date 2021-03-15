import Link from 'next/link'

const Navbar = () => {
    return (
        <nav id="navbar">
            <Link href="/"><img className="logo" src="/img/navbar images/musicLogo.png" alt="music logo"/></Link>
            <img className="menu-icon" src="/img/navbar images/menu.png" alt="menu"/>

            <h3>BROWSER MUSIC</h3>
            <img className="icons" src="img/navbar images/home.png" alt="menu"/>
            <Link href="/"><a>Home</a></Link>
            <img className="icons" src="img/navbar images/genres.png" alt="menu"/>
            <Link href="/Genres"><a>Genres</a></Link>
            <img className="icons" src="img/navbar images/free music.png" alt="menu"/>
            <Link href="/FreeMusic"><a>Free Music</a></Link>
            <img className="icons" src="img/navbar images/artist.png" alt="menu"/>
            <Link href="/Artist"><a>Artist</a></Link>
            <img className="icons" src="img/navbar images/Stations.png" alt="menu"/>
            <Link href="/Stations"><a>Stations</a></Link>

            <h3>YOUR MUSIC</h3>
            <img className="icons" src="img/navbar images/analytics.png" alt="menu"/>
            <Link href="/Analytics"><a>Analytics</a></Link>
            <img className="icons" src="img/navbar images/favorites.png" alt="menu"/>
            <Link href="/Favorites"><a>Favorites</a></Link>
            <img className="icons" src="img/navbar images/history.png" alt="menu"/>
            <Link href="/History"><a>History</a></Link>

            <h3>MUSIC EVENTS</h3>
            <img className="icons" src="img/navbar images/events.png" alt="menu"/>
            <Link href="/Events"><a>Events</a></Link>
            <img className="icons" src="img/navbar images/event details.png" alt="menu"/>
            <Link href="/EventDetails"><a>Event Details</a></Link>
            <img className="icons" src="img/navbar images/add events.png" alt="menu"/>
            <Link href="/AddEvent"><a>Add Event</a></Link>

            <h3>EXTRA AGES</h3>
            <img className="icons" src="img/navbar images/error.png" alt="menu"/>
            <Link href="/Error"><a>Error</a></Link>
            <img className="icons" src="img/navbar images/blank.png" alt="menu"/>
            <Link href="/Blank"><a>Blank</a></Link>
            
        </nav>
    )
}

export default Navbar