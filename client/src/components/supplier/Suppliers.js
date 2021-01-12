import React, { Fragment, useEffect } from "react";
import {
  getSuppliers,
  setCurrentSupplier,
} from "../../_actions/supplierAction";

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Suppliers = ({ getSuppliers, suppliers, setCurrentSupplier }) => {
  useEffect(() => {
    getSuppliers();
    //eslint-diable-next-line
  }, []);

  return (
    <Fragment>
      <main className='container'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item text-small'>
            <Link to='/'>Home</Link>
          </li>
          <li className='breadcrumb-item'>Customer/Supplier</li>
          <li className='breadcrumb-item active'>Suppliers</li>
        </ol>
        <div className='title mb-3'>
          <h4 className='float-left'>Suppliers</h4>
          <Link
            to='/create-supplier'
            className='btn btn-primary float-right mb-4'
          >
            Create Supplier
          </Link>
        </div>

        <table className='table table-bordered table-hover table-responsive-md animated fadeIn'>
          <thead className='thead-light'>
            <tr>
              <th scope='col'>Code </th>
              <th scope='col'>Supplier</th>
              <th scope='col'>Group</th>
              <th scope='col'>Balance</th>
              <th scope='col'>Orders</th>
              <th scope='col'>Status</th>
            </tr>
          </thead>

          <tbody>
            {suppliers.map((sup) => (
              <tr key={sup._id}>
                <td>
                  <Link
                    title='View'
                    to={`/supplier/${sup._id}`}
                    onClick={() => setCurrentSupplier(sup)}
                  >
                    {sup.sCode && sup.sCode}
                  </Link>
                </td>
                <td>{sup.name && sup.name}</td>
                <td>{sup.group && sup.group}</td>
                <td>00.00</td>
                <td>0</td>
                <td>
                  {" "}
                  {sup.active === true ? (
                    <i className='fa fa-circle text-success'> Active</i>
                  ) : (
                    <i className='fa fa-circle text-danger'> Inactive</i>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Fragment>
  );
};

Suppliers.propTypes = {
  suppliers: PropTypes.array.isRequired,
  getSuppliers: PropTypes.func.isRequired,
  setCurrentSupplier: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  suppliers: state.supplier.suppliers,
});

export default connect(mapStateToProps, {
  getSuppliers,
  setCurrentSupplier,
})(withRouter(Suppliers));
