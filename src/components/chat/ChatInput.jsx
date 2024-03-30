import { Button } from "@mui/material";
import { useRef, useState } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import { db } from "../../firebase";


const ChatInput = ({channelName, channelId,chatRef}) => {
    const [input,setInput] = useState('');
    console.log(channelId);
    const sendMessage = (e) => {
        e.preventDefault();
        if(!channelId){
            return false;
        }
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user:'filipdemo',
            image:
            'data:image/jpeg;base64,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'
        });
        chatRef.current.scrollIntoView({
            behavior:'smooth'
        });
        setInput('');

    }
    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder={channelName}/>
                <Button 
                hidden 
                type="submit"
                onClick={sendMessage}
                >
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
}
 
export default ChatInput;
const ChatInputContainer = styled.div`
    border-radius: 20px;

    >form{
        position: relative;
        display: flex;
        justify-content: center;
    }
    >form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    >form > button {
        display: none;
    }
`;