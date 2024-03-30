import styled from "@emotion/styled";
import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection , useDocument} from 'react-firebase-hooks/firestore';
import { db } from "../../firebase";
import Message from "./Message";
import { useEffect, useRef } from "react";
import {ChatBottom, HeaderRigth,HeaderLeft,Header,ChatContainer,ChatMessages} from './chatStyle'

const Chat = () => {
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessages, loading] = useCollection(
        roomId && 
        db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
    )
    useEffect(() => {
        chatRef?.current.scrollIntoView({
            behavior:'smooth'
        });
    },[roomId,loading])
    return (
       <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4><strong>{`#${roomDetails?.data().name}`}</strong></h4>
                    <StarBorderOutlined/>
                </HeaderLeft>
                <HeaderRigth>
                    <p>
                        <InfoOutlined/> Details
                    </p>
                </HeaderRigth>
            </Header>

            <ChatMessages>
                {roomMessages?.docs.map(doc => {
                    const{message,timestamp,user,image} = doc.data()
                    return(
                        <Message
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        image={image}/>
                    )
                })}
                <ChatBottom ref={chatRef}/>
            </ChatMessages>
            <ChatInput
            chatRef={chatRef}
            channelId={roomId}
            channelName={roomDetails ?.data().name}
            />
       </ChatContainer>
    );
}
 
export default Chat;
