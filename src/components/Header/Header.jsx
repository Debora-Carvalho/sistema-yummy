import './Header.css';
import { FaHamburger } from "react-icons/fa";

const Header = () => {
    return (
      <header className="header">
        <div className='logo-inteira'>
            <FaHamburger />
            <h1>Yummy</h1>
        </div>
      </header>
    );
};

export default Header;