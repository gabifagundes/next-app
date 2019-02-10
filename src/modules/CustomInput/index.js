import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    color: "#fff !important",
    fontSize: 18
  },
  margin: {
    margin: theme.spacing.unit
  },
  cssLabel: {
    color: "#EE6C4D",
    "&$cssFocused": {
      color: "#fff"
    }
  },
  cssFocused: {
    "&:after": {
      border: 2,
      borderBottomColor: "#fff"
    }
  },
  cssUnderline: {
    color: "#fff",
    "&:before": {
      borderBottomColor: "#EE6C4D !important"
    },
    "&:after": {
      borderBottomColor: "#fff"
    }
  }
});

function CustomInputs(props) {
  const { classes, onChange, label, className } = props;

  return (
    <div className={` w-100 ${classes.root}`}>
      <FormControl className={(classes.margin, className)}>
        <InputLabel
          htmlFor="custom-css-standard-input"
          classes={{
            root: classes.cssLabel,
            focused: classes.cssFocused
          }}
        >
          {label}
        </InputLabel>
        <Input
          id="custom-css-standard-input"
          onChange={onChange}
          classes={{
            underline: classes.cssUnderline
          }}
        />
      </FormControl>
    </div>
  );
}

CustomInputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomInputs);
