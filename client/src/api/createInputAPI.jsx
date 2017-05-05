import React from 'react';
import {Field} from 'redux-form';

const renderInput = field =>
  <div>
    <textarea {...field.input} className={`form-control textarea_recipe
    ${field.meta.touched &&
    field.meta.error &&
    field.meta.invalid && "textarea_error"}`
    } rows="15" type={field.type}/>
    {field.meta.touched &&
    field.meta.error &&
    field.meta.invalid &&
    <div className="help-block error">
      {field.meta.touched ? field.meta.error : field.meta.invalid ? field.meta.error : ''}
    </div>}
  </div>;

export function createInput(label, name) {
  return (
    <div className="form-group text-center">
      <h2 className="page-header">{label}</h2>
      <Field
        name={name}
        component={renderInput}
        type="text"
      />
    </div>
  )
}


