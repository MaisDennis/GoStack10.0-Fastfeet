import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View``;

export const Div1 = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin: 50px auto;
`;

export const Div2 = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;

export const Div3 = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 15px 5px;
`;

export const Span = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #999;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #666;
  font-weight: bold;
`;

export const LogoutButton = styled(Button)`
  margin: 30px 5px;
  background: #f64c75;
`;
