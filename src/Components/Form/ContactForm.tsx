import React, {useState} from 'react';
import {
    Alert, AlertTitle,
    Button, Checkbox, Dialog,
    ListItemText,
    MenuItem,
    Paper, SelectChangeEvent,
    Stack,

} from "@mui/material";
import contactData, {FormValues} from "../Data/ContactData";
import BeautifulTextField from "./FormSubcomponents/BeautifulTextField";
import BeautifulAutocomplete from "./FormSubcomponents/BeautifulAutocomplete";
import BeautifulSelect from "./FormSubcomponents/BeautifulSelect";
import BeautifulDesktopDatePicker from "./FormSubcomponents/BeautifulDesktopDatePicker";
import BeautifulRadios from "./FormSubcomponents/BeautifulRadios";
import {useTheme} from "@mui/material/styles";
import {StyledFormGroup} from './FormSubcomponents/StyledFormGroup';

export const minWidth = 260;
export const defaultPreference = "Work From Home";
const today = new Date();
export const skills = ["React", "Angular", "Python", "NodeJS", "Machine Learning"];


const paperInputsStyle = {
    "& .MuiOutlinedInput-root": {
        "& > fieldset": {border: "1px solid", borderColor: "primary.main"},
        "&: hover": {
            "& > fieldset": {borderColor: "primary.light"}
        }
    },
    "& .MuiFormLabel-root": {
        color: "primary.dark"
    }
}

const ContactForm = () => {
    const theme = useTheme();

    const getDefaultFormValues = () => {
        return {
            id: contactData.length + 1,
            name: "",
            role: "",
            skills: ["React"],
            startDate: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`,
            preference: defaultPreference
        }
    }

    const [formValues, setFormValues] = useState<FormValues>(
        getDefaultFormValues()
    );
    const [alertOpen, setAlertOpen] = useState<boolean>(false);

    const handleTextFieldChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleAutoCompleteChange = (
        event: React.SyntheticEvent<Element, Event>, value: string
    ) => {
        setFormValues({
            ...formValues,
            role: value || ""
        })
    }

    const handleSelectChange = (
        event: SelectChangeEvent<string[]>
    ) => {
        const {target: {value}} = event;
        setFormValues({
            ...formValues,
            skills: typeof value === "string" ? value.split(", ") : value
        })
    }

    const handleDatePickerChange = (
        value: string | null | undefined
    ) => {
        const startDate = value as unknown as { month: () => string, date: () => string, year: () => string };
        setFormValues({
            ...formValues,
            startDate: `${startDate.month() + 1}/${startDate.date()}/${startDate.year()}`
        })
    }

    const handleRadioChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        value: string
    ) => {
        const {name} = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    const handleSubmit = () => {
        contactData.push(formValues);
        setAlertOpen(true);
        clearValues();
    }

    const handleClearClick = () => {
        clearValues();
    }

    const clearValues = () => {
        setFormValues({...getDefaultFormValues()})
    }

    const handleAlertClick = () => {
        setAlertOpen(false)
    }


    return (
        <>
            <Paper sx={{
                ...paperInputsStyle,
                margin: 1,
                "&: hover": {backgroundColor: "rgba(0,0,0,0.1)"},
                backgroundColor: "grid.dark"
            }}
            >
                <form>
                    <StyledFormGroup
                        row
                        paddingtop={20}
                    >
                        <BeautifulTextField
                            value={formValues.name}
                            onChange={handleTextFieldChange}
                        />
                        <BeautifulAutocomplete
                            value={formValues.role || ""}
                            onInputChange={handleAutoCompleteChange}
                        />
                    </StyledFormGroup>
                    <StyledFormGroup
                        row>
                        <BeautifulSelect
                            value={formValues.skills || ""}
                            onChange={handleSelectChange}
                        >
                            {skills.map((skillName) => {
                                    return (
                                        <MenuItem value={skillName} key={skillName}>
                                            <Checkbox checked={formValues.skills?.includes(skillName)}/>
                                            <ListItemText primary={skillName}/>
                                        </MenuItem>
                                    )
                                }
                            )}
                        </BeautifulSelect>
                        <BeautifulDesktopDatePicker
                            value={formValues?.startDate}
                            onChange={handleDatePickerChange}
                        />
                    </StyledFormGroup>
                    <StyledFormGroup
                        row
                    >
                        <BeautifulRadios
                            preference={formValues.preference}
                            handleRadioChange={handleRadioChange}
                        />
                        <Stack justifyContent="space-around" alignItems="center" sx={{minWidth: minWidth}}>
                            <Button variant="contained" sx={{height: 56, width: 100}}
                                    onClick={handleSubmit}>Submit</Button>
                            <Button variant="outlined" sx={{height: 56, width: 100}}
                                    onClick={handleClearClick}>Clear</Button>
                        </Stack>
                    </StyledFormGroup>
                </form>
            </Paper>
            <Dialog open={alertOpen} onClose={handleAlertClick}>
                <Alert onClose={handleAlertClick}>
                    <AlertTitle>
                        Success!
                    </AlertTitle>
                    Form Submitted
                </Alert>
            </Dialog>
        </>
    );
};

export default ContactForm;
