
const Header = () => {
    return ( 
        <header id="header" >
            <img src="img/icon/logo.png" alt="logo" className="logo"/>
            <div className="search-box">
                <img src="img/icon/search.png" alt="search" className="search"/>
                <input type="search" name="search" id="search" placeholder="Search now..."/>
                </div>
        </header>
    );
}

export default Header;