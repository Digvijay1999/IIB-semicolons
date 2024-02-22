import styled from "styled-components";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';

export const StyledMainDiv = styled.div`
width: 100%;
height: 95vh;
background-color: antiquewhite;
display: flex;
margin: 0;
`

export const StyledLeftDiv = styled.div`
width: 30%;
background-color: #e6f2ff;
display: flex;
flex-direction: column;
align-items: center; 
justify-content: center;
`

export const StyledRightDiv = styled.div`
width: 70%;
background-color: white;
display: flex;
flex-direction: column;
align-items: center; 
justify-content: center;
`
export const StlyedFileUploadDiv = styled.div`
outline: 2px;
border-radius: 4px;
padding: 10px; 
width: 33%;
height: 10%;
display: flex;
justify-content: center;
align-items: center;
outline-style: dotted;
`