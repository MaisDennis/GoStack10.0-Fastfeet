import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Header = styled.View`
  position: absolute;
  width: 100%;
  height: 100px;
  background: #7d40e7;
`;

export const HeaderTitle = styled.Text`
  font-weight: bold;
  text-align: center;
  color: #fff;
  font-size: 18px;
`;

export const Container = styled.SafeAreaView`
  top: 50px;
  margin: 0 auto;
`;

export const DivTop = styled.View`
  height: auto;
  width: 360px;
  border: 1px #999;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  background: #fff;
  margin-bottom: 10px;
`;

export const Info = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #7d40e7;
  margin: 10px;
`;

export const Div1 = styled.View`
  margin: auto 10px;
`;

export const Span1 = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 16px;
  margin-top: 2px;
  text-transform: uppercase;
  margin: 5px;
`;

export const Title1 = styled.Text`
  color: #666;
  font-weight: normal;
  font-size: 18px;
  margin: 5px 5px 20px 5px;
`;

export const Div2 = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Div3 = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  width: 360px;
`;

export const DivBottom = styled.View`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 360px;

  border-radius: 4px;
`;
export const DetailButton = styled(Button)`
  width: 33.33%;
  height: 150px;
  margin: 0.3px;
  background: #999;
`;

export const Title2 = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const Title3 = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 14px;
  margin: 5px auto;
  width: 200px;
  height: 100px;
  overflow: hidden;
  text-align: justify;
`;

export const Title4 = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 14px;
  margin: auto;
`;

export const Title5 = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin: auto;
  text-align: center;
`;

export const Form = styled.View`
  top: 0;
  margin: 0 auto;
`;
export const FormInput = styled(Input)`
  top: 0;
  margin: 0 auto;
  height: 360px;
  width: 360px;
  text-align: justify;
`;
export const SubmitButton = styled(Button)`
  margin-top: 15px;
  background: #7d40e7;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  height: 100%;
`;

export const CameraButton = styled(Button)`
  margin: 50px 20px 0 20px;
  background: #7d40e7;
`;

export const Div4 = styled.View`
  display: flex;
  background: #fff;
  height: 90%;
  width: 380px;
  border-radius: 4px;
`;
