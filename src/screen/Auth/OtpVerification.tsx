import React, {useEffect, useState} from 'react';
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
import Loader from '../../component/Loader';
import {useDispatch} from 'react-redux';
import {openPopup} from '../../redux/reducers/popup';
import Popup from '../../component/Popup';
import {RootStackParamList} from '../../navigator/Stack';

const {height} = Dimensions.get('window');

const OtpVerification: React.FC<{navigation: RootStackParamList}> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const otpInputs = Array(4)
    .fill(0)
    .map(() => React.createRef<TextInput>());
  const [otpValues, setOtpValues] = useState<string[]>(Array(4).fill(''));
  const [isResendActive, setIsResendActive] = useState(false);
  const [resendTimer, setResendTimer] = useState(20); // 120 seconds = 2 minutes

  const handleVerify = () => {
    dispatch(
      openPopup({
        type: 'Verified',
        message: 'Your account has been verified successfully!',
        btnText: 'Proceed',
      }),
    );
  };

  const handleSuccess = () => {
    navigation.replace('CreateAccount');
  };

  const handleResendClick = () => {
    // Logic to resend OTP
    // Reset the resend timer
    setIsResendActive(true);
    setResendTimer(120);
  };

  const handleOtpChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].current?.focus();
    } else if (value.length === 0 && index > 0) {
      otpInputs[index - 1].current?.focus();
    }
  };
  const handleBackspace = (index: number) => {
    if (index > 0) {
      const newOtpValues = [...otpValues];
      newOtpValues[index - 1] = '';
      setOtpValues(newOtpValues);
      otpInputs[index - 1].current?.focus();
    }
  };

  useEffect(() => {
    setIsResendActive(true);
  }, []);

  useEffect(() => {
    let timer: number;

    if (isResendActive && resendTimer > 0) {
      timer = setTimeout(() => {
        setResendTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else {
      setIsResendActive(false);
    }

    return () => clearTimeout(timer);
  }, [resendTimer, isResendActive]);

  const styles = StyleSheet.create({
    main: {
      paddingHorizontal: 20,
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
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    otpInput: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderColor: colors.text,
      color: colors.text,
      marginHorizontal: 5,
      textAlign: 'center',
      fontSize: 18,
    },
    resend: {
      color: colors.text,
      fontSize: 18,
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: 20,
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      style={styles.container}>
      <SafeAreaView>
        <View style={styles.main}>
          <Text style={styles.heading}>ENTER VERIFICATION CODE</Text>

          <View style={styles.image_section}>
            <Image
              source={require('../../assets/images/otp_page.png')}
              style={styles.image}
            />
            <View>
              <Text style={styles.heading}>Enter OTP</Text>
              <Text style={styles.desc}>We have sent OTP on your number</Text>
            </View>
          </View>

          <View>
            <View style={styles.otpContainer}>
              {otpInputs.map((ref, index) => (
                <TextInput
                  key={index}
                  style={styles.otpInput}
                  keyboardType="numeric"
                  maxLength={1}
                  onChangeText={value => handleOtpChange(index, value)}
                  onKeyPress={({nativeEvent: {key}}) => {
                    if (key === 'Backspace') {
                      handleBackspace(index);
                    }
                  }}
                  ref={ref}
                  value={otpValues[index]}
                />
              ))}
            </View>
            <View style={{height: 50, marginTop: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => handleVerify()}>
                <Text style={styles.btn_text}>VERIFY</Text>
              </TouchableOpacity>
            </View>
            {isResendActive ? (
              <Text style={styles.resend}>{resendTimer} SEC</Text>
            ) : (
              <TouchableOpacity onPress={() => handleResendClick()}>
                <Text style={styles.resend}>RESEND OTP</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
      <Popup handleSuccess={handleSuccess} />
      <Loader />
    </KeyboardAvoidingView>
  );
};

export default OtpVerification;
