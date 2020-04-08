/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { cover } from '~/store/modules/auth/actions';

import {
  Container,
  High,
  Middle,
  Div1,
  Span1,
  Low,
  Info,
  Tag,
  Name,
  Time,
  DetailDiv,
  Details,
} from './styles';

const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(parseISO(fdate), "dd '/' MMM '/' yyyy", { locale: pt });

export default function Delivery({ data, navigation }) {
  const dispatch = useDispatch();

  function handleDetails() {
    // console.tron.log(data);
    navigation.navigate('DeliveryDetails');
    dispatch(cover(data));
  }

  return (
    <Container>
      <High>
        <Icon name="motorcycle" size={20} color="#7D40E7" />
        <Name>Encomenda {data.id}</Name>
      </High>
      <Middle>
        <Div1>
          {data !== null ? (
            <Icon name="done" size={20} color="green" />
          ) : (
            <Icon name="alarm" size={20} color="red" />
          )}

          <Span1>Aguardando Retirada</Span1>
        </Div1>
        <Div1>
          {data.start_date ? (
            <Icon name="done" size={20} color="green" />
          ) : (
            <Icon name="alarm" size={20} color="red" />
          )}
          <Span1>Retirada</Span1>
        </Div1>
        <Div1>
          {data.end_date ? (
            <Icon name="done" size={20} color="green" />
          ) : (
            <Icon name="alarm" size={20} color="red" />
          )}
          <Span1>Entregue</Span1>
        </Div1>
      </Middle>
      <Low>
        <Info>
          <Tag>Date</Tag>
          <Time>{formattedDate(data.start_date)}</Time>
        </Info>
        <Info>
          <Tag>Cidade</Tag>
          <Time>{data.recipient.city}</Time>
        </Info>
        <DetailDiv>
          <TouchableOpacity onPress={handleDetails}>
            <Details>Ver detalhes</Details>
          </TouchableOpacity>
        </DetailDiv>
      </Low>
    </Container>
  );
}
