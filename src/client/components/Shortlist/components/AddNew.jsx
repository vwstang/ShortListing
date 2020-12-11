import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { addMethod as newValidator, object, string, number, mixed } from "yup";
import Textbox from "CommonComps/Textbox";

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

const initVals = {
  addNewAddress: "",
  addNewMunicipality: "",
  addNewNeighbourhood: "",
  addNewHouseType: "",
  addNewHouseStyle: "",
  addNewFrontage: "",
  addNewLotDepth: "",
  addNewBedrooms: "",
  addNewBathrooms: "",
  addNewGarage: "",
  addNewParking: ""
};

const addNewFormSchema = object().shape({
  addNewAddress: string("Invalid address").required("Address-is required"),
  addNewMunicipality: string("Invalid municipality").required(
    "Municipality-is required"
  ),
  addNewNeighbourhood: string(),
  addNewHouseType: string(),
  addNewHouseStyle: string(),
  addNewFrontage: number().typeError("Frontage-should be a number"),
  addNewLotDepth: number().typeError("Lot Depth-should be a number"),
  addNewBedrooms: number().typeError("Bedrooms-should be a number"),
  addNewBathrooms: number().typeError("Bathrooms-should be a number"),
  addNewGarage: number().typeError("Garage-should be a number"),
  addNewParking: number().typeError("Parking-should be a number")
});

const addNewFormSubmit = (values, events) => {
  console.info("addNewFormSubmit running");
  console.log(values);
  console.log(events);
};

const AddNew = (props) => {
  const [isLoading, setIsLoading] = useState(false);

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
              inputid="addNewFromUrl"
              label="Retrieve data from URL"
              placeholder="290 Bremner Boulevard"
              value={values.addNewFromUrl}
              handlechange={handleChange}
              handleblur={handleBlur}
              error={touched.addNewFromUrl && errors.addNewFromUrl}
            />
            <button
              type="button"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  resetForm({
                    values: {
                      addNewAddress: "HELLO SOMEWHERE STREET",
                      addNewMunicipality: "",
                      addNewNeighbourhood: "",
                      addNewHouseType: "",
                      addNewHouseStyle: "",
                      addNewFrontage: "",
                      addNewLotDepth: "",
                      addNewBedrooms: "",
                      addNewBathrooms: "",
                      addNewGarage: "",
                      addNewParking: ""
                    }
                  });
                  props.setUncommittedChgs(true);
                  setIsLoading(false);
                }, 2000);
              }}
            >
              Retrieve Data
            </button>
            <Textbox
              inputid="addNewAddress"
              label="Address"
              placeholder="290 Bremner Boulevard"
              value={values.addNewAddress}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              required
              disabled={isLoading}
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
              disabled={isLoading}
              halfwidth
              leftcol
              error={touched.addNewMunicipality && errors.addNewMunicipality}
            />
            <Textbox
              inputid="addNewNeighbourhood"
              label="Neighbourhood"
              placeholder="Downtown"
              value={values.addNewNeighbourhood}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              disabled={isLoading}
              halfwidth
              rightcol
              error={touched.addNewNeighbourhood && errors.addNewNeighbourhood}
            />
            <Textbox
              inputid="addNewHouseType"
              label="House Type"
              placeholder="Condo"
              value={values.addNewHouseType}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              disabled={isLoading}
              halfwidth
              leftcol
              error={touched.addNewHouseType && errors.addNewHouseType}
            />
            <Textbox
              inputid="addNewHouseStyle"
              label="House Style"
              placeholder="2-Storey"
              value={values.addNewHouseStyle}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              disabled={isLoading}
              halfwidth
              rightcol
              error={touched.addNewHouseStyle && errors.addNewHouseStyle}
            />
            <Textbox
              inputid="addNewFrontage"
              label="Frontage"
              placeholder={20}
              value={values.addNewFrontage}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              disabled={isLoading}
              halfwidth
              leftcol
              error={touched.addNewFrontage && errors.addNewFrontage}
            />
            <Textbox
              inputid="addNewLotDepth"
              label="Lot Depth"
              placeholder={110}
              value={values.addNewLotDepth}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              disabled={isLoading}
              halfwidth
              rightcol
              error={touched.addNewLotDepth && errors.addNewLotDepth}
            />
            <Textbox
              inputid="addNewBedrooms"
              label="Bedrooms"
              placeholder={3}
              value={values.addNewBedrooms}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              disabled={isLoading}
              halfwidth
              leftcol
              error={touched.addNewBedrooms && errors.addNewBedrooms}
            />
            <Textbox
              inputid="addNewBathrooms"
              label="Bathrooms"
              placeholder={4}
              value={values.addNewBathrooms}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              disabled={isLoading}
              halfwidth
              rightcol
              error={touched.addNewBathrooms && errors.addNewBathrooms}
            />
            {/* TODO: UPDATE REST OF LISTING DETAILS */}
            <Textbox
              inputid="addNewBedrooms"
              label="Bedrooms"
              placeholder={3}
              value={values.addNewBedrooms}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              disabled={isLoading}
              halfwidth
              leftcol
              error={touched.addNewBedrooms && errors.addNewBedrooms}
            />
            <Textbox
              inputid="addNewBathrooms"
              label="Bathrooms"
              placeholder={4}
              value={values.addNewBathrooms}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              disabled={isLoading}
              halfwidth
              rightcol
              error={touched.addNewBathrooms && errors.addNewBathrooms}
            />
            <Textbox
              inputid="addNewBedrooms"
              label="Bedrooms"
              placeholder={3}
              value={values.addNewBedrooms}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              disabled={isLoading}
              halfwidth
              leftcol
              error={touched.addNewBedrooms && errors.addNewBedrooms}
            />
            <Textbox
              inputid="addNewBathrooms"
              label="Bathrooms"
              placeholder={4}
              value={values.addNewBathrooms}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              disabled={isLoading}
              halfwidth
              rightcol
              error={touched.addNewBathrooms && errors.addNewBathrooms}
            />
            <Textbox
              inputid="addNewBedrooms"
              label="Bedrooms"
              placeholder={3}
              value={values.addNewBedrooms}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              disabled={isLoading}
              halfwidth
              leftcol
              error={touched.addNewBedrooms && errors.addNewBedrooms}
            />
            <Textbox
              inputid="addNewBathrooms"
              label="Bathrooms"
              placeholder={4}
              value={values.addNewBathrooms}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              disabled={isLoading}
              halfwidth
              rightcol
              error={touched.addNewBathrooms && errors.addNewBathrooms}
            />
            <Textbox
              inputid="addNewBedrooms"
              label="Bedrooms"
              placeholder={3}
              value={values.addNewBedrooms}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              disabled={isLoading}
              halfwidth
              leftcol
              error={touched.addNewBedrooms && errors.addNewBedrooms}
            />
            <Textbox
              inputid="addNewBathrooms"
              label="Bathrooms"
              placeholder={4}
              value={values.addNewBathrooms}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              disabled={isLoading}
              halfwidth
              rightcol
              error={touched.addNewBathrooms && errors.addNewBathrooms}
            />
            {/* TODO: END TODO */}
            <Textbox
              inputid="addNewGarage"
              label="Garage"
              placeholder={1}
              value={values.addNewGarage}
              handlechange={hookHandleChange}
              handleblur={handleBlur}
              disabled={isLoading}
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
              disabled={isLoading}
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
