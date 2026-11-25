import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Instagram, Linkedin, Envelope } from "react-bootstrap-icons";
import signature from "../assets/signature.png";

function Contact() {
  return (
    <div className="contact-page">

      {/* Reusable navigation bar */}
      <Navbar />

      <main className="contact-content">

        {/* Two-column contact layout */}
        <div className="contact-grid">

          {/* Left column - introduction */}
          <section className="contact-intro">

            <p className="section-label">Get in touch</p>

            <h1>Let's Create <span>Something Together.</span></h1>

            <p className="contact-description">
              I'm always interested in new design opportunities,
              creative collaborations and meaningful conversations.
              If you have something in mind, I'd love to hear from you.
            </p>

            {/* Location and availability */}
            <div className="contact-info">

              <p>Based in Limerick, Ireland</p>

              <p className="contact-availability">
                <span className="availability-dot"></span>
                Open to new opportunities
              </p>
{/* My personal handwritten signature */}
<img
  src={signature}
  alt="Eva O'Connor handwritten signature"
  className="contact-signature"
/>
            </div>

          </section>

{/* Right column - contact card */}
<section className="contact-card">

  <h2>Let's Connect</h2>

  {/* Email */}
  <a
    className="contact-method"
    href="mailto:evaoconnor66@gmail.com"
  >
    <Envelope size={28} className="contact-icon" aria-hidden="true" />

    <div>
      <h3>Email</h3>
      <p>evaoconnor66@gmail.com</p>
    </div>
  </a>

  {/* LinkedIn */}
  <a
    className="contact-method"
    href="https://www.linkedin.com/in/evaoconnor66/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin size={28} className="contact-icon" aria-hidden="true" />

    <div>
      <h3>LinkedIn</h3>
      <p>Connect professionally</p>
    </div>
  </a>

  {/* Instagram */}
  <a
    className="contact-method"
    href="https://www.instagram.com/evas_innovations/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram size={28} className="contact-icon" aria-hidden="true" />

    <div>
      <h3>Instagram</h3>
      <p>Follow my creative work</p>
    </div>
  </a>

</section>

        </div>

        {/* Closing design statement */}
        <section className="contact-statement">
          <p>Good design starts with a conversation.</p>
        </section>

      </main>

      {/* Reusable footer */}
      <Footer />

    </div>
  );
}

export default Contact;