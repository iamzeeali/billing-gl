import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCustomerGroup } from "../../_actions/customerGroupAction";
import Input from "../UI/Input";

const CreateCustomerGroup = ({ addCustomerGroup, history }) => {
  const [formData, setFormData] = useState({
    group: "",
    description: "",
  });

  const { group, description } = formData;

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addCustomerGroup(formData, history);
  };

  return (
    <main className='container'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item text-small'>
          <Link to='/'>Home</Link>
        </li>
        <li className='breadcrumb-item'>Customer/Supplier</li>
        <li className='breadcrumb-item active'>Create Customer Group</li>
      </ol>
      <div className='title mb-3'>
        <h4 className='float-left'>Create Customer Group</h4>
        <Link to='/customer-groups' className='btn btn-primary float-right '>
          Customer Groups
        </Link>
      </div>

      <form
        className='mt-5'
        onSubmit={(e) => onSubmitHandler(e)}
        className='py-5'
      >
        <div className='bg-secondary p-4'>
          <p className='mx-auto lead text-center pb-2'>
            Customer Group Information
          </p>

          <div className='form-group row'>
            <label className='col-form-label col-sm-1'>Group</label>
            <div className='col-sm-5'>
              <Input
                className='form-control '
                name='group'
                type='text'
                placeholder='Enter Customer Group'
                value={group}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
                required
                autoFocus
              />
            </div>

            <label className='col-form-label col-sm-1'>Description</label>
            <div className='col-sm-5'>
              <textarea
                className='form-control '
                name='description'
                type='text'
                placeholder='Description'
                value={description}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
              />
            </div>
          </div>
          <button
            disabled={false}
            type='submit'
            className='btn btn-primary btn-block'
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

CreateCustomerGroup.propTypes = {
  addCustomerGroup: PropTypes.func.isRequired,
};

export default connect(null, { addCustomerGroup })(
  withRouter(CreateCustomerGroup)
);
