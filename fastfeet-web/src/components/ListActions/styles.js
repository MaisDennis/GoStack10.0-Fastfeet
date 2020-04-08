import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Action = styled(Link)`
  color: #fff;
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255,255,255,0.1);
    border-bottom: 1px;
  }
  span {
    margin-top: 5px;
    padding-top: 5px;
    border-top: 1px solid rgba(255,255,255,0.1);
    border-bottom: 1px;
  }
`;

export const Container = styled.div`
   position: relative;
   button {
    background: none;
    border: 0;
    position: relative;
    width: 10%;
    z-index: 5;
   }
`;

export const ActionList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(0,0,0,0.6);
  border-radius: 4px;
  padding: 20px;
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0,0,0,0.6);
  }
`;
