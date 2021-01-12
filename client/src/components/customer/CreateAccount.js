import React, { Fragment } from "react";

const CreateAccount = (props) => {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div className="p-4">
      <p className="mx-auto font-weight-bold">Account Information</p>
      <div className="account-form border border-primary p-4">
        <div class="form-group row">
          <label class="col-form-label col-sm-1">GSTIN</label>
          <div class="col-sm-5">
            <input
              className="form-control "
              name="gstin"
              type="text"
              placeholder="GSTI Number"
              value={props.gstin}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label class="col-form-label col-sm-1">Credit Limit</label>
          <div class="input-group col-sm-5">
            <input
              className="form-control "
              name="creditLimit"
              type="text"
              placeholder="Credit Limit"
              value={props.creditLimit}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
        </div>

        <div class="form-group  row">
          <label class="col-form-label col-sm-1">PAN</label>
          <div class="col-sm-5">
            <input
              className="form-control "
              name="pan"
              type="text"
              placeholder="PAN"
              value={props.pan}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
          <label class="col-form-label col-sm-1">Payment Terms</label>
          <div class="input-group col-sm-5">
            <input
              className="form-control "
              name="paymentTerms"
              type="text"
              placeholder="Payment Terms"
              value={props.paymentTerms}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>

          <label class="col-form-label col-sm-1">Bank Name</label>
          <div class="input-group col-sm-5">
            <input
              className="form-control "
              name="bank"
              type="text"
              placeholder="Bank"
              value={props.bank}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>

          <label class="col-form-label col-sm-1">Account No.</label>
          <div class="input-group col-sm-5">
            <input
              className="form-control "
              name="accountNo"
              type="number"
              placeholder="Account Number"
              value={props.accountNo}
              onChange={props.onChangeHandler}
              readOnly={props.readOnly}
            />
          </div>
        </div>
        <button
          disabled={props.disabled}
          type="submit"
          className="btn btn-primary btn-block"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
