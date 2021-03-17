import Header from './Header'

const Layout = ({ children }) => {
    return (
        <div id="wrapper">
            <Header />
            <div id="content">{ children }</div>
        </div>

    );
}

export default Layout;