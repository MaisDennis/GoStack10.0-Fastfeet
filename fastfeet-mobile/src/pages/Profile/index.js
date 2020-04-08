/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { signOutDeliveryman } from '~/store/modules/auth/actions';
import ip from '~/services/ip';

import {
  Container,
  Div1,
  Avatar,
  Div2,
  Div3,
  Span,
  Title,
  LogoutButton,
} from './styles';

const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(parseISO(fdate), "dd '/' MMM '/' yyyy", { locale: pt });

export default function Profile({ navigation }) {
  const dispatch = useDispatch();
  const deliveryman = useSelector(state => state.auth.deliverymanData);
  const avatarPath = useSelector(
    state => state.auth.deliverymanData.avatar.path
  );

  async function handleLogout() {
    await navigation.navigate('SignIn');
    dispatch(signOutDeliveryman());
    // console.tron.log(data);
  }

  return (
    <Container>
      <Div1>
        <Avatar
          source={{
            uri: `${ip}/files/${avatarPath}`,
            // 'http://10.0.3.2:3333/files/eb600e7275d64eedcf5c0afa367e3222.jpeg',
          }}
        />
      </Div1>
      <Div2>
        <Div3>
          <Span>Nome Completo</Span>
          <Title>{deliveryman.name}</Title>
        </Div3>
        <Div3>
          <Span>Email</Span>
          <Title>{deliveryman.email}</Title>
        </Div3>
        <Div3>
          <Span>Data de cadastro</Span>
          <Title>{formattedDate(deliveryman.created_at)}</Title>
        </Div3>
        <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
      </Div2>
    </Container>
  );
}
