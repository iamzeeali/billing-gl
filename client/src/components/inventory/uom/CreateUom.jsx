import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addUom } from "../../../_actions/uomAction";
import Input from "../../UI/Input";

const CreateUom = ({ addUom, history }) => {
  const [formData, setFormData] = useState({
    uom: "",
    description: "",
  });

  const { uom, description } = formData;

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addUom(formData, history);
  };

  return (
    <main className='container'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item text-small'>
          <Link to='/'>Home</Link>
        </li>
        <li className='breadcrumb-item'>Inventory</li>
        <li className='breadcrumb-item active'>Create UoM</li>
      </ol>
      <div className='title mb-3'>
        <h4 className='float-left'>Create UoM</h4>
        <Link to='/uoms' className='btn btn-primary float-right '>
          UoMs
        </Link>
      </div>

      <form
        className='mt-5'
        onSubmit={(e) => onSubmitHandler(e)}
        className='py-5'
      >
        <div className='bg-secondary p-4'>
          <p className='mx-auto lead text-center pb-2'>
            Unit of Measurement Information
          </p>

          <div className='form-group row'>
            <label className='col-form-label col-sm-1'>UoM</label>
            <div className='col-sm-5'>
              <Input
                className='form-control '
                name='uom'
                type='text'
                placeholder='Enter UoM'
                value={uom}
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

CreateUom.propTypes = {
  addUom: PropTypes.func.isRequired,
};

export default connect(null, { addUom })(withRouter(CreateUom));
