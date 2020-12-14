import React, { Fragment, useEffect } from "react";
import { getUoms, setCurrentUom } from "../../../_actions/uomAction";

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Uoms = ({ getUoms, setCurrentUom, uoms }) => {
  useEffect(() => {
    getUoms();
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
          <li className="breadcrumb-item active">UoM</li>
        </ol>
        <div className="title mb-3">
          <h4 className="float-left">Unit of Measurements</h4>
          <Link to="/create-uom" className="btn btn-primary float-right mb-4">
            Create UoM
          </Link>
        </div>

        <table className="table table-bordered table-hover table-responsive-md animated fadeIn">
          <thead className="thead-light">
            <tr>
              <th scope="col">UoM</th>
              <th scope="col">Description</th>
            </tr>
          </thead>

          <tbody>
            {uoms.map((wh) => (
              <tr key={wh._id}>
                <td>{wh.uom && wh.uom}</td>
                <td>{wh.description ? wh.description : "NA"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Fragment>
  );
};

Uoms.propTypes = {
  uoms: PropTypes.array.isRequired,
  getUoms: PropTypes.func.isRequired,
  setCurrentUom: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  uoms: state.uom.uoms,
});

export default connect(mapStateToProps, {
  getUoms,
  setCurrentUom,
})(withRouter(Uoms));
