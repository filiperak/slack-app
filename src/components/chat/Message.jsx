import { MessageComponent, MessageInfo} from './messageStyle'
const Message = ({message,timestamp,user,image}) => {
    return (
        <MessageComponent>
            <img src={image}/>
            <MessageInfo>
                <h4>
                    {user}{' '}
                    <span>
                    {timestamp && new Date(timestamp.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageComponent>
    );
}
 
export default Message;
