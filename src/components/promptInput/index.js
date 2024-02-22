import * as React from 'react';
import UnstyledButtonCustom from '../../components/button/promptSubmit';
import Box from '@mui/material/Box';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { PromptInputDiv } from './index.style';

export default function PromptInput(props) {
    return (
            <PromptInputDiv>
             <TextareaAutosize placeholder='Enter a promt here' style={{ width: '80%', padding: '10px', font: "inherit", fontSize: "20px" }} >
             </TextareaAutosize>
             <UnstyledButtonCustom />
            </PromptInputDiv>
    )
}