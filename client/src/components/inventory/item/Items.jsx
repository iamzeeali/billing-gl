import React, { Fragment, useEffect } from "react";
import { getItems, setCurrentItem } from "../../../_actions/itemAction";

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Items = ({ getItems, items, setCurrentItem }) => {
  useEffect(() => {
    getItems();
    //eslint-diable-next-line
  }, []);

  const itemcateg = <i className="fa fa-check-circle text-primary"></i>;

  return (
    <Fragment>
      <main className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-small">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">Inventory</li>
          <li className="breadcrumb-item active">Items</li>
        </ol>
        <div className="title mb-3">
          <h4 className="float-left">Items</h4>
          <Link to="/create-item" className="btn btn-primary float-right mb-4">
            Create Item
          </Link>
        </div>

        <table className="table table-bordered table-hover table-responsive animated fadeIn">
          <thead className="thead-light">
            <tr>
              <th scope="col">Code </th>

              <th scope="col">Item</th>
              <th scope="col">Type </th>

              <th scope="col">UoM</th>
              <th scope="col">Group</th>
              <th scope="col">Serial</th>
              <th scope="col">Price</th>
              <th scope="col">Barcode</th>
              <th scope="col">Description</th>
              <th scope="col">Pr. Item</th>
              <th scope="col">Sl. Item</th>
              <th scope="col">Inv. Item</th>
            </tr>
          </thead>

          <tbody>
            {items.map((itm) => (
              <tr key={itm._id}>
                {/* <td>
                  <Link
                    title="View"
                    to={`/item/${itm._id}`}
                    onClick={() => setCurrentItem(itm)}
                  >
                    {itm.itemCode && itm.itemCode}
                  </Link>
                </td> */}
                <td>{itm.itemCode && itm.itemCode}</td>

                <td>{itm.name && itm.name}</td>
                <td>{itm.type && itm.type}</td>
                <td>{itm.uom && itm.uom.uom}</td>
                <td>{itm.group && itm.group.group}</td>
                <td>{itm.serial && itm.serial}</td>
                <td>{itm.unitPrice && itm.unitPrice}</td>
                <td>{itm.barcode && itm.barcode}</td>
                <td>{itm.description && itm.description}</td>
                <td>{itm.purchaseItem && itemcateg}</td>
                <td>{itm.salesItem && itemcateg}</td>
                <td>{itm.inventoryItem && itemcateg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Fragment>
  );
};

Items.propTypes = {
  items: PropTypes.array.isRequired,
  getItems: PropTypes.func.isRequired,
  setCurrentItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.item.items,
});

export default connect(mapStateToProps, {
  getItems,
  setCurrentItem,
})(withRouter(Items));
