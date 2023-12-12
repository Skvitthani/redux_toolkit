import React from 'react';
import {useSelector} from 'react-redux';
import {RootState, flatListItem} from '.';
import {NavigationType} from '../navigation';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Screen2 = NativeStackScreenProps<NavigationType, 'Screen2'> & {
  navigation: () => void;
};

const Screen2: React.FC<Screen2> = () => {
  const data = useSelector((state: RootState) => state?.user?.userData);

  const renderItem = ({item}: {item: flatListItem}) => {
    return (
      <View style={styles.renderItemView}>
        <Text style={styles.textStyle}>{`Name  : ${item?.name}`}</Text>
        <Text style={styles.textStyle}>{`City      : ${item?.city}`}</Text>
        <Text style={styles.textStyle}>{`Age      : ${item?.age}`}</Text>
      </View>
    );
  };

  const ListEmptyComponent = () => {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.noDataText}>No Data Found</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{flex: 1}}
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  renderItemView: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#1B4242',
  },
  textStyle: {
    color: 'white',
  },
  buttonView: {
    marginBottom: 50,
  },
  emptyView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
