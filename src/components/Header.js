import '../styles/Header.css'
import NavBar from './Navbar';


const Header = () => {
    return (
        <header className="Header">
            <h1 className="Title">Sofianos Lampropoulos</h1>
                
                    
        <NavBar/>
            {/* Additional header elements can go here */}
        </header>
    );
}

export default Header;