import React, { Fragment, useEffect } from "react";
import { getInventories, setCurrentInv } from "../../_actions/inventoryAction";

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Inventory = ({ getInventories, inventories, setCurrentInv }) => {
  useEffect(() => {
    getInventories();
    //eslint-diable-next-line
  }, []);

  const stock = <i className="fa fa-check-circle text-primary"></i>;

  return (
    <Fragment>
      <main className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-small">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">Inventory</li>
          <li className="breadcrumb-item active">Inventory</li>
        </ol>
        <div className="title mb-3">
          <h4 className="float-left">Inventories</h4>
        </div>

        <table className="table table-bordered table-hover table-responsive-md animated fadeIn">
          <thead className="thead-light">
            <tr>
              <th scope="col">Item Code</th>
              <th scope="col">Item</th>
              <th scope="col">Warehouse </th>
              <th scope="col">Quantity in stock </th>
            </tr>
          </thead>

          <tbody>
            {inventories.map((inv) => (
              <tr key={inv._id}>
                {/* <td>
                  <Link
                    title="View"
                    to={`/item/${inv._id}`}
                    onClick={() => setCurrentInv(inv)}
                  >
                    {inv.itemCode && inv.itemCode}
                  </Link>
                </td> */}

                <td>{inv.item && inv.item.itemCode}</td>
                <td>{inv.item && inv.item.name}</td>
                <td>{inv.warehouse && inv.warehouse}</td>

                <td>{inv.quantity && inv.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Fragment>
  );
};

Inventory.propTypes = {
  inventories: PropTypes.array.isRequired,
  getInventories: PropTypes.func.isRequired,
  setCurrentInv: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  inventories: state.inventory.inventories,
});

export default connect(mapStateToProps, {
  getInventories,
  setCurrentInv,
})(withRouter(Inventory));
