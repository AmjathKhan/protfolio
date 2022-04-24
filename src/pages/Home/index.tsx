import * as React  from 'react';
import './Home.css';

const Home = () => (
  <>
 <section id="hero" className="d-flex flex-column justify-content-center">
  <div className="container" data-aos="zoom-in" data-aos-delay={100}>
    <h1>Brandon Johnson</h1>
    <p>I&apos;m <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer" /></p>
    <div className="social-links">
      <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
      <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
      <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
      <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
      <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
    </div>
  </div>
</section>

</>
);

export default Home;
