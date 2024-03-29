import styled from "styled-components";
const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: #fff;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
    >hr{
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;
const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
    >.MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color:#fff;
        border-radius: 999px;
    }
`;
const SidebarInfo = styled.div`
    flex: 1;
    >h2{
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    >h3{
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    >h3 > .MuiSvgIcon-root{
        font-size: 14px;
        color: green;
        margin-top: 1px;
        margin-right: 2px;
    }
`;
export {SidebarInfo,SidebarHeader,SidebarContainer}