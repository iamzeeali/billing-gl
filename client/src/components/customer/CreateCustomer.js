import React, { useState, useEffect } from "react";
import CreateGeneral from "./CreateGeneral";
import CreateAddress from "./CreateAddress";
import CreateAccount from "./CreateAccount";
import { addCustomer } from "../../_actions/customerAction";
import { getCustomerGroups } from "../../_actions/customerGroupAction";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../_actions/alertAction";

const CreateCustomer = ({
  addCustomer,
  getCustomerGroups,
  customerGroups,
  history,
}) => {
  useEffect(() => {
    getCustomerGroups();
    //eslint-diable-next-line
  }, []);

  let [stepData, setStepData] = useState({
    currentStep: 1,
  });

  let { currentStep } = stepData;

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
  });

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
  } = formData;

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addCustomer(formData, history);
  };

  const _next = (e) => {
    e.preventDefault();
    if (cCode === "") {
      document.getElementById("code_error").innerHTML =
        "Customer Code in Required";
    } else if (name === "") {
      document.getElementById("name_error").innerHTML =
        "Customer Name in Required";
    } else if (group === "") {
      document.getElementById("group_error").innerHTML =
        "Customer Group in Required";
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
        <button className='btn btn-primary my-3' type='button' onClick={_prev}>
          <i className='fa fa-angle-left'></i> Previous
        </button>
      );
    }
    return null;
  };

  const nextButton = () => {
    if (currentStep < 3) {
      return (
        <button
          className='btn btn-primary my-3 float-right'
          type='button'
          onClick={(e) => _next(e, setAlert)}
        >
          Next <i className='fa fa-angle-right'></i>
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
        <li className='breadcrumb-item'>Customer</li>
        <li className='breadcrumb-item active'>Create Customer</li>
      </ol>
      <div className='title mb-3'>
        <h4 className='float-left'>Create Customer</h4>
        <Link to='/customers' className='btn btn-primary float-right '>
          Customers
        </Link>
      </div>

      <form
        className='mt-5'
        style={{ paddingTop: "10px" }}
        onSubmit={(e) => onSubmitHandler(e)}
      >
        <CreateGeneral
          currentStep={currentStep}
          onChangeHandler={(e) => onChangeHandler(e)}
          cCode={cCode}
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
          <small className='my-3 text-danger'>*Required Fields</small>
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

CreateCustomer.propTypes = {
  getCompanies: PropTypes.func.isRequired,
  getCustomerGroups: PropTypes.func.isRequired,
  addCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  customerGroups: state.customerGroup.customerGroups,
});

export default connect(mapStateToProps, { addCustomer, getCustomerGroups })(
  withRouter(CreateCustomer)
);
