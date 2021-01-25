import React from "react";
import "../../../App.css";

import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-wrapper">
      <div className="all-wrapper menu-side with-pattern">
        <div className="auth-box-w">
          <div className="logo-w">
            <a href="index.html">
              <img alt="" src="../public/logo-big.png" />
            </a>
          </div>
          <h4 className="auth-header">Login Form</h4>
          <form action="#">
            <div className="form-group">
              <label for="">Username</label>
              <input
                className="form-control"
                placeholder="Enter your username"
              />
              <div className="pre-icon os-icon os-icon-user-male-circle"></div>
            </div>
            <div className="form-group">
              <label for="">Password</label>
              <input
                className="form-control"
                placeholder="Enter your password"
                type="password"
              />
              <div className="pre-icon os-icon os-icon-fingerprint"></div>
            </div>
            <div className="buttons-w">
              <button className="btn btn-primary">Log me in</button>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" />
                  Remember Me
                </label>
              </div>
            </div>
            <div className=".row-cols-2 buttons-w">
              <div>
                <p>Don't have an account?</p>
              </div>
              <Link to="/Signup">
                <button className="col-12 btn btn-primary">Register</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
