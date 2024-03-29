import { iconButtonClasses } from "@mui/material";
import styled from "styled-components";
import { db } from "../../firebase";

const SidebarOption = ({Icon,title, addChanellOption,id}) => {
    const addChannel = () =>{
        const channelName = prompt('plese enter the chanel name')
        if(channelName){
            db.collection('rooms')
            .add({
                name: channelName
            })
        }
    }
    const selectChannel= () => {
        
    }
    return (
        <SidebarOptionContainer
            onClick={addChanellOption ? addChannel:selectChannel}
        >
           {Icon && <Icon fontSize='small' style={{padding:10}}/>}
           {Icon ? (
            <h3>{title}</h3>
           ):(
            <SidebarOptionChannel>
                <span>#</span>{title}
            </SidebarOptionChannel>
           )}
        </SidebarOptionContainer>
    );
}
 
export default SidebarOption;
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
    font-weight:300
`;