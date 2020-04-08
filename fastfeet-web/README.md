# Desafio 9 | GoStack 10.0

* [1. Conceitos abordados](#1-Conceitos)
* [2. Descrição do projeto](#2-Descrição)
* [3. Iniciando o projeto](#3-Iniciando)
* [4. Criando o projeto](#4-Criando)

##  1. Conceitos abordados
1.  Criação e estilização de páginas, header, AvatarInput, Ações (editar, excluir).
Informações acessíveis por toda a aplicação e por todas as requisições via **Redux**.
    1.  token, dados de usuário, menu, e dados de item selecionado.
2.  Chamada a API.
3.  usar o useState, useEffect do 'react'.
4.  usar o useSelector, useDispatch do 'react-redux'.
5.  Filter, usando o operador 'like / ilike' no back-end.

##  2.  Descrição do projeto
O Fastfeet é um aplicativo de entregas de produtos quaisquer, similar a ifood, Rappi e UberEats.
Pelo website, o usuário administrador lista, cadastra, edita e exclui: encomendas, entregadores, destinatários e problemas nas entregas.
Pelo aplicativo mobile, o entregador pode iniciar uma entrega, encerrar a entrega mediante o envio de assinatura do destinatário, e relatar problemas na entrega.

### Sign-In
<img src="https://github.com/MaisDennis/GoStack10.0-Desafio-09/blob/master/src/assets/SignIn.png" alt="SignIn" width="100%" height="auto">

### Lista de Entregas
<img src="https://github.com/MaisDennis/GoStack10.0-Desafio-09/blob/master/src/assets/DeliveriesList.png" alt="SignIn" width="100%" height="auto">

### Cadastrar Entregador
<img src="https://github.com/MaisDennis/GoStack10.0-Desafio-09/blob/master/src/assets/DeliverymanCreate.png" alt="SignIn" width="100%" height="auto">

##  3.  Iniciando o projeto
```
yarn start
```
Acesso de administrador:

  email: admin@fastfeet.com
  senha: 123123

##  4.  Criando o projeto

1.  Estrutura configurada
    1.  Criar projeto React a la Modulo05:
        ```
        yarn create react-app modulo05
        ```

2.  Ajustes na API
    1.  Adicionar Cors ao backend/desafio03
        ```
        yarn add cors
        ```

3.  Configurando rotas
    1.  Adicionar router dom
      ```
      yarn add react-router-dom
      ```
    2.  Criar em src:
        1.  pages/Dashboard/index.js -> rfc
        2.  pages/Profile/index.js -> rfc
        3.  pages/SignIn/index.js -> rfc
        4.  pages/SignUp/index.js -> rfc
        5.  services/history.js
        6.  routes/index.js
    3.  routes/index.js:
        1.  return (Switch e Route)
    4.  App.js
        1.  return (Router e Routes)
    5.  ```
        yarn add history
        ```
        1.  src/services/history.js: import {createBrowserHistory } from 'history';

4.  Configurando Reactotron
    1.  ```
        yarn add reactotron-react-js
        ```
    2.  Criar src/config/ReactotronConfig.js
    3.  src/App.js: import './config/ReactotronConfig';

5.  Rotas privadas
    1.  Criar routes/Route.js
    2.  Add pop-types
        ```
        yarn add prop-types
        ```
    3.  routes/index.js: import Route from ./Route agora.

6.  Layouts por página
    1.  Criar a pasta pages/_layouts
        1.  Criar auth/index.js
        2.  Criar default/index.js
        3.  Criar auth/styles.js: styled-react snip-it
        4.  ```
            yarn add styled-components
            ```
        5.  auth/index.js, auth/styles.js, default/index.js, Criar default/styles.js
        6.  routes/Route.js
            1.  import AuthLayout from '../pages/_layouts/auth';
            2.  import DefaultLayout from '../pages/_layouts/default';
            3.  incluir Layout no Route.

7.  Estilos Globais
    1.  Criar src/styles/global.js
    2.  PRocurar roboto
        1.  Google -> roboto -> https://fonts.google.com/specimen/Roboto
        2.  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    3.  formatação global padrão.

8. Utilizando o Root import
    1.  = trocar ../ por ~/ no import.
    2.  ```
        yarn add customize-cra react-app-rewired -D
        yarn add babel-plugin-root-import -D
        yarn add eslint-import-resolver-babel-plugin-root-import -D
        ```
    3.  Criar modulo09/config-overrides.js
    4.  package.json
        1. "scripts": Trocar "react-scripts..." por "react-app-rewired..."

9.  Estilização da autenticação
    1.  Criar a pasta src/assets e deixar logo.
    2.  pages/SignIn/index.js:
        1.  email, senha, button de acesso, Link para criar conta.
    3.  pages/auth/index.js: Criar Content
    4.  auth/styles.js

10. Utilizando Unform
    1.  Biblioteca para fugir de armazenar informações de input em state, etc.
        ```
        yarn add @rocketseat/unform
        ```
    2.  SignIn/index.js:
        1.  import { Form, Input} from '@rocketseat/unform';
        2.  Trocar form e input por **Form e Input**.
        3.  Incluir name="".
        4.  onSubmit={handleSubmit}, Incluir function handleSubmit.

11. Validações
    1.  Yup serve tanto no front como no backend.
        ```
        yarn add yup
        ```
    2.  SignIn/index.js: add schema.

12. Configurando a store
    1.  Autenticação, informação do usuario logado vão ser guardados no redux.
        1.  O **Token** precisa estar em um local acessivel a toda a aplicação e toda requisição.
        2.  Regras de usuario tambem. Vão ser usados em varios locais, não tem componente dono,
    2.  Pelo o que eu entendi, os arquivos são criados abaixo para criar o **Provider store={store}** que vincula, reducers, sagas e reactotron com o App.
    3.  Criar a pasta src/store
    4.  ```
        yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer
        ```
    5.  Criar :
        1.  store/index.js
        2.  store/modules/auth/reducer.js
        3.  store/modules/auth/actions.js
        4.  store/modules/auth/sagas.js
        5.  store/modules/rootReducer.js
        6.  store/modules/rootSaga.js
    6.  modules/auth/reducer.js: export default function auth()
    7.  Deixar padrão: modules/auth/sagas.js, rootReducer.js, rootSaga.js
    8.  store/index.js: import createSagaMiddleware from 'redux-saga'; import createStore from './createStore';
    9.  Criar store/createStore.js
    10. src/config/ReactotronConfig.js: import { reactotronRedux } from 'reactotron-redux'; import reactotronSaga from 'reactotron-redux-saga';
    11. store/index.js: const sagaMonitor
    12. store/createStore.js:
        1.  import { createStore, compose, applyMiddleware } from 'redux';
        2.  const **enhancer**
    13. src/App.js:
        1.  import { Provider } from 'react-redux';
        2.  import store from './store'; import depois do reactotron p ter acesso as funcoes sagaMonitor e createEnhancer.
        3.  Provider store={store}> em volta de toda a aplicação.
        4.  teste de state: Reactotron -> state -> Add -> auth -> valor está vazio, assim como colocamos no INITIAL_STATE (reducer.js)
13. Autenticação
    1.  modules/auth/actions.js: Criar as 3 actions.
    2.  store/modules/auth/sagas.js:
        1.  import { takeLatest, call, put, all } from 'redux-saga/effects';
        2.  receber payload e const email e password.
        3.  1a coisa a fazer é **chamar a API**.
            1.  ```
                yarn add axios
                ```
            2.  Criar src/services/api.js
            3.  modules/auth/sagas.js: import api, import history,
                1.  function signIn, chamar API, yield put signInSuccess -> push('/dashboard')
            4.  pages/SignIn/index.js
                1.  import useDispatch, signInRequest.
                2.  test: backend rodando, Browser: Login, vide Reactotron.
                    1.  obs. o browser tentou rediecrionar a /dashboard, porém signed=false(Route.js).
        4.  Sign In: modules/auth/reducer.js
            1.  import produce from 'immer'; (manipular o estado)
            2.  const INITIAL_STATE = { token: null, signed: false, loading: false, **username: null** };
            3.  adicionar o case.
            4.  teste: Reactotron -> State: token, signed: true, **username: xxx**.
            5.  src/routes/Route.js
                1.  import store from '~/store';
                2.  const {signed} = store.getState().auth;
                3.  teste: Login c/ provider vai para dashboard.

14. Armazenando o perfil (n/a - não iremos manipular dados de usuário na aplicação, portanto não há a necessidade de um reducer separado).

15. Persistindo a autenticação (após refresh de página).
    1.  ```
        yarn add redux-persist
        ```
    2.  redux-persist tem varias integrações. Ex. localstorage, async storage (react native),
    3.  Criar src/store/persistReducer.js
    4.  store/index.js
        1.  import { persistStore } from 'redux-persist'; import persistReducers from './persistReducers';
        2.  store: persistReducers em volta de rootReducer. const persistor. export { store, persistor}.
        3.  src/App.js e routes/Route.js: import { store } from './store'; pois não é mais export default e store não é a unica exportação.
        4.  src/App.js: import { PersistGate } from 'redux-persist/integration/react'; import { persistor }; incluir PersistGate persistor={persistor}>
            1.  **persistGate** vai renderizar o Router depois de buscar os dados no storage.
            2.  Os dados do auth vão se manter.
            3.  vide Reactotron:
                1.  Rehydrate:
                    1. buscou dados salvos no storage.
                    2. Redux pega esses dados.
                    3. teste browser: Logar no Dashboard, refresh -> continua no Dashboard.
                    4. State não perde os dados.

16. Loading de autenticação
    1.  Deletar Storage: Inspecionar -> Application -> Local Storage -> persist/Key/root -> delete.
    2.  modules/auth/reducer.js
        1.  incluir cases (REQUEST e FAILURE) e draft.loading em cada.
    3.  src/pages/SIgnIn/index.js
        1.  import { useSelector } from 'react-redux';
        2.  const loading = useSelector(state => state.auth.loading);
    4.  SignIn com usuario erroneo:
        1.  auth/sagas.js
            1.  inserir try/catch:
                1.  try   yield put(signInSuccess(token, user));
                2.  catch yield put(signInFailure());
        2.  auth/reducer.js
                1.  Deixar apenas draft.loading = false.

17. Exibindo Toasts (React Toastify).
    1.  Mensagens em relação aos erros.
        ```
        yarn add react-toastify
        ```
    2.  src/App.js
        1.  import { ToastContainer } from 'react-toastify';
        2.  Incluir o componente ToastContainer autoClose={3000}/> com autoClose de 3s.
    3.  src/styles/global.js: import 'react-toastify/dist/ReactToastify.css';
    4.  auth/sagas.js
        1.  import { toast } from 'react-toastify';
        2.  catch { toast.error}.
        3.  Teste: Browser.

18. Cadastro na aplicação (n/a a essa aplicação).

19. Requisições autenticadas
    1.  Estamos armazenando o token no redux.
    2.  Toda vez que chamar a API, podemos incluir o token no header de requisição pelo axios.
    3.  auth/sagas.js
        1.  api.defaults.headers.Authorization
    4.  pages/Dashboard/index.js
        1.  import api from '~/services/api';
        2.  api.get('deliverymans');
        3.  Inspecionar -> Network -> deliverymans -> Header -> vide Authorization.
    5.  persist token:
        1.  auth/sagas.js
            1.  takeLatest('persist/REHYDRATE', setToken),
            2.  export function setToken({payload })
            3.  Inspecionar -> Network -> deliverymans -> Header -> vide Authorization.

20. Configurando o header
    1.  layouts/default/styles.js: background.
    2.  Criar src/components/Header/index.js
    3.  Criar Header/styles.js
    4.  _layouts/default/index.js: import Header from '~/components/Header';

21. Dados do header
    1.  Nome do usuário: src/components/Header/index.js
        1.  import { useSelector } from 'react-redux';
        2.  strong>{profile.name}/strong>

22. Logout da aplicação
    1.  auth/actions.js: export function signOut, type: '@auth/SIGN_OUT'
    2.  auth/reducer.js: Criar case '@auth/SIGN_OUT', draft.token = null e draft.signed = false;
    3.  auth/sagas.js:
        1.  import signOut.
        2.  export function signOff() { history.push('/') }
        3.   takeLatest('@auth/SIGN_OUT', signOff),
    4.  pages/Header/index.js
        1.  import { signOut }
        2.  function handleSignOut() -> dispatch(action -> SignOut)
        3.  Link to="/" onClick={handleSignOut}>sair do sistema
            1. Dispensa o saga -> history.push('/'). Reducer anula token, signed = false.

23. Listar Deliveryman(s), Recipients, Deliveries e Problems.
    1.  pages/Deliverymans/List/index.js
        1.  const [ deliveryman, setDeliveryman ] = useState([]);
        2.  useEffect(() => { chamar API, setDeliveryman }
        3. Criar ul> {deliveryman.map(d =>
    2.  routes/index.js

24. Destacar a pagina selecionada no Menu.
    1.  const [ highlight, setHighlight ] = useState(1);
    2.  function handleMenu(num) { setHighlight(num)
    3.  Adicionar componente no menu -> Itema highlight={ highlight }>Encomendas
    4.  pages/Header/styles.js
        1.  export const Itema = styled.span`
              color: ${props => (props.highlight === 1 ? '#333' : '#999999')};

25. Cadastrar Deliveryman(s), Recipients, Deliveries e Problems.
    1.  routes/index.js
    2.  pages/_layouts/create/styles.js
    3.  pages/Deliverymans/Create/index.js
        1.  Form> onSUbmit={handleSubmit}
        2.  async function handleSubmit({ name, email, avatar_id })
              await api.post('deliverymans', {
                name,
                email,
                avatar_id
              })
        3.  import AvatarInput from '~/components/AvatarInput';
    4.  Adicionar foto:
        1.  Criar src/components/AvatarInput/ index.js e styles.js
            1.  index.js
                1.  componentes: Container, label, img, input, span.
                    1. Importar
                2.  Criar useField, useState, useRef.
                3.  Criar useEffect e handleChange.
    5.  pages/Deliveries/Create/index.js
        1.  componente Select>
            1.  useEffect para get(deliverymen e recipient).
            2.  const recOptions = recipient.map(r => ({ id: r.id, title: r.name }));
            3.  Select name="recipient_id" options={recOptions} placeholder="destinatário..." />
            4.  import { Container, Select } from '~/pages/_layouts/create/**styles**';
            5.  src/pages/_layout/create/styles.js
                1.  import { Select as bySelect } from '@rocketseat/unform';
                2.  export const Select =styled(bySelect)`

26. Aualizar Deliveryman(s), Recipients, Deliveries e Problems.
    1.  Criar src/components/ListActions/index.js
        1.  Componentes:  Container, button onClick={handleToggleVisible}, ActionList visible={visible}, Action to={`${profile.menuHighlight}/update/${upin}`}>Editar</Action>
        2.  export default function ListActions( { pin }) {
              const [visible, setVisible] = useState(false);
              const [upin, setUpin] = useState(); (upin serve para acionar pin no onClick do botão)
              const profile = useSelector(state => state.auth);
        3.  pages/Deliverymans/List/index.js
            1. add ListActions pin={r.id}
        4.  src/components/ListActions/index.js: visible do botão,
              async function handleToggleVisible() {
                setVisible(!visible);
                await setUpin(pin);
        5.  src/components/ListActions/styles.js
            1.  Estilizar Link> com styled: export const Action = styled(Link)`
    2.  routes/index.js -> update/:id
    3.  pages/_layouts/create/styles.js
    4.  pages/_layouts/update/index.js
        1.  export default function DeliverymansUpdate({ match }) {
              const { id } = match.params; await api.put(`recipients/${id}`, {

27. Visualizar encomendas:
    1.  src/components/ListActions/index.js
        1.  const visualize = useSelector(state => state.auth.menuHighlight)
        2.  {visualize == '/deliveries'
              ? <Action to={visualize} onClick={loadDetails}>Visualizar</Action>
              : null
            }
        3.  function loadDetails() -> setDetails(data) e dispatch(cover(data))
            1.  const [details, setDetails] = useState(); vai receber data
            2.  actions: cover -> payload: { data },
            3.  reducer:
                1. draft.cover = true;
                2. draft.data = action.payload.data;
            4.  De volta a src/components/ListActions/index.js
                1.  export default function ListActions( { pin, data }) {
                    2. data vai para details.
        4.  pages/Deliveries/List/index.js
            1. componentes recebem cover:
                1.  ```<Cover visible={cover}>, <Details onClick={coverExit} visible={cover}>```
                2.  function coverExit:
                    1.  dispatch(unCover());
                    2.  setVisible(!cover)

28. Input, Query, Filtro, Busca por encomendas, entregadores, destinatários:
    1.  pages/Deliveries/List/index.js
        1.  input onChange={handleInputChange} onKeyDown={handleQueryInput}
          />
        2.  function handleInputChange(e) -> setQFilter(e.target.value)
            1.  const [ qFilter, setQFilter ] = useState([]);
        3.  function handleQueryInput(e)
            if ( e.key === 'Enter' )
              loadDeliveries(qFilter);
        4.  Adicionar o query a chamada API:
            1.  const response = await api.get('deliveries', {
                  params: { test: filter } **vamos chamar o query de test**
                })
        5.  Back-end:
            1.  src/app/controllers/DeliveryController.js -> async index(req, res)
                1.  import { Op } from 'sequelize';
                2.  const { test } = req.query;
                3.  ```
                    const delivery = await Delivery.findAll({
                      where: {
                        product: {
                          [Op.like]: `%${test}%`,
                        },
                    ```
29. Delete Encomenda, Entregador, Destinatário
    1.  src/components/ListActions/index.js
        1.  Action to={visualize} onClick={handleDelete}>
        2.  function handleDelete():
            1.  const response = await api.delete(`${visualize}/${upin}/cancel`, {
    2.  back-end
        1.  alterar routes para o acima '/cancel'.
        2.  **Delete é um update da coluna canceled_at das tabelas da DB.**
        3.  src/app/controllers/DeliveryController.js
            1.  const canceled_at = new Date();
            2.  delivery = await delivery.update({ canceled_at });
        4. para Deliveryman e Recipient, migrar colunas canceled_at para DBs.
        5. obs. adicionar no get -> where: { canceled_at: null}.
    3.  Problemas na entrega:
        1.  Cancelamento tem que cancelar(update) o delivery e deliveryProblem.
        2.  ListActions.js: Criar function separada: async function handleDeleteTroubles() {
            1.  const response = await api.delete(`/deliveries/${data.delivery_id}/cancel`)
            2.  const descriptionResponse = await api.delete(`/deliveryproblems/${upin}/cancel`)
        3.  back-end conforme o acima.
        4.  migrar coluna canceled_at para DB.



