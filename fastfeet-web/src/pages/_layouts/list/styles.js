import styled from 'styled-components';
import search from '~/assets/search-24px.svg';

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
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px 0;
      input {
        height: 44px;
        width: 300px;
        font-weight: normal;
        color: #333;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        padding: 0px 15px;
        text-indent: 24px;
        background: #FFF url(${search}) no-repeat center left 7px;
      }
    }
    p {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      background: #F5F5F5;
      border-radius: 4px;
      padding: 0 15px;
      strong {
        width: 150px;
        font-size: 20px;
        font-weight: bold;
        margin: auto 15px;
        text-align: center;
      }
    }
    ul {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 15px;
      }
  }
`;

export const Line = styled.li`
  width: 100%;
  height: 74px;
  display: flex;
  justify-content: space-between;
  background: #FFF;
  border-radius: 4px;
  margin: 15px 0;
  padding: 0 15px;
  div.deliverymanDiv {
    display: flex;
    justify-content: space-between;
    width: 200px;


    img {
      border: 1px solid #DDDDDD;
      border-radius: 50%;
      height: 50px;
      width: 50px;
      margin: auto;
    }
    strong.deliverymanStrong {
    width: 150px;
    font-size: 16px;
    font-weight: normal;
    margin: auto 0;
    text-align: center;
    }
  }
  strong {
    width: 150px;
    font-size: 16px;
    font-weight: normal;
    margin: auto 15px;
    text-align: center;
  }
  strong.description {
    max-height: 70px;
    overflow: hidden;
  }
  strong.status {
    border-radius: 15px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    padding: auto;

  }
`;

export const Cover = styled.div`
position: fixed;
top: 0;
left: 0;
display: ${props => props.visible ? 'flex' : 'none'};
width: 100%;
height: 100%;
background: #000;
opacity: 0.5;
`;

export const Details = styled.div`
  position: fixed;
  align-self: center;
  height: 600px;
  max-width: 500px;
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  background: #FFF;
  border-radius: 4px;
  div {
    display: flex;
    flex-direction: column;
    margin: auto 60px;
    border-bottom: 1px;
    strong {
      font-size: 18px;
      margin-top: 15px;
    }
    span {
      font-size: 16px;
      margin-top: 5px;
    }
    img {
      height: 200px;
      width: auto;
      margin: 15px;
    }
  }
`;

