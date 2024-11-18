import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Packages from './Packages';  // Import Packages component
// import Products from './Products';  // Import Products component
import './Home.css'; // Importing the updated CSS file
import Coverage from './Coverage';
import Testimonials from './Testimonials';

function Home() {
  return (
    <div>
      <section className="home-section">
        <div className="header-text">
          <h4>Internet Great Plan</h4>
        </div>

        <div className="content-container">
          <h1>Get Network services</h1>
          <p>
            Introducing AT&T’s Choice Package, giving you the most free services available in the
            industry at a rate you can't afford to ignore.
          </p>

          <div className="actions">
            <button className="discover-more">Discover more</button>
            {/* Add link to "Get your connection" button */}
            <Link to="/packages">
              <button className="get-connection">Get your connection</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages">
        <Packages />
      </section>

      {/* Products Section */}
      {/* <section id="products">
        <Products />
      </section> */}
       {/* Coverage Section */}
       <section id="coverage">
        <Coverage />
      </section>
      <section id="coverage">
        <Testimonials />
      </section>
    </div>
  );
}

export default Home;
