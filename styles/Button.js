import styled from "styled-components";

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    color: #A2C5D0;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        color: #81A1C1;
    }

    &:active {
        color: #282836;
    }
    

`

export default Button;