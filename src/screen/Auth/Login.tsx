import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {useTheme} from '@react-navigation/native';
import {RootStackParamList} from '../../navigator/Stack';
import Loader from '../../component/Loader';

const {height} = Dimensions.get('window');

const Login: React.FC<{navigation: RootStackParamList}> = ({navigation}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    main: {
      paddingHorizontal: 20,
      // marginTop: 0,
    },
    heading: {
      color: colors.text,
      fontWeight: 'bold',
      fontSize: 25,
      textAlign: 'center',
      marginTop: 38,
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
    input: {
      borderBottomWidth: 1,
      borderBottomColor: colors.text,
      fontSize: 16,
      marginBottom: 20,
      color: colors.text,
    },
    image_section: {
      height: height * 0.6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
    desc: {
      color: colors.text,
      fontWeight: '300',
      fontSize: 18,
      textAlign: 'center',
      marginTop: 8,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      marginTop: -150,
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      style={styles.container}>
      <SafeAreaView>
        <View style={styles.main}>
          <Text style={styles.heading}>OTP VERIFICATION</Text>

          <View style={styles.image_section}>
            <Image
              source={require('../../assets/images/otp_verification.png')}
              style={styles.image}
            />
            <View>
              <Text style={styles.heading}>Enter your mobile number</Text>
              <Text style={styles.desc}>We will send you a OTP Message</Text>
            </View>
          </View>

          <View>
            <TextInput
              placeholder="Enter Mobile Number"
              keyboardType="numeric"
              placeholderTextColor={colors.text}
              style={styles.input}
            />
            <View style={{height: 50, marginTop: 20}}>
              <TouchableOpacity style={styles.btn}>
                <Text
                  style={styles.btn_text}
                  onPress={() => navigation.replace('OtpVerification')}>
                  SEND OTP
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Loader />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;
