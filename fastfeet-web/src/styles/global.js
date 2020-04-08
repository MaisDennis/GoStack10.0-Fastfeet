import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { darken } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline:0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: atialiased;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

  button.standard {
      margin: auto 0;
      height: 44px;
      width: 180px;
      padding: 0 30px;
      background: #7D40E7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      text-transform: uppercase;
      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#7D40E7')};
      }
    }
    button.back {
        margin: auto 0;
        height: 44px;
        width: 180px;
        padding: 0 30px;
        background: #CCCCCC;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        &:hover {
        background: ${darken(0.03, '#CCCCCC')};
        }
    }
`;
