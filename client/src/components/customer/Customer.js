import React, { useState, useEffect } from "react";
import General from "./CreateGeneral";
import Address from "./CreateAddress";
import Account from "./CreateAccount";
import { getCustomer, editCustomer } from "../../_actions/customerAction";
import { getCustomerGroups } from "../../_actions/customerGroupAction";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Customer = ({
  getCustomer,
  editCustomer,
  getCustomerGroups,
  customer,
  customerGroups,
  match,
  loading,
  history,
}) => {
  let [stepData, setStepData] = useState({
    currentStep: 1,
    readOnly: true,
    disabled: true,
  });

  let { readOnly, disabled } = stepData;
  const [formData, setFormData] = useState({
    cCode: "",
    name: "",
    group: "",
    phone1: "",
    phone2: "",
    mobile: "",
    email: "",
    photo: "",
    industry: "",

    contactPerson: "",
    contactPersonPhone: "",
    contactPersonEmail: "",
    shipToCountry: "",
    shipToState: "",
    shipToCity: "",
    shipToAddress: "",
    shipToPhone: "",
    shipToEmail: "",
    billToCountry: "",
    billToState: "",
    billToCity: "",
    billToAddress: "",
    billToPhone: "",
    billToEmail: "",

    gstin: "",
    creditLimit: "",
    pan: "",
    paymentTerms: "",
    active: "",
  });

  useEffect(() => {
    getCustomer(match.params.id);
    getCustomerGroups();
    setFormData({
      cCode: loading || !customer ? "" : customer.cCode,
      name: loading || !customer ? "" : customer.name,
      group: loading || !customer ? "" : customer.group,
      phone1: loading || !customer ? "" : customer.phone1,
      phone2: loading || !customer ? "" : customer.phone2,
      mobile: loading || !customer ? "" : customer.mobile,
      email: loading || !customer ? "" : customer.email,
      photo: loading || !customer ? "" : customer.photo,
      industry: loading || !customer ? "" : customer.industry,
      contactPerson: loading || !customer ? "" : customer.contactPerson,
      contactPersonPhone:
        loading || !customer ? "" : customer.contactPersonPhone,
      contactPersonEmail:
        loading || !customer ? "" : customer.contactPersonEmail,
      shipToCountry: loading || !customer ? "" : customer.shipToCountry,
      shipToState: loading || !customer ? "" : customer.shipToState,
      shipToCity: loading || !customer ? "" : customer.shipToCity,
      shipToAddress: loading || !customer ? "" : customer.shipToAddress,
      shipToPhone: loading || !customer ? "" : customer.shipToPhone,
      shipToEmail: loading || !customer ? "" : customer.shipToEmail,
      billToCountry: loading || !customer ? "" : customer.billToCountry,
      billToState: loading || !customer ? "" : customer.billToState,
      billToCity: loading || !customer ? "" : customer.billToCity,
      billToAddress: loading || !customer ? "" : customer.billToAddress,
      billToPhone: loading || !customer ? "" : customer.billToPhone,
      billToEmail: loading || !customer ? "" : customer.billToEmail,
      gstin: loading || !customer ? "" : customer.gstin,
      creditLimit: loading || !customer ? "" : customer.creditLimit,
      pan: loading || !customer ? "" : customer.pan,
      paymentTerms: loading || !customer ? "" : customer.paymentTerms,
      bank: loading || !customer ? "" : customer.bank,
      accountNo: loading || !customer ? "" : customer.accountNo,
      active: loading || !customer ? "" : customer.active,
    });
    //eslint-disable-next-line
  }, [loading, getCustomer, getCustomerGroups]);

  const {
    cCode,
    name,
    group,
    phone1,
    phone2,
    mobile,
    email,
    photo,
    industry,
    contactPerson,
    contactPersonPhone,
    contactPersonEmail,
    shipToCountry,
    shipToState,
    shipToCity,
    shipToAddress,
    shipToPhone,
    shipToEmail,
    billToCountry,
    billToState,
    billToCity,
    billToAddress,
    billToPhone,
    billToEmail,
    gstin,
    creditLimit,
    pan,
    paymentTerms,
    bank,
    accountNo,
    active,
  } = formData;

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onToggle = (e) => {
    setFormData({ ...formData, active: !active });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    editCustomer(formData, match.params.id, history);
  };

  const editForm = (e) => {
    setStepData({ ...stepData, readOnly: false, disabled: false });
  };

  const editButton = () => {
    if (readOnly === true) {
      return (
        <button
          className='btn btn-warning my-1 float-left'
          type='button'
          onClick={(e) => editForm(e)}
        >
          Click to Edit
        </button>
      );
    }
    return null;
  };

  const groupOptions = customerGroups.map((cg) => (
    <option key={cg._id} value={cg.group}>
      {cg.group}
    </option>
  ));
  return (
    <main className='container'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item text-small'>
          <Link to='/'>Home</Link>
        </li>
        <li className='breadcrumb-item'>Customer/Supplier</li>
        <li className='breadcrumb-item active'>Create Customer</li>
      </ol>
      <div className='title mb-3'>
        <h4 className=''>{name && name}</h4>
        <img src={photo ? photo : ""} alt='' width='200px' />
        <Link to='/customers' className='btn btn-primary float-right '>
          Customers
        </Link>
      </div>
      <br />
      {editButton()}

      <form style={{ paddingTop: "40px" }} onSubmit={(e) => onSubmitHandler(e)}>
        {!readOnly && (
          <div class='form-group'>
            <div class='custom-control custom-radio'>
              <input
                type='radio'
                value={active}
                id='customRadio1'
                name='active'
                class='custom-control-input'
                onChange={(e) => onToggle(e)}
                checked={active ? true : false}
              />
              <label class='custom-control-label' for='customRadio1'>
                Active
              </label>
            </div>
            <div class='custom-control custom-radio'>
              <input
                type='radio'
                value={active}
                id='customRadio2'
                name='active'
                class='custom-control-input'
                onChange={(e) => onToggle(e)}
                checked={!active ? true : false}
              />
              <label class='custom-control-label' for='customRadio2'>
                Inactive
              </label>
            </div>
          </div>
        )}
        <General
          readOnly={readOnly}
          currentStep={1}
          onChangeHandler={(e) => onChangeHandler(e)}
          cCode={cCode}
          group={group}
          name={name}
          phone1={phone1}
          phone2={phone2}
          mobile={mobile}
          email={email}
          photo={photo}
          option={groupOptions}
          industry={industry}
          contactPerson={contactPerson}
          contactPersonPhone={contactPersonPhone}
          contactPersonEmail={contactPersonEmail}
        />
        <br />
        <Address
          readOnly={readOnly}
          currentStep={2}
          onChangeHandler={(e) => onChangeHandler(e)}
          shipToCountry={shipToCountry}
          shipToState={shipToState}
          shipToCity={shipToCity}
          shipToAddress={shipToAddress}
          shipToPhone={shipToPhone}
          shipToEmail={shipToEmail}
          billToCountry={billToCountry}
          billToState={billToState}
          billToCity={billToCity}
          billToAddress={billToAddress}
          billToPhone={billToPhone}
          billToEmail={billToEmail}
        />
        <br />

        <Account
          readOnly={readOnly}
          currentStep={3}
          onChangeHandler={(e) => onChangeHandler(e)}
          gstin={gstin}
          creditLimit={creditLimit}
          pan={pan}
          paymentTerms={paymentTerms}
          bank={bank}
          accountNo={accountNo}
          disabled={disabled}
        />

        <br />
      </form>
    </main>
  );
};

const mapStateToProps = (state) => ({
  customer: state.customer.customer,
  customerGroups: state.customerGroup.customerGroups,
  loading: state.customer.loading,
});

Customer.propTypes = {
  getCustomer: PropTypes.func.isRequired,
  editCustomer: PropTypes.func.isRequired,
  getCustomerGroups: PropTypes.func.isRequired,
  customer: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  getCustomer,
  editCustomer,
  getCustomerGroups,
})(withRouter(Customer));
