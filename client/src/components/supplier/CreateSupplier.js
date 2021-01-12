import React, { useState, useEffect } from "react";
import CreateGeneral from "./CreateGeneral";
import CreateAddress from "./CreateAddress";
import CreateAccount from "./CreateAccount";
import { addSupplier } from "../../_actions/supplierAction";
import { getSupplierGroups } from "../../_actions/supplierGroupAction";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../_actions/alertAction";

const CreateSupplier = ({
  addSupplier,
  getSupplierGroups,
  supplierGroups,
  history,
}) => {
  useEffect(() => {
    getSupplierGroups();
    //eslint-diable-next-line
  }, []);

  let [stepData, setStepData] = useState({
    currentStep: 1,
  });

  let { currentStep } = stepData;

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
  });

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
  } = formData;

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addSupplier(formData, history);
  };

  const _next = (e) => {
    e.preventDefault();
    if (sCode === "") {
      document.getElementById("code_error").innerHTML =
        "Supplier Code in Required";
    } else if (name === "") {
      document.getElementById("name_error").innerHTML =
        "Supplier Name in Required";
    } else if (group === "") {
      document.getElementById("group_error").innerHTML =
        "Supplier Group in Required";
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

  const groupOptions = supplierGroups.map((sg) => (
    <option key={sg._id} value={sg.group}>
      {sg.group}
    </option>
  ));

  return (
    <main className='container'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item text-small'>
          <Link to='/'>Home</Link>
        </li>
        <li className='breadcrumb-item'>Supplier</li>
        <li className='breadcrumb-item active'>Create Supplier</li>
      </ol>
      <div className='title mb-3'>
        <h4 className='float-left'>Create Supplier</h4>
        <Link to='/suppliers' className='btn btn-primary float-right '>
          Suppliers
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
          sCode={sCode}
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

CreateSupplier.propTypes = {
  getCompanies: PropTypes.func.isRequired,
  getSupplierGroups: PropTypes.func.isRequired,
  addSupplier: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  supplierGroups: state.supplierGroup.supplierGroups,
});

export default connect(mapStateToProps, { addSupplier, getSupplierGroups })(
  withRouter(CreateSupplier)
);
