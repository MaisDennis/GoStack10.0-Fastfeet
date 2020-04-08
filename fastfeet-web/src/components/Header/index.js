import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/fastfeet-logo.png';
import { Container, Content, Profile, Itema, Itemb, Itemc, Itemd } from './styles';
import { signOut, menuHighlight } from '~/store/modules/auth/actions';

export default function Header() {
  const [ highlight, setHighlight ] = useState('/deliveries');
  const profile = useSelector(state => state.auth)
  const dispatch = useDispatch()

  function handleMenu(num) {
    setHighlight(num)
    dispatch(menuHighlight(num));
  }

  function handleSignOut() {
    dispatch(signOut());
    }

    // console.log(highlight)

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet" />

          <ul>
            <li >
              <Link to="/deliveries" onClick={() => {handleMenu('/deliveries')}} >
                <Itema highlight={ highlight }>Encomendas</Itema>
              </Link>
            </li>
            <li>
              <Link to="/deliverymans" onClick={() => {handleMenu('/deliverymans')}} >
                <Itemb highlight={ highlight }>Entregadores</Itemb>
              </Link>
            </li>
            <li>
              <Link to="/recipients" onClick={() => {handleMenu('/recipients')}}>
                <Itemc highlight={ highlight }>Destinatários</Itemc>
              </Link>
            </li>
            <li>
              <Link to="/troubles" onClick={() => {handleMenu('/troubles')}}>
                <Itemd highlight={ highlight }>Problemas</Itemd>
              </Link>
            </li>
          </ul>

        </nav>
        <aside>
          <Profile>
            <div>
              <strong>
                {profile.username}
              </strong>
              <Link to="/" onClick={handleSignOut}>
                sair do sistema
              </Link>
            </div>

          </Profile>
        </aside>
      </Content>
    </Container>
  );
}


