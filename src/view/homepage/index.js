import * as React from 'react';

import { StlyedFileUploadDiv, StyledMainDiv, StyledLeftDiv, StyledRightDiv } from "./index.style"
import InputFileUpload from '../../components/button/uploadfile';
import IconLabelButtons from '../../components/button/sendORdeletebtn';
import PromptInput from '../../components/promptInput';
import Prompts from '../../components/promts';

// let [prompts, setPrompts] = React.useState([])

export default function HomePage() {
    return (
        <StyledMainDiv>
            <StyledLeftDiv>
                <StlyedFileUploadDiv>
                    <InputFileUpload />
                </StlyedFileUploadDiv>
                <div style={{ margin: '10px' }}>
                    <IconLabelButtons />
                </div>
            </StyledLeftDiv>
            <StyledRightDiv>
                <Prompts />
                <PromptInput />
            </StyledRightDiv>
        </StyledMainDiv >
    )
}