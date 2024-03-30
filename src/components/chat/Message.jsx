import styled from "styled-components";

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
const MessageComponent = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    >img{
        height: 50px;
        border-radius: 8px;
    }
`;
const MessageInfo = styled.div`
    padding-left: 10px;
    >h4>span{
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`;