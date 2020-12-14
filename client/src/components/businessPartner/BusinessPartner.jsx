import React, { useState, useEffect } from "react";
import General from "./CreateGeneral";
import Address from "./CreateAddress";
import Account from "./CreateAccount";
import {
  getBusinessPartner,
  editBusinessPartner,
} from "../../_actions/bpAction";
import { getBPGroups } from "../../_actions/bpGroupAction";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const BusinessPartner = ({
  getBusinessPartner,
  editBusinessPartner,
  getBPGroups,
  businessPartner,
  bpGroups,
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
    bpCode: "",
    type: "",
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
    getBusinessPartner(match.params.id);
    getBPGroups();
    setFormData({
      bpCode: loading || !businessPartner ? "" : businessPartner.bpCode,
      type: loading || !businessPartner ? "" : businessPartner.type,
      name: loading || !businessPartner ? "" : businessPartner.name,
      group: loading || !businessPartner ? "" : businessPartner.group,
      phone1: loading || !businessPartner ? "" : businessPartner.phone1,
      phone2: loading || !businessPartner ? "" : businessPartner.phone2,
      mobile: loading || !businessPartner ? "" : businessPartner.mobile,
      email: loading || !businessPartner ? "" : businessPartner.email,
      photo: loading || !businessPartner ? "" : businessPartner.photo,
      industry: loading || !businessPartner ? "" : businessPartner.industry,
      contactPerson:
        loading || !businessPartner ? "" : businessPartner.contactPerson,
      contactPersonPhone:
        loading || !businessPartner ? "" : businessPartner.contactPersonPhone,
      contactPersonEmail:
        loading || !businessPartner ? "" : businessPartner.contactPersonEmail,
      shipToCountry:
        loading || !businessPartner ? "" : businessPartner.shipToCountry,
      shipToState:
        loading || !businessPartner ? "" : businessPartner.shipToState,
      shipToCity: loading || !businessPartner ? "" : businessPartner.shipToCity,
      shipToAddress:
        loading || !businessPartner ? "" : businessPartner.shipToAddress,
      shipToPhone:
        loading || !businessPartner ? "" : businessPartner.shipToPhone,
      shipToEmail:
        loading || !businessPartner ? "" : businessPartner.shipToEmail,
      billToCountry:
        loading || !businessPartner ? "" : businessPartner.billToCountry,
      billToState:
        loading || !businessPartner ? "" : businessPartner.billToState,
      billToCity: loading || !businessPartner ? "" : businessPartner.billToCity,
      billToAddress:
        loading || !businessPartner ? "" : businessPartner.billToAddress,
      billToPhone:
        loading || !businessPartner ? "" : businessPartner.billToPhone,
      billToEmail:
        loading || !businessPartner ? "" : businessPartner.billToEmail,
      gstin: loading || !businessPartner ? "" : businessPartner.gstin,
      creditLimit:
        loading || !businessPartner ? "" : businessPartner.creditLimit,
      pan: loading || !businessPartner ? "" : businessPartner.pan,
      paymentTerms:
        loading || !businessPartner ? "" : businessPartner.paymentTerms,
      bank: loading || !businessPartner ? "" : businessPartner.bank,
      accountNo: loading || !businessPartner ? "" : businessPartner.accountNo,
      active: loading || !businessPartner ? "" : businessPartner.active,
    });
    //eslint-disable-next-line
  }, [loading, getBusinessPartner, getBPGroups]);

  const {
    bpCode,
    type,
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
    editBusinessPartner(formData, match.params.id, history);
  };

  const editForm = (e) => {
    setStepData({ ...stepData, readOnly: false, disabled: false });
  };

  const editButton = () => {
    if (readOnly === true) {
      return (
        <button
          className="btn btn-warning my-1 float-left"
          type="button"
          onClick={(e) => editForm(e)}
        >
          Click to Edit
        </button>
      );
    }
    return null;
  };

  const groupOptions = bpGroups.map((bpg) => (
    <option key={bpg._id} value={bpg.group}>
      {bpg.group}
    </option>
  ));
  return (
    <main className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item text-small">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">Business Partner</li>
        <li className="breadcrumb-item active">Create Business Partner</li>
      </ol>
      <div className="title mb-3">
        <h4 className="">{name && name}</h4>
        <img src={photo ? photo : ""} alt="" width="200px" />
        <Link to="/business-partners" className="btn btn-primary float-right ">
          Business Partners
        </Link>
      </div>
      <br />
      {editButton()}

      <form style={{ paddingTop: "40px" }} onSubmit={(e) => onSubmitHandler(e)}>
        {!readOnly && (
          <div class="form-group">
            <div class="custom-control custom-radio">
              <input
                type="radio"
                value={active}
                id="customRadio1"
                name="active"
                class="custom-control-input"
                onChange={(e) => onToggle(e)}
                checked={active ? true : false}
              />
              <label class="custom-control-label" for="customRadio1">
                Active
              </label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                value={active}
                id="customRadio2"
                name="active"
                class="custom-control-input"
                onChange={(e) => onToggle(e)}
                checked={!active ? true : false}
              />
              <label class="custom-control-label" for="customRadio2">
                Inactive
              </label>
            </div>
          </div>
        )}
        <General
          readOnly={readOnly}
          currentStep={1}
          onChangeHandler={(e) => onChangeHandler(e)}
          bpCode={bpCode}
          type={type}
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
  businessPartner: state.bp.businessPartner,
  bpGroups: state.bpGroup.bpGroups,
  loading: state.bp.loading,
});

BusinessPartner.propTypes = {
  getBusinessPartner: PropTypes.func.isRequired,
  editBusinessPartner: PropTypes.func.isRequired,
  getBPGroups: PropTypes.func.isRequired,
  businessPartner: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  getBusinessPartner,
  editBusinessPartner,
  getBPGroups,
})(withRouter(BusinessPartner));
