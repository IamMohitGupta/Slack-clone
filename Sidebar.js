import React from 'react'
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';


function Sidebar() {
  return (
    <SideBarContainer>
        <SideBarHeader>
            <SideBarInfo>
                <h2>Hello</h2>
                <h3>
                    <FiberManualRecordIcon />
                    Mohit Gupta 
                </h3>
            </SideBarInfo>
            <CreateIcon />
        </SideBarHeader>

        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
        <SidebarOption Icon={DraftsIcon} title="Saved Items" />
        <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
        <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
        <SidebarOption Icon={AppsIcon} title="Apps" />
        <SidebarOption Icon={FileCopyIcon} title="File Browser" />
        <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
        <hr />
        <SidebarOption Icon={AddIcon} addchannelOption title={"Add Channel"} />
    </SideBarContainer>
  )
}

export default Sidebar;

const SideBarContainer = styled.div `
    background-color: var(--slack-color);
    color:white;
    flex:0.3;
    border-top:1px solid #49274b;
    max-width:250px;
    margin-top:60px;

    >hr{
        margin:10px 0;
        border: 1px solid #49274b
    }
`;
const SideBarHeader = styled.div`
    display:flex;
    border-bottom:1px solid #49274b;
    padding:13px;

    >.MuiSvgIcon-root{
        padding:8px;
        color:#49274b;
        font-size: 18px;
        background-color: white;
        border-radius:50%;
    }
`;
const SideBarInfo = styled.div`
   flex:1;
   
   >h2{
        font-size:15px;
        font-weight: 900;
        margin-bottom:5px;
    }

    >h3{
        display:flex;
        font-size:13px;
        font-weight:400;
        align-items:center;
    }

    >h3>.MuiSvgIcon-root{
        font-size:14px;
        margin-top:1px;
        margin-right: 2px;
        color: green;
    }
`;