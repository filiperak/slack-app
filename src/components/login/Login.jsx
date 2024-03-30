import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import {LoginContainer,LoginInnerContainer} from './loginStyle';
const Login = () => {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
        .catch((error) => 
        alert(error.messsage))
    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img
                src="https://www.uctoday.com/wp-content/uploads/2022/05/What-is-Slack-Connect.jpg"
                />
                <h1>Sign in to Filip's Chatapp</h1>
                <p>filip.chatapp.com</p>
                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    );
}
 
export default Login;
