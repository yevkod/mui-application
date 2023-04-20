import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import contactData from "../Data/ContactData";

const borderColor = {
    borderBottomColor: "primary.main"
}

console.log(contactData)

const ContactTable = () => {
    return (
        <TableContainer sx={{borderRadius: 1, boxShadow: 4, margin: 1 , width: 'calc(100% - 16px)'}}>
            <Table>
                <TableHead>
                    <TableRow sx={{backgroundColor: "grid.main", borderBottomColor: 'primary.main'}}>
                        <TableCell sx={{...borderColor, width: "30%"}}>Name</TableCell>
                        <TableCell sx={{...borderColor, width: "17%"}}>Role</TableCell>
                        <TableCell sx={{...borderColor, width: "17%"}}>Skills</TableCell>
                        <TableCell sx={{...borderColor, width: "17%"}}>Start Date</TableCell>
                        <TableCell sx={{...borderColor, width: "19%"}}>Preference</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contactData.map((contact) => (
                        <TableRow key={contact.id}>
                            {
                                Object.entries(contact).map(([key, value]) => {
                                    if (key === 'skills') {
                                        return (
                                            <TableCell key={contact.id + key}
                                                       sx={{...borderColor}}>{value.join(', ')}</TableCell>
                                        )
                                    }
                                    if (key === 'name') {
                                        return (
                                            <TableCell key={contact.id + key}
                                                       sx={{...borderColor, backgroundColor: "primary.light"}}
                                                // @ts-ignore
                                                       onClick={
                                                           (event: React.MouseEvent<HTMLInputElement>) => {
                                                               console.log((event.target as Element).innerHTML)
                                                           }
                                                       }
                                            >{value}</TableCell>
                                        )
                                    }

                                    if (key !== 'id') {
                                        return (
                                            <TableCell key={contact.id + key}
                                                       sx={{...borderColor}}>{value}</TableCell>
                                        )
                                    }
                                    return '';
                                })}
                        </TableRow>
                        )
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ContactTable;
