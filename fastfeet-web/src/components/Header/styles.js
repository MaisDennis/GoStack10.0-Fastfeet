import styled from 'styled-components';
export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div `
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      max-width:200px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    ul {
      li {
        display: inline;
        padding: 5px;
        color: orange;

        a {
          font-weight: bold;

          text-transform: uppercase;
        }
      }

    }
  }
 aside {
      display: flex;
      align-items: center;
    }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #333;
    }
    a {
      display: block;
      margin-top: 2px;
      color: #DE3B3B;
    }
  }
  img {
    height: 32px;
    border-radius: 50%;
  }
`;

export const Itema = styled.span`
  color: ${props => (props.highlight === '/deliveries' ? '#333' : '#999999')};
`;

export const Itemb = styled.span`
  color: ${props => (props.highlight === '/deliverymans' ? '#333' : '#999999')};
`;

export const Itemc = styled.span`
  color: ${props => (props.highlight === '/recipients' ? '#333' : '#999999')};
`;

export const Itemd = styled.span`
  color: ${props => (props.highlight === '/troubles' ? '#333' : '#999999')};
`;
