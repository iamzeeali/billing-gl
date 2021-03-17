import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../_actions/authAction";
import Spinner from "../UI/Spinner";
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return window.location.assign("/dashboard");
  }

  return (
    <Fragment>
      {false ? (
        <Spinner />
      ) : (
        <div className='container animated bounceInDown my-5'>
          <div className='row'>
            <div className='col-md-12 py-5 d-flex flex-column justify-content-center'>
              <div className='row'>
                <div className='col-lg-6 col-md-8 mx-auto'>
                  <div className='card shadow'>
                    <div className='card-header'>
                      <h1 className='mb-0 text-center lead'>
                        Hi! Login to Continue...
                      </h1>
                    </div>
                    <div className='card-body'>
                      <form className='form' onSubmit={(e) => onSubmit(e)}>
                        <div className='form-group'>
                          <input
                            type='email'
                            className=' form-control form-control-lg rounded-1'
                            name='email'
                            value={email}
                            placeholder='Enter Email'
                            onChange={(e) => onChange(e)}
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            type='password'
                            className='form-control form-control-lg rounded-1'
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={(e) => onChange(e)}
                            required
                          />
                          <div className='invalid-feedback'>
                            Enter your password too!
                          </div>
                        </div>
                        <div>
                          <div className='form-group'>
                            <div className='custom-control custom-checkbox'>
                              <input
                                type='checkbox'
                                className='custom-control-input'
                                id='customCheck2'
                              />
                              <label
                                className='custom-control-label'
                                for='customCheck2'
                              >
                                Remember me?
                              </label>
                            </div>
                          </div>
                        </div>
                        <button
                          type='submit'
                          className='btn btn-primary btn-lg btn-block'
                          id='btnLogin'
                        >
                          Login
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
