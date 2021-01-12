import React, { Fragment, useEffect } from "react";
import {
  getCustomerGroups,
  setCurrentCustomerGroup,
} from "../../_actions/customerGroupAction";

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CustomerGroups = ({
  getCustomerGroups,
  setCurrentCustomerGroup,
  customerGroups,
}) => {
  useEffect(() => {
    getCustomerGroups();
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
          <li className='breadcrumb-item active'>Customer Groups</li>
        </ol>
        <div className='title mb-3'>
          <h4 className='float-left'>Customer Groups</h4>
          <Link
            to='/create-customer-group'
            className='btn btn-primary float-right mb-4'
          >
            Create Customer Group
          </Link>
        </div>

        <table className='table table-bordered table-hover table-responsive-md animated fadeIn'>
          <thead className='thead-light'>
            <tr>
              <th scope='col'>Customer Group</th>
              <th scope='col'>Description</th>
            </tr>
          </thead>

          <tbody>
            {customerGroups.map((cg) => (
              <tr key={cg._id}>
                <td>{cg.group && cg.group}</td>
                <td>{cg.description ? cg.description : "NA"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Fragment>
  );
};

CustomerGroups.propTypes = {
  customerGroups: PropTypes.array.isRequired,
  getCustomerGroups: PropTypes.func.isRequired,
  setCurrentCustomerGroup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  customerGroups: state.customerGroup.customerGroups,
});

export default connect(mapStateToProps, {
  getCustomerGroups,
  setCurrentCustomerGroup,
})(withRouter(CustomerGroups));
