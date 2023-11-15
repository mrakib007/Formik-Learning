<Form>
<div className="form-control">
  <label htmlFor="name">Name</label>
  <Field
    type="text"
    id="name"
    name="name"
  // {...formik.getFieldProps("name")}
  />
  {/* {formik.touched.name && formik.errors.name ? (
    <div className="error">{formik.errors.name}</div>
  ) : null} */}
  <ErrorMessage name="name" component={TextError} />
</div>
<div className="form-control">
  <label htmlFor="name">Email</label>
  <Field type="text" id="email" name="email" />
  <ErrorMessage name="email">
    {(errorMessage) => <div className="error">{errorMessage}</div>}
  </ErrorMessage>
</div>
<div className="form-control">
  <label htmlFor="channel">Channel</label>
  <Field
    type="text"
    id="channel"
    name="channel"
    placeHolder="youtube channel name"
  />
  <ErrorMessage name="channel" />
</div>

<div className="form-control">
  <label htmlFor="comments">Comments</label>
  <Field as="textarea" id="comments" name="comments" validate={validateComments} />
  {/* <Field component="textarea" id="comments" name="comments"/> */}
  <ErrorMessage name="comments" component={TextError}/>
</div>
<div className="form-control">
  <label htmlFor="address">Address</label>
  {/* <Field name="address"> */}
  {/* using fast field */}
  <FastField name="address">
    {(props) => {
      console.log('Field render');
      const { field, form, meta } = props;
      return (
        <div>
          <input type="text" name="address" id="address" {...field} />
          {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </div>
      );
    }}
  </FastField>
</div>
<div className="form-control">
  <label htmlFor="facebook">Facebook Profile</label>
  <Field type="text" id="facebook" name="social.facebook" />
</div>
<div className="form-control">
  <label htmlFor="twitter">Twitter Profile</label>
  <Field type="text" id="twitter" name="social.twitter" />
</div>

<div className="form-control">
  <label htmlFor="primaryPh">Primary Phone Number</label>
  <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
</div>
<div className="form-control">
  <label htmlFor="secondaryPh">Secondary Phone Number</label>
  <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
</div>

<div className="form-control">
  <label htmlFor="">List of phone numbers</label>
  <FieldArray name="phNumbers">
    {(fieldArrayProps) => {
      // console.log("fieldArrayProps", fieldArrayProps);
      const { push, remove, form } = fieldArrayProps;
      const { values } = form;
      const { phNumbers } = values;
      console.log('Form Errors', form.errors);
      return (
        <div>
          {phNumbers.map((phNumber, index) => (
            <div key={index}>
              <Field name={`phNumbers[${index}]`} />
              {index > 0 && (
                <button type="button" onClick={() => remove(index)}>
                  -
                </button>
              )}
              <button type="button" onClick={() => push("")}>
                +
              </button>
            </div>
          ))}
        </div>
      );
    }}
  </FieldArray>
</div>
<button type="submit">Submit</button>
</Form>