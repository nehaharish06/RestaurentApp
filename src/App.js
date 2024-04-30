// RestaurantApp.js

import React, { useState, useEffect } from 'react';
import './index.css';

// Menu Component
const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu data from an API or JSON file
    // For simplicity, let's assume menu data is hardcoded here
    const mockMenuData = [
      { id: 1, name: 'Butter Chicken', category: 'Starter', description: 'Delicious butter chicken .', image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/04/butter-chicken-recipe.jpg' },
      
      { id: 2, name: 'Mutton Biriyani', category: 'Main Course', description: 'Delicious mutton biriyani .', image: 'https://hattyfoods.com/wp-content/uploads/2020/07/MUTTON-BIRYANI-RECIPE1.jpg' },
      {id: 2, name: 'Chocolate Cake ', category: 'Dessert', description: 'Pure chocolate indulgence.', image: 'https://theobroma.in/cdn/shop/files/HIGHRESChocolateOrangePastry-Square-green_1.jpg?v=1694815876' },// Add more items as needed
    ];

    setMenuItems(mockMenuData);
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      {menuItems.map(item => (
        <div key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Category: {item.category}</p>
        </div>
      ))}
    </div>
  );
};

// Services Component
const Services = () => {
  return (
    <div>
      <h2>Services</h2>
      <p>Explore our special services:</p>
      <ul>
        <li>Reservations</li>
        <li>Delivery options</li>
        <li>Special features</li>
      </ul>
    </div>
  );
};

// FeedbackForm Component
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (newRating) => {
    setFormData({ ...formData, rating: newRating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send feedback to the server
    console.log(formData);
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Rating:
          <input type="number" name="rating" value={formData.rating} onChange={handleInputChange} />
        </label>
        <br />
        {/* You can use a rating component library for a better UI for ratings */}
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

// Reservation Component
const Reservation = () => {
  const [reservationData, setReservationData] = useState({
    date: '',
    time: '',
    guests: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reservation submission, e.g., send reservation details to the server
    console.log(reservationData);
  };

  return (
    <div>
      <h2>Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" name="date" value={reservationData.date} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Time:
          <input type="time" name="time" value={reservationData.time} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Number of Guests:
          <input type="number" name="guests" value={reservationData.guests} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Book Table</button>
      </form>
    </div>
  );
};

// Main RestaurantApp Component
const RestaurantApp = () => {
  return (
    <div className="button-container">
      <button className="button-section">
        <Menu />
      </button>
      <button className="button-section">
        <Services />
      </button>
      <button className="button-section">
        <FeedbackForm />
      </button>
      <button className="button-section">
        <Reservation />
      </button>
    </div>
  );
};

export default RestaurantApp;
