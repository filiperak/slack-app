import styled from "styled-components";
const ChatMessages = styled.div`
    
`;
const ChatContainer = styled.div`
    flex:0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    >h4{
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }
    >h4 > .MuiSvgIcon-root{
        margin-left: 20px;
        font-size: 18px;
    }
`;
const HeaderRigth = styled.div`
    >p{
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    >p> .MuiSvgIcon-root{
        margin-right: 5px !important;
        font-size: 16px;
    }
`;
const ChatBottom = styled.div`
padding-bottom:200px;
`;
export {ChatBottom, HeaderRigth,HeaderLeft,Header,ChatContainer,ChatMessages}