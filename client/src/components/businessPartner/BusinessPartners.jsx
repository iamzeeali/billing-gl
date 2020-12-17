import React, { Fragment, useEffect, Suspense, lazy } from "react";
import {
  getBusinessPartners,
  setCurrentBusinessPartner,
} from "../../_actions/bpAction";

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const BusinessPartners = ({
  getBusinessPartners,
  businessPartners,
  setCurrentBusinessPartner,
}) => {
  useEffect(() => {
    getBusinessPartners();
    //eslint-diable-next-line
  }, []);

  return (
    <Fragment>
      <main className='container'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item text-small'>
            <Link to='/'>Home</Link>
          </li>
          <li className='breadcrumb-item'>Business Partner</li>
          <li className='breadcrumb-item active'>Business Partners</li>
        </ol>
        <div className='title mb-3'>
          <h4 className='float-left'>Business Partners</h4>
          <Link to='/create-bp' className='btn btn-primary float-right mb-4'>
            Create Business Partner
          </Link>
        </div>

        <table className='table table-bordered table-hover table-responsive-md animated fadeIn'>
          <thead className='thead-light'>
            <tr>
              <th scope='col'>Code </th>
              <th scope='col'>Type</th>
              <th scope='col'>Business Partner</th>
              <th scope='col'>Group</th>
              <th scope='col'>Balance</th>
              <th scope='col'>Orders</th>
              <th scope='col'>Status</th>
            </tr>
          </thead>

          <tbody>
            {businessPartners.map((bp) => (
              <tr key={bp._id}>
                <td>
                  <Link
                    title='View'
                    to={`/business-partner/${bp._id}`}
                    onClick={() => setCurrentBusinessPartner(bp)}
                  >
                    {bp.bpCode && bp.bpCode}
                  </Link>
                </td>
                <td>{bp.type && bp.type}</td>
                <td>{bp.name && bp.name}</td>
                <td>{bp.group && bp.group}</td>
                <td>00.00</td>
                <td>0</td>
                <td>
                  {" "}
                  {bp.active === true ? (
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

BusinessPartners.propTypes = {
  businessPartners: PropTypes.array.isRequired,
  getBusinessPartners: PropTypes.func.isRequired,
  setCurrentBusinessPartner: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  businessPartners: state.bp.businessPartners,
});

export default connect(mapStateToProps, {
  getBusinessPartners,
  setCurrentBusinessPartner,
})(withRouter(BusinessPartners));
