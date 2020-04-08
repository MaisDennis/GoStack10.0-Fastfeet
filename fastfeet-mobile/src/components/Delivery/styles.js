import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;

  border-radius: 8px;
  border: 1px #999;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const High = styled.View`
  display: flex;
  flex-direction: row;
  margin: 15px;
`;
export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #7d40e7;
  margin: auto 5px;
`;

export const Middle = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border: 1px;
  border-radius: 8px;
`;

export const Div1 = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px #999;
  align-items: center;
  width: 110px;
  padding: 5px;
  background: #fff;
`;

export const Span1 = styled.Text`
  color: #999;
  font-weight: normal;
  font-size: 12px;
  margin-top: 2px;
  text-align: center;
  margin: auto;
`;

export const Low = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background: #f8f9fd;
  margin: 5px;
`;
export const Info = styled.View`
  margin-left: 15px;
  align-items: center;
`;
export const Tag = styled.Text`
  font-weight: normal;
  font-size: 13px;
  color: #999;
`;
export const Time = styled.Text`
  color: #666;
  font-weight: bold;
  font-size: 14px;
  margin-top: 2px;
`;
export const DetailDiv = styled.View`
  text-align: center;
  margin: 0 15px;
`;
export const Details = styled.Text`
  color: #7d40e7;
  font-size: 13px;
  font-weight: bold;
`;
