import React from 'react';
import {
  NavigationContainer,
  // DarkTheme,
  // DefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useColorScheme} from 'react-native';
import Login from '../screen/Auth/Login';
import OtpVerification from '../screen/Auth/OtpVerification';
import OnboardingScreen from '../screen/Onboarding/Onboarding';
import CreateAccount from '../screen/Auth/CreateAccount';
import DrawerNavigator from './Drawer';
import HospitalList from '../screen/Hospital/HospitalList';
import HospitalDirection from '../screen/Hospital/HospitalDirection';
import HospitalDetails from '../screen/Hospital/HospitalDetails';

export type RootStackParamList = {
  navigate(): unknown;
  toggleDrawer(): void;
  setOptions(arg0: {
    headerLeft: () => React.JSX.Element;
    headerRight: () => React.JSX.Element;
    headerStyle: object;
    headerTitleStyle: object;
  }): unknown;
  replace(arg0: string): void;
  Login: undefined;
  OtpVerification: undefined;
  Onboarding: undefined;
  CreateAccount: undefined;
  DrawerScreen: undefined;
  HospitalList: undefined;
  HospitalDirection: undefined;
  HospitalDetails: undefined;
};

export type Theme = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    main: string;
  };
};

// export const MyTheme = {
//   dark: false,
//   colors: {
//     primary: 'rgb(255, 45, 85)',
//     background: 'rgb(242, 242, 242)',
//     card: 'rgb(255, 255, 255)',
//     text: 'rgb(28, 28, 30)',
//     border: 'rgb(199, 199, 204)',
//     notification: 'rgb(255, 69, 58)',
//   },
// };

const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: 'rgb(10, 132, 255)',
    background: 'rgb(1, 1, 1)',
    card: 'rgb(18, 18, 18)',
    text: 'rgb(229, 229, 231)',
    border: 'rgb(39, 39, 41)',
    notification: 'rgb(255, 69, 58)',
    main: '#5046E5',
  },
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DarkTheme}>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtpVerification"
          component={OtpVerification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerScreen"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="HospitalList" component={HospitalList} />
        <Stack.Screen name="HospitalDirection" component={HospitalDirection} />
        <Stack.Screen name="HospitalDetails" component={HospitalDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
