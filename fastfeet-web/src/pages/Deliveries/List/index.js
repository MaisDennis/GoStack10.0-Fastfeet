import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAdd } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import { Container, Line, Cover, Details } from '~/pages/_layouts/list/styles';
import ListActions from '~/components/ListActions';
import { menuHighlight, unCover } from '~/store/modules/auth/actions';

export default function Deliveries() {
  const [ delivery, setDelivery ] = useState([]);
  const [ qFilter, setQFilter ] = useState([]);
  const dispatch = useDispatch();

  const details = useSelector(state => state.auth.data);
  const cover = useSelector(state => state.auth.cover);

  const formattedDate = fdate =>
    fdate == null
      ? ''
      : format(parseISO(fdate), "dd '/' MMM '/' yyyy", { locale: pt });

  useEffect(() => {
    loadDeliveries('');
    dispatch(menuHighlight('/deliveries'))
    // console.log(details);
  }, [])

  async function loadDeliveries(filter) {
    // console.tron.log(filter)
    const response = await api.get('deliveries', {
      params: { test: filter }
    })
    await setDelivery(response.data);

  }
  console.tron.log(delivery)

  function handleInputChange(e) {
    setQFilter(e.target.value)
  }

  function handleQueryInput(e) {
    if ( e.key === 'Enter' )
      // console.log(qFilter);
      loadDeliveries(qFilter);
  }

  function coverExit() {
    dispatch(unCover());
  }

  return (
   <Container>
      <header>
        <strong>Gerenciando Encomendas</strong>
        <div>

          <input name="filter" placeholder='Busca por encomendas'
            onChange={handleInputChange} onKeyDown={handleQueryInput}
          />
          <Link to='/deliveries/create'>
            <button className="standard" type="button"><MdAdd size={16} color='#FFF'/>Cadastrar</button>
          </Link>
        </div>
        <p>
          <strong>ID</strong>
          <strong>Destinatário</strong>
          <strong>Entregador</strong>
          <strong>Cidade</strong>
          <strong>Estado</strong>
          <strong>Status</strong>
          <strong>Ações</strong>
        </p>
      </header>
      <ul>
        {delivery.map(d =>
          <Line key={d.id}>
            <strong>#{d.id}</strong>
            <strong>{d.recipient.name}</strong>
            <div className='deliverymanDiv'>
              <img alt='del_avatar' src={d.deliveryman.avatar.url}></img>
              <strong className='deliverymanStrong'>{d.deliveryman.name}</strong>
            </div>
            <strong>{d.recipient.city}</strong>
            <strong>{d.recipient.state}</strong>
            {d.start_date && d.end_date
              ? <strong className='status' style={{background:'lightgreen', color:'green'}}>Entregue</strong>
              : null
            }
            {d.canceled_at
              ? <strong className='status' style={{background:'pink', color:'red'}}>Cancelada</strong>
              : null
            }
            {d.start_date && !d.end_date &&!d.canceled_at
              ? <strong className='status' style={{background:'lightblue', color:'blue'}}>Retirada</strong>
              : null
            }
            {!d.start_date && !d.end_date && !d.canceled_at
              ? <strong className='status' style={{background:'yellow', color:'orange'}}>Pendente</strong>
              : null
            }

            <strong><ListActions pin={d.id} data={d}></ListActions></strong>
          </Line>
        )}
      </ul>
      <Cover visible={cover}>
      </Cover>
      <Details onClick={coverExit} visible={cover}>
        <div>
          <strong>Informações de encomenda</strong>
          <span>{details ? details.recipient.street : ''}, {details ? details.recipient.number : ''}</span>
          <span>{details ? details.recipient.city : ''}, {details ? details.recipient.state : ''}</span>
          <span>{details ? details.recipient.zipcode : ''}</span>
        </div>
        <div>
          <strong>Retirada:</strong><span>{details ? formattedDate(details.start_date) : ''}</span>
          <strong>Entrega:</strong><span>{details ? formattedDate(details.end_date) : ''}</span>
        </div>
        <div>
          <strong>Assinatura do destinatário</strong>
          <img alt='signature' src={details ? (details.signature ? details.signature.url : null) : ''}></img>
        </div>
      </Details>
   </Container>
  );
}
