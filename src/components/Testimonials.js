import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  // Sample testimonials data (can be fetched from a backend later)
  const [testimonials] = useState([
    { name: 'John Doe', review: 'Great service, super fast internet!', rating: 5 },
    { name: 'Jane Smith', review: 'Very satisfied with the customer support.', rating: 4 },
    { name: 'James Lee', review: 'Good value for money, but the installation took some time.', rating: 3 }
  ]);

  return (
    <div className="testimonials-section">
      <h2>Customer Reviews</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.review}</p>
            <p>Rating: {testimonial.rating} / 5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
