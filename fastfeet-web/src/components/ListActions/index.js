import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '~/services/api';
// import { Link } from 'react-router-dom';

import { Container, ActionList, Action } from './styles';
import { cover } from '~/store/modules/auth/actions';

export default function ListActions( { pin, data }) {
  const [visible, setVisible] = useState(false);
  const [upin, setUpin] = useState();
  // const [details, setDetails] = useState();
  const dispatch = useDispatch()

  // const profile = useSelector(state => state.auth);
  const visualize = useSelector(state => state.auth.menuHighlight)
  // console.tron.log(visualize)

  async function handleToggleVisible() {
    setVisible(!visible);
    await setUpin(pin);
     // console.tron.log(upin)
  }

  async function loadDetails() {
    // await setDetails(data);
    dispatch(cover(data));
    // console.tron.log(data)
  }

  async function handleDelete() {
    console.tron.log(visualize)
    console.tron.log(upin)
    await api.delete(`${visualize}/${upin}/cancel`, {
      // params: {upin}
    })
  }

  async function handleDeleteTroubles() {
    await api.delete(`/deliveries/${data.delivery_id}/cancel`, {
      // params: {upin}

    })
    //console.tron.log(data.delivery_id)
    // console.tron.log(upin)
    await api.delete(`/deliveryproblems/${upin}/cancel`)

  }

  return (
    <Container>
      <button type="button" onClick={handleToggleVisible}>...
        <ActionList visible={visible}>
          {visualize === '/troubles'
            ? <Action to={visualize} onClick={loadDetails}>Visualizar</Action>
            : null
          }
          {visualize === '/deliveries'
            ? <Action to={visualize} onClick={loadDetails}>Visualizar</Action>
            : null
          }
          {visualize === '/deliverymans'
            ? <Action to={`${visualize}/update/${upin}`}>Editar</Action>
            : null
          }
          {visualize === '/recipients'
            ? <Action to={`${visualize}/update/${upin}`}>Editar</Action>
            : null
          }
          {visualize === '/troubles'
            ? <Action to={visualize} onClick={handleDeleteTroubles}>Cancelar encomenda</Action>
            : <Action to={visualize} onClick={handleDelete}>Excluir</Action>
          }

        </ActionList>
      </button>
    </Container>
  );
}
