/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import ip from '~/services/ip';
import {
  Container,
  Header,
  DivTopHeader,
  Div1,
  Avatar,
  Div2,
  Span1,
  Title,
  DivBottomheader,
  Title2,
  Div4,
  Span2,
  Span3,
  List,
} from './styles';
import Delivery from '~/components/Delivery';

export default function Dashboard({ navigation }) {
  // console.tron.log(navigation);
  const [deliveries, setDeliveries] = useState([]);
  const [deliveryQuery, setDeliveryQuery] = useState('');
  const dispatch = useDispatch();

  const deliveryman = useSelector(state => state.auth.deliverymanData);
  const id = useSelector(state => state.auth.deliverymanId);
  const avatarPath = useSelector(
    state => state.auth.deliverymanData.avatar.path
  );

  async function loadDeliveries() {
    const response = await api.get(`deliveryaccess/${id}`, {
      params: { filter: deliveryQuery },
    });
    setDeliveries(response.data);
    // console.tron.log(deliveryQuery);
  }

  useEffect(() => {
    loadDeliveries();
  }, [deliveryQuery]);
  // console.tron.log(avatar);
  async function handleQuery(num) {
    if (num === 0) {
      setDeliveryQuery('');
    }
    if (num === 1) {
      setDeliveryQuery('delivered');
    }
    await loadDeliveries();
  }

  async function handleLogout() {
    await navigation.navigate('SignIn');
    dispatch(signOutDeliveryman());
    // console.tron.log(data);
  }

  return (
    <>
      <Container>
        <Header>
          <DivTopHeader>
            <Div1>
              <Avatar
                // source={avatar.url}
                source={{
                  uri: `${ip}/files/${avatarPath}`,
                  // 'http://10.0.3.2:3333/files/eb600e7275d64eedcf5c0afa367e3222.jpeg',
                }}
              />
              <Div2>
                <Span1>Bem vindo de volta,</Span1>
                <Title>{deliveryman.name}</Title>
              </Div2>
            </Div1>

            <Icon name="stop" size={24} color="red" onPress={handleLogout} />
          </DivTopHeader>
          <DivBottomheader>
            <Title2>Entregas</Title2>
            <Div4>
              <TouchableOpacity
                onPress={() => {
                  handleQuery(0);
                }}
              >
                <Span2 query={deliveryQuery}>Pendentes</Span2>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  handleQuery(1);
                }}
              >
                <Span3 query={deliveryQuery}>Entregues</Span3>
              </TouchableOpacity>
            </Div4>
          </DivBottomheader>
        </Header>

        <List
          data={deliveries}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <>
              <Delivery data={item} navigation={navigation} />
            </>
          )}
        />
      </Container>
    </>
  );
}
