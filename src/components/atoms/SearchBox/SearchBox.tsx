import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { IProduct } from "../../../shared";
import { title } from "process";

const SearchBox = () => {
  const products: IProduct[] = useAppSelector(
    (state) => state.product.products
  );

  const [value, setValue] = useState("");

  const test = (val: any) => {
    setValue(val);
    console.log(val);
  };
  return (
    <Autocomplete
      disablePortal
      id="checkboxes-tags-demo"
      options={products}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.title
      }
      sx={{ width: 300, mr: "auto", ml: "auto" }}
      freeSolo
      size="small"
      onChange={(event, value) => {
        console.log("Selected object:", value);
        if (value) {
          setValue(typeof value === "string" ? value : value.title);
        }
      }}
      value={value}
      renderInput={(params) => <TextField {...params} label="Search" />}
      renderOption={(props, option, { selected }) => (
        <li {...props} key={option._id}>
          {option.title}
        </li>
      )}
    />
  );
};

export { SearchBox };
