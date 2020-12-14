import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addBPGroup } from "../../../_actions/bpGroupAction";

const CreateBpGroup = ({ addBPGroup, history }) => {
  const [formData, setFormData] = useState({
    group: "",
    description: "",
  });

  const { group, description } = formData;

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addBPGroup(formData, history);
  };

  return (
    <main className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item text-small">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">Business Partner</li>
        <li className="breadcrumb-item active">Create BP Group</li>
      </ol>
      <div className="title mb-3">
        <h4 className="float-left">Create Business Partner Group</h4>
        <Link to="/bp-groups" className="btn btn-primary float-right ">
          BP Groups
        </Link>
      </div>

      <form
        className="mt-5"
        onSubmit={(e) => onSubmitHandler(e)}
        className="py-5"
      >
        <div className="bg-secondary p-4">
          <p className="mx-auto lead text-center pb-2">
            Business Partner Group Information
          </p>

          <div class="form-group row">
            <label class="col-form-label col-sm-1">Group</label>
            <div class="col-sm-5">
              <input
                className="form-control "
                name="group"
                type="text"
                placeholder="Enter BP Group"
                value={group}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
                required
                autoFocus
              />
            </div>

            <label class="col-form-label col-sm-1">Description</label>
            <div class="col-sm-5">
              <textarea
                className="form-control "
                name="description"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => onChangeHandler(e)}
                readOnly={false}
              />
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

CreateBpGroup.propTypes = {
  addBPGroup: PropTypes.func.isRequired,
};

export default connect(null, { addBPGroup })(withRouter(CreateBpGroup));