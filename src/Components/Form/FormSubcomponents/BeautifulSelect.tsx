import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {Select, SelectChangeEvent} from "@mui/material";
import {minWidth} from "../ContactForm";


const BeautifulSelect = (
    props: {
        value: "" | string[] | undefined,
        onChange: (event: SelectChangeEvent<string[]>, child: React.ReactNode) => void,
        children: ReactNode[]
    }
) => {
    const selectInputComponent = useRef<HTMLInputElement>(null);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        setPosition(selectInputComponent.current ? (selectInputComponent.current.getBoundingClientRect().left + 20) : 0)
    }, [selectInputComponent])

    return (
        <Select
            ref={selectInputComponent}
            {...props}
            id="skill-select"
            renderValue={(select: string[]) => select.join(", ")}
            sx={{minWidth: minWidth, marginRight: 2, marginBottom: {xs: 2, md: 2}}}
            multiple
            MenuProps={{
                sx: {
                    left: `${position}px !important`,
                    maxHeight: 180
                }
                }
            }
        >
            {props.children}
        </Select>
    );
};

export default BeautifulSelect;
