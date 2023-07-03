import 'react-native-reanimated';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import StackNavigator from './src/navigator/Stack';

function App(): JSX.Element {
  return <StackNavigator />;
}

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
