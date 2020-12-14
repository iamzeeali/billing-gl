import React from "react";

const CreateAddress = (props) => {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className=" p-4">
      <p className="mx-auto font-weight-bold">Address Information</p>

      <div className="address-form border border-primary p-4">
        <div class="form-group row">
          <label class="col-form-label col-sm-1">Ship to Country</label>
          <div class="col-sm-3">
            <input
              className="form-control "
              name="shipToCountry"
              type="text"
              placeholder="Country"
              value={props.shipToCountry}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label class="col-form-label col-sm-1">Ship to State</label>
          <div class="input-group col-sm-3">
            <input
              className="form-control "
              name="shipToState"
              type="text"
              placeholder="State"
              value={props.shipToState}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label class="col-form-label col-sm-1">Ship to City</label>
          <div class="input-group col-sm-3">
            <input
              className="form-control "
              name="shipToCity"
              type="text"
              placeholder="City"
              value={props.shipToCity}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-form-label col-sm-1">Ship to Address</label>
          <div class="col-sm-3">
            <textarea
              readOnly={props.readOnly}
              className="form-control "
              name="shipToAddress"
              type="text"
              placeholder="Address"
              value={props.shipToAddress}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label class="col-form-label col-sm-1">Ship to Phone</label>
          <div class="input-group col-sm-3">
            <input
              className="form-control "
              name="shipToPhone"
              type="text"
              placeholder="Phone"
              value={props.shipToPhone}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label class="col-form-label col-sm-1">Ship to Email</label>
          <div class="input-group col-sm-3">
            <input
              className="form-control "
              name="shipToEmail"
              type="email"
              placeholder="Email"
              value={props.shipToEmail}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
        </div>

        <hr />

        <div class="form-group row">
          <label class="col-form-label col-sm-1">Bill to Country</label>
          <div class="col-sm-3">
            <input
              className="form-control "
              name="billToCountry"
              type="text"
              placeholder="Country"
              value={props.billToCountry}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label class="col-form-label col-sm-1">Bill to State</label>
          <div class="input-group col-sm-3">
            <input
              className="form-control "
              name="billToState"
              type="text"
              placeholder="State"
              value={props.billToState}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label class="col-form-label col-sm-1">Bill to City</label>
          <div class="input-group col-sm-3">
            <input
              className="form-control "
              name="billToCity"
              type="text"
              placeholder="City"
              value={props.billToCity}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-form-label col-sm-1">Bill to Address</label>
          <div class="col-sm-3">
            <textarea
              className="form-control "
              name="billToAddress"
              type="text"
              placeholder="Address"
              value={props.billToAddress}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label class="col-form-label col-sm-1">Bill to Phone</label>
          <div class="input-group col-sm-3">
            <input
              className="form-control "
              name="billToPhone"
              type="text"
              placeholder="Phone"
              value={props.billToPhone}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label class="col-form-label col-sm-1">Bill to Email</label>
          <div class="input-group col-sm-3">
            <input
              className="form-control "
              name="billToEmail"
              type="email"
              placeholder="Email"
              value={props.billToEmail}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAddress;
