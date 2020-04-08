import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import api from '~/services/api';
import { Container, Line, Cover, Details } from '~/pages/_layouts/list/styles';

import ListActions from '~/components/ListActions';
import { unCover } from '~/store/modules/auth/actions';


export default function TroublesList() {
  const [ trouble, setTrouble ] = useState([]);

  const dispatch = useDispatch();

  const details = useSelector(state => state.auth.data);
  const cover = useSelector(state => state.auth.cover);

  useEffect(() => {
    async function loadTroubles() {
      const response = await api.get('deliveryproblems')
      // console.tron.log(response);
      setTrouble(response.data);
    }
    loadTroubles();
  }, [])

  function coverExit() {
    dispatch(unCover());
  }

  return (
   <Container>
      <header>
        <strong>Problemas na entrega</strong>
        <div>

        </div>
        <p>
          <strong>Encomenda</strong>
          <strong>Problema</strong>
          <strong>Ações</strong>
        </p>
      </header>
      <ul>
        {trouble.map(t =>
          <Line key={t.id}>
            <strong>#{t.delivery_id}</strong>
            <strong className="description">{t.description}</strong>
            <strong><ListActions pin={t.id} data={t}></ListActions></strong>
          </Line>
        )}
      </ul>
      <Cover visible={cover}>
      </Cover>
      <Details onClick={coverExit} visible={cover}>
        <div>
          <strong>Visualizar Problema</strong>
          <span>{details ? details.description : ''}</span>
        </div>
      </Details>
   </Container>
  );
}
