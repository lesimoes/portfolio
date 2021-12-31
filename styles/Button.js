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
    background-color: #282836;
    cursor: pointer;

    &:hover {
        color: #f34dad;
    }

    &:active {
        color: #282836;
    }
    

`

export default Button;