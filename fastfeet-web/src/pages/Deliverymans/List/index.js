import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '~/services/api';
import { Container, Line } from '~/pages/_layouts/list/styles';
import ListActions from '~/components/ListActions';

export default function DeliverymansList() {
  const [ deliveryman, setDeliveryman ] = useState([]);
  const [ qFilter, setQFilter ] = useState([]);

  useEffect(() => {
    loadDeliverymans('');
  }, [])

  async function loadDeliverymans(filter) {
    const response = await api.get('deliverymans', {
      params: { test: filter },
    })

    setDeliveryman(response.data)
  }
  console.tron.log(deliveryman);

  function handleInputChange(e) {
    setQFilter(e.target.value);
    // console.log(qFilter)
  }

  function handleQueryInput(e) {
    if ( e.key === 'Enter')
    // console.log(qFilter);
    loadDeliverymans(qFilter);
  }

  return (
   <Container>
      <header>
        <strong>Gerenciando Entregadores</strong>
        <div>
          <input name='filter' className='filter' placeholder='Busca por entregadores'
            onChange={handleInputChange} onKeyDown={handleQueryInput}
          />
          <Link to='/deliverymans/create'>
            <button className="standard" type="button"><MdAdd size={24} color='#FFF'/>Cadastrar</button>
          </Link>
        </div>
        <p>
          <strong>ID</strong>
          <strong>Foto</strong>
          <strong>Nome</strong>
          <strong>Email</strong>
          <strong>Ações</strong>
        </p>
      </header>
      <ul>
        {deliveryman.map(d =>
          <Line key={d.id}>
            <strong>#{d.id}</strong>
            <div className='deliverymanDiv'>
              <img alt='del_avatar' src={d.avatar.url}></img>

            </div>

            <strong>{d.name}</strong>
            <strong>{d.email}</strong>
            <strong><ListActions pin={d.id}>...</ListActions></strong>
          </Line>
        )}
      </ul>
   </Container>
  );
}
