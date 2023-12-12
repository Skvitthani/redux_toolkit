import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {NavigationType} from '../navigation';
import {StyleSheet, View} from 'react-native';
import ButtonComp from '../components/ButtonComp';
import {useraction} from '../redux/reducer/UserReducer';
import InputTextComp from '../components/InputTextComp';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Screen1 = NativeStackScreenProps<NavigationType, 'Screen1'> & {
  navigation: () => void;
};

const Screen1: React.FC<Screen1> = ({navigation}) => {
  const dispatch = useDispatch();
  const [age, setAge] = useState<string | number>('');
  const [city, setCity] = useState<string | number>('');
  const [name, setName] = useState<string | number>('');

  const onAddPress = () => {
    let userDetails = {
      age: age,
      name: name,
      city: city,
    };
    dispatch(useraction(userDetails));

    setAge('');
    setName('');
    setCity('');
  };

  return (
    <View style={styles.container}>
      <InputTextComp
        value={name}
        placeholder="Enter Name"
        inputStyle={styles.inputStyle}
        onChangeText={(txt: string | number) => setName(txt)}
      />
      <InputTextComp
        value={age}
        placeholder="Enter Age"
        inputStyle={styles.inputStyle}
        onChangeText={(txt: string | number) => setAge(txt)}
      />
      <InputTextComp
        value={city}
        placeholder="Enter City"
        inputStyle={styles.inputStyle}
        onChangeText={(txt: string | number) => setCity(txt)}
      />
      <View style={styles.buttonView}>
        <ButtonComp onPress={onAddPress} title="Add" />
      </View>
      <View style={styles.buttonView}>
        <ButtonComp
          onPress={() => {
            navigation.navigate('Screen2');
          }}
          title="Go to next screen"
        />
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A4D39',
  },
  inputStyle: {
    padding: 10,
    fontSize: 15,
    color: 'black',
    marginTop: 10,
    marginHorizontal: 10,
  },
  buttonView: {
    marginTop: 20,
  },
});
