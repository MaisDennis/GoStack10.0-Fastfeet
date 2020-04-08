/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Delivery from '~/components/Delivery';
import { deliverymanCheckIn } from '~/store/modules/auth/actions';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const dispatch = useDispatch();
  const id = useSelector(state => state.auth.deliverymanId);

  useEffect(() => {
    async function loadDeliveries() {
      const responseDeliverymans = await api.get('deliverymans', {
        params: { test: '' },
      });
      const responseDeliveryman = await responseDeliverymans.data.find(
        // eslint-disable-next-line eqeqeq
        d => d.id == id
      );
      dispatch(deliverymanCheckIn(responseDeliveryman));
      // console.tron.log(deliveries);
    }
    loadDeliveries();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'menu' : 'menu';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          }
          return <Icon name={iconName} size={24} color={color} />;
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999',
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ tabBarLabel: 'Entregas' }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarLabel: 'Meu perfil' }}
      />
    </Tab.Navigator>
  );
}
