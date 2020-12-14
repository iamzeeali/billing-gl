import React, { useState, useEffect } from "react";
import CreateGeneral from "./CreateGeneral";
import CreateAddress from "./CreateAddress";
import CreateAccount from "./CreateAccount";
import { addBusinessPartner } from "../../_actions/bpAction";
import { getBPGroups } from "../../_actions/bpGroupAction";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../_actions/alertAction";

const CreateBP = ({ addBusinessPartner, getBPGroups, bpGroups, history }) => {
  useEffect(() => {
    getBPGroups();
    //eslint-diable-next-line
  }, []);

  let [stepData, setStepData] = useState({
    currentStep: 1,
  });

  let { currentStep } = stepData;

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
  });

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
  } = formData;

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addBusinessPartner(formData, history);
  };

  const _next = (e) => {
    e.preventDefault();
    if (bpCode === "") {
      document.getElementById("code_error").innerHTML =
        "Business Partner Code in Required";
    } else if (type === "") {
      document.getElementById("type_error").innerHTML =
        "Business Partner Type in Required";
    } else if (name === "") {
      document.getElementById("name_error").innerHTML =
        "Business Partner Name in Required";
    } else if (group === "") {
      document.getElementById("group_error").innerHTML =
        "Business Partner Group in Required";
    } else {
      currentStep = currentStep >= 2 ? 3 : ++currentStep;
      setStepData({ ...stepData, currentStep: currentStep });
    }
  };

  const _prev = () => {
    currentStep = currentStep <= 1 ? 1 : --currentStep;
    setStepData({ ...stepData, currentStep: currentStep });
  };

  const previousButton = () => {
    if (currentStep !== 1) {
      return (
        <button className="btn btn-primary my-3" type="button" onClick={_prev}>
          <i className="fa fa-angle-left"></i> Previous
        </button>
      );
    }
    return null;
  };

  const nextButton = () => {
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary my-3 float-right"
          type="button"
          onClick={(e) => _next(e, setAlert)}
        >
          Next <i className="fa fa-angle-right"></i>
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
        <h4 className="float-left">Create Business Partner</h4>
        <Link to="/business-partners" className="btn btn-primary float-right ">
          Business Partners
        </Link>
      </div>

      <form
        className="mt-5"
        style={{ paddingTop: "10px" }}
        onSubmit={(e) => onSubmitHandler(e)}
      >
        <CreateGeneral
          currentStep={currentStep}
          onChangeHandler={(e) => onChangeHandler(e)}
          bpCode={bpCode}
          type={type}
          group={group}
          option={groupOptions}
          name={name}
          phone1={phone1}
          phone2={phone2}
          mobile={mobile}
          email={email}
          photo={photo}
          industry={industry}
          contactPerson={contactPerson}
          contactPersonPhone={contactPersonPhone}
          contactPersonEmail={contactPersonEmail}
        />

        <CreateAddress
          currentStep={currentStep}
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

        <CreateAccount
          currentStep={currentStep}
          onChangeHandler={(e) => onChangeHandler(e)}
          gstin={gstin}
          creditLimit={creditLimit}
          pan={pan}
          paymentTerms={paymentTerms}
          bank={bank}
          accountNo={accountNo}
        />

        {currentStep === 1 ? (
          <small className="my-3 text-danger">*Required Fields</small>
        ) : (
          ""
        )}

        <br />

        {previousButton()}
        {nextButton()}
      </form>
    </main>
  );
};

CreateBP.propTypes = {
  getCompanies: PropTypes.func.isRequired,
  getBPGroups: PropTypes.func.isRequired,
  addBusinessPartner: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bpGroups: state.bpGroup.bpGroups,
});

export default connect(mapStateToProps, { addBusinessPartner, getBPGroups })(
  withRouter(CreateBP)
);
