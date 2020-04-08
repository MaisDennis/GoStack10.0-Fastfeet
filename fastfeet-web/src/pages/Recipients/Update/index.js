import React from 'react';
import { Form, Input} from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md'
import { Link } from 'react-router-dom';

import api from '~/services/api';
import { Container } from '~/pages/_layouts/create/styles';

export default function RecipientsUpdate({ match }) {
  const { id }= match.params;

  async function handleSubmit({
    name,
    street,
    number,
    complement,
    city,
    state,
    zipcode,
  }) {
    // console.tron.log(name)

    await api.put(`recipients/${id}`, {
      name,
      street,
      number,
      complement,
      city,
      state,
      zipcode,
    })
  }

  return (
   <Container>
     <Form onSubmit={handleSubmit}>
        <header>
          <strong>Esdição de destinatário</strong>
          <div>
            <Link to='/recipients'>
              <button className="back" type="button"><MdKeyboardArrowLeft size={18} color='#FFF' />Voltar</button>
            </Link>
            <button className="standard" type="submit" onClick={handleSubmit}><MdCheck size={18} color='#FFF'/>Salvar</button>
          </div>
        </header>
        <body>

          <div className="line">
            <div className="subContent">
              <span className="label">Nome</span>
              <Input name="name" type="name" placeholder="Seu nome" />
            </div>
          </div>
          <div className="line">
            <div className="subContent">
              <span className="label">Rua</span>
              <Input name="street" type="string" placeholder="Rua Beethoven" />
            </div>
            <div className="subContent">
              <span className="label">Número</span>
              <Input name="number" type="string" placeholder="1729" />
            </div>
            <div className="subContent">
              <span className="label">Complemento</span>
              <Input name="complement" type="string" placeholder="" />
            </div>
          </div>
          <div className="line">
            <div className="subContent">
              <span className="label">Cidade</span>
              <Input name="city" type="string" placeholder="Diadema" />
            </div>
            <div className="subContent">
              <span className="label">Estado</span>
              <Input name="state" type="string" placeholder="São Paulo" />
            </div>
            <div className="subContent">
              <span className="label">Complemento</span>
              <Input name="zipcode" type="string" placeholder="09960-580" />
            </div>
          </div>
        </body>
      </Form>
   </Container>
  );
}
