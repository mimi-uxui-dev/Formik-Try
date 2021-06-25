
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";

export default function App() {

  const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <>
        <label htmlFor={props.id || props.name}> {label} </label>
        <input {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

  const CustomCheckBox = ({ children, ...props }) => {
    const [field, meta] = useField(props, "checkbox");

    return (
      <>
        <label>
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

  const CustomSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <>
        <label htmlFor={props.id || props.name}> {label} </label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

  const onsubmit = (values, { setSubmitting, resetForm }) => {
    
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      resetForm();
      setSubmitting(false);
    }, 1000);


  }

  return (
    <div className="App">
      <h1>Sliider</h1>
      <h2>the funny, the wize and the woo</h2>

      
    </div>
  );
}