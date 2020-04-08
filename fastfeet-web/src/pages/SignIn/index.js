import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input} from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/fastfeet-logo.png'
import { signInRequest } from '~/store/modules/auth/actions';
// import { Container } from './styles';

export default function SignIn() {
  const schema = Yup.object().shape({
    email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatorória'),
  });

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(data) {
    dispatch(signInRequest(data.email, data.password));
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <img src={logo} alt="Fastfeet"/>
      <div className="subContent">
        <span className="label">Seu e-mail</span>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
      </div>
      <div className="subContent">
      <span className="label">Sua senha</span>
        <Input name="password" type="password" placeholder="" />
      </div>
      <button type="submit">{ loading ? 'Carregando...' : 'Acessar' }</button>
      <Link to="/hello"> Criar conta gratuita</ Link>
    </Form>
  );
}
