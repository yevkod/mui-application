import React from 'react';
import {Autocomplete, TextField} from "@mui/material";
import {minWidth} from "../ContactForm";

const roles = ["Software Dev", "Architect", "Designer", "Business Analyst"];

const BeautifulAutocomplete = (
    props: {
        value: string
        onInputChange: (event: React.SyntheticEvent<Element, Event>, value: string) => void
    }
) => {

    return (
        <Autocomplete
            {...props}
            options={roles}
            sx={{minWidth: minWidth}}
            isOptionEqualToValue={(option, value) => option === value || value === ""}
            renderInput={(params) => {
                return (
                    <TextField
                        name="role"
                        sx={{
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                color: "primary.dark"
                            }
                        }}
                        {...params}
                    />
                )
            }}
            getOptionLabel={(roleOption) => `${roleOption}`}
            renderOption={(props, option) => {
                return (
                    <li {...props}>
                        {`${option}`}
                    </li>
                )
            }}
            ListboxProps={{
                // @ts-ignore
                sx: {
                    height: 100,
                    color: "green",
                    "& li.MuiAutoComplete-option:nth-child(even)": {backgroundColor: "green"},
                    "& li.MuiAutoComplete-option:hover": {backgroundColor: "gold"},
                    "& li.MuiAutoComplete-option[aria-selected='true'].Mui-focused": {backgroundColor: "gold"}
                }
            }}
        />
    )
};

export default BeautifulAutocomplete;
