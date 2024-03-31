import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { MessageComponent, MessageInfo} from './messageStyle'
import { db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';



const Message = ({message,timestamp,userDN,image,id,roomId,uid}) => {
    const [user] = useAuthState(auth)

    const deleteMessage = () => {
        if(uid !== user.uid){
            return false;
        }
        db.collection('rooms')
            .doc(roomId) 
            .collection('messages')
            .doc(id)
            .delete()
            .then(() => {
                console.log('Message successfully deleted!');
            })
            .catch((error) => {
                console.error('Error removing message: ', error);
            });
    };
    return (
        <MessageComponent>
            <img src={image}/>
            <MessageInfo>
                <h4>
                    {userDN}{' '}
                    <span>
                    {timestamp && new Date(timestamp.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
                <DeleteForeverIcon onClick={deleteMessage}/>
            </MessageInfo>
        </MessageComponent>
    );
}
 
export default Message;
