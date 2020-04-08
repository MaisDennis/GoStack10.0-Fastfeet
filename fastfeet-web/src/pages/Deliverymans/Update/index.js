import React from 'react';
import { Form, Input} from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md'
import { Link } from 'react-router-dom';

import api from '~/services/api';
import { Container } from '~/pages/_layouts/create/styles';
import AvatarInput from '~/components/AvatarInput';

export default function DeliverymansUpdate({ match }) {
  const { id } = match.params;
  // console.tron.log(id);

  async function handleSubmit({ name, email, avatar_id }) {
    // console.tron.log(email)
    // console.tron.log(id);
    await api.put(`deliverymans/${id}`, {
      name,
      email,
      avatar_id
    })
  }

  return (
   <Container>
     <Form onSubmit={handleSubmit}>
        <header>
          <strong>Edição de Entregadores</strong>
          <div>
            <Link to='/deliverymans'>
              <button className="back" type="button"><MdKeyboardArrowLeft size={18} color='#FFF' />Voltar</button>
            </Link>
            <button className="standard" type="submit" onClick={handleSubmit}><MdCheck size={18} color='#FFF'/>Salvar</button>
          </div>
        </header>
        <body>
          <AvatarInput name="avatar_id" />
          <div className="line">
            <div className="subContent">
              <span className="label">Nome</span>
              <Input name="name" type="name" placeholder="Seu nome" />
            </div>
          </div>
          <div className="line">
            <div className="subContent">
              <span className="label">e-mail</span>
              <Input name="email" type="email" placeholder="Seu e-mail" />
            </div>
          </div>
        </body>
      </Form>
   </Container>
  );
}
