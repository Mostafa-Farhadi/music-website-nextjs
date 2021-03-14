import Navbar from './Navbar';
import Header from './Header'
import PlayBox from './PlayBox'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Header />
            <div id="content">{ children }</div>
            <PlayBox />
        </div>

    );
}

export default Layout;