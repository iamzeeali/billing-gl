import React, { Fragment, useEffect } from "react";
import {
  getBPGroups,
  setCurrentBpGroup,
} from "../../../_actions/bpGroupAction";

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const BpGroups = ({ getBPGroups, setCurrentBpGroup, bpGroups }) => {
  useEffect(() => {
    getBPGroups();
    //eslint-diable-next-line
  }, []);

  return (
    <Fragment>
      <main className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-small">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">Business Partner</li>
          <li className="breadcrumb-item active">Bp Group</li>
        </ol>
        <div className="title mb-3">
          <h4 className="float-left">Business Partner Groups</h4>
          <Link
            to="/create-bp-group"
            className="btn btn-primary float-right mb-4"
          >
            Create BP Group
          </Link>
        </div>

        <table className="table table-bordered table-hover table-responsive-md animated fadeIn">
          <thead className="thead-light">
            <tr>
              <th scope="col">BP Group</th>
              <th scope="col">Description</th>
            </tr>
          </thead>

          <tbody>
            {bpGroups.map((bpg) => (
              <tr key={bpg._id}>
                <td>{bpg.group && bpg.group}</td>
                <td>{bpg.description ? bpg.description : "NA"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Fragment>
  );
};

BpGroups.propTypes = {
  bpGroups: PropTypes.array.isRequired,
  getBPGroups: PropTypes.func.isRequired,
  setCurrentBpGroup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bpGroups: state.bpGroup.bpGroups,
});

export default connect(mapStateToProps, {
  getBPGroups,
  setCurrentBpGroup,
})(withRouter(BpGroups));
