const Header = () => {
    return ( 
        <header id="header" >
            <form action="">
                <img src="/img/header/search.png" alt=""/>
                <input type="search" placeholder="Search"></input>
            </form>
            <p>Language</p>
            <img src="/img/header/avatar.png" alt="avatar"/>
            <p>Admin</p>
        </header>
    );
}

export default Header;