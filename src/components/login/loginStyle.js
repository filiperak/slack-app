import styled from "styled-components";
const LoginContainer = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
    background-color: #f8f8f8;
`;
const LoginInnerContainer = styled.div`

    padding: 100px;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3),0 1px;

    >img{
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
    >button{
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: #fff;
    }
`;
export {LoginContainer,LoginInnerContainer}