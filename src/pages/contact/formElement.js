import styled from "styled-components";

export const BlockContent = styled.div`
    @media screen and (min-width: 1024px){
        display: flex;
        
    }
`;

export const BlockLeft = styled.div`
@media screen and (min-width: 1024px){
    width: 45%;
}
`;

export const BlockRight = styled.div` 
@media screen and (min-width: 1024px){
    width: 45%;
}
`;

export const Form = styled.form``;

export const Div = styled.div`
    margin: 10px 0;
`;

export const Input = styled.input`
display: block;
padding: 15px;
width: 100%;
`;

export const Select = styled.select`
    display: block;
    padding: 15px;
    width: 100%;
`;

export const Textarea = styled.textarea`
    display: block;
    padding: 15px;
    width: 100%;
`;