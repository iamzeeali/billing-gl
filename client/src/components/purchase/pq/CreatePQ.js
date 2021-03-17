import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPurchaseQuotation } from "../../../_actions/purchaseQuotationAction";
import { getSuppliers } from "../../../_actions/supplierAction";
import { getItems, getItem } from "../../../_actions/itemAction";
import Input from "../../UI/Input";

const CreatePQ = ({
  addPurchaseQuotation,
  getSuppliers,
  suppliers,
  getItems,
  items,
  getItem,
  currentItem,
  history,
}) => {
  const [formData, setFormData] = useState({
    supplier: "",
    dDate: "",
    qDate: "",
    pqItems: [],
    total: "",
  });
  const [selected, setSelected] = useState(-1);

  let { supplier, dDate, qDate, total, pqItems } = formData;

  const [inputList, setInputList] = useState([
    { item: "", quantity: "", unitPrice: "", tax: "", total: 0 },
  ]);

  useEffect(() => {
    getSuppliers();
    getItems();

    // getItem("5fc7368040a2ab04bc69a0e7");
    if (currentItem && currentItem._id) {
      let list = [...inputList];
      list[selected]["unitPrice"] = currentItem.unitPrice;
      setInputList(list);
    }
  }, [currentItem && currentItem._id]);

  const {} = formData;

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    formData.pqItems = inputList;
    setInputList(list);

    setFormData({
      ...formData,
      total: formData.pqItems.reduce(function (prev, cur) {
        return prev + cur.total;
      }, 0),
    });
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        item: "",
        quantity: "",
        unitPrice: "",
        tax: "",
        total: 0,
      },
    ]);
  };

  const handleInputChange = (e, index) => {
    e.preventDefault();
    const { name, value } = e.target;
    const list = [...inputList];

    if (name === "item") {
      getItem(value);
      setSelected(index);
      list[index]["unitPrice"] = currentItem
        ? currentItem.unitPrice
        : "Loading...";
      setInputList(list);
    }

    list[index][name] = value;
    setInputList(list);
  };

  // onSelectItem = (e) => {};

  const onselectTax = (e, index) => {
    const list = [...inputList];
    list[index]["total"] =
      (list[index]["quantity"] *
        list[index]["unitPrice"] *
        list[index]["tax"]) /
        100 +
      list[index]["quantity"] * list[index]["unitPrice"];

    setInputList(list);
    formData.pqItems = inputList;

    formData.total = formData.pqItems.reduce(function (prev, cur) {
      return prev + cur.total;
    }, 0);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    formData.pqItems = inputList;
    // addPurchaseQuotation(formData, history);
    console.log(formData);
  };

  return (
    <main className='container'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item text-small'>
          <Link to='/'>Home</Link>
        </li>
        <li className='breadcrumb-item'>Purchase</li>
        <li className='breadcrumb-item active'>Purchase Quotation</li>
        <li className='breadcrumb-item active'>Create PQ</li>
      </ol>
      <div className='title'>
        <h4 className=''>Create Purchase Quotation</h4>
        <Link to='/purchase-quotation' className='btn btn-primary'>
          P. Quotations
        </Link>
      </div>

      <div className='row container'>
        <div className='col-sm-8'></div>
        <div className='col-sm-4 text-right '>
          <sub>Total</sub>

          <h1 className='display-4 text-right'>₹ {formData.total}</h1>
        </div>
      </div>
      <form className='mt-2' onSubmit={(e) => onSubmitHandler(e)}>
        <div className='form-group row mb-5 p-4 bg-light'>
          <div className='input-group  col-sm-4'>
            <select
              name='supplier'
              className='form-control form-control-sm'
              onChange={(e) => onChangeHandler(e)}
              value={supplier}
              required={true}
            >
              <option value='' disabled selected hidden>
                Supplier
              </option>
              {suppliers.map((supp) => (
                <option key={supp._id} value={supp._id}>
                  {supp.name}
                </option>
              ))}
            </select>
            <small id='code_error' className='text-danger'></small>
          </div>

          <div className='input-group col-sm-4'>
            <label className='col-form-label'>Doc. Date &nbsp;</label>

            <Input
              className='form-control form-control-sm '
              name='dDate'
              type='date'
              value={dDate}
              placeholder='Item Name/SKU'
              onChange={(e) => onChangeHandler(e)}
              readOnly={false}
              required={true}
            />
            <small id='name_error' className='text-danger'></small>
          </div>

          <div className='input-group col-sm-4'>
            <label className='col-form-label'>Quote Date &nbsp; </label>

            <Input
              className='form-control form-control-sm '
              name='qDate'
              type='date'
              value={qDate}
              placeholder='Item Name/SKU'
              onChange={(e) => onChangeHandler(e)}
              readOnly={false}
              required={true}
            />
            <small id='name_error' className='text-danger'></small>
          </div>
        </div>
        <hr />

        <div className='items my-4 p-4'>
          <h3 className='mb-4'>
            ITEMS{" "}
            <Link to='/items'>
              <i className='fa fa-list-alt'></i>{" "}
            </Link>
          </h3>

          <div className='row  mb-1 font-weight-bold'>
            <div className='col-sm-2'>Item</div>
            <div className='col-sm-2'>Unit Price</div>
            <div className='col-sm-2'>Quantity</div>
            <div className='col-sm-2'>Tax</div>
            <div className='col-sm-2'>Total</div>
            <div className='col-sm-2'>Add/Remove Rows</div>
          </div>
          <hr />

          {inputList.map((x, i) => (
            <div className='form-group row'>
              <div className='input-group col-sm-2'>
                <select
                  className='form-control form-control-sm '
                  name='item'
                  value={x.item}
                  onChange={(e) => handleInputChange(e, i)}
                  required={true}
                >
                  <option value='' disabled selected hidden>
                    Item
                  </option>
                  {items.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='input-group col-sm-2'>
                <Input
                  className='form-control form-control-sm'
                  name='unitPrice'
                  placeholder='Unit Price'
                  value={x.unitPrice}
                  onChange={(e) => {
                    handleInputChange(e, i);
                    onselectTax(e, i);
                  }}
                  required={true}
                />
              </div>
              <div className='input-group col-sm-2'>
                <Input
                  className='form-control form-control-sm'
                  name='quantity'
                  placeholder='Quantity'
                  value={x.quantity}
                  onChange={(e) => {
                    handleInputChange(e, i);
                    onselectTax(e, i);
                  }}
                  required={true}
                />
              </div>
              <div className='input-group col-sm-2'>
                <select
                  className='form-control form-control-sm '
                  name='tax'
                  value={x.tax}
                  onChange={(e) => {
                    handleInputChange(e, i);
                    onselectTax(e, i);
                  }}
                  required={true}
                >
                  <option value='' disabled selected hidden>
                    Tax
                  </option>
                  <option value='0'>GST- 0%</option>
                  <option value='5'>GST- 5%</option>
                  <option value='12'>GST- 12%</option>
                  <option value='18'>GST- 18%</option>
                  <option value='28'>GST- 28%</option>
                  <option value='0'>IGST- 0%</option>
                  <option value='5'>IGST- 5%</option>
                  <option value='12'>IGST- 12%</option>
                  <option value='18'>IGST- 18%</option>
                  <option value='28'>IGST- 28%</option>
                </select>
              </div>
              <div className='input-group col-sm-2'>
                <Input
                  type='Number'
                  className='form-control form-control-sm'
                  name='total'
                  placeholder='Total'
                  value={x.total}
                  onChange={(e) => handleInputChange(e, i)}
                  required
                />
              </div>
              <div className='col-sm-1'></div>{" "}
              {inputList.length !== 1 && (
                <button
                  className='mr-2 btn btn-warning'
                  onClick={() => handleRemoveClick(i)}
                >
                  -
                </button>
              )}
              {inputList.length - 1 === i && (
                <button onClick={handleAddClick} className='btn btn-success'>
                  +
                </button>
              )}
            </div>
          ))}
        </div>

        <div className='row'>
          <div className='col-sm-2'>
            <button type='submit' className='btn btn-primary btn-block my-5'>
              Submit
            </button>
          </div>

          <div className='col-sm-2'>
            <Link className='btn btn-warning btn-block my-5' to='/dashboard'>
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
};

CreatePQ.propTypes = {
  addPurchaseQuotation: PropTypes.func.isRequired,
  getSuppliers: PropTypes.func.isRequired,
  suppliers: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired,
  getItem: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  suppliers: state.supplier.suppliers,
  items: state.item.items,
  currentItem: state.item.item,
});

export default connect(mapStateToProps, {
  addPurchaseQuotation,
  getSuppliers,
  getItems,
  getItem,
})(withRouter(CreatePQ));
