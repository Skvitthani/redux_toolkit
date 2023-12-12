import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {memo} from 'react';
import {ApiRenderList, Apidata} from '.';
import ButtonComp from '../components/ButtonComp';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../redux/reducer/ProducReducer';

const ApiScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: Apidata) => state?.product);

  const onApiCallPress = () => {
    dispatch(fetchData() as any);
  };

  const MyListItem = memo(({item}: {item: ApiRenderList}) => {
    return (
      <View style={styles.listView}>
        <Text style={{color: 'white'}}>{item?.id}. </Text>
        <Text style={{color: 'white'}}>{item?.title}</Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      {data?.isLoader ? (
        <ActivityIndicator size={'large'} style={styles.indicatorStyle} />
      ) : (
        <>
          <View style={{marginVertical: 10}}>
            <ButtonComp title="Api call" onPress={onApiCallPress} />
          </View>
          <FlatList
            data={data?.data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <MyListItem item={item} />}
          />
        </>
      )}
    </View>
  );
};

export default ApiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  indicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  listView: {
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#5C8374',
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
});
