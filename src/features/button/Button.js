import styled from "styled-components";
import {Link} from 'react-router-dom';

const Button = styled(Link)`
background: ${({ primary }) => (primary ? 'transparent' : 'transparent')};
border: ${({primary}) => (primary ? '1px solid #fff' : '1px solid #000')};
color: ${({ primary}) => (primary ? '#fff' : '#000')};
white-space:nowrap;
min-width:100px;
max-width:auto;
min-width: 230px;
text-decoration:none;
transition:0.3s;
display:flex;
justify-content:center;
align-items:center;
padding:${({big}) =>(big ?'10px 40px': '14px 24px')};
font-size:${({big}) => (big ? '20px':'14px')};
&.readMore{
    max-width: 25%;
}
&:hover{
    transform:translateY(-2px)
}
`;

export default Button;