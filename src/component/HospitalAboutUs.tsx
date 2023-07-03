import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

const HospitalAboutUs = () => {
  const {colors} = useTheme();
  const {height} = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      marginVertical: 20,
      marginHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      height: height - 250,
      paddingBottom: 100,
    },
    about: {
      borderColor: colors.primary,
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 13,
      marginBottom: 13,
    },
    aboutText: {
      color: colors.text,
      fontSize: 14,
    },
    heading: {
      color: colors.text,
      fontSize: 18,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      marginBottom: 5,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.about}>
          <Text style={styles.aboutText}>
            Work hard and no play? We don't believe in that. Get access to
            best-selling fiction and non-fiction books by your favourite
            authors, thrilling English and Indian blockbusters, most-wanted
            gaming consoles, and a tempting range of fitness and sports gadgets
            and equipment bound to inspire you to get moving.
          </Text>
        </View>

        <View style={styles.about}>
          <Text style={styles.heading}>Nature of Business</Text>
          <Text style={styles.aboutText}>
            Exporter and Wholesale Distributer
          </Text>
        </View>

        <View style={styles.about}>
          <Text style={styles.heading}>Additional Business</Text>
          <Text style={styles.aboutText}>
            Manufacture, Trader, Service Provider, Exporter and Wholesale
            Distributer, Retailer
          </Text>
        </View>

        <View style={styles.about}>
          <Text style={styles.heading}>Register Address</Text>
          <Text style={styles.aboutText}>XYZ Patna, Bihar, 821111</Text>
        </View>

        <View style={styles.about}>
          <Text style={styles.heading}>Nature of Business</Text>
          <Text style={styles.aboutText}>
            Work hard and no play? We don't believe in that. Get access to
            best-selling fiction and non-fiction books by your favourite
            authors, thrilling English and Indian blockbusters, most-wanted
            gaming consoles, and a tempting range of fitness and sports gadgets
            and equipment bound to inspire you to get moving.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HospitalAboutUs;
