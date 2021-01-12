import React, { Fragment, useEffect } from "react";
import {
  getCustomers,
  setCurrentCustomer,
} from "../../_actions/customerAction";

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Customers = ({ getCustomers, customers, setCurrentCustomer }) => {
  useEffect(() => {
    getCustomers();
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
          <li className='breadcrumb-item active'>Customers</li>
        </ol>
        <div className='title mb-3'>
          <h4 className='float-left'>Customers</h4>
          <Link
            to='/create-customer'
            className='btn btn-primary float-right mb-4'
          >
            Create Customer
          </Link>
        </div>

        <table className='table table-bordered table-hover table-responsive-md animated fadeIn'>
          <thead className='thead-light'>
            <tr>
              <th scope='col'>Code </th>
              <th scope='col'>Customer</th>
              <th scope='col'>Group</th>
              <th scope='col'>Balance</th>
              <th scope='col'>Orders</th>
              <th scope='col'>Status</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((cus) => (
              <tr key={cus._id}>
                <td>
                  <Link
                    title='View'
                    to={`/customer/${cus._id}`}
                    onClick={() => setCurrentCustomer(cus)}
                  >
                    {cus.cCode && cus.cCode}
                  </Link>
                </td>
                <td>{cus.name && cus.name}</td>
                <td>{cus.group && cus.group}</td>
                <td>00.00</td>
                <td>0</td>
                <td>
                  {" "}
                  {cus.active === true ? (
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

Customers.propTypes = {
  customers: PropTypes.array.isRequired,
  getCustomers: PropTypes.func.isRequired,
  setCurrentCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  customers: state.customer.customers,
});

export default connect(mapStateToProps, {
  getCustomers,
  setCurrentCustomer,
})(withRouter(Customers));
