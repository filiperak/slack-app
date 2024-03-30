import { AccessTime, HelpOutline } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import  {HeaderAvater,HeaderLeft,HeaderContainer,HeaderSearch,HeaderRigth} from './headerStyle'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvater 
                onClick={() => auth.signOut()}
                src={user?.photoURL}
                alt={user?.displayName}
                />
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