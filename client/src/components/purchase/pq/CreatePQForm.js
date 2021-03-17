import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderItems = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    <li>
      <button type='button' onClick={() => fields.push({})}>
        Add Items
      </button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((item, index) => (
      <li key={index}>
        <button
          type='button'
          title='Remove item'
          onClick={() => fields.remove(index)}
        >
          remove item
        </button>
        <h4>Item #{index + 1}</h4>
        <Field
          name={`${item}.name`}
          type='text'
          component={renderField}
          label='Item Name'
        />
        <Field
          name={`${item}.quantity`}
          type='text'
          component={renderField}
          label='Quantity'
        />
      </li>
    ))}
  </ul>
);

const CreatePQForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name='supplier'
        type='text'
        component={renderField}
        label='Supplier'
      />
      <FieldArray name='items' component={renderItems} />
      <div>
        <button type='submit' disabled={submitting}>
          Submit
        </button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "createPQForm", // a unique identifier for this form
})(CreatePQForm);
