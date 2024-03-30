import styled from "@emotion/styled";
import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection , useDocument} from 'react-firebase-hooks/firestore';
import { db } from "../../firebase";


const Chat = () => {
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessages] = 
    return (
       <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4><strong>#Room-name</strong></h4>
                    <StarBorderOutlined/>
                </HeaderLeft>
                <HeaderRigth>
                    <p>
                        <InfoOutlined/> Details
                    </p>
                </HeaderRigth>
            </Header>

            <ChatMessages>

            </ChatMessages>
            <ChatInput
            channelId={roomId}
            channelName={'channelName'}
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