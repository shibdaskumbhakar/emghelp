import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {RootStackParamList} from '../../navigator/Stack';
import {useHeaderHeight} from '@react-navigation/elements';

import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid, Platform} from 'react-native';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';


const {height} = Dimensions.get('window');

const CreateAccount: React.FC<{navigation: RootStackParamList}> = ({
  navigation,
}) => {
  const {colors} = useTheme();
  const headerHeight = useHeaderHeight();

  React.useEffect(() => {
    // navigation.setOptions({
    //   headerTitleStyle: {display: 'none'},
    //   headerStyle: {
    //     borderBottomWidth: 0,
    //     shadowOpacity: 0,
    //     elevation: 0,
    //     backgroundColor: '#5466EE',
    //   },
    //   headerLeft: () => (
    //     <Text onPress={() => navigation.replace('OtpVerification')}>Back</Text>
    //   ),
    // });
  }, [navigation]);

  React.useEffect(() => {
    requestLocationPermission();
    getCurrentLocation();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('whenInUse');
    } else {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  };

  const checkLocationEnabled = async () => {
    const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (result === RESULTS.GRANTED) {
      console.log('Location services are enabled.');
    } else {
      console.log('Location services are disabled or permission is not granted.');
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);
      },
      error => {
        console.log('Error getting location:', error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const styles = StyleSheet.create({
    main: {
      marginTop: height * 0.25 - headerHeight,
      backgroundColor: colors.background,
      height: height * 1,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
    container: {
      backgroundColor: '#5466EE',
    },
    heading: {
      color: colors.text,
      fontWeight: 'bold',
      fontSize: 25,
      textAlign: 'center',
      marginTop: 38,
    },
    input_container: {
      paddingHorizontal: 20,
    },
    input: {
      width: '100%',
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 17,
      paddingLeft: 8,
      borderRadius: 12,
      color: colors.text,
      fontSize: 20,
      letterSpacing: 2,
    },
    btn: {
      flex: 1,
      height: 50,
      borderRadius: 5,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn_text: {
      fontWeight: 'bold',
      fontSize: 15,
    },
    input_heading: {
      color: colors.text,
      marginBottom: 5,
    },
  });

  return (
    <KeyboardAvoidingView>
      <SafeAreaView style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.heading}>Create Account</Text>

          <View style={styles.input_container}>
            <Text style={styles.input_heading}>Full Name</Text>
            <TextInput style={styles.input} placeholder="Email" />

            <Text style={styles.input_heading}>Address</Text>
            <TextInput style={styles.input} placeholder="Email" />

            <Text style={styles.input_heading}>Pin Code</Text>
            <TextInput style={styles.input} placeholder="Email" />

            <Text style={styles.input_heading}>Email Address (Optional)</Text>
            <TextInput style={styles.input} placeholder="Email" />

            <View style={{height: 50, marginTop: 20}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('DrawerScreen')}>
                <Text style={styles.btn_text}>REGISTER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CreateAccount;
