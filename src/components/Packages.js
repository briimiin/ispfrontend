import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Packages.css';

function Packages() {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate(); // Set up navigation

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get('https://brimin.onrender.com/packages');
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    fetchPackages();
  }, []);

  return (
    <section className="packages-container">
      {packages.map((pkg) => (
        <div className="package-card" key={pkg.id}>
          <h3>{pkg.name}</h3>
          <p>{pkg.description}</p>
          <p className="price">Ksh{pkg.price}/month</p>
          <button className='subscribe-btn'   onClick={() => navigate(`/subscribe/${pkg.id}`)}>Subscribe</button>
        </div>
      ))}
    </section>
  );
}

export default Packages;
