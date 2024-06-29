import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    username: '',
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: 'top-left',
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: 'top-right',
      autoClose: 4000, // 4 seconds auto-close
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", inputValue); // Log the form values
    try {
      const { data } = await axios.post(
        'http://localhost:4000/signup',
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log("Response data:", data); // Log the response data
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        // Redirect to confirmation page after success
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Error during form submission:", error); // Log any errors
      handleError("An error occurred during signup. Please try again.");
    }
    setInputValue({
      email: '',
      password: '',
      username: '',
    });
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;

