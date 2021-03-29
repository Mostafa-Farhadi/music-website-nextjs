
const Header = () => {
    return ( 
        <header id="header" >
            <img src="img/icon/logo.png" alt="logo" className="logo"/>
            <img src="img/icon/search.png" alt="search" className="search"/>
            <input type="search" name="search" id="search" placeholder="Search now..."/>
        </header>
    );
}

export default Header;