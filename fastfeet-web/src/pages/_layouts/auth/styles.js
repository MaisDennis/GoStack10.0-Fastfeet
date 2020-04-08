import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7D40E7, #7D40E7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  form {
    width: 100%;
    max-width: 720px;
    height: 100%;
    max-height: 850px;
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0 0 10px #00000033;
    border-radius: 4px;
    padding: 30px;
    img {
    padding: 20px;
    }
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    div {
      display: flex;
      flex-direction: column;
      span.label {
        text-transform: uppercase;
        text-align: left;
        color: #444444;
        font-weight: bold;
        margin: 20px 0 5px 5px;
      }
      input {
        background: #FFFFFF;
        border: 1px solid #DDDDDD;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #444444;
        margin: 0 0 0px;
        &::placeholder {
          color: #DDDDDD);
        }
      }
      span {
        color: orangered;
        align-self: flex-start;
        margin: 5px 5px 10px;
        font-weight: normal;
      }
    }
    button {
      margin: 20px 0 0;
      height: 44px;
      background: #7D40E7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#7D40E7')};
      }
    }
    a {
      color: #FFF;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      &hover {
        opacity: 1;
      }
    }
  }
`;

