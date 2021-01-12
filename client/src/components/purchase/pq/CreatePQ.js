import React, { useState, useEffect } from "react";
import { addItem } from "../../../_actions/itemAction";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CreatePQ = ({ history }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    //eslint-diable-next-line
  }, []);

  const {} = formData;

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {};

  return (
    <main className='container'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item text-small'>
          <Link to='/'>Home</Link>
        </li>
        <li className='breadcrumb-item'>Purchase</li>
        <li className='breadcrumb-item active'>Purchase Quotation</li>
        <li className='breadcrumb-item active'>Create PQ</li>
      </ol>
      <div className='title mb-3'>
        <h4 className='float-left'>Create PQ</h4>
        <Link to='/purchase-quotation' className='btn btn-primary float-right '>
          P. Quotations
        </Link>
      </div>

      <br />

      <form className='mt-5' onSubmit={(e) => onSubmitHandler(e)}></form>
    </main>
  );
};

CreatePQ.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(withRouter(CreatePQ));
