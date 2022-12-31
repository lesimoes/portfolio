import React from 'react';
import styled from 'styled-components';

export default function Profile({ image }) {
  return (
    <ProfileAvatar>
      <img src={'./profile.png'} />
    </ProfileAvatar>
  );
}

const ProfileAvatar = styled.div`
  background-color: ${(props) => props.theme.mauve.hex};
  border-radius: 10%;
  padding: 2px;
  display: flex;
  align-items: center;
  box-shadow: 0 10px 18px 0 ${(props) => `${props.theme.overlay2.hex}30`};
  width: 324px;
  height: 324px;
  box-shadow: 0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 24px -4px rgb(145 158 171 / 12%);

  img {
    width: 320px;
    height: 320px;
    border-radius: 10%;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    width: 324px;
    height: 324px;

    img {
      width: 320px;
      height: 320px;
    }
  }
`;
