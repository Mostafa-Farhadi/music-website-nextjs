import Link from 'next/link'

const Navbar = () => {
    return (
        <nav id="navbar">
            <Link href="/"><img className="logo" src="/img/navbar images/musicLogo.png" alt="music logo"/></Link>
            <img className="menu-icon" src="/img/navbar images/menu.png" alt="menu"/>

            <h3>BROWSER MUSIC</h3>
            <img className="icons" src="img/navbar images/home.png" alt="menu"/>
            <Link href="/">Home</Link>
            <img className="icons" src="img/navbar images/genres.png" alt="menu"/>
            <Link href="/Genres">Genres</Link>
            <img className="icons" src="img/navbar images/free music.png" alt="menu"/>
            <Link href="/FreeMusic">Free Music</Link>
            <img className="icons" src="img/navbar images/artist.png" alt="menu"/>
            <Link href="/Artist">Artist</Link>
            <img className="icons" src="img/navbar images/Stations.png" alt="menu"/>
            <Link href="/Stations">Stations</Link>

            <h3>YOUR MUSIC</h3>
            <img className="icons" src="img/navbar images/analytics.png" alt="menu"/>
            <Link href="/Analytics">Analytics</Link>
            <img className="icons" src="img/navbar images/favorites.png" alt="menu"/>
            <Link href="/Favorites">Favorites</Link>
            <img className="icons" src="img/navbar images/history.png" alt="menu"/>
            <Link href="/History">History</Link>

            <h3>MUSIC EVENTS</h3>
            <img className="icons" src="img/navbar images/events.png" alt="menu"/>
            <Link href="/Events">Events</Link>
            <img className="icons" src="img/navbar images/event details.png" alt="menu"/>
            <Link href="/EventDetails">Event Details</Link>
            <img className="icons" src="img/navbar images/add events.png" alt="menu"/>
            <Link href="/AddEvent">Add Event</Link>

            <h3>EXTRA AGES</h3>
            <img className="icons" src="img/navbar images/error.png" alt="menu"/>
            <Link href="/Error">Error</Link>
            <img className="icons" src="img/navbar images/blank.png" alt="menu"/>
            <Link href="/Blank">Blank</Link>
            
        </nav>
    )
}

export default Navbar