import styled from "styled-components";

export const ButtonsWrap = styled.div`
    display: flex;
    gap: 16px;
`
export const Button = styled.button`
    padding: 8px 16px;
    color: #000033;
    font-size: 16px;
    background-color: transparent;
    border: none;
    box-shadow:rgb(130, 138, 158) 0px 2px 5px;
    &:hover{
    background-color: #ccccff;
    box-shadow: rgb(130, 138, 158) 0px 2px 8px;
  }
`