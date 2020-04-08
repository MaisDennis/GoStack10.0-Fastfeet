import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import TabRoutes from '~/components/TabRoutes';
import DeliveryDetails from '~/pages/New/DeliveryDetails';
import Trouble from '~/pages/New/Trouble';
import TroubleDetails from '~/pages/New/TroubleDetails';
import Confirm from '~/pages/New/Confirm';

const Stack = createStackNavigator();

export default function Routes() {
  const Deliverymansigned = useSelector(state => state.auth.deliverymanSigned);

  return (
    <Stack.Navigator
      initialRouteName={Deliverymansigned ? 'TabRoutes' : 'SignIn'}
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'SignIn',
          headerShown: false,
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7D40E7',
          },
        }}
      />
      <Stack.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{
          title: 'TabRoutes',
          headerShown: false,
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7D40E7',
          },
        }}
      />
      <Stack.Screen
        name="DeliveryDetails"
        component={DeliveryDetails}
        options={{
          title: 'Detalhes da encomenda',
          headerShown: true,
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7D40E7',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Trouble"
        component={Trouble}
        options={{
          title: 'Informar o problema',
          headerShown: true,
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7D40E7',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="TroubleDetails"
        component={TroubleDetails}
        options={{
          title: 'Lista de problemas',
          headerShown: true,
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7D40E7',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          title: 'Confirmar a entrega',
          headerShown: true,
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#7D40E7',
          },
        }}
      />
    </Stack.Navigator>
  );
}
