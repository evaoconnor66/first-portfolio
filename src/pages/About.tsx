import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function About() {
    return(
<div className="about-page">
{/* puts my reusable navbar on the about page */}
<Navbar />

<main className="about-content">
    <section className="about-intro">
        <p className="section-lable">About</p>
        <h1>About Me</h1>
        <p className="about-description">
            I am a Product Design & Technology graduate currently studying a
  Master's in Interaction & Experience Design at the University of
  Limerick.
        </p>

       <p className="about-description">
  I enjoy combining research, creativity and hands-on making to create
  thoughtful products and experiences centred around people.
       </p>
        </section>
    </main>
    
{/* puts my reusable footer at the bottom of the about page */}
<Footer />
</div>

    );
}
export default About;