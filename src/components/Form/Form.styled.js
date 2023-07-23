import { styled } from "styled-components";

export const FormWrapper = styled.form`
max-width: 500px;
height: auto;
background-color: blueviolet;
border-radius: 5px;
margin-top: 100px;
margin-left: auto;
margin-right: auto;
display: flex;
justify-content: center;
flex-direction: column;
padding: 40px 15px;
`

export const FormInput = styled.input`
width: 70%;
height: 40px;
margin-left: auto;
margin-right: auto;
margin-bottom: 30px;
border-radius: 5px;
border: 1px solid orange;
text-align: center;
@media (max-width: 480px)  {
    font-size: 11px;
  }
`
export const FormBtn = styled.button`
font-size: 20px;
font-weight: 400;
color: blueviolet;
width: 50%;
height: 40px;
border: 1px solid orange;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
margin-left: auto;
margin-right: auto;
&:hover {
    color: blue;
    background-color: yellow;
    cursor: pointer;
}
`