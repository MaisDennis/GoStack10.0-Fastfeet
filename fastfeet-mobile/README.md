# Desafio 10 | GoStack 10.0

* [1. Conceitos abordados](#1-conceitos-abordados)
* [2. Descrição do projeto](#2-descrição-do-projeto)
* [3. Iniciando o Projeto](#3-iniciando-o-projeto)
* [4. Enunciado do Projeto](#4-enunciado-do-projeto)
* [5. Criando o projeto](#5-criando-o-projeto)

##  1. Conceitos abordados

1.  Criação e estilização de páginas, header, AvatarInput, Ações (editar, excluir). Informações acessíveis por toda a aplicação e por todas as requisições via Redux.
2.  Chamada a API.
3.  usar o useState, useEffect do 'react'.
4.  usar o useSelector, useDispatch do 'react-redux'.
5.  Criação de páginas e BottomTabs com o React Navigation Stack.
6.  POST de imagens com o uso de React Native Camera.

##  2. Descrição do projeto

O Fastfeet é um aplicativo de entregas de produtos quaisquer, similar a ifood, Rappi e UberEats. Pelo website, o usuário administrador lista, cadastra, edita e exclui: encomendas, entregadores, destinatários e problemas nas entregas. Pelo aplicativo mobile, o entregador pode iniciar uma entrega, encerrar a entrega mediante o envio de assinatura do destinatário, e relatar problemas na entrega.

### Dashboard / Entregas
<img src="https://github.com/MaisDennis/GoStack10.0-Desafio-10/blob/master/src/assets/Dashboard.png" alt="Dashboard" width="100%" height="auto">

### Detalhes de entrega
<img src="https://github.com/MaisDennis/GoStack10.0-Desafio-10/blob/master/src/assets/Detalhes.png" alt="Detalhes" width="100%" height="auto">

### Profile
<img src="https://github.com/MaisDennis/GoStack10.0-Desafio-10/blob/master/src/assets/Profile.png" alt="Profile" width="100%" height="auto">

### Informar problema
<img src="https://github.com/MaisDennis/GoStack10.0-Desafio-10/blob/master/src/assets/Trouble.png" alt="Trouble" width="100%" height="auto">

### Assinatura de entrega
<img src="https://github.com/MaisDennis/GoStack10.0-Desafio-10/blob/master/src/assets/Signature.png" alt="Signature" width="100%" height="auto">


##  3. Iniciando o projeto

Esse projeto foi desenvolvido para o ambiente mobile.
No desenvolvimento do projeto foi usado o emulador mobile: Genymotion.
Instruções para a instalação do Genymotion:
https://docs.rocketseat.dev/ambiente-react-native/android/emulador
Iiniciar o GenyMotion:
```
./genymotion (na pasta genymotion)
```
Dentro da pasta do projeto, Para iniciar o bundle:
```
yarn react-native start
ou
yarn react-native start --reset-cache
```
Redirecionamento de porta para o uso do debugger: Reactotron.
```
adb reverse tcp:9090 tcp:9090 ( redirecionar à porta do Reactotron)
```
Iniciar o app:
```
yarn react-native run-android
```
Acesso de administrador:

1.  email: admin@fastfeet.com
2.  senha: 123123

obs. O aplicativo foi desenvolvido para o ambiente Android.

##  4. Enunciado do projeto

<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://github.com/MaisDennis/GoStack10.0-Desafio-10/blob/master/src/assets/fastfeet.png" width="300px" />
</h1>

<h3 align="center">
  Desafio 10: FastFeet, mobile
</h3>

<h3 align="center">
  :warning: Etapa 4/4 do Desafio Final :warning:
</h3>

<p>Esse desafio faz parte do Desafio Final, que é uma aplicação completa (Back-end, Front-end e Mobile) que é avaliada para emissão do Certificado do Bootcamp GoStack, por isso é fundamental que ele seja feito com muito empenho!</p>

<blockquote align="center">“O tempo que leva para realizar seus sonhos vai passar de qualquer forma”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-10?color=%2304D361" />

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361" />
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361" />

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-10/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-10?style=social" />
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 🚀 Sobre o desafio

Durante esse desafio vamos construir o app mobile da aplicação FastFeet que criamos o back-end durante os desafios dos módulos 02 e 03 de Node.js e front-end no desafio do módulo 09 de ReactJS.

A versão mobile do projeto FastFeet representa a visão do entregador, ou seja, todas funcionalidades presentes nesse projeto são para entregadores.

### Informações importantes

1. Ao confirmar o recebimento da entrega, você deverá utilizar a biblioteca [React Native Camera](https://github.com/react-native-community/react-native-camera) para tirar uma foto da assinatura do destinatário.

### Opcionais

1. Adicione scroll infinito com paginação na listagem de encomendas;

## 🎨 Layout

O layout do desafio está em anexo como um arquivo `.xd`.

Caso esteja usando OS X / Windows você pode abrir esse utilizando o Adobe Xd.

Caso contrário, você pode utilizar a seguinte URL para visualizar todas as telas: [Visualizar](https://xd.adobe.com/view/a5d56d7d-c1d4-48a8-70ce-8b77f5f417a5-d3e4/grid).

## 📅 Entrega

Esse desafio **não precisa ser entregue** e não receberá correção. Além disso, o código fonte **não está disponível** por fazer parte do **desafio final**, que será corrigido para **certificação** do bootcamp. Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

##  5. Criando o projeto

1.  Estrutura configurada
    1.  ```
        yarn react-native init desafio10
        yarn react-native start (inside deafio10)
        yarn react-native start
        yarn react-native run-android
        code .
        ```
    2.  Instalar ESLint, Prettier & EditorConfig
        1.  CLicar com a direita na area de Explorer: Generate editorConfig
        2.  ```
            yarn add eslint -D
            yarn eslint --init
            remover package lock... e yarn
            yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
            ```
        3.  Configure .eslint.js
        4.  Configure .prettierrc.js

    3.  Configurando Reactotron (no item 9, tem a configuração de reactotron-redux e reactotron-redux-saga)
        1.  ```
            yarn add reactotron-react-native
            ```
        2.  Criar src/index.js
            1.  Copiar o codigo App.js e deletar App.js
        3.  desafio10/index.js
            1.  import App from './src';
        4.  Criar src/config/ReactotronConfig.js
        5.  .eslintrc.js -> globals...
        6.  src/index.js -> import './config/ReactotronConfig';

2.  Configurando o Root import  (para usar o "~" no import.)
    1.  ```
        yarn add babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import -D
        ```
    2.  Criar modulo10/babel.config.js (ou já deve existir)
    3.  .eslint.js, jsconfig.json

3.  Rotas de autenticação
    1.  Segue instruções para instalar o React Navigation e Create Stack Navigator.
        1.  https://reactnavigation.org/docs/en/getting-started.html
    2.  Criar src/routes.js e src/pages/SignIn.js
    3.  src/routes.js
        1.  Criar StachNavigator e Stack.Screen component={SignIn}
        2.  import SignIn

4.  Configurando o background
    1.  ```
        yarn add react-native-linear-gradient
        react-native link react-native-linear-gradient
        yarn add styled-components
        ```
    2.  Criar src/components/Background/index.js e importar ao SignIn/index.js
    3.  SingIn/index.js -> Background> em volta de Text>

5.  Input & Button
    1.  Criar components/Input/index.js e styles.js
    2.  Criar components/Button/index.js e styles.js
    3.  yarn add prop-types
    4.  prop **ref** <Input ref={}
        1.  referencia direto ao elemento do Input.
        2.  Manipular de forma direta.
        3.  Ex. set o focus no input de forma manual
        4.  import React, { forwardRef} from 'react'; export default forwardRef(Input);
        5.  Agora quando escrever <Input ref={}...> vai passar como 2o paramentro no: export default function Input({ style, ...rest }, ref) {
        6.  e vem parar dentro do "render" (porisso se chama forwardRef)  <TInput {...rest} ref={ref}/>
    5.  Icons
        1.  yarn add react-native-vector-icons
        2.  https://github.com/oblador/react-native-vector-icons
        3.  Segue as instruções For Android:
            android > app > build.gradle
            1.  Deixar apenas [ 'MaterialIcons.ttf' ]
        4.  components/Input/index.js
            1.  import Icon from 'react-native-vector-icons/MaterialIcons'
            2.  {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)"/>}
    6.  Configurar Input/styles.js
    7.  Configurar Button/index.js e styles.js
    8.  Importar Input e Button ao SignIn.

6.  Página SignIn
    1.  Configurar SignIn/index.js
        1.  import logo from '~/assets/logo.png';
        2.  Criar SignIn/styles.js
        3.  Adicionar o Container = styled.KeyboardAvoidingView

7.  Configurando Status Bar
    1.  StatusBar é a header na parte de cima da tela onde ficam notificações, wi-fi, bateria, horas, etc.
    2.  src/index.js -> import { StatusBar } from 'react-native';

8.  Dicas de acessabilidade
    1.  SignIn/index.js
        1.  adicionar ref no Input de senha
        2.  const passwordRef = useRef();
        3.  No FormInput -> ref={passwordRef}
        4.  No FormInput -> returnKeyType="send", onSubmitEditing={handleSubmit}

9.  Reactotron
    1.  ```
        yarn add reactotron-react-native reactotron-redux reactotron-redux-saga
        ```
    2.  Criar src/config/ReactotronConfig.js

10. Configurando Redux
    1.  Copiar e colar a pasta store do desafio09 para src.
    2.  store/index.js -> const sagaMonitor = __DEV__
    3.  yarn add redux-persist immer
        1.  servem para produce state dentro dos reducers.
    4.  yarn add @react-native-community/async-storage
        1.  No src/store/persistReducer.js
            1.  import AsyncStorage from '@react-native-community/async-storage'; storage: AsyncStorage
        2.  src/config/ReactotronConfig.js -> import AsyncStorage from '@react-native-community/async-storage'; Reactotron.setAsyncStorageHandler(AsyncStorage)
    5.  src/store/createStore.js
        1.  const enhancer = __DEV__
    6.  modules: actions e reducers iguais, **apenas alterações no sagas**:
        1.  Criar src/services/api.js
            1.  yarn add axios
            2.  baseURL: 'http://10.0.3.2:3333'-> p/ GenyMotion
        2.  auth/sagas.js
            1.  Deixar como comentarios por ora:
                1.  // import history from '~/services/history';
                2.  // import { toast } from 'react-toastify';
                3.  // history.push('/Dashboard');
                4.  // toast.error('Usuário não é prestador');
        3.  src/index.js
            1.  import { PersistGate } from 'redux-persist/integration/react';
            2.  import { Provider } from 'react-redux';
            3.  import { store, persistor } from './store';

11. Conectando o Redux
    1.  Criar action signInDeliveryman
        1.  export function signInDeliveryman(deliverymanId)
        2.  type: '@auth/SIGN_IN_DELIVERYMAN',
        3.  payload: { deliverymanId },
    2.  Criar reducer:
        1.  case '@auth/SIGN_IN_DELIVERYMAN':
            1.  draft.deliverymanId = action.payload.deliverymanId;
            2.  draft.deliverymanSigned = true;
    2.  pages/SignIn/index.js
        1.  import { useDispatch } from 'react-redux';
        2.  const dispatch = useDispatch();
        3.  function handleSubmit() {
              dispatch(signInDeliveryman(deliverymanId));
            }
        4.  const [deliverymanId, setDeliverymanId] = useState('');
        5.  nos Inputs:  value={deliverymanId}, onChangeText={setDeliverymanId}

12. Rota Inicial
    1.  Criar pages/Dashboard/index.js
    2.  src/index.js -> Trocar o nome da função de App() para Index()
    3.  Criar App() -> devido ao Provider store={store}> enlaçar apenas os componentes dentro.
        1.  levar Routes de src/index.js para dentro de src/App.js
    4.
    5.  Navegar de SignIn -> Dashboard
        1.  https://reactnavigation.org/docs/navigating
        2.  Criar Stack.Screen name={"Dashboard"}>
        3.  src/pages/SignIn.js
            1.  adicionar prop: function SignIn({ navigation })
            2.  no handleSubmit: navigation.navigate('Dashboard');
    6.  Bottom Tabs: https://reactnavigation.org/docs/tab-based-navigation/
        1.  yarn add @react-navigation/bottom-tabs
        2.  src/routes.js
            1.  Criar Stack.Screen name="TabRoutes"
            2.  Criar src/components/TabROutes/index.js
                1.  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
                2.  const Tab = createBottomTabNavigator();
                3.  Tab.Navigator>
                4.  Tab.Screen name="Deliveries" component={Deliveries} />
    7.  Reset DeliverymanSigned
        1.  Reactotron -> Persist/Rehydrate -> Edit & Dispatch -> DeliverymanSigned: false.

13. Estilização das rotas
    1.  pages/Dashboard/index.js
        1.  Estilizar Tabs: https://reactnavigation.org/docs/tab-based-navigation/

14. Lista de Entregas
    1.  Criar pages/Dashboard/styles.js

15. API (Deliveries e Deliveryman)
    1.  **components/TabRoutes/index.js -> API Deliveryman vai p/ State do Reducer.**
        1.  import { useEffect } from 'react';
            import { useDispatch } from 'react-redux';
        2.  import api from '~/services/api';
        3.  useEffect -> function loadDeliveries ->
            1.  api.get('deliverymans', {
                  params: { test: '' },
        4.  responseDeliverymans.data.find(d => d.id == id);
        5.  dispatch(deliverymanCheckIn(responseDeliveryman));
        6.  const deliveryman = useSelector(state => state.auth.deliverymanData);
        7.  Header
            1.  Title>{deliveryman.name}
            2.  Avatar> source={{...
    2.  **pages/Dashboard/index.js -> API Deliveries vai p/ useState().**
        1.  import { useEffect } from 'react';
        2.  import api from '~/services/api';
        3.  const [deliveries, setDeliveries] = useState([]);
        4.  useEffect -> function loadDeliveries ->
            1.  api.get('deliveryAccess/${id}')
        5.  List data={deliveries} keyExtractor={item => String(item.id)}
        6.  **Criar Avatar**:
            1.  Criar services/ip.js -> tem o caminho do ip.
            2.  pages/Dashboard/index.js e pages/profile.js
                1.  const avatarPath = useSelector(
                      state => state.auth.deliverymanData.avatar.path
                    );
                2.  Avatar  source={{
                              uri: `${ip}/files/${avatarPath}`,

    3.  components/Deliveries/index.js
        1.  Name>Encomenda {data.id} /Name>
        2.  Div1>
              {data.start_date !== null ? (
                Icon name="done" size={20} color="green" />
              ) : (
                Icon name="alarm" size={20} color="red" />
              )}

16. Meu Perfil / Logout
    1.  Criar src/pages/Profile/index.js
        1.  LogoutButton onPress={handleLogout}>Logout
        2.  async function handleLogout() {
              await navigation.navigate('SignIn');
              dispatch(signOutDeliveryman());
        3.  Avatar: vide 15.2.6

17. Ver detalhes de Deliveries.
    1.  Criar a pasta pages/New com Confirm, DeliveryDetails, Trouble, TroubleDetails.
    2.  components/Delivery/index.js
        1.  TouchableOpacity onPress={handleDetails}>
        2.  function handleDetails() {
              navigation.navigate('DeliveryDetails');
              **dispatch(cover(data));**
        3.  cover é a action que coloca data da delivery -> payload.
    3.  pages/DeliveryDetails/index.js
        1.  Todos os dados vem do **useSelector(state => state.auth.data);**
        2.  usar navigation.navigate para os 3 botoes.
            1.  Usar a prop navigation do screen.
                1.  export default function DeliveryDetails({ navigation })
            2.  function handleTrouble() {
                  navigation.navigate('Trouble');

18. Informar o problema
    1.  pages/New/Trouble/index.js
        1.  const [description, setDescription] = useState('');
        2.  const id = useSelector(state => state.auth.data.id);
        3.  await api.post(`deliveryproblems/${id}`, {
        4.  Button onpress={handleTrouble}

19. Lista de problemas
    1.  pages/New/TroubleDetails/index.js
        1.   async function loadTroubles(filter) {
              const response = await api.get(`deliveryproblems2/`, {
                params: { test: filter },
        2.  const formattedDate

20. Confirmar entrega / RN Camera
    1.  pages/New/TroubleDetails/index.js
        1.  import { RNCamera } from 'react-native-camera';
        2.  Guideline RN Camera: https://github.com/react-native-community/react-native-camera
        3.  const formData = new FormData(); -> as informações que vão para API.
        4.  const response = await api.post('signatures', formData);
            1.  obs.  no routes do backend, a rota de assinatura tem que estar entre as últimas linhas antes do middleware de autenticação (não se sabe o pq, e os instrutores tambem não souberam).
        5.  Chamada API para vincular signature_id a respectiva delivery.
            await api.put(`deliveryaccess/${id}`, {
              signature_id,
            });
        6.  Criar a rota update de delivery no routes.js e DeliveryAccessController.js do back-end.










