import styled from 'styled-components';
import { Select as bySelect } from '@rocketseat/unform';

export const Select =styled(bySelect)`
  background: #FFFFFF;
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  height: 44px;
  width: auto;
  padding: 0 15px;
  color: #444444;
  margin: 15px 5px;
  justify-content: space-between;
  &::placeholder {
    color: #DDDDDD;
  };
`;

export const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  background: #F5F5F5;
  header {
    width: 100%;
    height: 200px;
    display: flex;
    align-self: center;
    flex-direction: column;
    background: #F5F5F5;
    strong {
      text-align: left;
      font-size: 24px;
      margin: 25px 0;
    }
    div {
      right: 0;
      width: 100%;
      display: flex;
      right: 5px;
      button {
        right: 0;
        display: inline-block;
        margin-left: 15px;
        padding: auto;
      }
    }
  }
  body {
    height: 600px;
    display: flex;
    flex-direction: column;
    background: #FFF;
    margin: 15px 0;
    div.line {
      display: flex;
      justify-content: space-between;
      div.subContent {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        span.label {
          width: auto;
          text-transform: uppercase;
          text-align: left;
          color: #444444;
          font-weight: bold;
          margin: 15px 5px 0px 5px;
          justify-content: space-between;
        }
        input {
          background: #FFFFFF;
          border: 1px solid #DDDDDD;
          border-radius: 4px;
          height: 44px;
          width: auto;
          padding: 0 15px;
          color: #444444;
          margin: 15px 5px;
          justify-content: space-between;
          &::placeholder {
            color: #DDDDDD;
          }
        }
      }
    }
  }
`;

