import React from "react";
import styles from "./FormsControls.module.css";
import { Field } from "redux-form";

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
  const showError = touched && error;
  return (
    <div className={styles.formControl + " " + (showError ? styles.error : "")}>
      <textarea {...input} {...props} />
      {showError && <span>{error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const showError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (showError ? styles.error : "")}>
      <input {...input} {...props} />
      {showError && <span>{meta.error}</span>}
    </div>
  );
};

export const createField = (
  placeholder,
  name,
  validate,
  component,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validate}
        component={component}
        {...props}
      />
      {text}
    </div>
  );
};
