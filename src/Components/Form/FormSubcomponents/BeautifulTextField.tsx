import React from 'react';
import {TextField, TextFieldProps} from "@mui/material";
import {minWidth} from '../ContactForm';

const tsStyles = {}

const BeautifulTextField = (props: TextFieldProps) => {
    return (
        <>
            <TextField
                {...props}
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                sx={{
                    minWidth: minWidth,
                    minRight: 2,
                    marginBottom: {xs: 2, md: 0},
                    marginRight: { md: 2 },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            borderColor: "primary.dark"
                        }
                    },
                    "& .MuiOutlinedInput-root:hover": {
                        "& > fieldset.MuiOutlinedInput-notchedOutline": {
                            borderColor: "orange"
                        }
                    }
                }
            }
            />
        </>
    );
};

export default BeautifulTextField;
