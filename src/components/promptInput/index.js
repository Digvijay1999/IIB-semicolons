import * as React from 'react';
import UnstyledButtonCustom from '../../components/button/promptSubmit';
import Box from '@mui/material/Box';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

export default function PromptInput(props) {
    return (
        <Box
            sx={{
                width: '100%',
                marginTop: '30%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: "static"
            }}
        >
            {/* <TextField fullWidth label="" id="fullWidth" placeholder='Enter a promt here'/> */}
            <TextareaAutosize placeholder='Enter a promt here' style={{ width: '80%', padding: '10px', font: "inherit", fontSize: "20px" }} >
            </TextareaAutosize>
            <UnstyledButtonCustom />
        </Box>
    )
}