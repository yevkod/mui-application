import React from 'react';
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {TextField} from "@mui/material";
import {minWidth} from "../ContactForm";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const popperSX = {
    "& .MuiPaper-root": {
        color: "yellow"
    },
    "& [role=grid]": {
        backgroundColor: "green",
        "& button": {
            backgroundColor: "red"
        }
    }
}

const BeautifulDesktopDatePicker = (
    props: {
        value: string | undefined,
        onChange: (value: string | null | undefined) => void
    }
) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                label="Date"
                // @ts-ignore
                inputFormat='MM/DD/YYYY'
                views={["day"]}
                renderInput={(params: any) => {
                    return <TextField {...params} sx={{minWidth: minWidth}}></TextField>
                }}
                components={{
                    OpenPickerIcon: CalendarTodayIcon,
                }}
                InputProps={{
                    sx: {"& .MuiSvgIcon-root": {color: "primary.main"}}
                }}
                PopperProps={{
                    sx: popperSX,
                }}
            />
        </LocalizationProvider>
    );
};

export default BeautifulDesktopDatePicker;
