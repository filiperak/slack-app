import { iconButtonClasses } from "@mui/material";
import styled from "styled-components";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { enterRoom } from "../../features/appSlice";
import {SidebarOptionContainer,SidebarOptionChannel} from './sidebarOptionStyle'

const SidebarOption = ({Icon,title, addChanellOption,id}) => {
    const dispatch = useDispatch();
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
        if(id){
            dispatch(enterRoom({
                roomId:id
            }))
        }
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