import React from 'react';
import PropTypes from 'prop-types';

const SignUpForm = ({ handleSignUp, errors, user, onChange }) => (
  <div className = "container">
    <div className="wrapper">
      <form name="SignUp_Form" onSubmit={handleSignUp} className="form-signin">
        <h3 className="form-signin-heading">Welcome Back! Please Sign Up</h3>
        <hr className="colorgraph" />
        <input
          type="text"
          className="form-control"
          name="email"
          onChange={onChange}
          value={user.email}
          placeholder="Email"
          required=""
          autoFocus=""
        />
        <input
          type="text"
          className="form-control"
          name="name"
          onChange={onChange}
          value={user.name}
          placeholder="Name"
          required=""
          autoFocus=""
        />
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={onChange}
          value={user.password}
          placeholder="Password"
          required=""
        />
        <button className="btn btn-lg btn-primary btn-block"  name="Submit" value="Register" type="Submit">Register</button>
      </form>
    </div>
  </div>
);

SignUpForm.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  user: PropTypes.object.isRequired,
}

export default SignUpForm;
