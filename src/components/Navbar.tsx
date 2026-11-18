import { Link } from "react-router";
import { useState } from "react";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
return (
  <header className="navbar">
    {/* my name works as the link back to the home page */}
    <Link to="/" className="logo">
      Eva O'Connor
    </Link>

{/* Hamburger button for mobile phones */}
<button
  className="menu-toggle"
  type="button"
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  aria-expanded={menuOpen}
  aria-controls="mobile-navigation"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
</button>

    {/* links to the main pages of my portfolio */}
    
<nav
  id="mobile-navigation"
  className={`nav-links ${menuOpen ? "nav-open" : ""}`}
>


<Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
<Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
<Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
<Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

    </nav>
  </header>
);
}

export default Navbar;