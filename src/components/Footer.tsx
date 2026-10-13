function Footer() {
  return (
    <footer className="footer">
      {/* contact links that will show at the bottom of every page */}
      <div className="footer-links">
        <a href="mailto:evaoconnor66@gmail.com">Email</a>

        <a
          href="https://www.linkedin.com/in/evaoconnor66/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <p>© 2026 Eva O'Connor</p>
    </footer>
  );
}

export default Footer;