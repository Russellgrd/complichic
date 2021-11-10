import navimg from '../assets/navimg.jpg';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <div className="nav">
            <div className="navMainBox">
                <img className="navimg" src={navimg} alt="butterfly on finger" />
                <ul className="navButtonBox">
                    <li className="navButtonBox-li"><Link className="navButtonBox-li-link" to="about">About</Link></li>
                    <li className="navButtonBox-li"><Link className="navButtonBox-li-link" to="lingerie">Lingerie</Link></li>
                    <li className="navButtonBox-li"><Link className="navButtonBox-li-link" to="contact">Contact us</Link></li>
                </ul>
            </div>            
        </div>
    )
};

export default Nav;