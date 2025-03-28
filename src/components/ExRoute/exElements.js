import styled from 'styled-components'
import colors from '../../colors'
import { Link as LinkRouter } from 'react-router-dom'

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(108deg, rgba(76,163,196,1) 0%, rgba(99,210,255,1) 100%);
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;   

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`

export const Icon = styled(LinkRouter)`
    position: absolute;
    top: 20px; /* Adjust this value as needed */
    left: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        top: 10px;
        left: 16px;
    }
`;

export const Form = styled.form` 
        background: ${colors.black};
        max-width: 400px;
        height: auto;
        width: 100%;
        z-index: 1;
        display: grid;
        margin: 0 auto;
        padding: 80px 32px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.9);

        @media screen and (max-width: 400px) {
            padding: 32px 32px;
        }
`

export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px; 
    font-size: 14px;
    color: #fff;    
`

export const FormInput = styled.input`
    padding: 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const FormButton = styled.button`
    background: ${colors.primary};
    display: flex;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`

export const Text = styled.span` 
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`




