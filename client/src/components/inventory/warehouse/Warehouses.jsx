import React, { Fragment, useEffect, Suspense, lazy } from "react";
import {
  getWarehouses,
  setCurrentWarehouse,
} from "../../../_actions/warehouseAction";

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Warehouses = ({ getWarehouses, setCurrentWarehouse, warehouses }) => {
  useEffect(() => {
    getWarehouses();
    //eslint-diable-next-line
  }, []);

  return (
    <Fragment>
      <main className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-small">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">Inventory</li>
          <li className="breadcrumb-item active">Warehouses</li>
        </ol>
        <div className="title mb-3">
          <h4 className="float-left">Warehouses</h4>
          <Link
            to="/create-warehouse"
            className="btn btn-primary float-right mb-4"
          >
            Create Warehouse
          </Link>
        </div>

        <table className="table table-bordered table-hover table-responsive-md animated fadeIn">
          <thead className="thead-light">
            <tr>
              <th scope="col">Wh Code</th>
              <th scope="col">Warehouse</th>
              <th scope="col">Country</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Address</th>
              <th scope="col">Pin Code</th>
            </tr>
          </thead>

          <tbody>
            {warehouses.map((wh) => (
              <tr key={wh._id}>
                <td>{wh.code && wh.code}</td>
                <td>{wh.warehouse && wh.warehouse}</td>
                <td>{wh.country && wh.country}</td>
                <td>{wh.state && wh.state}</td>
                <td>{wh.city && wh.city}</td>
                <td>{wh.address && wh.address}</td>
                <td>{wh.pincode && wh.pincode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Fragment>
  );
};

Warehouses.propTypes = {
  warehouses: PropTypes.array.isRequired,
  getWarehouses: PropTypes.func.isRequired,
  setCurrentWarehouse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  warehouses: state.warehouse.warehouses,
});

export default connect(mapStateToProps, {
  getWarehouses,
  setCurrentWarehouse,
})(withRouter(Warehouses));
