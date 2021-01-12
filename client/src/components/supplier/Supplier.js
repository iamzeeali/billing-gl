import React, { useState, useEffect } from "react";
import General from "./CreateGeneral";
import Address from "./CreateAddress";
import Account from "./CreateAccount";
import { getSupplier, editSupplier } from "../../_actions/supplierAction";
import { getSupplierGroups } from "../../_actions/supplierGroupAction";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Supplier = ({
  getSupplier,
  editSupplier,
  getSupplierGroups,
  supplier,
  supplierGroups,
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
    sCode: "",
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
    getSupplier(match.params.id);
    getSupplierGroups();
    setFormData({
      sCode: loading || !supplier ? "" : supplier.sCode,
      name: loading || !supplier ? "" : supplier.name,
      group: loading || !supplier ? "" : supplier.group,
      phone1: loading || !supplier ? "" : supplier.phone1,
      phone2: loading || !supplier ? "" : supplier.phone2,
      mobile: loading || !supplier ? "" : supplier.mobile,
      email: loading || !supplier ? "" : supplier.email,
      photo: loading || !supplier ? "" : supplier.photo,
      industry: loading || !supplier ? "" : supplier.industry,
      contactPerson: loading || !supplier ? "" : supplier.contactPerson,
      contactPersonPhone:
        loading || !supplier ? "" : supplier.contactPersonPhone,
      contactPersonEmail:
        loading || !supplier ? "" : supplier.contactPersonEmail,
      shipToCountry: loading || !supplier ? "" : supplier.shipToCountry,
      shipToState: loading || !supplier ? "" : supplier.shipToState,
      shipToCity: loading || !supplier ? "" : supplier.shipToCity,
      shipToAddress: loading || !supplier ? "" : supplier.shipToAddress,
      shipToPhone: loading || !supplier ? "" : supplier.shipToPhone,
      shipToEmail: loading || !supplier ? "" : supplier.shipToEmail,
      billToCountry: loading || !supplier ? "" : supplier.billToCountry,
      billToState: loading || !supplier ? "" : supplier.billToState,
      billToCity: loading || !supplier ? "" : supplier.billToCity,
      billToAddress: loading || !supplier ? "" : supplier.billToAddress,
      billToPhone: loading || !supplier ? "" : supplier.billToPhone,
      billToEmail: loading || !supplier ? "" : supplier.billToEmail,
      gstin: loading || !supplier ? "" : supplier.gstin,
      creditLimit: loading || !supplier ? "" : supplier.creditLimit,
      pan: loading || !supplier ? "" : supplier.pan,
      paymentTerms: loading || !supplier ? "" : supplier.paymentTerms,
      bank: loading || !supplier ? "" : supplier.bank,
      accountNo: loading || !supplier ? "" : supplier.accountNo,
      active: loading || !supplier ? "" : supplier.active,
    });
    //eslint-disable-next-line
  }, [loading, getSupplier, getSupplierGroups]);

  const {
    sCode,
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
    editSupplier(formData, match.params.id, history);
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

  const groupOptions = supplierGroups.map((cg) => (
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
        <li className='breadcrumb-item'>supplier/Supplier</li>
        <li className='breadcrumb-item active'>Create Supplier</li>
      </ol>
      <div className='title mb-3'>
        <h4 className=''>{name && name}</h4>
        <img src={photo ? photo : ""} alt='' width='200px' />
        <Link to='/suppliers' className='btn btn-primary float-right '>
          suppliers
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
          sCode={sCode}
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
  supplier: state.supplier.supplier,
  supplierGroups: state.supplierGroup.supplierGroups,
  loading: state.supplier.loading,
});

Supplier.propTypes = {
  getSupplier: PropTypes.func.isRequired,
  editSupplier: PropTypes.func.isRequired,
  getSupplierGroups: PropTypes.func.isRequired,
  supplier: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  getSupplier,
  editSupplier,
  getSupplierGroups,
})(withRouter(Supplier));
