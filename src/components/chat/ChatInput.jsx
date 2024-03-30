import { Button } from "@mui/material";
import { useRef, useState } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import { db } from "../../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import {ChatInputContainer} from './chatinputStyle'

const ChatInput = ({channelName, channelId,chatRef}) => {
    const [user] = useAuthState(auth)
    const [input,setInput] = useState('');
    console.log(user.photoURL);
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
            user:user.displayName,
            image:user.photoURL
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
