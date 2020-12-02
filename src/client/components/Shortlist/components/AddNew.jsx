import React, { useEffect } from "react";
import { Formik } from "formik";
import { addMethod as newValidator, object, string, number, mixed } from "yup";
import Textbox from "CommonComps/Textbox";

const initVals = {
  addNewAddress: "",
  addNewMunicipality: "",
  addNewDistrict: "",
  addNewGarage: "",
  addNewParking: ""
};

newValidator(mixed, "pretendValidate", function (options) {
  const { path, createError } = this;
  const { message } = options;
  console.info("pretendValidate checking");
  message && console.log(message);
  return (
    message ||
    createError({
      path,
      message: "Missing a message for this validator to pass"
    })
  );
});

const addNewFormSchema = object().shape({
  addNewAddress: string("Invalid address").required("Address-is required"),
  addNewMunicipality: string("Invalid municipality").required(
    "Municipality-is required"
  ),
  addNewDistrict: string(),
  addNewGarage: number().typeError("Garage-isn't a number"),
  addNewParking: number().typeError("Parking-isn't a number")
});

const addNewFormSubmit = (values, events) => {
  console.info("addNewFormSubmit running");
  console.log(values);
  console.log(events);
};

const AddNew = (props) => {
  return (
    <Formik
      initialValues={initVals}
      validationSchema={addNewFormSchema}
      onSubmit={addNewFormSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        resetForm
      }) => {
        console.log(errors);
        const hookHandleChange = (e) => {
          if (!props.uncommittedChgs) {
            props.setUncommittedChgs(true);
          }
          handleChange(e);
        };

        useEffect(() => {
          if (!props.active) {
            // NOTE: Set timeout to match $animation-slide interval in general.scss
            setTimeout(() => {
              resetForm();
            }, 500);
          }
        }, [props.active]);

        return (
          <form id="addNewForm" className="addnew-form">
            <Textbox
              inputid="addNewAddress"
              label="Address"
              placeholder="290 Bremner Boulevard"
              value={values.addNewAddress}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              required
              error={touched.addNewAddress && errors.addNewAddress}
            />
            <Textbox
              inputid="addNewMunicipality"
              label="Municipality"
              placeholder="Toronto"
              value={values.addNewMunicipality}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              required
              halfwidth
              leftcol
              error={touched.addNewMunicipality && errors.addNewMunicipality}
            />
            <Textbox
              inputid="addNewDistrict"
              label="District"
              placeholder="Downtown"
              value={values.addNewDistrict}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              halfwidth
              rightcol
              error={touched.addNewDistrict && errors.addNewDistrict}
            />
            <Textbox
              inputid="addNewGarage"
              label="Garage"
              placeholder={1}
              value={values.addNewGarage}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              halfwidth
              leftcol
              error={touched.addNewGarage && errors.addNewGarage}
            />
            <Textbox
              inputid="addNewParking"
              label="Parking"
              placeholder={2}
              value={values.addNewParking}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              halfwidth
              rightcol
              error={touched.addNewParking && errors.addNewParking}
            />
          </form>
        );
      }}
    </Formik>
  );
};

export default AddNew;
