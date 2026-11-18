
import { Instagram, Linkedin, Envelope } from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="footer">

      {/* Social media and contact links */}
      <div className="footer-links">

        {/* Instagram */}
        <a
          href="https://www.instagram.com/evas_innovations/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my design Instagram"
        >
          <Instagram size={24} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/evaoconnor66/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
        >
          <Linkedin size={24} />
        </a>

        {/* Email */}
        <a
          href="mailto:evaoconnor66@gmail.com"
          aria-label="Email me"
        >
          <Envelope size={24} />
        </a>

      </div>

      {/* Copyright */}
      <p>© 2026 Eva O'Connor</p>

    </footer>
  );
}

export default Footer;
