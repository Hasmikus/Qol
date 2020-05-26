import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import GetStartedScreen from '../screens/GetStartedScreen';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'GetStarted';

export default function StackNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerShown: false });

  return (
    <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME} screenOptions={{headerShown: false}}>
        <Stack.Screen
        name="GetStarted"
        component={GetStartedScreen}
        oprions={{
          title: 'Get Started',
          header: null,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Resources',
        }}
      />
    </Stack.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
