import { AccessTime, HelpOutline } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';


const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvater src=''/>
                <AccessTime/>
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon/>
                <input type="text" placeholder='Search...' />
            </HeaderSearch>
            <HeaderRigth>
                <HelpOutline/>
            </HeaderRigth>
        </HeaderContainer>
    );
}
 
export default Header;
const HeaderRigth = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;
    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 20px;
    }

`;
const HeaderSearch = styled.div`
    flex:0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display:flex;
    padding: 0 50px;
    color: gray;
    border: 1px gray solid;

    > input{
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: none;
        color: #fff;
    }
`;

const HeaderContainer = styled.div`
    display:flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    color: white;
    background-color: var(--slack-color);
`;
const HeaderLeft = styled.div`
    flex:0.3;
    display: flex;
    align-items: center;
    margin-left:20px;
    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 30px;
    }
`;
const HeaderAvater = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
`;