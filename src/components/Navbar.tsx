import { Link } from "react-router";

function Navbar() {
return (
  <header className="navbar">
    {/* my name works as the link back to the home page */}
    <Link to="/" className="logo">
      Eva O'Connor
    </Link>

    {/* links to the main pages of my portfolio */}
    <nav className="nav-links">
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);
}

export default Navbar;