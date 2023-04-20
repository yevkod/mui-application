import { styled } from '@mui/material/styles';
import FormGroup from "@mui/material/FormGroup";

type StyledFormGroup = {
    paddingtop?: number,
}

// @ts-ignore

export const StyledFormGroup = styled(FormGroup, {
    name: "StyledFormGroup",
    slot: "Wrapper",
    skipSx: true,
})<StyledFormGroup>(
    (props) => ({
        // @ts-ignore
        padding: props.theme.spacing(2),
        paddingTop: props.paddingtop
    })
)



