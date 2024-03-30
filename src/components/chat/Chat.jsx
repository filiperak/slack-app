import styled from "@emotion/styled";
import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection , useDocument} from 'react-firebase-hooks/firestore';
import { db } from "../../firebase";
import Message from "./Message";
import { useEffect, useRef } from "react";


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
