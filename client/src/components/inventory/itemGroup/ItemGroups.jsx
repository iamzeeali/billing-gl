import React, { Fragment, useEffect, Suspense, lazy } from "react";
import {
  getItemGroups,
  setCurrentItemGroup,
} from "../../../_actions/itemGroupAction";

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ItemGroups = ({ getItemGroups, setCurrentItemGroup, itemGroups }) => {
  useEffect(() => {
    getItemGroups();
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
          <li className="breadcrumb-item active">Item Groups</li>
        </ol>
        <div className="title mb-3">
          <h4 className="float-left">Item Groups</h4>
          <Link
            to="/create-item-group"
            className="btn btn-primary float-right mb-4"
          >
            Create Item Group
          </Link>
        </div>

        <table className="table table-bordered table-hover table-responsive-md animated fadeIn">
          <thead className="thead-light">
            <tr>
              <th scope="col">Item Group</th>
              <th scope="col">Description</th>
            </tr>
          </thead>

          <tbody>
            {itemGroups.map((ig) => (
              <tr key={ig._id}>
                <td>{ig.group && ig.group}</td>
                <td>{ig.description ? ig.description : "NA"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Fragment>
  );
};

ItemGroups.propTypes = {
  itemGroups: PropTypes.array.isRequired,
  getItemGroups: PropTypes.func.isRequired,
  setCurrentItemGroups: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  itemGroups: state.itemGroup.itemGroups,
});

export default connect(mapStateToProps, {
  getItemGroups,
  setCurrentItemGroup,
})(withRouter(ItemGroups));
