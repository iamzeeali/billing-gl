import React, { Fragment, useEffect } from "react";
import {
  getSupplierGroups,
  setCurrentSupplierGroup,
} from "../../_actions/supplierGroupAction";

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const SupplierGroups = ({
  getSupplierGroups,
  setCurrentSupplierGroup,
  supplierGroups,
}) => {
  useEffect(() => {
    getSupplierGroups();
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
          <li className='breadcrumb-item active'>Supplier Groups</li>
        </ol>
        <div className='title mb-3'>
          <h4 className='float-left'>Supplier Groups</h4>
          <Link
            to='/create-supplier-group'
            className='btn btn-primary float-right mb-4'
          >
            Create Supplier Group
          </Link>
        </div>

        <table className='table table-bordered table-hover table-responsive-md animated fadeIn'>
          <thead className='thead-light'>
            <tr>
              <th scope='col'>Supplier Group</th>
              <th scope='col'>Description</th>
            </tr>
          </thead>

          <tbody>
            {supplierGroups.map((sg) => (
              <tr key={sg._id}>
                <td>{sg.group && sg.group}</td>
                <td>{sg.description ? sg.description : "NA"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Fragment>
  );
};

SupplierGroups.propTypes = {
  supplierGroups: PropTypes.array.isRequired,
  getSupplierGroups: PropTypes.func.isRequired,
  setCurrentSupplierGroup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  supplierGroups: state.supplierGroup.supplierGroups,
});

export default connect(mapStateToProps, {
  getSupplierGroups,
  setCurrentSupplierGroup,
})(withRouter(SupplierGroups));
