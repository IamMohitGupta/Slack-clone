import React from 'react';
import styled from "styled-components";
import { db } from './firebase';

function SidebarOption({Icon, title, addchannelOption, id}) {


    const addChannel = () =>{
        const channelName = prompt('Please Enter the channel name');
        if(channelName){
            db.collection("rooms").add({
                name:channelName,
            });
        }
    };

    const selectChannel = () =>{};
  
  
    return (
    <SidebarOptionContainer
        onClick={addchannelOption ? addChannel : selectChannel}
    >
        {Icon && <Icon font-size='small' style={{padding: 10}} />}
        {Icon ? (
            <h3>{title}</h3>
        ):(
            <SidebarOptionChannel>
                <span>#</span>{title}
            </SidebarOptionChannel>
        )}    
        </ SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div `
    display:flex;
    align-items: center;
    font-size: 12px;
    padding-left: 2px;
    cursor:pointer;

    :hover{
        opacity:0.9;
        background-color: #340e36;
    }

    >h3{
        font-weight: 500;
    }

    >h3 >span{
        padding:15px;
    }
`;


const SidebarOptionChannel = styled.h3 `
    padding:10px 0;
    font-weight: 300;
`;