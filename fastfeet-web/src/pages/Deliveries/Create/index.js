import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md'
import { Link } from 'react-router-dom';

import api from '~/services/api';
import { Container, Select } from '~/pages/_layouts/create/styles';

export default function DeliveriesCreate() {
  const [recipient, setRecipient] = useState([]);
  const [deliveryman, setDeliveryman] = useState([]);

  useEffect(() =>{
    async function load() {
      const recResponse = await api.get('recipients')
      setRecipient(recResponse.data);
      const delResponse = await api.get('deliverymans')
      setDeliveryman(delResponse.data);
    }
    load();
  }, [])
  // console.tron.log(recipient)
  // console.tron.log(deliveryman)

  const recOptions = recipient.map(r => ({ id: r.id, title: r.name }));
  const delOptions = deliveryman.map(d => ({id: d.id, title: d.name }));
  // console.tron.log(rec_options)

  async function handleSubmit({
    recipient_id,
    deliveryman_id,
    product,
  }) {
    //console.log(recipient_id)
    await api.post('deliveries', {
      recipient_id,
      deliveryman_id,
      product,
    })
  }

  return (
   <Container>
     <Form onSubmit={handleSubmit}>
        <header>
          <strong>Cadastro de encomendas</strong>
          <div>
            <Link to='/deliveries'>
              <button className="back" type="button"><MdKeyboardArrowLeft size={18} color='#FFF' />Voltar</button>
            </Link>
            <button className="standard" type="submit" onClick={handleSubmit}><MdCheck size={18} color='#FFF'/>Salvar</button>
          </div>
        </header>

        <body>
          <div className="line">
            <div className="subContent">
              <span className="label">Destinatário</span>
              <Select name="recipient_id" options={recOptions} placeholder="destinatário..." />
              <Input name="recipient_name" type="string" placeholder="Ludwig Von Beethoven" />
            </div>
            <div className="subContent">
              <span className="label">Entregador</span>
              <Select name="deliveryman_id" options={delOptions} placeholder="entregador..."/>
              <Input name="deliveryman_name" type="string" placeholder="1729" />
            </div>
          </div>
          <div className="line">
            <div className="subContent">
              <span className="label">Nome do produto</span>
              <Input name="product" type="string" placeholder="McDonalds" />
            </div>
          </div>
        </body>
      </Form>
   </Container>
  );
}
