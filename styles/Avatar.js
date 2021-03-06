import React from 'react';
import styled from "styled-components";

export default function Avatar({ image }) {

    return (
        <ProfileAvatar>
            <img src={'./lesimoes.jpg'} />
        </ProfileAvatar>
    )
}

const ProfileAvatar = styled.div`
    background-color: #88C0D0;
    border-radius: 50%;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 14px 18px 0 rgba(0,0,0,0.2);
    
    img {
        max-width: 280px;
        max-height: 280px;
        border-radius: 50%;
    }
`
