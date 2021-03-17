import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CreatePQ = ({ history }) => {
  const [formData, setFormData] = useState({
    supplier: "",
    rDate: "",
    qDate: "",
    items: [],
  });

  const { supplier, rDate, qDate } = formData;

  const [inputList, setInputList] = useState([
    { item: "", quantity: "", unitPrice: "", tax: "", total: "" },
  ]);

  useEffect(() => {
    //eslint-diable-next-line
  }, []);

  const {} = formData;

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { item: "", quantity: "", unitPrice: "", tax: "", total: "" },
    ]);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    formData.items.splice(0, formData.items.length, inputList);

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
        <div className='col-sm-4 text-right'>
          <h1 className='display-4 text-right'>₹ 273000.00</h1>
        </div>
      </div>
      <form className='mt-2' onSubmit={(e) => onSubmitHandler(e)}>
        <h4>Supplier</h4>
        <div className='form-group row mb-5'>
          <div className='input-group  col-sm-4'>
            <select
              name='supplier'
              className='form-control'
              onChange={(e) => onChangeHandler(e)}
              value={supplier}
              required
            >
              <option value='' disabled selected hidden>
                Supplier
              </option>
              <option value='Acros'>Acros</option>
              <option value='Alfa'>Alfa</option>
              <option value='Beta'>Beta</option>
            </select>
            <small id='code_error' className='text-danger'></small>
          </div>

          <div className='input-group col-sm-4'>
            <label className='col-form-label'> Date &nbsp;</label>

            <input
              className='form-control '
              name='rDate'
              type='date'
              value={rDate}
              placeholder='Item Name/SKU'
              onChange={(e) => onChangeHandler(e)}
              readOnly={false}
              required
            />
            <small id='name_error' className='text-danger'></small>
          </div>

          <div className='input-group col-sm-4'>
            <label className='col-form-label'>Quote Date &nbsp; </label>

            <input
              className='form-control '
              name='qDate'
              type='date'
              value={qDate}
              placeholder='Item Name/SKU'
              onChange={(e) => onChangeHandler(e)}
              readOnly={false}
              required
            />
            <small id='name_error' className='text-danger'></small>
          </div>
        </div>
        <hr />

        <div className='items my-4'>
          <h4 className=''>
            Items{" "}
            <Link to='/items'>
              <i className='fa fa-list-alt'></i>{" "}
            </Link>
          </h4>

          {inputList.map((x, i) => (
            <div className='form-group row'>
              <div className='input-group col-sm-2'>
                <select
                  className='form-control '
                  name='item'
                  value={x.item}
                  onChange={(e) => handleInputChange(e, i)}
                  required
                >
                  <option value='' disabled selected hidden>
                    Item
                  </option>
                  <option value='Pen'>Pen</option>
                  <option value='Pencil'>Pencil</option>
                  <option value='Paper'>Paper</option>
                </select>
              </div>
              <div className='input-group col-sm-2'>
                <input
                  className='form-control'
                  name='unitPrice'
                  placeholder='Unit Price'
                  value={x.unitPrice}
                  onChange={(e) => handleInputChange(e, i)}
                  required
                />
              </div>
              <div className='input-group col-sm-2'>
                <input
                  className='form-control'
                  name='quantity'
                  placeholder='Quantity'
                  value={x.quantity}
                  onChange={(e) => handleInputChange(e, i)}
                  required
                />
              </div>
              <div className='input-group col-sm-2'>
                <select
                  className='form-control '
                  name='tax'
                  value={x.tax}
                  onChange={(e) => handleInputChange(e, i)}
                  required
                >
                  <option value='' disabled selected hidden>
                    Tax
                  </option>
                  <option value='gst0'>GST- 0%</option>
                  <option value='gst5'>GST- 5%</option>
                  <option value='gst12'>GST- 12%</option>
                  <option value='gst18'>GST- 18%</option>
                  <option value='gst28'>GST- 28%</option>
                  <option value='igst0'>IGST- 0%</option>
                  <option value='igst5'>IGST- 5%</option>
                  <option value='igst12'>IGST- 12%</option>
                  <option value='igst18'>IGST- 18%</option>
                  <option value='igst28'>IGST- 28%</option>
                </select>
              </div>
              <div className='input-group col-sm-2'>
                <input
                  className='form-control'
                  name='total'
                  placeholder='Total'
                  value={x.total}
                  onChange={(e) => handleInputChange(e, i)}
                  required
                  readOnly
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

        <button type='submit' className='btn btn-primary btn-block my-5'>
          Submit
        </button>
      </form>
    </main>
  );
};

CreatePQ.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(withRouter(CreatePQ));
