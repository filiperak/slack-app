import styled from "styled-components";
const SidebarOptionContainer = styled.div`
    display: flex;
    font: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover{
        opacity: 0.9;
        background-color: #340e46;
    }
    > h3{
        font-weight: 500;

    }
    >h3 > span {
        padding: 15px;
    }
`;
const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight:300;
`;

export {SidebarOptionContainer,SidebarOptionChannel}