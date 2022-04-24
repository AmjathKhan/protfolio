import * as React  from 'react';
import './About.css';
//import {toast} from 'react-toastify';

function About() {


  // const getLogs = () => {
  //   axios
  //   .get('http://localhost:5001/logs')
  //   .then(res => {
  //     setLogs(res.data as Log[])
  //   })
  //  // .catch((error) => toast.error(error.message))
  // }

  // const addLog = () => {
  //   const log: Log = {
  //     code: 'AB42',
  //     callstack: [],
  //     description: 'A log',
  //     deviceInfo: {
  //       device: '?',
  //       os: '?',
  //       browser: navigator.appName,
  //       os_version: '?',
  //       userAgent: navigator.userAgent,
  //     },
  //     identifier: '42',
  //     message: 'Added a log',
  //     type: 0,
  //   }

  //   axios
  //   .post('http://localhost:5001/log', log)
  //   .then(() => {
  //     getLogs()
  //    // toast.success('Toast added')
  //   })
  //  // .catch((error) => toast.error(error.message))
  // }

  return (
    <main id="main">
  <section id="about" className="about">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>About</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <img src="assets/img/profile-img.jpg" className="img-fluid" />
      </div>
      <div className="col-lg-8 pt-4 pt-lg-0 content">
        <h3>UI/UX Designer &amp; Web Developer.</h3>
        <p className="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <ul>
              <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>1 May 1995</span></li>
              <li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span>www.example.com</span></li>
              <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+123 456 7890</span></li>
              <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>New York, USA</span></li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
              <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>30</span></li>
              <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>Master</span></li>
              <li><i className="bi bi-chevron-right" /> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
              <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
            </ul>
          </div>
        </div>
        <p>
          Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
          Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
        </p>
      </div>
    </div>
  </div>
</section>





   <div>
  <section id="facts" className="facts">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Facts</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="bi bi-emoji-smile" />
            <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
            <p>Happy Clients</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
          <div className="count-box">
            <i className="bi bi-journal-richtext" />
            <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
            <p>Projects</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="bi bi-headset" />
            <span data-purecounter-start={0} data-purecounter-end={1463} data-purecounter-duration={1} className="purecounter" />
            <p>Hours Of Support</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="bi bi-award" />
            <span data-purecounter-start={0} data-purecounter-end={25} data-purecounter-duration={1} className="purecounter" />
            <p>Awards</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="skills" className="skills section-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Skills</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="row skills-content">
        <div className="col-lg-6">
          <div className="progress">
            <span className="skill">HTML <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="progress">
            <span className="skill">CSS <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="progress">
            <span className="skill">JavaScript <i className="val">75%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="progress">
            <span className="skill">PHP <i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="progress">
            <span className="skill">WordPress/CMS <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="progress">
            <span className="skill">Photoshop <i className="val">55%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


</main>
  );
}

export default About;
