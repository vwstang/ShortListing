import React from "react";
import PropTypes from "prop-types";

const Textbox = (props) => {
  /* NOTE: Default values for individual properties of object prop-types
   *       Must be done this way as defaultProps will only set values if
   *       the prop is not passed at all (i.e. will not set other properties
   *       if even one property is passed).
   */
  const defaultClasses = {
    dfltLabel: "textbox-label-text",
    dfltInput: "textbox-input"
  };
  const classes = { ...defaultClasses, ...props?.classes };

  const inputProps = {
    id: props.inputid,
    name: props.name || props.inputid,
    type: "text",
    className: `${classes.dfltInput}${
      classes.addlInput ? ` ${classes.addlInput}` : ""
    }${props.error ? ` errors` : ""}`,
    ...(props.placeholder && { placeholder: props.placeholder }),
    value: props.value,
    onChange: props.handlechange,
    ...(props.handleblur && { onBlur: props.handleblur }),
    required: false
  };
  return (
    <>
      <div
        className={`textbox-container${props.halfwidth ? " half-width" : ""}${
          !props.entirerow && props.leftcol && !props.rightcol ? " left" : ""
        }${
          !props.entirerow && !props.leftcol && props.rightcol ? " right" : ""
        }${
          props.entirerow && !props.leftcol && !props.rightcol
            ? " entire-row"
            : ""
        }`}
      >
        <div className="textbox-label-container">
          <div className="textbox-label-wrapper">
            {props.label && (
              <label
                htmlFor={props.inputid}
                className={`${classes.dfltLabel}${
                  classes.addlLabel ? ` ${classes.addlLabel}` : ""
                }`}
              >
                {props.label}
              </label>
            )}
            {props.error && (
              <span className="textbox-label-error">
                {props.error.split("-")[1]}
              </span>
            )}
          </div>
          {!props.required && (
            <span className="textbox-label-optional">Optional</span>
          )}
        </div>
        <input {...inputProps} />
      </div>
    </>
  );
};

Textbox.propTypes = {
  inputid: PropTypes.string.isRequired,
  name: PropTypes.string,
  halfwidth: PropTypes.bool,
  // TODO: Use custom prop type function to check if halfwidth is true otherwise error
  leftcol: PropTypes.bool,
  rightcol: PropTypes.bool,
  entirerow: PropTypes.bool,
  classes: PropTypes.exact({
    // NOTE: Overrides default class of label
    dfltLabel: PropTypes.string,
    // NOTE: Adds additional classes to label
    addlLabel: PropTypes.string,
    // NOTE: Overrides default class of input
    dfltInput: PropTypes.string,
    // NOTE: Adds additional classes to input
    addlInput: PropTypes.string
  }),
  label: PropTypes.string,
  placeholder: PropTypes.any,
  value: PropTypes.any.isRequired,
  handlechange: PropTypes.func.isRequired,
  handleblur: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.string
};

Textbox.defaultProps = {
  halfwidth: false,
  entirerow: false,
  leftcol: false,
  rightcol: false,
  label: "",
  required: false
};

export default Textbox;
