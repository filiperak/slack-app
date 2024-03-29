import { AccessTime, HelpOutline } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import  {HeaderAvater,HeaderLeft,HeaderContainer,HeaderSearch,HeaderRigth} from './headerStyle'

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