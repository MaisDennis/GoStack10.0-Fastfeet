/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Header,
  Container,
  DivTop,
  Info,
  Div1,
  Span1,
  Title1,
  Div2,
  DivBottom,
  DetailButton,
} from '../styles';

const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(parseISO(fdate), "dd '/' MMM '/' yyyy", { locale: pt });

export default function DeliveryDetails({ navigation }) {
  const details = useSelector(state => state.auth.data);
  // console.tron.log(details);

  function handleTrouble() {
    navigation.navigate('Trouble');
  }

  function handleTroubleDetails() {
    navigation.navigate('TroubleDetails');
  }

  function handleConfirm() {
    navigation.navigate('Confirm');
  }

  return (
    <>
      <Header />
      <Container>
        <DivTop>
          <Info>Informações de entrega</Info>
          <Div1>
            <Span1>Destinatário</Span1>
            <Title1>{details.recipient.name}</Title1>
          </Div1>
          <Div1>
            <Span1>Endereço de entrega</Span1>
            <Title1>
              {details.recipient.street}, {details.recipient.number},{' '}
              {details.recipient.city} - {details.recipient.state},{' '}
              {details.recipient.zipcode}
            </Title1>
          </Div1>
          <Div1>
            <Span1>Produto</Span1>
            <Title1>{details.product}</Title1>
          </Div1>
        </DivTop>
        <DivTop>
          <Info>Situação da entrega</Info>
          <Div1>
            <Span1>Status</Span1>
            <Title1>Pendente</Title1>
          </Div1>
          <Div2>
            <Div1>
              <Span1>Data de Retirada</Span1>
              <Title1>{formattedDate(details.start_date)}</Title1>
            </Div1>
            <Div1>
              <Span1>Data de Entrega</Span1>
              <Title1>{formattedDate(details.end_date)}</Title1>
            </Div1>
          </Div2>
        </DivTop>
        <DivBottom>
          <DetailButton onPress={handleTrouble}>
            <Icon name="cancel" size={36} color="red" />
            Informar Problema
          </DetailButton>
          <DetailButton onPress={handleTroubleDetails}>
            <Icon name="info" size={36} color="orange" />
            Visualizar Problemas
          </DetailButton>
          <DetailButton onPress={handleConfirm}>
            <Icon name="check" size={36} color="#7d40e7" />
            Confirmar Entrega
          </DetailButton>
        </DivBottom>
      </Container>
    </>
  );
}
