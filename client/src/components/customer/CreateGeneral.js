import React from "react";

const CreateGeneral = (props) => {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className='p-4 mt-3'>
      <p className='mx-auto font-weight-bold'>General Information</p>
      <div className='general-form border border-primary p-4 '>
        <div class='form-group row '>
          <label class='col-form-label col-sm-1'>Code*</label>
          <div class='col-sm-5'>
            <input
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

        <div class='form-group row'>
          <label class='col-form-label col-sm-1'>Name*</label>
          <div class='col-sm-5'>
            <input
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
          <label class='col-form-label col-sm-1'>Group*</label>
          <div class='col-sm-5'>
            <select
              name='group'
              id=''
              class='form-control '
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

        <div class='form-group row'>
          <label class='col-form-label col-sm-1'>Phone 1</label>
          <div class='col-sm-5'>
            <input
              className='form-control '
              name='phone1'
              type='text'
              placeholder='Phone 1'
              value={props.phone1}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label class='col-form-label col-sm-1'>Phone 2</label>
          <div class='input-group col-sm-5'>
            <input
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

        <div class='form-group row'>
          <label class='col-form-label col-sm-1'>Mobile</label>
          <div class='col-sm-5'>
            <input
              className='form-control '
              name='mobile'
              type='text'
              placeholder='Mobile No'
              value={props.mobile}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label class='col-form-label col-sm-1'>Email</label>
          <div class='input-group col-sm-5'>
            <input
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

        <div class='form-group row'>
          <label class='col-form-label col-sm-1'>Industry</label>
          <div class='col-sm-5'>
            <input
              className='form-control '
              name='industry'
              type='text'
              placeholder='Industry'
              value={props.industry}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label class='col-form-label col-sm-1'>Logo</label>
          <div class='input-group col-sm-5'>
            <input
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
        <div class='form-group row'>
          <label class='col-form-label col-sm-1'>Name</label>
          <div class='col-sm-5'>
            <input
              className='form-control '
              name='contactPerson'
              type='text'
              placeholder="Contact Person's Name"
              value={props.contactPerson}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label class='col-form-label col-sm-1'>Phone</label>
          <div class='input-group col-sm-5'>
            <input
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

        <div class='form-group row'>
          <label class='col-form-label col-sm-1'>Email</label>
          <div class='input-group col-sm-5'>
            <input
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
