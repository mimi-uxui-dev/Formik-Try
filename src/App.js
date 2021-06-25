
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
      <h1>MoralOfTheStory.com </h1>
      <h2>the funny, the wize and the woo</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          acceptedTerms: false,
          specialPower: ""
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "lzm 3 cara")
            .max(15, "lzm max 15 cara")
            .required("Required"),
          email: Yup.string().email("inalid email").required("Requiredd"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms & conditions"),
          specialPower: Yup.string()
            .oneOf(
              ["flight", "invisibility", "Wealthy bat dude", "other"],
              "Invalid Special Powers"
            )
            .required("Required")
        })}

        onSubmit={onsubmit}

      >
        {(props) => (
          <Form>
            <h1>Sign Up</h1>

            <CustomInput
              label="name"
              name="name"
              type="text"
              placeholder="Mimi"
            />
            
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Mimi@mos.com"
            />
            
            <CustomSelect label="Special Power" name="specialPower">
              <option value="">Select</option>
              <option value="flight">flight</option>
              <option value="invisibility">invisibility</option>
              <option value="Wealthy bat dude">Wealthy bat dude</option>
              <option value="other">other</option>
            </CustomSelect>
            
            <CustomCheckBox name="acceptedTerms">
              I accept the terms
            </CustomCheckBox>
            
            <button type="submit">
              {props.isSubmitting ? "Loading..." : "Submit"}
            </button>
         
          </Form>
        )}
      </Formik>
    </div>
  );
}