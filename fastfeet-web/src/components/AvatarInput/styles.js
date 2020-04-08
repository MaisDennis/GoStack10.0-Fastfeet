import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  label {
    cursor: pointer;
    margin: 50px 0 15px 0;
    display: flex;
    flex-direction: column;
    &:hover {
      opacity:0.7;
    }
    img {
      height: 180px;
      width: 180px;
      border-radius: 50%;
      border: 1px dashed #DDDDDD;
    }
    input {
      display: none;
    }
    span {
      margin-top: 15px;
      width: auto;
      text-transform: uppercase;
      text-align: center;
      color: #DDDDDD;
      font-weight: bold;
      font-size: 18px;
    }
  }
`;
