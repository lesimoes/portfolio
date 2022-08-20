import React from 'react';
import styled from 'styled-components';

export default function Profile({ image }) {
  return (
    <ProfileAvatar>
      <img src={'./profile_linux.jpeg'} />
    </ProfileAvatar>
  );
}

const ProfileAvatar = styled.div`
  background-color: ${(props) => props.theme.mauve.hex};
  border-radius: 50%;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 18px 0 ${(props) => `${props.theme.overlay2.hex}30`};
  width: 160px;
  height: 160px;

  img {
    width: 156px;
    height: 156px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
