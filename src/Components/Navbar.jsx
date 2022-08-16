import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Jenish</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="About" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="Skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="scroll-projects" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <Link to="Contact" spy={true} smooth={true}>
          <button className="button n-button satoshi">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
