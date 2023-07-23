import { styled } from "styled-components";

export const RepoLink = styled.a`
position: absolute;
bottom: 60px;
left: 50%;
transform: translate(-50%);
text-decoration: none;
font-size: 30px;
font-weight: 600;
color: blueviolet;
width: 200px;
height: 60px;
border: 1px solid orange;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
&:hover {
    color: blue;
    background-color: yellow;
    cursor: pointer;
}
`