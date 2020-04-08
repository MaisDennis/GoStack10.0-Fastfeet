import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';
import logo from '~/assets/fastfeet2.png';
import { signInDeliveryman } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const idRef = useRef();
  const dispatch = useDispatch();
  const [deliverymanId, setDeliverymanId] = useState('');
  // const [data, setData] = useState('');

  function handleSubmit() {
    dispatch(signInDeliveryman(deliverymanId));
    navigation.navigate('TabRoutes');
  }

  return (
    <Background>
      <Container>
        <Image background="white" source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            keboardType="number"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Informe o seu ID de cadastro"
            ref={idRef}
            returnKeyType="send"
            value={deliverymanId}
            onChangeText={setDeliverymanId}
          />
          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
