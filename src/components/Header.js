import '../styles/Header.css'
import NavBar from './Navbar';


const Header = () => {
    return (
        <header className="Header">
            <img src="/images/Black and White Elegant Minimal Monogram Personal Logo.png" alt="Sofianos Lampropoulos Logo" className="PersonalLogo" />
            <h2 className='id'>Sofianos Lampropoulos</h2>
            
                
                    
        <NavBar/>
            {/* Additional header elements can go here */}
        </header>
    );
}

export default Header;