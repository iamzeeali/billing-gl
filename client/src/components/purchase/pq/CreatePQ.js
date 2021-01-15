import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CreatePQ = ({ history }) => {
  const [formData, setFormData] = useState({
    supplier: "",
  });

  const { supplier } = formData;

  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

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
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const onSubmitHandler = (e) => {
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
      <div className='title mb-3'>
        <h4 className='float-left'>Create Purchase Quotation</h4>
        <Link to='/purchase-quotation' className='btn btn-primary float-right '>
          P. Quotations
        </Link>
      </div>

      <br />

      <form className='mt-5' onSubmit={(e) => onSubmitHandler(e)}>
        <div className='ml-auto'>
          <h1 className='display-4'>
            {" "}
            <span></span> ₹0.00
          </h1>
        </div>

        <div class='form-group row'>
          <div class='input-group  col-sm-4'>
            <label class='col-form-label'>Supplier &nbsp; </label>

            <select
              name='group'
              id=''
              class='form-control'
              onChange={(e) => onChangeHandler(e)}
              value={supplier}
            >
              <option value='Supplier' disabled selected hidden>
                Supplier
              </option>
              <option value='Acros'>Acros</option>
              <option value='Acros'>Alfa</option>
              <option value='Acros'>Beta</option>
            </select>
            <small id='code_error' className='text-danger'></small>
          </div>

          <div class='input-group col-sm-4'>
            <label class='col-form-label'> Date &nbsp;</label>

            <input
              className='form-control '
              name='rDate'
              type='date'
              placeholder='Item Name/SKU'
              onChange={(e) => onChangeHandler(e)}
              readOnly={false}
            />
            <small id='name_error' className='text-danger'></small>
          </div>

          <div class='input-group col-sm-4'>
            <label class='col-form-label'>Quote Date &nbsp; </label>

            <input
              className='form-control '
              name='qDate'
              type='date'
              placeholder='Item Name/SKU'
              onChange={(e) => onChangeHandler(e)}
              readOnly={false}
            />
            <small id='name_error' className='text-danger'></small>
          </div>
        </div>
        {inputList.map((x, i) => (
          <div className='form-group row'>
            <div className='input-group col-sm-2'>
              <select
                className='form-control '
                name='item'
                value={x.firstName}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option value='' disabled selected hidden>
                  Item/Service
                </option>
                <option value='Acros'>Pen</option>
                <option value='Acros'>Pencil</option>
                <option value='Acros'>Paper</option>
              </select>
            </div>
            <div className='input-group col-sm-2'>
              <input
                className='form-control'
                name='lastName'
                placeholder='Quantity'
                value={x.lastName}
                onChange={(e) => handleInputChange(e, i)}
              />
            </div>
            <div className='input-group col-sm-2'>
              <input
                className='form-control'
                name='lastName'
                placeholder='Unit Price'
                value={x.lastName}
                onChange={(e) => handleInputChange(e, i)}
              />
            </div>
            <div className='input-group col-sm-2'>
              <input
                className='form-control'
                name='lastName'
                placeholder='Tax'
                value={x.lastName}
                onChange={(e) => handleInputChange(e, i)}
              />
            </div>
            <div className='input-group col-sm-2'>
              <input
                className='form-control'
                name='lastName'
                placeholder='Total'
                value={x.lastName}
                onChange={(e) => handleInputChange(e, i)}
              />
            </div>
            <div className='col-sm-1'></div>{" "}
            <div className='btn-box'>
              {inputList.length !== 1 && (
                <button
                  className='mr10 btn btn-primary'
                  onClick={() => handleRemoveClick(i)}
                >
                  -
                </button>
              )}
              {inputList.length - 1 === i && (
                <button onClick={handleAddClick} className='btn btn-primary'>
                  +
                </button>
              )}
            </div>
          </div>
        ))}

        <button disabled={false} type='submit' className='float'>
          <i class='fa fa-plus my-float'></i>
        </button>
      </form>
    </main>
  );
};

CreatePQ.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(withRouter(CreatePQ));
