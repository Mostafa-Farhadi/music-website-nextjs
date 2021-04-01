import Link from 'next/link'

const Header = () => {
    return ( 
        <header id="header" >
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/music">
                        <a>Music</a>
                    </Link>
                </li>
            </ul>
            <div className="search-box">
                <img src="img/icon/search.png" alt="search" className="search-logo"/>
                <input type="search" name="search" id="search" className="search" placeholder="Search now..."/>
            </div>
        </header>
    );
}

export default Header;