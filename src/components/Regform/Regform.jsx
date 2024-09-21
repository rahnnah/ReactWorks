import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Regform.css';

export const Regform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [postCode, setPostCode] = useState('');
  const [company, setCompany] = useState('');
  const [annualRevenue, setAnnualRevenue] = useState('');
  const [retailLocations, setRetailLocations] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [error, setError] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://storezan.com/webapi/STORE/category');
        setCategories(response.data.category);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // Reset error message

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://storezan.com/webapi/api/Account/Register',
        new URLSearchParams({
          Email: email,
          Password: password,
          ConfirmPassword: confirmPassword,
          FirstName: firstName,
          LastName: lastName,
          PhoneNumber: '', // Add phone number field if needed
          city: city,
          state: state,
          country: country,
          pcode: postCode,
          address: '', // Add address field if needed
          Companyname: company,
          annualinstore: annualRevenue,
          retaillocation: retailLocations,
          categoryid: categoryId,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      console.log('Registration successful:', response.data);
      // Navigate to login or another page
      window.location.href = '/login';  // Example of redirection
    } catch (err) {
      console.error('Registration failed:', err);
      setError('Registration failed. Please check your details and try again.');
    }
  };

  return (
    <div className="form-wrapper">
      <h1>Register Here</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="emailId"
              name="emailId"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="postCode"
              name="postCode"
              placeholder="Post Code"
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <select
                id="categoryId"
                name="categoryId"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category.CATID} value={category.CATID}>
                    {category.CATNAME}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="annualRevenue">Choose your Annual In-store Revenue</label>
            <select
              id="annualRevenue"
              name="annualRevenue"
              value={annualRevenue}
              onChange={(e) => setAnnualRevenue(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="0">Just getting started</option>
              <option value="1">₹1 - ₹250,000</option>
              <option value="2">₹250,001 - ₹500,000</option>
              <option value="3">₹500,001 - ₹1,000,000</option>
              <option value="4">₹1,000,001 - ₹5,000,000</option>
              <option value="5">₹5,000,000+</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="retailLocations">Select number of Current Retail Locations</label>
            <select
              id="retailLocations"
              name="retailLocations"
              value={retailLocations}
              onChange={(e) => setRetailLocations(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="1">1</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="login-link">
          <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
      </div>
    </div>
  );
};
