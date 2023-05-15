import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
    "&::placeholder": {
      // add the placeholder selector here
      color: "black", // set the color for the placeholder text
    },
  },
}));

export default function LayoutTextFields(props) {
  const classes = useStyles();

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={classes.root}>
      <div className="container-fluid">
        {/* <TextField
          id="outlined-full-width"
          label={props.label}
          style={{ margin: 8 }}
          placeholder={props.placeholder}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        /> */}
        <TextField
          id="outlined-full-width"
          label={isFocused ? props.label : ""}
          style={{ margin: 8 }}
          placeholder={!isFocused ? props.placeholder : ""}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          // value={isFocused ? props.label : ""}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {/* <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        /> */}
      </div>
    </div>
  );
}
