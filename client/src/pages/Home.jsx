import React from 'react';
import {Link} from 'react-router-dom'
function Home(){
  return (
    <div>
      <div className="navbar">
        <div className="container flex">
          <h1 className="nav">campusConnect</h1>
          <nav>
            <ul>
              <button className="btn btn-outline">
                <Link to="/login" style={{ color: 'white' }}>
                  Login
                </Link>
              </button>
              <button className="btn btn-outline">
                <Link to="/register" style={{ color: 'white' }}>
                  Register
                </Link>
              </button>
            </ul>
          </nav>
        </div>
      </div>
      {/* Showcase */}
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>Helping Hands</h1>
            <p>Personalized PWA for Helping VIT's Students</p>
            <a href="feature.html" className="btn btn-outline">
              Read more
            </a>
          </div>
        </div>
      </section>
      <section className="languages">
        <h2 className="md text-center my-2"></h2>
        <div className="container flex">
          <div className="card">
            <h4>BikeBuddy</h4>
            <a href="/login">
              {' '}
              <img src="https://img.icons8.com/external-others-pike-picture/100/null/external-Sportbike-Motorcycle-motorcycle-others-pike-picture.png" />
            </a>
          </div>
          <div className="card">
            <h4>Study</h4>
            <a href="/login">
              <img src="https://img.icons8.com/stickers/100/null/online-group-studying.png" />
            </a>
          </div>
          <div className="card">
            <h4>Buy/Sell</h4>
            <a href="/login">
              {' '}
              <img src="https://img.icons8.com/external-microdots-premium-microdot-graphic/99/null/external-instruments-medical-healthcare-vol1-microdots-premium-microdot-graphic.png" />
            </a>
          </div>
          <div className="card">
            <h4>Roomtmate</h4>
            <a href="/login">
              <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/100/null/external-roommate-university-flaticons-flat-flat-icons-2.png" />
            </a>
          </div>
          <div className="card">
            <h4>Disscusion Forum</h4>
            <a href="/login">
              {' '}
              <img src="https://img.icons8.com/office/100/null/communication.png" />
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer bg-dark my-5">
        <div className="container grid grid-3">
          <div>
            <h2>VITConnect</h2>
            <p>Copyright &copy; 2023</p>
          </div>
          <nav>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Home;
