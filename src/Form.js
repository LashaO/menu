import React from "react";
import { button, TextField } from "@material-ui/core";
const Forma = () => {
  return (
    <form noValidate autoComplete="off" style={{ justifyContent: "center" }}>
      <h4
        style={{
          minWidth: "50%",
          marginLeft: "10%",
          marginRight: "40%",
          marginBottom: "15px",
        }}
      >
        შესაკვეთად გთხოვთ შეავსოთ ფორმა
      </h4>
      <TextField
        style={{
          minWidth: "50%",
          marginLeft: "10%",
          marginRight: "40%",
          marginBottom: "5px",
        }}
        id="outlined-basic"
        label="სახელი"
        variant="outlined"
        required
      />
      <TextField
        style={{
          minWidth: "50%",
          marginLeft: "10%",
          marginRight: "40%",
          marginBottom: "5px",
        }}
        id="outlined-basic"
        label="გვარი"
        variant="outlined"
        required
      />
      <TextField
        style={{
          minWidth: "50%",
          marginLeft: "10%",
          marginRight: "40%",
          marginBottom: "5px",
        }}
        id="outlined-basic"
        label="ნომერი"
        variant="outlined"
        required
      />
      <TextField
        classes={{ root: "TextField" }}
        style={{
          minWidth: "50%",
          marginLeft: "10%",
          marginRight: "40%",
          marginBottom: "5px",
        }}
        id="outlined-basic"
        label="მისამართი"
        variant="outlined"
        required
      />

      <button
        style={{
          minWidth: "50%",
          marginLeft: "10%",
          marginRight: "40%",
          marginBottom: "60px",
        }}
        className="filter-btn"
        type="submit"
      >
        შეკვეთა
      </button>
    </form>
  );
};

export default Forma;
