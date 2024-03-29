import { Add, Apps, AppsOutlined, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from "@mui/icons-material";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "../../firebase";
import {SidebarInfo,SidebarHeader,SidebarContainer} from './sidebarStyle'
const Sidebar = () => {
    const [channels,loading,error] = useCollection(db.collection('rooms'));

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Filip's Slack</h2>
                    <h3>
                        <FiberManualRecord/>
                        Filip Erak
                    </h3>
                </SidebarInfo>
                <Create/>
            </SidebarHeader>
            <SidebarOption Icon={InsertComment} title='Threads'/>
            <SidebarOption Icon={Inbox} title='Mentions & reactions'/>
            <SidebarOption Icon={Drafts} title='Saved items'/>
            <SidebarOption Icon={BookmarkBorder} title='Channel browser'/>
            <SidebarOption Icon={PeopleAlt} title='People & user groups'/>
            <SidebarOption Icon={AppsOutlined} title='File browser'/>
            <SidebarOption Icon={ExpandLess} title='Show less'/>
            <hr />
            <SidebarOption Icon={ExpandMore} title='Channels'/>
            <hr />
            <SidebarOption Icon={Add} addChanellOption title='Add Channel'/>
            {channels?.docs.map(doc => (
                <SidebarOption 
                key={doc.id} 
                id={doc.id} 
                title={doc.data().name}/>
            ))}
        </SidebarContainer>
    );
}
 
export default Sidebar;
