import React from 'react';
import styled from "styled-components";
import Image from 'next/image'

export default function Avatar({ image }) {

    return (
        <ProfileAvatar>
            <Image src={image} />
        </ProfileAvatar>
    )
}

const ProfileAvatar = styled.div`
    background-color: #f35fad;
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
