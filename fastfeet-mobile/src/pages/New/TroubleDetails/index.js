import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  Header,
  Container,
  DivTop,
  Div3,
  Title3,
  Title4,
  Title5,
  List,
} from '../styles';

const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(parseISO(fdate), "dd '/' MMM '/' yyyy", { locale: pt });

export default function TroubleDetails() {
  const [deliveryProblems, setDeliveryProblems] = useState();
  const id = useSelector(state => state.auth.data.id);

  useEffect(() => {
    async function loadTroubles(filter) {
      const response = await api.get(`deliveryproblems2/`, {
        params: { test: filter },
      });
      setDeliveryProblems(response.data);
      // console.tron.log(deliveries);
    }
    loadTroubles(id);
  }, []);
  // console.tron.log(deliveryProblems);
  return (
    <>
      <Header>
        <Title5>Encomenda {id}</Title5>
      </Header>
      <Container>
        <List
          data={deliveryProblems}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <DivTop>
              <Div3>
                <Title3>{item.description}</Title3>
                <Title4>{formattedDate(item.createdAt)}</Title4>
              </Div3>
            </DivTop>
          )}
        />
      </Container>
    </>
  );
}
