import React, { Fragment } from "react";
import Input from "../UI/Input";

const CreateAccount = (props) => {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div className='p-4'>
      <p className='mx-auto font-weight-bold'>Account Information</p>
      <div className='account-form border border-primary p-4'>
        <div className='form-group row'>
          <label className='col-form-label col-sm-1'>GSTIN</label>
          <div className='col-sm-5'>
            <Input
              className='form-control '
              name='gstin'
              type='text'
              placeholder='GSTI Number'
              value={props.gstin}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label className='col-form-label col-sm-1'>Credit Limit</label>
          <div className='input-group col-sm-5'>
            <Input
              className='form-control '
              name='creditLimit'
              type='text'
              placeholder='Credit Limit'
              value={props.creditLimit}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
        </div>

        <div className='form-group  row'>
          <label className='col-form-label col-sm-1'>PAN</label>
          <div className='col-sm-5'>
            <Input
              className='form-control '
              name='pan'
              type='text'
              placeholder='PAN'
              value={props.pan}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label className='col-form-label col-sm-1'>Payment Terms</label>
          <div className='input-group col-sm-5'>
            <Input
              className='form-control '
              name='paymentTerms'
              type='text'
              placeholder='Payment Terms'
              value={props.paymentTerms}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>

          <label className='col-form-label col-sm-1'>Bank Name</label>
          <div className='input-group col-sm-5'>
            <Input
              className='form-control '
              name='bank'
              type='text'
              placeholder='Bank'
              value={props.bank}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>

          <label className='col-form-label col-sm-1'>Account No.</label>
          <div className='input-group col-sm-5'>
            <Input
              className='form-control '
              name='accountNo'
              type='number'
              placeholder='Account Number'
              value={props.accountNo}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
        </div>
        <button
          disabled={props.disabled}
          type='submit'
          className='btn btn-primary btn-block'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
