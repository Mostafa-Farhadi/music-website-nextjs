import Link from 'next/link'

const Navbar = () => {
    return (
        <nav id="navbar">
            <Link href="/"><img className="logo" src="/img/musicLogo.png" alt="music logo"/></Link>
            <img className="menu-icon" src="img/menu.png" alt="menu"/>

            <h3>BROWSER MUSIC</h3>
            <img className="icons" src="img/menu.png" alt="menu"/>
            <Link href="/FreeMusic"><a>Free Music</a></Link>
            <img className="icons" src="img/menu.png" alt="menu"/>
            <Link href="/Artist"><a>Artist</a></Link>
            <img className="icons" src="img/menu.png" alt="menu"/>
            <Link href="/Station"><a>Station</a></Link>

            <h3>YOUR MUSIC</h3>
            <img className="icons" src="img/menu.png" alt="menu"/>
            <Link href="/Analytics"><a>Analytics</a></Link>
            <img className="icons" src="img/menu.png" alt="menu"/>
            <Link href="/Favorites"><a>Favorites</a></Link>
            <img className="icons" src="img/menu.png" alt="menu"/>
            <Link href="/History"><a>History</a></Link>

            <h3>MUSIC EVENTS</h3>
            <img className="icons" src="img/menu.png" alt="menu"/>
            <Link href="/Events"><a>Events</a></Link>
            <img className="icons" src="img/menu.png" alt="menu"/>
            <Link href="/EventDetails"><a>Event Details</a></Link>
            <img className="icons" src="img/menu.png" alt="menu"/>
            <Link href="/AddEvent"><a>Add Event</a></Link>

            <h3>EXTRA AGES</h3>
            <img className="icons" src="img/menu.png" alt="menu"/>
            <Link href="/Error"><a>Error</a></Link>
            <img className="icons" src="img/menu.png" alt="menu"/>
            <Link href="/Blank"><a>Blank</a></Link>
            
        </nav>
    )
}

export default Navbar