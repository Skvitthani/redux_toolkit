import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet} from 'react-native';
import MyStore from './src/redux/store/Store';
import StackNavigation from './src/navigation/StackNavigation';

const App = () => {
  return (
    <>
      <Provider store={MyStore}>
        <StackNavigation />
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
