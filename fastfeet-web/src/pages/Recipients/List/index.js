import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md'
import { Link } from 'react-router-dom';
import api from '~/services/api';
import { Container, Line } from '~/pages/_layouts/list/styles';
import ListActions from '~/components/ListActions';

export default function RecipientsList() {
  const [ recipient, setRecipient ] = useState([]);
  const [ qFilter, setQFilter ] = useState([]);

  useEffect(() => {
    loadRecipients('');
  }, [])

  async function loadRecipients(filter) {
    const response = await api.get('recipients', {
      params: { test: filter }
    })
    // console.tron.log(response)
    setRecipient(response.data)
  }

  function handleOnChange(e) {
    setQFilter(e.target.value);
  }

  function handleQueryInput(e) {
    if ( e.key === 'Enter') {
      loadRecipients(qFilter);
    }
  }

  return (
   <Container>
      <header>
        <strong>Gerenciando Destinatários</strong>
        <div>
          <input name='filter' placeholder='Busca por destinatários'
            onChange={handleOnChange} onKeyDown={handleQueryInput}
          />
          <Link to='/recipients/create'>
            <button className="standard" type="button"><MdAdd size={24} color='#FFF'/>Cadastrar</button>
          </Link>
        </div>
        <p>
          <strong>ID</strong>
          <strong>Nome</strong>
          <strong>Endereço</strong>
          <strong>Ações</strong>
        </p>
      </header>
      <ul>
        {recipient.map(r =>
          <Line key={r.id}>
            <strong>#{r.id}</strong>
            <strong>{r.name}</strong>
        <strong>{r.street}, {r.number}, {r.city}, {r.state}</strong>
            <strong><ListActions pin={r.id}></ListActions></strong>
          </Line>
        )}
      </ul>
   </Container>
  );
}
