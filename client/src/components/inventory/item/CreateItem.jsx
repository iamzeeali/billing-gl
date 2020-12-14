import React, { useState, useEffect } from "react";
import { addItem } from "../../../_actions/itemAction";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItemGroups } from "../../../_actions/itemGroupAction";
import { getUoms } from "../../../_actions/uomAction";

const CreateItem = ({
  addItem,
  getUoms,
  getItemGroups,
  itemGroups,
  uoms,
  history,
}) => {
  const [formData, setFormData] = useState({
    type: "item",
    itemCode: "",
    name: "",
    serial: "",
    group: "",
    description: "",
    uom: "",
    hsn: "",
    unitPrice: "",
    inventoryItem: true,
    salesItem: true,
    purchaseItem: true,
    inStock: "",
  });

  useEffect(() => {
    getItemGroups();
    getUoms();
    //eslint-diable-next-line
  }, []);

  const {
    type,
    itemCode,
    name,
    serial,
    group,
    description,
    uom,
    unitPrice,
    hsn,
    inventoryItem,
    salesItem,
    purchaseItem,
  } = formData;

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onTogglePurchaseItem = (e) => {
    setFormData({
      ...formData,
      purchaseItem: !purchaseItem,
    });
  };

  const onToggleSalesItem = (e) => {
    setFormData({
      ...formData,
      salesItem: !salesItem,
    });
  };

  const onToggleInventoryItem = (e) => {
    setFormData({
      ...formData,
      inventoryItem: !inventoryItem,
    });
  };

  const onToggleType = (e) => {
    setFormData({
      ...formData,
      type: type === "item" ? "service" : "item",
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (itemCode === "") {
      document.getElementById("code_error").innerHTML = "Item Code in Required";
    } else if (name === "") {
      document.getElementById("name_error").innerHTML = "Item Name in Required";
    } else if (group === "") {
      document.getElementById("group_error").innerHTML =
        "Item Group in Required";
    } else {
      addItem(formData, history);
    }
  };

  return (
    <main className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item text-small">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">Inventory</li>
        <li className="breadcrumb-item active">Create Item</li>
      </ol>
      <div className="title mb-3">
        <h4 className="float-left">Create Item</h4>
        <Link to="/items" className="btn btn-primary float-right ">
          Items
        </Link>
      </div>

      <br />

      <form className="mt-5" onSubmit={(e) => onSubmitHandler(e)}>
        <div className="">
          <p className="mx-auto font-weight-bold">Item Information</p>

          <div class="form-group">
            <div class="custom-control custom-radio">
              <input
                type="radio"
                value={type}
                id="customRadio1"
                name="type"
                class="custom-control-input"
                onChange={(e) => onToggleType(e)}
                checked={type === "item" ? true : false}
              />
              <label class="custom-control-label" for="customRadio1">
                Item
              </label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                value={type}
                id="customRadio2"
                name="type"
                class="custom-control-input"
                onChange={(e) => onToggleType(e)}
                checked={type === "service" ? true : false}
              />
              <label class="custom-control-label" for="customRadio2">
                Service
              </label>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-form-label col-sm-1">Code</label>
            <div class="col-sm-5">
              <input
                className="form-control "
                name="itemCode"
                type="text"
                placeholder="Item Code"
                value={itemCode}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
                required
                autoFocus
              />
              <small id="code_error" className="text-danger"></small>
            </div>

            <label class="col-form-label col-sm-1">Name/SKU</label>
            <div class="input-group col-sm-5">
              <input
                className="form-control "
                name="name"
                type="text"
                placeholder="Item Name/SKU"
                value={name}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
                required
              />
              <small id="name_error" className="text-danger"></small>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-form-label col-sm-1">Group</label>
            <div class="col-sm-5">
              <select
                name="group"
                id=""
                class="form-control "
                value={group}
                onChange={(e) => onChangeHandler(e)}
                required
              >
                <option value="" disabled selected hidden>
                  Select Item Group
                </option>
                {itemGroups.map((ig) => (
                  <option key={ig._id} value={ig._id}>
                    {ig.group}
                  </option>
                ))}
              </select>
              <Link to="/create-item-group">
                {" "}
                <i className="fa fa-plus-circle"></i>{" "}
              </Link>
              <small id="group_error" className="text-danger"></small>
            </div>
            <label class="col-form-label col-sm-1">Serial</label>
            <div class="col-sm-5">
              <input
                className="form-control "
                name="serial"
                type="text"
                placeholder="Item serial"
                value={serial}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
                required
              />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-form-label col-sm-1">UoM</label>
            <div class="col-sm-5">
              <select
                name="uom"
                id=""
                class="form-control "
                value={uom}
                onChange={(e) => onChangeHandler(e)}
                required
              >
                <option value="" disabled selected hidden>
                  Select UoM
                </option>
                {uoms.map((um) => (
                  <option key={um._id && um._id} value={um._id}>
                    {um.uom}
                  </option>
                ))}
              </select>
              <Link to="/create-uom">
                {" "}
                <i className="fa fa-plus-circle"></i>{" "}
              </Link>
              <small id="group_error" className="text-danger"></small>
            </div>

            <label class="col-form-label col-sm-1">Price</label>
            <div class="col-sm-5">
              <input
                className="form-control "
                name="unitPrice"
                type="text"
                placeholder="Item Unit Price"
                value={unitPrice}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
              />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-form-label col-sm-1">Description</label>
            <div class="col-sm-5">
              <textarea
                className="form-control "
                name="description"
                type="text"
                placeholder="Item description"
                value={description}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
              />
            </div>

            <label class="col-form-label col-sm-1">HSN</label>
            <div class="col-sm-5">
              <input
                className="form-control "
                name="hsn"
                type="text"
                placeholder="HSN/SAC"
                value={hsn}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
              />
            </div>
          </div>

          <div class="form-group row">
            <div class="col-sm-5">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value={purchaseItem}
                  name="purchaseItem"
                  onClick={(e) => onTogglePurchaseItem(e)}
                  checked={purchaseItem}
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Purchase Item
                </label>
              </div>

              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value={salesItem}
                  name="salesItem"
                  onClick={(e) => onToggleSalesItem(e)}
                  checked={salesItem}
                  class="custom-control-input"
                  id="customCheck2"
                />
                <label class="custom-control-label" for="customCheck2">
                  Sales Item
                </label>
              </div>

              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value={inventoryItem}
                  name="inventoryItem"
                  onClick={(e) => onToggleInventoryItem(e)}
                  checked={inventoryItem}
                  class="custom-control-input"
                  id="customCheck3"
                />
                <label class="custom-control-label" for="customCheck3">
                  Inventory Item
                </label>
              </div>
            </div>
          </div>

          <button
            disabled={false}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

CreateItem.propTypes = {
  addItem: PropTypes.func.isRequired,
  getItemGroups: PropTypes.func.isRequired,
  getUoms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  itemGroups: state.itemGroup.itemGroups,
  uoms: state.uom.uoms,
});

export default connect(mapStateToProps, { addItem, getItemGroups, getUoms })(
  withRouter(CreateItem)
);
