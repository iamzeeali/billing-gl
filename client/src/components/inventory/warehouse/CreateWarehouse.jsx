import React, { useState, useEffect } from "react";
import { addWarehouse } from "../../../_actions/warehouseAction";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CreateWarehouse = ({ addWarehouse, history }) => {
  const [formData, setFormData] = useState({
    code: "",
    warehouse: "",
    country: "",
    state: "",
    city: "",
    address: "",
    pincode: "",
  });

  const { code, warehouse, country, state, city, address, pincode } = formData;

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addWarehouse(formData, history);
  };

  return (
    <main className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item text-small">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">Inventory</li>
        <li className="breadcrumb-item active">Create Warehouse</li>
      </ol>
      <div className="title mb-3">
        <h4 className="float-left">Create Warehouse</h4>
        <Link to="/warehouses" className="btn btn-primary float-right ">
          Warehouses
        </Link>
      </div>

      <br />

      <form
        className="mt-5 bg-secondary"
        style={{ paddingTop: "10px" }}
        onSubmit={(e) => onSubmitHandler(e)}
      >
        <div className="p-4">
          <p className="mx-auto lead text-center">Warehouses Information</p>

          <div class="form-group row">
            <label class="col-form-label col-sm-1">Code</label>
            <div class="col-sm-5">
              <input
                className="form-control "
                name="code"
                type="text"
                placeholder="Warehouses Code"
                value={code}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
                required
                autoFocus
              />
            </div>

            <label class="col-form-label col-sm-1">Warehouse</label>
            <div class="input-group col-sm-5">
              <input
                className="form-control "
                name="warehouse"
                type="text"
                placeholder="Warehouse"
                value={warehouse}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
                required
              />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-form-label col-sm-1">Country</label>
            <div class="col-sm-5">
              <input
                className="form-control "
                name="country"
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
              />
            </div>
            <label class="col-form-label col-sm-1">State</label>
            <div class="col-sm-5">
              <input
                className="form-control "
                name="state"
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
              />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-form-label col-sm-1">City</label>
            <div class="col-sm-5">
              <input
                className="form-control "
                name="city"
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
              />
            </div>

            <label class="col-form-label col-sm-1">Pin Code</label>
            <div class="col-sm-5">
              <input
                className="form-control "
                name="pincode"
                type="text"
                placeholder="Pin Code"
                value={pincode}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
              />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-form-label col-sm-1">Address</label>
            <div class="col-sm-5">
              <textarea
                className="form-control "
                name="address"
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
              />
            </div>
          </div>

          <button
            disabled={false}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

CreateWarehouse.propTypes = {
  addWarehouse: PropTypes.func.isRequired,
};

export default connect(null, { addWarehouse })(withRouter(CreateWarehouse));
