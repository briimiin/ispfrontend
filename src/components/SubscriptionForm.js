import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './SubscriptionForm.css';

function SubscriptionForm() {
  const { packageId } = useParams();
  const [areaOfResidence, setAreaOfResidence] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://brimin.onrender.com//subscribe', {
        package_id: packageId,
        area_of_residence: areaOfResidence,
        phone_number: phoneNumber,
        email,
        house_number: houseNumber
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form className="subscription-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Subscribe to Package</h2>
        
        <label className="form-label">Area of Residence:</label>
        <input
          className="form-input"
          value={areaOfResidence}
          onChange={(e) => setAreaOfResidence(e.target.value)}
          required
        />

        <label className="form-label">Phone Number:</label>
        <input
          className="form-input"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="form-label">House Number:</label>
        <input
          className="form-input"
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
          required
        />

        <button className="form-button" type="submit" disabled={loading}>
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>

        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
}

export default SubscriptionForm;
