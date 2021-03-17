
const Header = () => {
    return ( 
        <header id="header" >
            <img src="img/header/logo.png" alt="logo" className="logo"/>
            <img src="img/header/search.png" alt="search" className="search"/>
            <input type="search" name="search" id="search" placeholder="Search now..."/>
        </header>
    );
}

export default Header;