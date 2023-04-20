import React from 'react';
import {DataGrid, GridRenderCellParams, GridToolbar} from "@mui/x-data-grid";
import contactData from "../Data/ContactData";
import {Theme, useTheme} from "@mui/material/styles";
import {Box, Button} from "@mui/material";

const handlePrintClick = (cellValues: GridRenderCellParams) => {
    console.log(cellValues)
}

const dataGridSx = {
    '& .MuiDataGrid-columnHeaders': {
        backgroundColor: 'primary.main',
        '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold',
            fontSize: 16,
        },
    },
    "& .MuiDataGrid-virtualScrollerRenderZone": {
        "& .MuiDataGrid-row": {
            "&:nth-of-type(2n)": {backgroundColor: "grid.main"}
        }
    }
}


const columns = (theme: Theme) => [
    {
        field: "name",
        headerName: "Name",
        minWidth: 180,
        // @ts-ignore
        renderCell: (cellValues: GridRenderCellParams<string>) => {
            return (
                <Box
                    sx={{
                        color: "primary.main",
                        fontSize: 18,
                        fontWeight: "bold"
                    }}
                >
                    {cellValues.value}
                </Box>
            )
        }
    },
    {
        field: "role",
        headerName: "Role",
        minWidth: 180,
        // @ts-ignore
        renderCell: (cellValues: GridRenderCellParams<string>) => {
            return cellValues.value
        }
    },
    {
        field: "skills",
        headerName: "Skills",
        minWidth: 180,
        // @ts-ignore
        renderCell: (cellValues: GridRenderCellParams<string>) => {
            return (
                <div style={{color: theme.palette.primary.main}}>{cellValues.value && cellValues.value[0]}</div>)
        }
    },
    {
        field: "startDate",
        headerName: "Start Date",
        minWidth: 190,
        // @ts-ignore
        renderCell: (cellValues: GridRenderCellParams<string>) => {
            return cellValues.value
        }
    },
    {
        field: "preference",
        headerName: "WorkPreference",
        minWidth: 180,
        // @ts-ignore
        renderCell: (cellValues: GridRenderCellParams<string>) => {
            return cellValues.value
        }
    },
    {
        field: "Print",
        minWidth: 175,
        renderCell: (cellValues: GridRenderCellParams) => {
            return (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        handlePrintClick(cellValues)
                    }}
                >
                    Print
                </Button>
            )
        }
    }
]

const ContactDataGrid = () => {
    const rows = () => [...contactData];
    const theme = useTheme();
    return (
        <DataGrid
            autoHeight
            rows={rows()}
            // @ts-ignore
            columns={columns(theme)}
            pageSize={5}
            headerHeight={60}
            rowHeight={90}
            sx={dataGridSx}
            components={
                {
                    Toolbar: () => {
                        return (
                            <GridToolbar
                                sx={{
                                    justifyContent: "flex-end",
                                    "& button": {border: "none"},
                                    "& .MuiBox-root": {display: "none"}
                                }}>
                                </GridToolbar>
                        )
                    }
                }
            }
            initialState={{
                sorting: {sortModel: [{field: "name", sort: "asc"}]}
            }}
        />
    );
};

export default ContactDataGrid;
