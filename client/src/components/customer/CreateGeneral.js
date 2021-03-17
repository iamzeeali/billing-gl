import React from "react";
import Input from "../UI/Input";

const CreateGeneral = (props) => {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className='p-4 mt-3'>
      <p className='mx-auto font-weight-bold'>General Information</p>
      <div className='general-form border border-primary p-4 '>
        <div className='form-group row '>
          <label className='col-form-label col-sm-1'>Code*</label>
          <div className='col-sm-5'>
            <Input
              className='form-control '
              name='cCode'
              type='text'
              placeholder='Customer Code'
              value={props.cCode}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
              autoFocus
            />
            <small id='code_error' className='text-danger'></small>
          </div>
        </div>

        <div className='form-group row'>
          <label className='col-form-label col-sm-1'>Name*</label>
          <div className='col-sm-5'>
            <Input
              className='form-control '
              name='name'
              type='text'
              placeholder='Business Partner Name / Company'
              value={props.name}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
            <small id='name_error' className='text-danger'></small>
          </div>
          <label className='col-form-label col-sm-1'>Group*</label>
          <div className='col-sm-5'>
            <select
              name='group'
              id=''
              className='form-control '
              value={props.group}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            >
              <option value='' disabled selected hidden>
                Select Customer Group
              </option>
              {props.option}
            </select>
            <small id='group_error' className='text-danger'></small>
          </div>
        </div>

        <div className='form-group row'>
          <label className='col-form-label col-sm-1'>Phone 1</label>
          <div className='col-sm-5'>
            <Input
              className='form-control '
              name='phone1'
              type='text'
              placeholder='Phone 1'
              value={props.phone1}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label className='col-form-label col-sm-1'>Phone 2</label>
          <div className='input-group col-sm-5'>
            <Input
              className='form-control '
              name='phone2'
              type='text'
              placeholder='Phone 2'
              value={props.phone2}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
        </div>

        <div className='form-group row'>
          <label className='col-form-label col-sm-1'>Mobile</label>
          <div className='col-sm-5'>
            <Input
              className='form-control '
              name='mobile'
              type='text'
              placeholder='Mobile No'
              value={props.mobile}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label className='col-form-label col-sm-1'>Email</label>
          <div className='input-group col-sm-5'>
            <Input
              className='form-control '
              name='email'
              type='text'
              placeholder='Email Address'
              value={props.email}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
        </div>

        <div className='form-group row'>
          <label className='col-form-label col-sm-1'>Industry</label>
          <div className='col-sm-5'>
            <Input
              className='form-control '
              name='industry'
              type='text'
              placeholder='Industry'
              value={props.industry}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label className='col-form-label col-sm-1'>Logo</label>
          <div className='input-group col-sm-5'>
            <Input
              className='form-control '
              name='photo'
              type='text'
              placeholder='Enter Customer logo Link'
              value={props.photo}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
        </div>
        <hr />
        <div className='form-group row'>
          <label className='col-form-label col-sm-1'>Name</label>
          <div className='col-sm-5'>
            <Input
              className='form-control '
              name='contactPerson'
              type='text'
              placeholder="Contact Person's Name"
              value={props.contactPerson}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label className='col-form-label col-sm-1'>Phone</label>
          <div className='input-group col-sm-5'>
            <Input
              className='form-control '
              name='contactPersonPhone'
              type='text'
              placeholder="Contact Person's Phone"
              value={props.contactPersonPhone}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
        </div>

        <div className='form-group row'>
          <label className='col-form-label col-sm-1'>Email</label>
          <div className='input-group col-sm-5'>
            <Input
              className='form-control '
              name='contactPersonEmail'
              type='email'
              placeholder="Contact Person's Email"
              value={props.contactPersonEmail}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGeneral;
