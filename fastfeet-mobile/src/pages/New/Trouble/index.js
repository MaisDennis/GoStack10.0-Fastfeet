import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';

import api from '~/services/api';

import { Header, Container, Form, FormInput, SubmitButton } from '../styles';

export default function Trouble() {
  const idRef = useRef();
  const [description, setDescription] = useState('');
  const id = useSelector(state => state.auth.data.id);

  async function handleTrouble() {
    // console.tron.log(id);
    await api.post(`deliveryproblems/${id}`, {
      description,
    });
  }

  return (
    <>
      <Header />
      <Container>
        <Form>
          <FormInput
            icon="chat"
            keboardType="text"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Insira aqui o problema que ocorreu na entrega"
            ref={idRef}
            returnKeyType="send"
            value={description}
            onChangeText={setDescription}
          />
          <SubmitButton onPress={handleTrouble}>Enviar</SubmitButton>
        </Form>
      </Container>
    </>
  );
}
