import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="contact-page">
{/* puts my reusable navbar on the contact page */}
<Navbar />

<main className="contact-content">
{/* main introduction to my contact page */}
<section className="contact-intro">
  <p className="section-label">Contact</p>

  <h1>Let's Work Together</h1>

  <p>
    If you would like to discuss a project, opportunity or collaboration,
    feel free to get in touch.
  </p>
</section>
{/* ways to contact me */}
<section className="contact-links">
  <a href="mailto:evaoconnor66@gmail.com">
    Email
  </a>

  <a
    href="https://www.linkedin.com/in/evaoconnor66/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
</section>
</main>

{/* puts my reusable footer at the bottom of the contact page */}
<Footer />

    </div>
  );
}

export default Contact;