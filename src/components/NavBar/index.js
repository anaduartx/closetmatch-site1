import { Link } from 'react-scroll';
import "./style.css";

export default function NavBar() {
  return (
    <nav className="nav-bar-container">

      <div className="nav-logo-container">
        <img className="nav-logo-image" src={require('../../assets/logo.png')} alt="logo"></img>
      </div>

      <div className='nav-link-container'>
        <Link className='nav-bar-link' offset={-100} to="home" spy={true} smooth={true}>Home</Link>
        <Link className='nav-bar-link' offset={-100} to="quemsomos" spy={true} smooth={true}>QuemSomos</Link>
        <Link className='nav-bar-link' offset={-100} to="comofunciona" spy={true} smooth={true}>ComoFunciona</Link>
        <Link className='nav-bar-link' offset={-100} to="faq" spy={true} smooth={true}>Faq</Link>
        <Link className='nav-bar-link' offset={-100} to="tutorial" spy={true} smooth={true}>Tutorial</Link>
        {/* <Link className='nav-bar-link' to="contact" spy={true} smooth={true}>CONTACT</Link> */}
        <Link className='nav-bar-link' offset={-100} to="download" spy={true} smooth={true}>Download</Link>
      </div>
    </nav>
  );
}
